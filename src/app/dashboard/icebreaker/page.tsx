"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import {
  BookHeart,
  Camera,
  Coffee,
  Copy,
  Crown,
  Gift,
  Globe,
  Heart,
  MessageCircle,
  Music,
  Palette,
  Plus,
  Search,
  Sparkles,
  Star,
  ThumbsUp,
  Zap,
} from "lucide-react"
import { useState } from "react"

export default function IcebreakerPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All", icon: Star },
    { id: "travel", name: "Travel", icon: Globe },
    { id: "hobbies", name: "Hobbies", icon: Palette },
    { id: "music", name: "Music", icon: Music },
    { id: "food", name: "Food", icon: Coffee },
  ]

  const icebreakers = {
    all: [
      {
        text: "I see you're into photography! What's the story behind your favorite shot?",
        category: "hobbies",
        success: 94,
        premium: true,
      },
      {
        text: "Your travel photos are amazing! Which destination surprised you the most?",
        category: "travel",
        success: 92,
        premium: false,
      },
    ],
    travel: [
      {
        text: "That sunset photo in Bali looks incredible! What's your most memorable travel moment?",
        category: "travel",
        success: 96,
        premium: true,
      },
    ],
  }

  const recentMatches = [
    {
      name: "Sarah",
      interests: ["Photography", "Travel", "Coffee"],
      photo: "/placeholder-1.jpg",
    },
    {
      name: "Emily",
      interests: ["Music", "Art", "Food"],
      photo: "/placeholder-2.jpg",
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Icebreaker Generator</h2>
            <p className="text-muted-foreground">
              AI-powered conversation starters tailored to your matches
            </p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            <Plus className="mr-2 h-4 w-4" /> Create Custom
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="col-span-12 space-y-6 md:col-span-8">
            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle>Smart Icebreakers</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Input
                      placeholder="Search icebreakers..."
                      className="h-8 w-[200px]"
                      prefix={<Search className="h-4 w-4" />}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="all" className="space-y-4">
                  <TabsList className="flex space-x-2 overflow-x-auto">
                    {categories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className="flex items-center space-x-2"
                      >
                        <category.icon className="h-4 w-4" />
                        <span>{category.name}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <AnimatePresence mode="wait">
                    {Object.entries(icebreakers).map(
                      ([category, items]) =>
                        category === selectedCategory && (
                          <TabsContent key={category} value={category}>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              className="space-y-4"
                            >
                              {items.map((icebreaker, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="group relative rounded-lg border p-6 hover:shadow-md"
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                      <div className="flex items-center space-x-2">
                                        <span className="rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-600 dark:bg-purple-900">
                                          {icebreaker.category}
                                        </span>
                                        {icebreaker.premium && (
                                          <span className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-2 py-1 text-xs text-white">
                                            Premium
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-lg font-medium">
                                        {icebreaker.text}
                                      </p>
                                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                        <span className="flex items-center">
                                          <ThumbsUp className="mr-1 h-4 w-4" />
                                          {icebreaker.success}% success rate
                                        </span>
                                      </div>
                                    </div>
                                    <Button size="sm" variant="outline">
                                      <Copy className="mr-2 h-4 w-4" />
                                      Copy
                                    </Button>
                                  </div>
                                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
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
                <CardTitle>AI Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Input placeholder="Describe your match's interests and profile..." />
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
                      Enter your match's interests to get personalized icebreakers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-12 space-y-6 md:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-4">
                  {recentMatches.map((match, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-lg border p-4 hover:shadow-md"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <img
                            src={match.photo}
                            alt={match.name}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{match.name}</h4>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {match.interests.map((interest, i) => (
                              <span
                                key={i}
                                className="rounded-full bg-muted px-2 py-0.5 text-xs"
                              >
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-4 w-4" />
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
                      Unlock advanced icebreakers
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>AI-powered personalization</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Premium conversation starters</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Success rate analytics</span>
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
