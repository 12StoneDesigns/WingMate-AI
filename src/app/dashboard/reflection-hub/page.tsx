"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import {
  BookHeart,
  Calendar,
  ChevronRight,
  Crown,
  Edit3,
  Heart,
  LineChart,
  Plus,
  Save,
  Search,
  Smile,
  SunMedium,
  Target,
  ThumbsUp,
} from "lucide-react"
import { useState } from "react"

export default function ReflectionHubPage() {
  const [selectedTab, setSelectedTab] = useState("journal")

  const journalEntries = [
    {
      date: "2024-12-15",
      title: "Great First Date",
      mood: "Excited",
      content: "Had an amazing coffee date with Sarah...",
      tags: ["First Date", "Coffee", "Success"],
    },
    {
      date: "2024-12-14",
      title: "Learning Experience",
      mood: "Reflective",
      content: "Today's date didn't go as planned...",
      tags: ["Learning", "Growth"],
    },
  ]

  const insights = [
    {
      category: "Dating Patterns",
      score: 85,
      trend: "improving",
      insights: [
        "You're more confident in social settings",
        "Communication skills are improving",
        "Better at expressing emotions",
      ],
    },
    {
      category: "Emotional Growth",
      score: 78,
      trend: "stable",
      insights: [
        "Showing more vulnerability",
        "Better at setting boundaries",
        "More self-aware in relationships",
      ],
    },
  ]

  const goals = [
    {
      title: "Improve Communication",
      progress: 75,
      tasks: ["Practice active listening", "Express feelings clearly"],
    },
    {
      title: "Build Confidence",
      progress: 60,
      tasks: ["Attend social events", "Practice self-care"],
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Reflection Hub</h2>
            <p className="text-muted-foreground">
              Track your dating journey and personal growth
            </p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            <Plus className="mr-2 h-4 w-4" /> New Journal Entry
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <Card>
              <CardHeader className="border-b">
                <Tabs defaultValue="journal" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger
                      value="journal"
                      onClick={() => setSelectedTab("journal")}
                      className="space-x-2"
                    >
                      <Edit3 className="h-4 w-4" />
                      <span>Journal</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="insights"
                      onClick={() => setSelectedTab("insights")}
                      className="space-x-2"
                    >
                      <LineChart className="h-4 w-4" />
                      <span>Insights</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="goals"
                      onClick={() => setSelectedTab("goals")}
                      className="space-x-2"
                    >
                      <Target className="h-4 w-4" />
                      <span>Goals</span>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="p-6">
                <AnimatePresence mode="wait">
                  {selectedTab === "journal" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      {journalEntries.map((entry, index) => (
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
                                <h3 className="font-semibold">{entry.title}</h3>
                                <span className="rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-600 dark:bg-purple-900">
                                  {entry.mood}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {entry.content}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {entry.tags.map((tag, i) => (
                                  <span
                                    key={i}
                                    className="rounded-full bg-muted px-2 py-1 text-xs"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="ghost">
                                <Edit3 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {selectedTab === "insights" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      {insights.map((insight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="space-y-4 rounded-lg border p-4"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{insight.category}</h3>
                            <span
                              className={`rounded-full px-2 py-1 text-xs ${
                                insight.trend === "improving"
                                  ? "bg-green-100 text-green-600"
                                  : "bg-yellow-100 text-yellow-600"
                              }`}
                            >
                              {insight.trend}
                            </span>
                          </div>
                          <Progress value={insight.score} className="h-2" />
                          <ul className="space-y-2">
                            {insight.insights.map((item, i) => (
                              <li key={i} className="flex items-center text-sm">
                                <ChevronRight className="mr-2 h-4 w-4 text-purple-600" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {selectedTab === "goals" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      {goals.map((goal, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="rounded-lg border p-4"
                        >
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">{goal.title}</h3>
                              <span className="text-sm text-muted-foreground">
                                {goal.progress}%
                              </span>
                            </div>
                            <Progress value={goal.progress} className="h-2" />
                            <ul className="space-y-2">
                              {goal.tasks.map((task, i) => (
                                <li key={i} className="flex items-center text-sm">
                                  <ThumbsUp className="mr-2 h-4 w-4 text-purple-600" />
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-12 space-y-6 md:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Mood Tracker</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      This Week
                    </Button>
                    <Button variant="outline" size="sm">
                      <SunMedium className="mr-2 h-4 w-4" />
                      All Time
                    </Button>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex aspect-square items-center justify-center rounded-lg border bg-muted"
                      >
                        <Smile className="h-6 w-6 text-purple-600" />
                      </div>
                    ))}
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
                    <h3 className="font-semibold">Premium Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      Get deeper analysis of your dating journey
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Advanced pattern recognition</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Personalized growth insights</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>AI relationship coach</span>
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
