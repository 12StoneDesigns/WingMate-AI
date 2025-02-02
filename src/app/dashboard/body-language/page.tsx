"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import {
  Camera,
  Crown,
  Eye,
  Film,
  HandMetal,
  Image as ImageIcon,
  Info,
  MessageCircle,
  Play,
  Plus,
  Smile,
  Sparkles,
  Upload,
  Video,
  Zap,
} from "lucide-react"
import Image from "next/image"

export default function BodyLanguagePage() {
  const analyses = [
    {
      title: "First Date Analysis",
      date: "2024-12-15",
      confidence: 92,
      insights: [
        { aspect: "Eye Contact", score: 85, feedback: "Strong engagement" },
        { aspect: "Posture", score: 90, feedback: "Open and confident" },
        { aspect: "Gestures", score: 88, feedback: "Natural and expressive" },
      ],
    },
    {
      title: "Coffee Meet Analysis",
      date: "2024-12-14",
      confidence: 88,
      insights: [
        { aspect: "Facial Expressions", score: 92, feedback: "Genuine smiles" },
        { aspect: "Body Position", score: 85, feedback: "Relaxed stance" },
        { aspect: "Mirroring", score: 80, feedback: "Good rapport" },
      ],
    },
  ]

  const tips = [
    {
      category: "Eye Contact",
      tips: [
        "Maintain natural eye contact",
        "Break gaze occasionally",
        "Show active listening",
      ],
    },
    {
      category: "Posture",
      tips: [
        "Keep shoulders relaxed",
        "Face partner directly",
        "Maintain open position",
      ],
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Body Language Analysis</h2>
            <p className="text-muted-foreground">
              AI-powered insights for better non-verbal communication
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Video className="mr-2 h-4 w-4" />
              Record Video
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
              <Upload className="mr-2 h-4 w-4" />
              Upload Media
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="col-span-12 space-y-6 md:col-span-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Analyses</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-6">
                  {analyses.map((analysis, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative rounded-lg border p-6 hover:shadow-md"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{analysis.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {analysis.date}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">
                            {analysis.confidence}% confidence
                          </span>
                          <Button size="sm" variant="outline">
                            <Play className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {analysis.insights.map((insight, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">
                                {insight.aspect}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {insight.score}%
                              </span>
                            </div>
                            <Progress value={insight.score} className="h-2" />
                            <p className="text-sm text-muted-foreground">
                              {insight.feedback}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Live Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video overflow-hidden rounded-lg border bg-muted">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <Camera className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Start a video session for real-time analysis
                      </p>
                      <Button className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600">
                        Begin Session
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-12 space-y-6 md:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Quick Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-6">
                  {tips.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <h3 className="font-semibold">{section.category}</h3>
                      <ul className="space-y-2">
                        {section.tips.map((tip, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <Info className="mt-1 h-4 w-4 text-purple-600" />
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
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
                      Advanced body language insights
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Real-time video analysis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Detailed gesture recognition</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Personalized improvement tips</span>
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
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Expert Coaching</h3>
                    <p className="text-sm text-muted-foreground">
                      Get personalized feedback
                    </p>
                  </div>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  Book Session
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
