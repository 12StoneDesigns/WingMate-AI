"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import {
  Activity,
  AlertCircle,
  BarChart2,
  BookHeart,
  Calendar,
  ChevronRight,
  Crown,
  Heart,
  LineChart,
  MessageCircle,
  Plus,
  Save,
  Settings,
  Smile,
  Sparkles,
  Star,
  ThumbsUp,
  Timer,
  Zap,
} from "lucide-react"
import { useState } from "react"

export default function PostDateAnalysisPage() {
  const [selectedTab, setSelectedTab] = useState("overview")

  const dateAnalysis = {
    overview: {
      date: "2024-12-15",
      location: "Coffee Shop Downtown",
      duration: "1h 30m",
      overallScore: 85,
      highlights: [
        "Strong conversation flow",
        "Shared interests in travel",
        "Good body language",
      ],
      improvements: ["Could ask more follow-up questions"],
    },
    sentiment: {
      positive: 75,
      neutral: 20,
      negative: 5,
      keyMoments: [
        {
          time: "15m",
          event: "Shared travel stories",
          sentiment: "Very Positive",
        },
        {
          time: "45m",
          event: "Discussion about work",
          sentiment: "Neutral",
        },
      ],
    },
  }

  const metrics = [
    {
      title: "Connection Score",
      value: 85,
      trend: "up",
      details: "Strong emotional connection",
    },
    {
      title: "Conversation Flow",
      value: 92,
      trend: "up",
      details: "Natural and engaging dialogue",
    },
    {
      title: "Compatibility",
      value: 78,
      trend: "stable",
      details: "Good shared interests",
    },
  ]

  const nextSteps = [
    {
      title: "Follow-up Message",
      description: "Send a thoughtful message within 24 hours",
      priority: "high",
    },
    {
      title: "Plan Next Date",
      description: "Consider an activity based on shared interests",
      priority: "medium",
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Post-Date Analysis</h2>
            <p className="text-muted-foreground">
              AI-powered insights to improve your dating success
            </p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            <Plus className="mr-2 h-4 w-4" /> New Analysis
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="col-span-12 space-y-6 md:col-span-8">
            <Card>
              <CardHeader className="border-b">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger
                      value="overview"
                      onClick={() => setSelectedTab("overview")}
                      className="space-x-2"
                    >
                      <Activity className="h-4 w-4" />
                      <span>Overview</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="sentiment"
                      onClick={() => setSelectedTab("sentiment")}
                      className="space-x-2"
                    >
                      <LineChart className="h-4 w-4" />
                      <span>Sentiment</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="insights"
                      onClick={() => setSelectedTab("insights")}
                      className="space-x-2"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span>Insights</span>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="p-6">
                <AnimatePresence mode="wait">
                  {selectedTab === "overview" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {dateAnalysis.overview.date}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Timer className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {dateAnalysis.overview.duration}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">
                            {dateAnalysis.overview.overallScore}%
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Overall Score
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold">Highlights</h3>
                          <div className="mt-2 space-y-2">
                            {dateAnalysis.overview.highlights.map((highlight, i) => (
                              <div
                                key={i}
                                className="flex items-center space-x-2 text-sm"
                              >
                                <ThumbsUp className="h-4 w-4 text-green-500" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold">Areas for Improvement</h3>
                          <div className="mt-2 space-y-2">
                            {dateAnalysis.overview.improvements.map(
                              (improvement, i) => (
                                <div
                                  key={i}
                                  className="flex items-center space-x-2 text-sm"
                                >
                                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                                  <span>{improvement}</span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {selectedTab === "sentiment" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Positive</span>
                            <span className="text-sm text-muted-foreground">
                              {dateAnalysis.sentiment.positive}%
                            </span>
                          </div>
                          <Progress
                            value={dateAnalysis.sentiment.positive}
                            className="h-2"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Neutral</span>
                            <span className="text-sm text-muted-foreground">
                              {dateAnalysis.sentiment.neutral}%
                            </span>
                          </div>
                          <Progress
                            value={dateAnalysis.sentiment.neutral}
                            className="h-2"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Negative</span>
                            <span className="text-sm text-muted-foreground">
                              {dateAnalysis.sentiment.negative}%
                            </span>
                          </div>
                          <Progress
                            value={dateAnalysis.sentiment.negative}
                            className="h-2"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-semibold">Key Moments</h3>
                        {dateAnalysis.sentiment.keyMoments.map((moment, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-4 rounded-lg border p-4"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                              <Clock className="h-4 w-4 text-purple-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="font-medium">{moment.event}</p>
                                <span className="text-sm text-muted-foreground">
                                  {moment.time}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {moment.sentiment}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{metric.title}</h3>
                        <span
                          className={`rounded-full px-2 py-1 text-xs ${
                            metric.trend === "up"
                              ? "bg-green-100 text-green-600"
                              : "bg-yellow-100 text-yellow-600"
                          }`}
                        >
                          {metric.trend === "up" ? "Improving" : "Stable"}
                        </span>
                      </div>
                      <div className="mt-4">
                        <div className="text-3xl font-bold">{metric.value}%</div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {metric.details}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="col-span-12 space-y-6 md:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-4">
                  {nextSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative rounded-lg border p-4 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h4 className="font-semibold">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-2 py-1 text-xs ${
                            step.priority === "high"
                              ? "bg-red-100 text-red-600"
                              : "bg-yellow-100 text-yellow-600"
                          }`}
                        >
                          {step.priority}
                        </span>
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
                    <h3 className="font-semibold">Premium Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Get deeper date insights
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Advanced sentiment analysis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Personalized improvement tips</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Relationship trajectory prediction</span>
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
