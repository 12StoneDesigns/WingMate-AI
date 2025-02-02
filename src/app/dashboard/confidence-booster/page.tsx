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
  Crown,
  Fire,
  Heart,
  LineChart,
  Lock,
  MessageCircle,
  Plus,
  Rocket,
  Settings,
  Shield,
  Sparkles,
  Star,
  Target,
  ThumbsUp,
  Trophy,
  User,
} from "lucide-react"

export default function ConfidenceBoosterPage() {
  const confidenceStats = {
    overall: 78,
    categories: [
      {
        name: "Social Confidence",
        score: 82,
        growth: "+15%",
        exercises: 12,
      },
      {
        name: "Dating Confidence",
        score: 75,
        growth: "+8%",
        exercises: 8,
      },
      {
        name: "Self-Image",
        score: 85,
        growth: "+20%",
        exercises: 15,
      },
    ],
  }

  const dailyExercises = [
    {
      title: "Power Pose Practice",
      description: "Stand in a confident pose for 2 minutes",
      type: "physical",
      duration: "2 min",
      impact: "high",
      completed: true,
    },
    {
      title: "Positive Self-Talk",
      description: "Record 3 things you're proud of today",
      type: "mental",
      duration: "5 min",
      impact: "high",
      completed: false,
    },
    {
      title: "Social Challenge",
      description: "Start a conversation with someone new",
      type: "social",
      duration: "10 min",
      impact: "very high",
      completed: false,
    },
  ]

  const achievements = [
    {
      title: "Confidence Champion",
      description: "Completed 30 confidence exercises",
      progress: 85,
      icon: Trophy,
    },
    {
      title: "Social Butterfly",
      description: "Initiated 10 conversations",
      progress: 70,
      icon: Heart,
    },
    {
      title: "Self-Growth Master",
      description: "Achieved 20% confidence growth",
      progress: 90,
      icon: Target,
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Confidence Booster
            </h2>
            <p className="text-muted-foreground">
              Build your dating confidence with personalized exercises
            </p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            <Plus className="mr-2 h-4 w-4" /> New Exercise
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle>Confidence Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex items-center justify-center">
                    <div className="relative h-48 w-48">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold">
                            {confidenceStats.overall}%
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Overall Confidence
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
                            confidenceStats.overall * 2.827
                          } 282.7`}
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {confidenceStats.categories.map((category, index) => (
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
                            <div className="flex items-center space-x-2 text-sm">
                              <span className="text-muted-foreground">
                                {category.exercises} exercises completed
                              </span>
                              <span className="text-green-600">
                                {category.growth}
                              </span>
                            </div>
                          </div>
                          <div className="text-2xl font-bold">
                            {category.score}%
                          </div>
                        </div>
                        <Progress value={category.score} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Confidence Exercises</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div className="space-y-4">
                    {dailyExercises.map((exercise, index) => (
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
                              <h4 className="font-semibold">{exercise.title}</h4>
                              <span
                                className={`rounded-full px-2 py-1 text-xs ${
                                  exercise.type === "physical"
                                    ? "bg-blue-100 text-blue-600"
                                    : exercise.type === "mental"
                                    ? "bg-purple-100 text-purple-600"
                                    : "bg-green-100 text-green-600"
                                }`}
                              >
                                {exercise.type}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {exercise.description}
                            </p>
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="flex items-center text-muted-foreground">
                                <Clock className="mr-1 h-4 w-4" />
                                {exercise.duration}
                              </span>
                              <span
                                className={`flex items-center ${
                                  exercise.impact === "very high"
                                    ? "text-purple-600"
                                    : "text-blue-600"
                                }`}
                              >
                                <Activity className="mr-1 h-4 w-4" />
                                {exercise.impact} impact
                              </span>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant={exercise.completed ? "outline" : "default"}
                            className={
                              exercise.completed
                                ? "text-green-600"
                                : "bg-gradient-to-r from-purple-600 to-blue-600"
                            }
                          >
                            {exercise.completed ? "Completed" : "Start"}
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
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative rounded-lg border p-4 hover:shadow-md"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-purple-100 p-2">
                          <achievement.icon className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-medium">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                          <Progress
                            value={achievement.progress}
                            className="h-1.5"
                          />
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
                    <h3 className="font-semibold">AI Coach</h3>
                    <p className="text-sm text-muted-foreground">
                      Personalized guidance
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm">
                      "Your confidence has grown 15% this week! Keep up the great
                      work with daily exercises."
                    </p>
                  </div>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  Get Advice
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
                    <h3 className="font-semibold">Premium Features</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced confidence tools
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Personalized exercise plans</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>1-on-1 confidence coaching</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Advanced progress tracking</span>
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
