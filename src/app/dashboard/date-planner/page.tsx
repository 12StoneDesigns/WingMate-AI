"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  Clock,
  Coffee,
  Crown,
  Flame,
  Heart,
  MapPin,
  Plus,
  Settings,
  Sparkles,
  Star,
  Sun,
  Umbrella,
  Users,
  Utensils,
  Wine,
  Zap,
} from "lucide-react"

export default function DatePlannerPage() {
  const upcomingDates = [
    {
      title: "Sunset Beach Picnic",
      with: "Sarah",
      date: "2024-12-18",
      time: "6:30 PM",
      location: "Crystal Beach",
      type: "Romantic",
      weather: "Clear skies",
      preparation: 95,
      premium: true,
    },
    {
      title: "Art Gallery Exhibition",
      with: "Emma",
      date: "2024-12-20",
      time: "7:00 PM",
      location: "Modern Art Museum",
      type: "Cultural",
      weather: "Indoor",
      preparation: 85,
      premium: false,
    },
  ]

  const suggestions = [
    {
      category: "Romantic",
      ideas: [
        {
          title: "Rooftop Stargazing",
          description: "Private telescope viewing with wine tasting",
          rating: 4.9,
          price: "$$$",
          mood: "Intimate",
          success: 98,
          weather: "Clear night",
        },
        {
          title: "Cooking Class",
          description: "Learn to make Italian cuisine together",
          rating: 4.8,
          price: "$$",
          mood: "Fun",
          success: 95,
          weather: "Any",
        },
      ],
    },
    {
      category: "Adventure",
      ideas: [
        {
          title: "Rock Climbing",
          description: "Indoor climbing with professional instruction",
          rating: 4.7,
          price: "$$",
          mood: "Exciting",
          success: 92,
          weather: "Any",
        },
      ],
    },
  ]

  const dateChecklist = [
    {
      category: "Pre-Date",
      items: [
        { task: "Confirm reservation", completed: true },
        { task: "Plan outfit", completed: true },
        { task: "Prepare conversation topics", completed: false },
      ],
    },
    {
      category: "During Date",
      items: [
        { task: "Active listening reminders", completed: false },
        { task: "Body language awareness", completed: false },
        { task: "Conversation flow", completed: false },
      ],
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Date Planner</h2>
            <p className="text-muted-foreground">
              Plan perfect dates with AI-powered suggestions
            </p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            <Plus className="mr-2 h-4 w-4" /> Plan New Date
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-4">
                  {upcomingDates.map((date, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative rounded-lg border p-6 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold">{date.title}</h3>
                              {date.premium && (
                                <div className="flex items-center space-x-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-2 py-1 text-xs text-white">
                                  <Crown className="h-3 w-3" />
                                  <span>Premium</span>
                                </div>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              with {date.with}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center text-muted-foreground">
                              <Calendar className="mr-1 h-4 w-4" />
                              {date.date}
                            </span>
                            <span className="flex items-center text-muted-foreground">
                              <Clock className="mr-1 h-4 w-4" />
                              {date.time}
                            </span>
                            <span className="flex items-center text-muted-foreground">
                              <MapPin className="mr-1 h-4 w-4" />
                              {date.location}
                            </span>
                            <span className="flex items-center text-muted-foreground">
                              <Sun className="mr-1 h-4 w-4" />
                              {date.weather}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span
                              className={`rounded-full px-2 py-1 text-xs ${
                                date.type === "Romantic"
                                  ? "bg-red-100 text-red-600"
                                  : "bg-purple-100 text-purple-600"
                              }`}
                            >
                              {date.type}
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Preparation Progress</span>
                              <span>{date.preparation}%</span>
                            </div>
                            <Progress value={date.preparation} className="h-2" />
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-purple-600 to-blue-600"
                          >
                            View Details
                          </Button>
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
                  <CardTitle>AI Date Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="romantic" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="romantic" className="space-x-2">
                        <Heart className="h-4 w-4" />
                        <span>Romantic</span>
                      </TabsTrigger>
                      <TabsTrigger value="adventure" className="space-x-2">
                        <Zap className="h-4 w-4" />
                        <span>Adventure</span>
                      </TabsTrigger>
                      <TabsTrigger value="cultural" className="space-x-2">
                        <Users className="h-4 w-4" />
                        <span>Cultural</span>
                      </TabsTrigger>
                    </TabsList>
                    <div className="mt-4">
                      <AnimatePresence mode="wait">
                        {suggestions.map(
                          (category) =>
                            category.category.toLowerCase() === "romantic" && (
                              <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-4"
                              >
                                {category.ideas.map((idea, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative rounded-lg border p-4 hover:shadow-md"
                                  >
                                    <div className="flex items-start justify-between">
                                      <div className="space-y-2">
                                        <div className="space-y-1">
                                          <h4 className="font-semibold">
                                            {idea.title}
                                          </h4>
                                          <p className="text-sm text-muted-foreground">
                                            {idea.description}
                                          </p>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm">
                                          <span className="flex items-center text-yellow-600">
                                            <Star className="mr-1 h-4 w-4 fill-current" />
                                            {idea.rating}
                                          </span>
                                          <span className="flex items-center text-green-600">
                                            {idea.price}
                                          </span>
                                          <span className="flex items-center text-purple-600">
                                            <Flame className="mr-1 h-4 w-4" />
                                            {idea.mood}
                                          </span>
                                          <span className="flex items-center text-blue-600">
                                            <Sparkles className="mr-1 h-4 w-4" />
                                            {idea.success}% success rate
                                          </span>
                                        </div>
                                      </div>
                                      <Button
                                        size="sm"
                                        className="bg-gradient-to-r from-purple-600 to-blue-600"
                                      >
                                        Plan This
                                      </Button>
                                    </div>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )
                        )}
                      </AnimatePresence>
                    </div>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="col-span-12 space-y-6 md:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Date Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-6">
                  {dateChecklist.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="mb-2 font-medium">{section.category}</h4>
                      <div className="space-y-2">
                        {section.items.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <div
                              className={`flex h-6 w-6 items-center justify-center rounded-full ${
                                item.completed
                                  ? "bg-green-100 text-green-600"
                                  : "bg-purple-100 text-purple-600"
                              }`}
                            >
                              {item.completed ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Clock className="h-4 w-4" />
                              )}
                            </div>
                            <span
                              className={
                                item.completed ? "text-muted-foreground" : ""
                              }
                            >
                              {item.task}
                            </span>
                          </motion.div>
                        ))}
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
                    <Wine className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Quick Ideas</h3>
                    <p className="text-sm text-muted-foreground">
                      Popular date activities
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">
                    <Coffee className="mr-2 h-4 w-4" />
                    Coffee
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Utensils className="mr-2 h-4 w-4" />
                    Dinner
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Umbrella className="mr-2 h-4 w-4" />
                    Beach
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Concert
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
                    <h3 className="font-semibold">Premium Features</h3>
                    <p className="text-sm text-muted-foreground">
                      Enhanced date planning
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>AI date recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Weather-based planning</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Success rate predictions</span>
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
