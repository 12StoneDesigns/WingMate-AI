"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Sparkles } from "lucide-react"
import { useState } from "react"

interface Message {
  id: number
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hi! I'm your Wingmate AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages([...messages, newMessage])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        content: "I understand you're looking for dating advice. Let me help you with that! What specific aspect would you like to focus on?",
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <DashboardShell>
      <div className="flex h-[calc(100vh-10rem)] flex-col">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-purple-600" />
            <div>
              <h2 className="font-semibold">AI Assistant</h2>
              <p className="text-xs text-muted-foreground">Always here to help</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <Sparkles className="mr-2 h-4 w-4" />
            Premium Features
          </Button>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={\`flex \${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }\`}
                >
                  <div
                    className={\`flex max-w-[80%] items-start space-x-2 rounded-lg p-4 \${
                      message.sender === "user"
                        ? "bg-purple-600 text-white"
                        : "bg-muted"
                    }\`}
                  >
                    {message.sender === "ai" && (
                      <Bot className="mt-1 h-4 w-4 text-purple-600" />
                    )}
                    <div className="flex flex-col">
                      <p className="text-sm">{message.content}</p>
                      <span className="mt-1 text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    {message.sender === "user" && (
                      <User className="mt-1 h-4 w-4 text-white" />
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </ScrollArea>

        <div className="border-t p-4">
          <Card className="flex items-center space-x-2 p-2">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="border-0 focus-visible:ring-0"
            />
            <Button
              size="icon"
              onClick={handleSend}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </Card>
          <div className="mt-2 text-center">
            <span className="text-xs text-muted-foreground">
              Premium users get priority responses and advanced conversation
              analysis
            </span>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
