import { PrismaClient } from '@prisma/client'
import { TelegramContext } from './types'
import { rateLimits, messageTemplates } from './config'
import { MiddlewareFn } from 'telegraf'

const prisma = new PrismaClient()

// Rate limiting state (in-memory)
const messageRateLimit = new Map<string, { count: number; resetTime: number }>()
const commandRateLimit = new Map<string, { count: number; resetTime: number }>()

// Authentication middleware
export const authMiddleware: MiddlewareFn<TelegramContext> = async (ctx, next) => {
  if (!ctx.from) {
    console.warn('No user information in context')
    return
  }

  try {
    // Find or create TelegramProfile
    const telegramProfile = await prisma.telegramProfile.upsert({
      where: {
        telegramId: ctx.from.id.toString(),
      },
      update: {
        lastInteraction: new Date(),
      },
      create: {
        telegramId: ctx.from.id.toString(),
        chatId: ctx.chat?.id.toString() || ctx.from.id.toString(),
        username: ctx.from.username,
        firstName: ctx.from.first_name,
        lastName: ctx.from.last_name,
        user: {
          create: {
            name: ctx.from.first_name,
            username: ctx.from.username,
          }
        }
      },
      include: {
        user: true,
      }
    })

    // Check if user is active
    if (!telegramProfile.isActive) {
      await ctx.reply('Your account is currently deactivated. Use /resume to reactivate.')
      return
    }

    // Attach user context
    ctx.userId = telegramProfile.userId
    ctx.telegramId = telegramProfile.telegramId
    ctx.chatId = telegramProfile.chatId

    return next()
  } catch (error) {
    console.error('Error in auth middleware:', error)
    await ctx.reply(messageTemplates.error.general)
  }
}

// Rate limiting middleware
export const rateLimitMiddleware: MiddlewareFn<TelegramContext> = async (ctx, next) => {
  if (!ctx.from) return next()

  const userId = ctx.from.id.toString()
  const now = Date.now()
  const isCommand = ctx.message && 'text' in ctx.message && ctx.message.text.startsWith('/')

  // Get appropriate rate limit map and config
  const rateMap = isCommand ? commandRateLimit : messageRateLimit
  const { windowMs, max } = isCommand ? rateLimits.commands : rateLimits.messages

  // Get or create rate limit entry
  let rateLimit = rateMap.get(userId)
  if (!rateLimit || now > rateLimit.resetTime) {
    rateLimit = { count: 0, resetTime: now + windowMs }
    rateMap.set(userId, rateLimit)
  }

  // Check rate limit
  if (rateLimit.count >= max) {
    await ctx.reply(messageTemplates.error.rateLimit)
    return
  }

  // Increment counter
  rateLimit.count++
  return next()
}

// Error handling middleware
export const errorMiddleware: MiddlewareFn<TelegramContext> = async (ctx, next) => {
  try {
    return await next()
  } catch (error) {
    console.error('Error in request:', error)
    await ctx.reply(messageTemplates.error.general)
  }
}

// Logging middleware
export const loggingMiddleware: MiddlewareFn<TelegramContext> = async (ctx, next) => {
  const start = Date.now()
  const userId = ctx.from?.id.toString()
  const messageType = ctx.updateType

  console.log(`Incoming ${messageType} from user ${userId}`)

  await next()

  const duration = Date.now() - start
  console.log(`Request processed in ${duration}ms`)
}

// Session handling middleware
export const sessionMiddleware: MiddlewareFn<TelegramContext> = async (ctx, next) => {
  if (!ctx.from) return next()

  try {
    // Get or initialize session data
    const sessionData = await prisma.telegramProfile.findUnique({
      where: { telegramId: ctx.from.id.toString() },
      select: { settings: true }
    })

    ctx.sessionData = sessionData?.settings || {}

    await next()

    // Update session data if changed
    if (ctx.sessionData !== sessionData?.settings) {
      await prisma.telegramProfile.update({
        where: { telegramId: ctx.from.id.toString() },
        data: { settings: ctx.sessionData }
      })
    }
  } catch (error) {
    console.error('Error in session middleware:', error)
    return next()
  }
}

// Combine all middleware
export const middleware = [
  errorMiddleware,
  loggingMiddleware,
  authMiddleware,
  rateLimitMiddleware,
  sessionMiddleware,
]

export default middleware
