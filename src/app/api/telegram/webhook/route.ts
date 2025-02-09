import { NextResponse } from 'next/server'
import bot from '@/lib/telegram/bot'
import { commandHandlers, handleMessage, handleCallbackQuery } from '@/lib/telegram/handlers'
import { TelegramContext } from '@/lib/telegram/types'

// Initialize command handlers
Object.entries(commandHandlers).forEach(([command, handler]) => {
  bot.command(command, async (ctx) => {
    try {
      await handler.handler(ctx as TelegramContext)
    } catch (error) {
      console.error(`Error handling command ${command}:`, error)
      await ctx.reply('Sorry, there was an error processing your command. Please try again.')
    }
  })
})

// Handle regular messages
bot.on('text', async (ctx) => {
  try {
    await handleMessage(ctx as TelegramContext)
  } catch (error) {
    console.error('Error handling message:', error)
    await ctx.reply('Sorry, there was an error processing your message. Please try again.')
  }
})

// Handle callback queries (button clicks)
bot.on('callback_query', async (ctx) => {
  try {
    await handleCallbackQuery(ctx as TelegramContext)
  } catch (error) {
    console.error('Error handling callback query:', error)
    await ctx.answerCbQuery('Sorry, there was an error processing your request.')
  }
})

// POST handler for webhook updates
export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Verify webhook secret if set
    const secret = req.headers.get('X-Telegram-Bot-Api-Secret-Token')
    if (process.env.TELEGRAM_WEBHOOK_SECRET && secret !== process.env.TELEGRAM_WEBHOOK_SECRET) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    // Process update
    await bot.handleUpdate(body)
    
    return new NextResponse('OK', { status: 200 })
  } catch (error) {
    console.error('Error processing webhook update:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

// GET handler for webhook setup verification
export async function GET(req: Request) {
  return new NextResponse('Telegram Webhook is active', { status: 200 })
}
