import { BotConfig } from './types'

export const defaultConfig: BotConfig = {
  maxRetries: 3,
  retryDelay: 1000,
  messageTimeout: 30000,
  maxContextLength: 1000,
  features: {
    sentimentAnalysis: true,
    smartReplies: true,
    dateAdvice: true,
    conversationCoaching: true,
  },
}

// Environment validation
export function validateEnvironment(): void {
  const requiredEnvVars = [
    'TELEGRAM_BOT_TOKEN',
    'DATABASE_URL',
  ]

  const optionalEnvVars = [
    'TELEGRAM_WEBHOOK_SECRET',
    'TELEGRAM_WEBHOOK_URL',
  ]

  // Check required environment variables
  const missing = requiredEnvVars.filter(envVar => !process.env[envVar])
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }

  // Log warning for missing optional variables
  const missingOptional = optionalEnvVars.filter(envVar => !process.env[envVar])
  if (missingOptional.length > 0) {
    console.warn(`Warning: Missing optional environment variables: ${missingOptional.join(', ')}`)
  }
}

// Webhook configuration
export function getWebhookConfig() {
  const webhookUrl = process.env.TELEGRAM_WEBHOOK_URL
  const webhookSecret = process.env.TELEGRAM_WEBHOOK_SECRET

  if (!webhookUrl) {
    throw new Error('TELEGRAM_WEBHOOK_URL is required for webhook setup')
  }

  return {
    url: webhookUrl,
    secret: webhookSecret,
  }
}

// Feature management
export function isFeatureEnabled(featureName: keyof BotConfig['features']): boolean {
  return defaultConfig.features[featureName]
}

// Rate limiting configuration
export const rateLimits = {
  messages: {
    windowMs: 60000, // 1 minute
    max: 30, // limit each user to 30 messages per minute
  },
  commands: {
    windowMs: 60000,
    max: 20, // limit each user to 20 commands per minute
  },
}

// Message templates
export const messageTemplates = {
  welcome: `
Welcome to WingMate AI! 🎉

I'm your personal dating assistant, here to help you navigate the dating world with confidence. Here's what I can do:

🤖 Provide smart conversation suggestions
💡 Offer pre-date advice and tips
💬 Help with conversation starters
📊 Track your dating progress

Use /help to see all available commands.
`,

  help: `
Available commands:

/start - Start using WingMate AI
/profile - View and edit your profile
/settings - Adjust bot settings
/advice - Get dating advice
/stats - View your conversation statistics
/pause - Pause the assistant
/resume - Resume the assistant
/help - Show this help message
`,

  error: {
    general: 'Sorry, something went wrong. Please try again later.',
    rateLimit: 'You\'re sending too many messages. Please wait a moment before trying again.',
    invalidCommand: 'Sorry, I don\'t recognize that command. Use /help to see available commands.',
    unauthorized: 'Please start the bot with /start first.',
  },
}

// Conversation analysis configuration
export const analysisConfig = {
  sentiment: {
    threshold: {
      positive: 0.6,
      negative: 0.4,
    },
    weights: {
      recent: 0.7,
      historical: 0.3,
    },
  },
  engagement: {
    metrics: {
      messageFrequency: 0.4,
      responseTime: 0.3,
      messageLength: 0.3,
    },
    thresholds: {
      high: 0.7,
      low: 0.3,
    },
  },
}

// Export configuration object
export const config = {
  bot: defaultConfig,
  rateLimits,
  messageTemplates,
  analysisConfig,
  validate: validateEnvironment,
  getWebhookConfig,
  isFeatureEnabled,
}

export default config
