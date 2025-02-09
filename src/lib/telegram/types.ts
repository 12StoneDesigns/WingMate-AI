import { Message, ConversationInsight, DateAdvice } from '@prisma/client'
import { Context } from 'telegraf'

export interface TelegramContext extends Context {
  userId?: string
  telegramId?: string
  chatId?: string
  sessionData?: any
}

export interface BotCommand {
  command: string
  description: string
  handler: (ctx: TelegramContext, args?: string) => Promise<void>
}

export interface ConversationState {
  userId: string
  currentContext?: string
  lastMessageTimestamp?: Date
  activeFlow?: string
  flowStep?: number
  tempData?: any
}

export interface MessageAnalysis {
  sentiment: number
  insights: Partial<ConversationInsight>[]
  suggestedResponses?: string[]
  warnings?: string[]
}

export interface DateAdviceRequest {
  userId: string
  category: 'pre-date' | 'during-date' | 'post-date'
  context?: {
    dateType?: string
    location?: string
    matchDetails?: {
      name?: string
      interests?: string[]
    }
  }
}

export interface ConversationAnalytics {
  messageCount: number
  averageSentiment: number
  topicsCovered: string[]
  engagementScore: number
  suggestedActions?: string[]
}

export interface BotConfig {
  maxRetries: number
  retryDelay: number
  messageTimeout: number
  maxContextLength: number
  features: {
    sentimentAnalysis: boolean
    smartReplies: boolean
    dateAdvice: boolean
    conversationCoaching: boolean
  }
}

export type CommandName = 
  | 'start'
  | 'help'
  | 'profile'
  | 'settings'
  | 'advice'
  | 'stats'
  | 'pause'
  | 'resume'
