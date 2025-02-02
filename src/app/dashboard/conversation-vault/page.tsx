"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import {
  Archive,
  Book,
  BookmarkPlus,
  Copy,
  Crown,
  Heart,
  MessageCircle,
  Plus,
  Search,
  Send,
  Sparkles,
  Star,
  ThumbsUp,
  Zap,
} from "lucide-react"
import { useState } from "react"

export default function ConversationVaultPage() {
  const [selectedCategory, setSelectedCategory] = useState("openers")

  const categories = [
    { id: "openers", name: "Openers", icon: MessageCircle },
    { id: "flirty", name: "Flirty", icon: Heart },
    { id: "deep", name: "Deep Talk", icon: Book },
    { id: "dates", name: "Date Plans", icon: Star },
  ]

  const templates = {
    openers: [
      {
        text: "I noticed you're into [interest]. What's your favorite aspect of it?",
        rating: 98,
        uses: 1234,
        premium: true,
      },
      {
        text: "Your travel photos are amazing! Which destination surprised you the most?",
        rating: 95,
        uses: 856,
        premium: false,
      },
    ],
    flirty: [
      {
        text: "If you could plan the perfect date, what would it include?",
        rating: 94,
        uses: 723,
        premium: true,
      },
      {
        text: "Your smile caught my attention right away. What makes you laugh?",
        rating: 92,
        uses: 645,
        premium: false,
      },
    ],
  }

  const savedConversations = [
    {
      name: "Sarah",
      preview: "Great conversation about travel and food",
      date: "2024-12-15",
      success: true,
    },
    {
      name: "Emily",
      preview: "Interesting discussion about art and music",
      date: "2024-12-14",
      success: true,
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Conversation Vault</h2>
            <p className="text-muted-foreground">
              AI-powered conversation templates and analysis
            </p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            <Plus className="mr-2 h-4 w-4" /> Create Custom Template
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="col-span-12 space-y-6 md:col-span-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Message Templates</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Input
                      placeholder="Search templates..."
                      className="h-8 w-[200px]"
                      prefix={<Search className="h-4 w-4" />}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="openers" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    {categories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className="space-x-2"
                      >
                        <category.icon className="h-4 w-4" />
                        <span>{category.name}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <AnimatePresence mode="wait">
                    {Object.entries(templates).map(
                      ([category, items]) =>
                        category === selectedCategory && (
                          <TabsContent key={category} value={category}>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              className="space-y-4"
                            >
                              {items.map((template, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="group relative rounded-lg border p-4 hover:shadow-md"
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                      <p className="font-medium">{template.text}</p>
                                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                        <span className="flex items-center">
                                          <ThumbsUp className="mr-1 h-4 w-4" />
                                          {template.rating}% success rate
                                        </span>
                                        <span className="flex items-center">
                                          <MessageCircle className="mr-1 h-4 w-4" />
                                          {template.uses} uses
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      {template.premium && (
                                        <span className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-2 py-1 text-xs text-white">
                                          Premium
                                        </span>
                                      )}
                                      <Button size="sm" variant="outline">
                                        <Copy className="mr-2 h-4 w-4" />
                                        Copy
                                      </Button>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </motion.div>
                          </TabsContent>
                        )
                    )}
                  </AnimatePresence>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Message Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Input placeholder="Describe your match and what you'd like to say..." />
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                  <div className="rounded-lg border bg-muted p-4">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-purple-600" />
                      <h3 className="font-semibold">AI Suggestions</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Enter details about your match to get personalized message suggestions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-12 space-y-6 md:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Saved Conversations</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-4">
                  {savedConversations.map((conversation, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative rounded-lg border p-4 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h4 className="font-semibold">{conversation.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {conversation.preview}
                          </p>
                          <div className="flex items-center space-x-2 text-sm">
                            <span>{conversation.date}</span>
                            {conversation.success && (
                              <span className="flex items-center text-green-500">
                                <ThumbsUp className="mr-1 h-4 w-4" />
                                Success
                              </span>
                            )}
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Archive className="h-4 w-4" />
                        </Button>
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
                    <Crown className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Premium Features</h3>
                    <p className="text-sm text-muted-foreground">
                      Unlock advanced conversation tools
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Advanced AI message generation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Unlimited conversation saves</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Premium message templates</span>
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
