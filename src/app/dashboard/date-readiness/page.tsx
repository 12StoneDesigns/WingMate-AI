"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import {
  Activity,
  Award,
  Brain,
  Calendar,
  CheckCircle,
  Crown,
  Heart,
  HelpCircle,
  Info,
  LineChart,
  MessageCircle,
  Plus,
  Settings,
  Shield,
  Sparkles,
  Star,
  ThumbsUp,
  Timer,
  Trophy,
  User,
} from "lucide-react"

export default function DateReadinessPage() {
  const readinessScore = {
    overall: 85,
    categories: [
      {
        name: "Emotional Readiness",
        score: 90,
        status: "Excellent",
        insights: [
          "Strong emotional stability",
          "Clear relationship goals",
          "Positive self-image",
        ],
      },
      {
        name: "Social Skills",
        score: 85,
        status: "Good",
        insights: [
          "Strong conversation skills",
          "Active listener",
          "Room for improvement in group settings",
        ],
      },
      {
        name: "Life Balance",
        score: 80,
        status: "Good",
        insights: [
          "Healthy work-life balance",
          "Active social circle",
          "Regular self-care routine",
        ],
      },
    ],
  }

  const checklist = [
    {
      category: "Personal",
      items: [
        { text: "Updated profile photos", completed: true },
        { text: "Clear dating goals defined", completed: true },
        { text: "Completed personality assessment", completed: false },
      ],
    },
    {
      category: "Practical",
      items: [
        { text: "Planned date ideas", completed: true },
        { text: "Emergency contacts set", completed: true },
        { text: "Transportation arranged", completed: false },
      ],
    },
  ]

  const upcomingDates = [
    {
      name: "Coffee Date",
      date: "2024-12-18",
      readiness: 92,
      status: "Ready",
    },
    {
      name: "Dinner Date",
      date: "2024-12-20",
      readiness: 85,
      status: "Preparation Needed",
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Date Readiness</h2>
            <p className="text-muted-foreground">
              Assess and improve your dating preparedness
            </p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            <Plus className="mr-2 h-4 w-4" /> New Assessment
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle>Readiness Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="relative h-48 w-48">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold">
                            {readinessScore.overall}%
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Overall Score
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
                          strokeDasharray={`${readinessScore.overall * 2.827} 282.7`}
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {readinessScore.categories.map((category, index) => (
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
                            <div className="text-sm text-muted-foreground">
                              {category.status}
                            </div>
                          </div>
                          <div className="text-2xl font-bold">{category.score}%</div>
                        </div>
                        <Progress value={category.score} className="h-2" />
                        <div className="space-y-1">
                          {category.insights.map((insight, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 text-sm"
                            >
                              <Info className="h-4 w-4 text-purple-600" />
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

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {checklist.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{section.category} Checklist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div className="space-y-4">
                      {section.items.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <div
                            className={`flex h-6 w-6 items-center justify-center rounded-full ${
                              item.completed
                                ? "bg-green-100 text-green-600"
                                : "bg-yellow-100 text-yellow-600"
                            }`}
                          >
                            {item.completed ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <Timer className="h-4 w-4" />
                            )}
                          </div>
                          <span
                            className={
                              item.completed ? "text-muted-foreground" : "font-medium"
                            }
                          >
                            {item.text}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="col-span-12 space-y-6 md:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-4">
                  {upcomingDates.map((date, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative rounded-lg border p-4 hover:shadow-md"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{date.name}</h4>
                          <span
                            className={`rounded-full px-2 py-1 text-xs ${
                              date.readiness >= 90
                                ? "bg-green-100 text-green-600"
                                : "bg-yellow-100 text-yellow-600"
                            }`}
                          >
                            {date.status}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          {date.date}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Readiness Score</span>
                            <span>{date.readiness}%</span>
                          </div>
                          <Progress value={date.readiness} className="h-2" />
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
                    <Crown className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Premium Features</h3>
                    <p className="text-sm text-muted-foreground">
                      Enhanced readiness tools
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Advanced readiness metrics</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Personalized preparation plans</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Expert dating coach access</span>
                  </div>
                </div>
                <Button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Quick Tips</h3>
                    <p className="text-sm text-muted-foreground">
                      Boost your readiness score
                    </p>
                  </div>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  View Tips
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
