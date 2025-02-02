"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import {
  Camera,
  Check,
  Crown,
  Edit2,
  Image as ImageIcon,
  MessageCircle,
  Sparkles,
  ThumbsUp,
  Upload,
  User,
  Zap,
} from "lucide-react"
import Image from "next/image"

export default function ProfileOptimizerPage() {
  const profileMetrics = [
    {
      category: "Photos",
      score: 85,
      feedback: [
        "Great variety in your photos",
        "Consider adding a group photo",
        "Main photo has excellent lighting",
      ],
    },
    {
      category: "Bio",
      score: 70,
      feedback: [
        "Good length and personality",
        "Add more specific interests",
        "Include conversation starters",
      ],
    },
    {
      category: "Interests",
      score: 90,
      feedback: [
        "Diverse range of interests",
        "Well-balanced selection",
        "Unique hobbies stand out",
      ],
    },
  ]

  const photoAnalysis = [
    {
      image: "/placeholder-1.jpg",
      score: 92,
      feedback: "Excellent main profile photo",
      pros: ["Good lighting", "Clear face shot", "Natural smile"],
      cons: ["Could be more recent"],
    },
    {
      image: "/placeholder-2.jpg",
      score: 85,
      feedback: "Strong activity photo",
      pros: ["Shows interests", "Good energy"],
      cons: ["Slightly blurry"],
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Profile Optimizer</h2>
            <p className="text-muted-foreground">
              AI-powered analysis to maximize your profile's potential
            </p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            <Crown className="mr-2 h-4 w-4" /> Get Premium Analysis
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-7">
          <Card className="col-span-7 md:col-span-4">
            <CardHeader>
              <CardTitle>AI Analysis Results</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {profileMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{metric.category}</h3>
                      <span className="text-sm font-medium">{metric.score}%</span>
                    </div>
                    <Progress value={metric.score} className="h-2" />
                    <div className="mt-2 space-y-1">
                      {metric.feedback.map((item, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-green-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <div className="mt-6 rounded-lg border bg-muted p-4">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold">AI Recommendations</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <ThumbsUp className="mt-0.5 h-4 w-4 text-green-500" />
                      <span>Your profile shows authenticity and personality</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Zap className="mt-0.5 h-4 w-4 text-yellow-500" />
                      <span>Add more action photos to showcase your lifestyle</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <MessageCircle className="mt-0.5 h-4 w-4 text-blue-500" />
                      <span>Include conversation hooks in your bio</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </CardContent>
          </Card>

          <div className="col-span-7 space-y-6 md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Photo Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {photoAnalysis.map((photo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="space-y-4"
                    >
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <div className="absolute right-2 top-2 rounded-full bg-black/50 px-2 py-1 text-xs text-white">
                          Score: {photo.score}%
                        </div>
                        <Image
                          src={photo.image}
                          alt="Profile photo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium">{photo.feedback}</p>
                        <div className="space-y-1">
                          {photo.pros.map((pro, i) => (
                            <div key={i} className="flex items-center text-sm text-green-600">
                              <Check className="mr-2 h-4 w-4" />
                              {pro}
                            </div>
                          ))}
                          {photo.cons.map((con, i) => (
                            <div key={i} className="flex items-center text-sm text-red-500">
                              <Check className="mr-2 h-4 w-4" />
                              {con}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <Button className="mt-4 w-full" variant="outline">
                    <Upload className="mr-2 h-4 w-4" /> Upload New Photos
                  </Button>
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
                    <h3 className="font-semibold">Premium Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Get detailed insights and personalized coaching
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Advanced photo analysis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Bio optimization</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Weekly profile reviews</span>
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
