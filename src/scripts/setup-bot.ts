import { config as dotenvConfig } from 'dotenv'
import { Telegraf } from 'telegraf'
import { PrismaClient } from '@prisma/client'
import { validateEnvironment } from '../lib/telegram/config'

// Load environment variables
dotenvConfig()

const prisma = new PrismaClient()

async function setupBot() {
  try {
    // Validate environment
    validateEnvironment()

    if (!process.env.TELEGRAM_BOT_TOKEN) {
      throw new Error('TELEGRAM_BOT_TOKEN is required')
    }

    const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)
    
    // 1. Check bot connection
    console.log('🤖 Checking bot connection...')
    const botInfo = await bot.telegram.getMe()
    console.log('✅ Bot connected successfully!')
    console.log(`Bot Info:
    - Username: @${botInfo.username}
    - Name: ${botInfo.first_name}
    - ID: ${botInfo.id}
    `)

    // 2. Set up webhook if URL is provided
    const webhookUrl = process.env.TELEGRAM_WEBHOOK_URL
    if (webhookUrl) {
      console.log('🌐 Setting up webhook...')
      await bot.telegram.setWebhook(webhookUrl, {
        secret_token: process.env.TELEGRAM_WEBHOOK_SECRET
      })
      console.log('✅ Webhook set up successfully!')
      
      // Verify webhook
      const webhookInfo = await bot.telegram.getWebhookInfo()
      console.log(`Webhook Info:
      - URL: ${webhookInfo.url}
      - Pending updates: ${webhookInfo.pending_update_count}
      - Last error: ${webhookInfo.last_error_message || 'None'}
      `)
    } else {
      console.log('⚠️ No webhook URL provided. Bot will run in long polling mode.')
    }

    // 3. Check database connection
    console.log('🔍 Checking database connection...')
    await prisma.$connect()
    console.log('✅ Database connected successfully!')

    // 4. Set up bot commands
    console.log('⚙️ Setting up bot commands...')
    await bot.telegram.setMyCommands([
      { command: 'start', description: 'Start using WingMate AI' },
      { command: 'help', description: 'Show available commands' },
      { command: 'profile', description: 'View and edit your profile' },
      { command: 'settings', description: 'Adjust bot settings' },
      { command: 'advice', description: 'Get dating advice' },
      { command: 'stats', description: 'View your conversation statistics' },
      { command: 'pause', description: 'Pause the assistant' },
      { command: 'resume', description: 'Resume the assistant' }
    ])
    console.log('✅ Bot commands set up successfully!')

    console.log('\n🎉 Bot setup completed successfully!')
    console.log(`
Next steps:
1. Make sure your server is running and accessible at ${webhookUrl || 'your webhook URL'}
2. Test the bot by sending /start to @${botInfo.username}
3. Monitor the logs for any errors or issues

For development:
- Use 'npm run dev' to start the development server
- Monitor webhook endpoints at /api/telegram/webhook
- Check the bot's status at /api/telegram/status
    `)

  } catch (error) {
    console.error('❌ Error during setup:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

// Run setup
setupBot()
