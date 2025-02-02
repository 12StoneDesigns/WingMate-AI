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
  Brain,
  ChartBar,
  Crown,
  Heart,
  HeartHandshake,
  MessageCircle,
  Plus,
  Sparkles,
  Star,
  ThumbsUp,
  User,
  Users,
  Zap,
} from "lucide-react"

export default function MatchAnalyzerPage() {
  const matchAnalysis = {
    overall: 92,
    categories: [
      {
        name: "Compatibility",
        score: 95,
        insights: [
          "Shared interests in travel and adventure",
          "Similar life goals and values",
          "Complementary communication styles",
        ],
      },
      {
        name: "Conversation Quality",
        score: 88,
        insights: [
          "Deep, meaningful discussions",
          "Active listening patterns",
          "Balanced engagement",
        ],
      },
      {
        name: "Long-term Potential",
        score: 90,
        insights: [
          "Aligned future goals",
          "Compatible lifestyle preferences",
          "Strong emotional connection",
        ],
      },
    ],
  }

  const recentMatches = [
    {
      name: "Sarah",
      age: 28,
      compatibility: 92,
      status: "High Potential",
      interests: ["Travel", "Photography", "Fitness"],
      lastActive: "2h ago",
      premium: true,
    },
    {
      name: "Emma",
      age: 26,
      compatibility: 85,
      status: "Good Match",
      interests: ["Music", "Art", "Cooking"],
      lastActive: "5h ago",
      premium: false,
    },
  ]

  const insights = [
    {
      type: "strength",
      title: "Strong Emotional Connection",
      description: "You both show high emotional intelligence and openness",
      impact: "Very Positive",
      icon: Heart,
    },
    {
      type: "opportunity",
      title: "Shared Adventure Spirit",
      description: "Similar interests in outdoor activities and travel",
      impact: "Positive",
      icon: Zap,
    },
    {
      type: "attention",
      title: "Communication Style",
      description: "Consider more open-ended questions",
      impact: "Action Needed",
      icon: AlertCircle,
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Match Analyzer</h2>
            <p className="text-muted-foreground">
              Deep insights into your dating compatibility
            </p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            <Plus className="mr-2 h-4 w-4" /> New Analysis
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle>Match Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex items-center justify-center">
                    <div className="relative h-48 w-48">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold">
                            {matchAnalysis.overall}%
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Overall Match
                          </div>
                        </div>
                      </div>
                      <svg className="h-full w-full" viewBox="0 0 100 100">
                        <circle
                          className="stroke-muted"
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          strokeWidth="5"
                        />
                        <circle
                          className="stroke-primary"
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          strokeWidth="5"
                          strokeDasharray={`${
                            matchAnalysis.overall * 2.827
                          } 282.7`}
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {matchAnalysis.categories.map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="font-medium">{category.name}</div>
                          </div>
                          <div className="text-2xl font-bold">
                            {category.score}%
                          </div>
                        </div>
                        <Progress value={category.score} className="h-2" />
                        <div className="space-y-1">
                          {category.insights.map((insight, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 text-sm"
                            >
                              <Sparkles className="h-4 w-4 text-purple-600" />
                              <span>{insight}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Matches</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div className="space-y-4">
                    {recentMatches.map((match, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative rounded-lg border p-4 hover:shadow-md"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="relative">
                              <div className="h-12 w-12 rounded-full bg-purple-100">
                                <User className="h-full w-full p-2 text-purple-600" />
                              </div>
                              {match.premium && (
                                <div className="absolute -right-1 -top-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1">
                                  <Crown className="h-3 w-3 text-white" />
                                </div>
                              )}
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-semibold">
                                  {match.name}, {match.age}
                                </h4>
                                <span
                                  className={`rounded-full px-2 py-1 text-xs ${
                                    match.compatibility >= 90
                                      ? "bg-green-100 text-green-600"
                                      : "bg-blue-100 text-blue-600"
                                  }`}
                                >
                                  {match.status}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {match.interests.map((interest, i) => (
                                  <span
                                    key={i}
                                    className="rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-600"
                                  >
                                    {interest}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center space-x-4 text-sm">
                                <span className="text-muted-foreground">
                                  {match.lastActive}
                                </span>
                                <span className="flex items-center text-purple-600">
                                  <HeartHandshake className="mr-1 h-4 w-4" />
                                  {match.compatibility}% match
                                </span>
                              </div>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-purple-600 to-blue-600"
                          >
                            Analyze
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="col-span-12 space-y-6 md:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Match Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-4">
                  {insights.map((insight, index) => (
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
                            insight.type === "strength"
                              ? "bg-green-100 text-green-600"
                              : insight.type === "opportunity"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-yellow-100 text-yellow-600"
                          }`}
                        >
                          <insight.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-medium">{insight.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {insight.description}
                          </p>
                          <span
                            className={`inline-block rounded-full px-2 py-1 text-xs ${
                              insight.impact === "Very Positive"
                                ? "bg-green-100 text-green-600"
                                : insight.impact === "Positive"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-yellow-100 text-yellow-600"
                            }`}
                          >
                            {insight.impact}
                          </span>
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
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">AI Match Coach</h3>
                    <p className="text-sm text-muted-foreground">
                      Personalized advice
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm">
                      "Your communication style shows great potential. Consider
                      sharing more about your travel experiences."
                    </p>
                  </div>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  Get More Insights
                </Button>
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
                      Advanced matching tools
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Deep compatibility analysis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>AI-powered insights</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Relationship forecasting</span>
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
