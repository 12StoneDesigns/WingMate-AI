import { PrismaClient } from '@prisma/client'
import { TelegramContext, BotCommand, MessageAnalysis } from './types'
import { Message } from 'telegraf/types'

const prisma = new PrismaClient()

// Command Handlers
export const commandHandlers: Record<string, BotCommand> = {
  start: {
    command: 'start',
    description: 'Start using WingMate AI',
    handler: async (ctx: TelegramContext) => {
      const welcomeMessage = `
Welcome to WingMate AI! 🎉

I'm your personal dating assistant, here to help you navigate the dating world with confidence. Here's what I can do:

🤖 Provide smart conversation suggestions
💡 Offer pre-date advice and tips
💬 Help with conversation starters
📊 Track your dating progress

Use /help to see all available commands.
`
      await ctx.reply(welcomeMessage)
    }
  },

  help: {
    command: 'help',
    description: 'Show available commands',
    handler: async (ctx: TelegramContext) => {
      const helpMessage = `
Available commands:

/start - Start using WingMate AI
/profile - View and edit your profile
/settings - Adjust bot settings
/advice - Get dating advice
/stats - View your conversation statistics
/pause - Pause the assistant
/resume - Resume the assistant
/help - Show this help message
`
      await ctx.reply(helpMessage)
    }
  },

  profile: {
    command: 'profile',
    description: 'View and edit your profile',
    handler: async (ctx: TelegramContext) => {
      if (!ctx.userId) {
        await ctx.reply('Please start the bot first with /start')
        return
      }

      const profile = await prisma.profile.findUnique({
        where: { userId: ctx.userId }
      })

      if (!profile) {
        await ctx.reply(`
Let's set up your profile! Please tell me:
- Your gender
- Your dating goals
- Your interests

Reply with each piece of information on a new line.`)
        return
      }

      const profileMessage = `
Your Profile:

👤 Gender: ${profile.gender || 'Not set'}
🎯 Dating Goals: ${profile.datingGoals.join(', ') || 'Not set'}
❤️ Interests: ${profile.interests.join(', ') || 'Not set'}
📍 Location: ${profile.location || 'Not set'}

Use /settings to update your preferences.`

      await ctx.reply(profileMessage)
    }
  }
}

// Message Handlers
export async function handleMessage(ctx: TelegramContext) {
  if (!ctx.message || !('text' in ctx.message)) return
  if (!ctx.userId) {
    await ctx.reply('Please start the bot first with /start')
    return
  }

  const messageText = ctx.message.text

  try {
    // Store message in conversation history
    const conversation = await getOrCreateConversation(ctx.userId)
    
    await prisma.message.create({
      data: {
        conversationId: conversation.id,
        content: messageText,
        role: 'user',
      }
    })

    // Analyze message and generate response
    const analysis = await analyzeMessage(messageText)
    
    // Generate and send response based on analysis
    const response = await generateResponse(analysis, conversation.id)
    await ctx.reply(response)

    // Store bot's response
    await prisma.message.create({
      data: {
        conversationId: conversation.id,
        content: response,
        role: 'assistant',
      }
    })

  } catch (error) {
    console.error('Error handling message:', error)
    await ctx.reply('Sorry, I encountered an error processing your message. Please try again.')
  }
}

// Helper Functions
async function getOrCreateConversation(userId: string) {
  return await prisma.conversation.upsert({
    where: {
      id: await getCurrentConversationId(userId)
    },
    update: {
      updatedAt: new Date()
    },
    create: {
      userId,
      matchName: 'Unknown',
      status: 'active'
    }
  })
}

async function getCurrentConversationId(userId: string): Promise<string> {
  const activeConversation = await prisma.conversation.findFirst({
    where: {
      userId,
      status: 'active'
    },
    orderBy: {
      updatedAt: 'desc'
    }
  })

  return activeConversation?.id || 'new'
}

async function analyzeMessage(text: string): Promise<MessageAnalysis> {
  // TODO: Implement actual sentiment analysis and message processing
  return {
    sentiment: 0.5,
    insights: [],
    suggestedResponses: [
      'That\'s interesting! Tell me more.',
      'How does that make you feel?',
      'What do you think about that?'
    ]
  }
}

async function generateResponse(analysis: MessageAnalysis, conversationId: string): Promise<string> {
  // TODO: Implement more sophisticated response generation
  if (analysis.suggestedResponses && analysis.suggestedResponses.length > 0) {
    const randomIndex = Math.floor(Math.random() * analysis.suggestedResponses.length)
    return analysis.suggestedResponses[randomIndex]
  }
  
  return "I understand. Please tell me more."
}

export async function handleCallbackQuery(ctx: TelegramContext) {
  // TODO: Implement callback query handling for interactive buttons
  await ctx.answerCbQuery()
}
