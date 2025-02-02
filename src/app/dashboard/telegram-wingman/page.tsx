"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Bot,
  Brain,
  Crown,
  History,
  Link,
  MessageCircle,
  MessageSquare,
  Plus,
  Send,
  Settings,
  Sparkles,
  ThumbsUp,
  User,
  Zap,
} from "lucide-react"
import { useState } from "react"

export default function TelegramWingmanPage() {
  const [selectedTab, setSelectedTab] = useState("chats")

  const activeChats = [
    {
      name: "Sarah",
      lastMessage: "Thanks for the movie recommendation!",
      time: "5m ago",
      unread: 2,
      status: "active",
    },
    {
      name: "Emily",
      lastMessage: "Would love to grab coffee sometime",
      time: "1h ago",
      unread: 0,
      status: "offline",
    },
  ]

  const suggestedResponses = [
    {
      text: "That's a great point about [topic]! What made you interested in it?",
      context: "Deep conversation",
      success: 95,
    },
    {
      text: "I'd love to hear more about your travels! Any favorite hidden gems?",
      context: "Travel discussion",
      success: 92,
    },
  ]

  const aiInsights = [
    {
      type: "sentiment",
      text: "Conversation tone is positive and engaging",
      score: 95,
    },
    {
      type: "suggestion",
      text: "Consider asking about her recent trip to Italy",
      priority: "high",
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Telegram Wingman</h2>
            <p className="text-muted-foreground">
              AI-powered chat assistance for better conversations
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Link className="mr-2 h-4 w-4" />
              Connect Telegram
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
              <Plus className="mr-2 h-4 w-4" /> New Chat
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <Card className="h-[800px]">
              <CardHeader className="border-b">
                <Tabs defaultValue="chats" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger
                      value="chats"
                      onClick={() => setSelectedTab("chats")}
                      className="space-x-2"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Active Chats</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="responses"
                      onClick={() => setSelectedTab("responses")}
                      className="space-x-2"
                    >
                      <Brain className="h-4 w-4" />
                      <span>Smart Responses</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="history"
                      onClick={() => setSelectedTab("history")}
                      className="space-x-2"
                    >
                      <History className="h-4 w-4" />
                      <span>History</span>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex h-[650px] flex-col">
                  <div className="flex-1 space-y-4 overflow-y-auto">
                    <AnimatePresence mode="wait">
                      {selectedTab === "chats" && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="space-y-4"
                        >
                          {activeChats.map((chat, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="group relative rounded-lg border p-4 hover:shadow-md"
                            >
                              <div className="flex items-center space-x-4">
                                <div className="relative">
                                  <div className="h-12 w-12 rounded-full bg-purple-100">
                                    <User className="h-full w-full p-2 text-purple-600" />
                                  </div>
                                  <span
                                    className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                                      chat.status === "active"
                                        ? "bg-green-500"
                                        : "bg-gray-300"
                                    }`}
                                  />
                                </div>
                                <div className="flex-1 space-y-1">
                                  <div className="flex items-center justify-between">
                                    <h4 className="font-semibold">{chat.name}</h4>
                                    <span className="text-sm text-muted-foreground">
                                      {chat.time}
                                    </span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {chat.lastMessage}
                                  </p>
                                </div>
                                {chat.unread > 0 && (
                                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs text-white">
                                    {chat.unread}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                      {selectedTab === "responses" && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="space-y-4"
                        >
                          {suggestedResponses.map((response, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="group relative rounded-lg border p-4 hover:shadow-md"
                            >
                              <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                  <div className="flex items-center space-x-2">
                                    <span className="rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-600">
                                      {response.context}
                                    </span>
                                    <span className="flex items-center text-sm text-muted-foreground">
                                      <ThumbsUp className="mr-1 h-4 w-4" />
                                      {response.success}% success rate
                                    </span>
                                  </div>
                                  <p className="text-sm">{response.text}</p>
                                </div>
                                <Button size="sm" variant="outline">
                                  Use
                                </Button>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Input placeholder="Type your message..." />
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-12 space-y-6 md:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>AI Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative rounded-lg border p-4 hover:shadow-md"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`rounded-full p-2 ${
                            insight.type === "sentiment"
                              ? "bg-green-100 text-green-600"
                              : "bg-purple-100 text-purple-600"
                          }`}
                        >
                          {insight.type === "sentiment" ? (
                            <Sparkles className="h-4 w-4" />
                          ) : (
                            <Zap className="h-4 w-4" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{insight.text}</p>
                          {insight.score && (
                            <div className="mt-1 text-sm text-muted-foreground">
                              Score: {insight.score}%
                            </div>
                          )}
                          {insight.priority && (
                            <div
                              className={`mt-1 text-sm ${
                                insight.priority === "high"
                                  ? "text-red-600"
                                  : "text-yellow-600"
                              }`}
                            >
                              Priority: {insight.priority}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                    <Bot className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Wingman Status</h3>
                    <p className="text-sm text-muted-foreground">
                      AI assistant is active and learning
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Messages Analyzed</span>
                    <span className="font-medium">1,234</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Success Rate</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Active Learning</span>
                    <span className="text-green-600">Enabled</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                    <Crown className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Premium Features</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced conversation tools
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Real-time sentiment analysis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Advanced response suggestions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Conversation strategy coaching</span>
                  </div>
                </div>
                <Button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
