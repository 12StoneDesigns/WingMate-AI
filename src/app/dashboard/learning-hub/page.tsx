"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import {
  Award,
  Book,
  BookOpen,
  Brain,
  Crown,
  GraduationCap,
  Heart,
  Lock,
  Play,
  Plus,
  Rocket,
  Search,
  Star,
  Trophy,
  Video,
} from "lucide-react"

export default function LearningHubPage() {
  const featuredCourses = [
    {
      title: "Master Dating Psychology",
      description: "Understanding attraction and connection",
      progress: 45,
      chapters: 12,
      duration: "4 hours",
      level: "Advanced",
      rating: 4.9,
      enrolled: 1234,
      premium: true,
    },
    {
      title: "Conversation Mastery",
      description: "Expert techniques for engaging discussions",
      progress: 75,
      chapters: 8,
      duration: "3 hours",
      level: "Intermediate",
      rating: 4.8,
      enrolled: 2156,
      premium: true,
    },
    {
      title: "Body Language Secrets",
      description: "Read and project confident body language",
      progress: 30,
      chapters: 10,
      duration: "3.5 hours",
      level: "Beginner",
      rating: 4.7,
      enrolled: 1876,
      premium: false,
    },
  ]

  const learningPaths = [
    {
      title: "Dating Confidence",
      courses: 5,
      completion: 60,
      skills: ["Self-confidence", "Communication", "Body Language"],
      icon: Heart,
    },
    {
      title: "Relationship Building",
      courses: 4,
      completion: 40,
      skills: ["Emotional Intelligence", "Trust Building", "Conflict Resolution"],
      icon: Brain,
    },
    {
      title: "Social Mastery",
      courses: 6,
      completion: 25,
      skills: ["Networking", "Group Dynamics", "Social Confidence"],
      icon: Trophy,
    },
  ]

  const achievements = [
    {
      title: "Learning Pioneer",
      description: "Completed first course",
      icon: Rocket,
      achieved: true,
    },
    {
      title: "Knowledge Master",
      description: "Finished 5 courses",
      icon: GraduationCap,
      achieved: true,
    },
    {
      title: "Elite Scholar",
      description: "100% course completion",
      icon: Crown,
      achieved: false,
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Learning Hub</h2>
            <p className="text-muted-foreground">
              Master the art of dating with expert-led courses
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" />
              Find Courses
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
              <Play className="mr-2 h-4 w-4" /> Continue Learning
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <Card>
              <CardHeader>
                <CardTitle>Featured Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-4">
                  {featuredCourses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative rounded-lg border p-4 hover:shadow-md"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="rounded-lg bg-purple-100 p-3">
                          <Video className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">{course.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {course.description}
                              </p>
                            </div>
                            {course.premium && (
                              <div className="flex items-center space-x-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 text-xs text-white">
                                <Crown className="h-3 w-3" />
                                <span>Premium</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="flex items-center text-muted-foreground">
                              <BookOpen className="mr-1 h-4 w-4" />
                              {course.chapters} chapters
                            </span>
                            <span className="flex items-center text-muted-foreground">
                              <Clock className="mr-1 h-4 w-4" />
                              {course.duration}
                            </span>
                            <span className="flex items-center text-yellow-600">
                              <Star className="mr-1 h-4 w-4 fill-current" />
                              {course.rating}
                            </span>
                            <span className="flex items-center text-muted-foreground">
                              <User className="mr-1 h-4 w-4" />
                              {course.enrolled} enrolled
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Paths</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div className="grid gap-4 md:grid-cols-2">
                    {learningPaths.map((path, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative rounded-lg border p-4 hover:shadow-md"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="rounded-lg bg-purple-100 p-3">
                              <path.icon className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{path.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {path.courses} courses
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Completion</span>
                              <span>{path.completion}%</span>
                            </div>
                            <Progress value={path.completion} className="h-2" />
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {path.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-600"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
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
                <CardTitle>Learning Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`group relative rounded-lg border p-4 ${
                        achievement.achieved
                          ? "bg-gradient-to-r from-purple-50 to-blue-50"
                          : ""
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`rounded-full p-2 ${
                            achievement.achieved
                              ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                              : "bg-gray-100"
                          }`}
                        >
                          <achievement.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                        {!achievement.achieved && (
                          <Lock className="h-4 w-4 text-muted-foreground" />
                        )}
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
                    <h3 className="font-semibold">Learning Stats</h3>
                    <p className="text-sm text-muted-foreground">
                      Your progress overview
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Courses Completed</span>
                    <span className="font-medium">7/12</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Total Learning Time</span>
                    <span className="font-medium">24.5 hours</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Average Rating</span>
                    <span className="font-medium">4.8/5.0</span>
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
                    <h3 className="font-semibold">Premium Access</h3>
                    <p className="text-sm text-muted-foreground">
                      Unlock advanced courses
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Expert-led video courses</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Interactive workshops</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Personalized learning paths</span>
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
