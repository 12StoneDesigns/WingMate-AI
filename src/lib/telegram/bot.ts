import { Telegraf } from 'telegraf'
import { TelegramContext } from './types'
import { PrismaClient } from '@prisma/client'
import { config, validateEnvironment } from './config'
import middleware from './middleware'

// Initialize Prisma client
const prisma = new PrismaClient()

// Validate environment variables
validateEnvironment()

// Initialize bot with token from environment variables
const bot = new Telegraf<TelegramContext>(process.env.TELEGRAM_BOT_TOKEN || '')

// Apply middleware
middleware.forEach(mw => bot.use(mw))

// Error handling
bot.catch((err, ctx) => {
  console.error(`Error for ${ctx.updateType}:`, err)
})

// Export bot instance
export default bot

// Helper function to start the bot
export async function startBot() {
  try {
    // Set up webhook if URL is configured
    const webhookConfig = config.getWebhookConfig()
    if (webhookConfig.url) {
      await bot.telegram.setWebhook(webhookConfig.url, {
        secret_token: webhookConfig.secret
      })
      console.log('Webhook set up successfully')
    } else {
      // Fall back to long polling if no webhook URL
      await bot.launch()
      console.log('Bot started in long polling mode')
    }

    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
  } catch (error) {
    console.error('Error starting bot:', error)
    process.exit(1)
  }
}

// Helper functions for bot operations

export async function sendMessage(chatId: string, message: string) {
  try {
    await bot.telegram.sendMessage(chatId, message)
    return true
  } catch (error) {
    console.error('Error sending message:', error)
    return false
  }
}

export async function updateUserSettings(userId: string, settings: any) {
  try {
    await prisma.telegramProfile.update({
      where: { userId },
      data: { settings }
    })
    return true
  } catch (error) {
    console.error('Error updating user settings:', error)
    return false
  }
}

export async function deactivateUser(userId: string) {
  try {
    await prisma.telegramProfile.update({
      where: { userId },
      data: { isActive: false }
    })
    return true
  } catch (error) {
    console.error('Error deactivating user:', error)
    return false
  }
}

// Utility functions for managing bot state
export async function getBotStatus() {
  try {
    const [userCount, messageCount] = await Promise.all([
      prisma.telegramProfile.count({ where: { isActive: true } }),
      prisma.message.count()
    ])

    return {
      activeUsers: userCount,
      totalMessages: messageCount,
      uptime: process.uptime(),
      webhookInfo: await bot.telegram.getWebhookInfo()
    }
  } catch (error) {
    console.error('Error getting bot status:', error)
    return null
  }
}

export async function clearWebhook() {
  try {
    await bot.telegram.deleteWebhook()
    return true
  } catch (error) {
    console.error('Error clearing webhook:', error)
    return false
  }
}

// Function to send typing indicator
export async function sendTypingAction(chatId: string) {
  try {
    await bot.telegram.sendChatAction(chatId, 'typing')
    return true
  } catch (error) {
    console.error('Error sending typing action:', error)
    return false
  }
}

// Function to handle file uploads
export async function handleFileUpload(chatId: string, filePath: string, caption?: string) {
  try {
    await bot.telegram.sendDocument(chatId, {
      source: filePath,
      filename: filePath.split('/').pop()
    }, {
      caption
    })
    return true
  } catch (error) {
    console.error('Error uploading file:', error)
    return false
  }
}

// Export additional utilities
export const utils = {
  sendMessage,
  updateUserSettings,
  deactivateUser,
  getBotStatus,
  clearWebhook,
  sendTypingAction,
  handleFileUpload
}
