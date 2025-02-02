"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { motion } from "framer-motion"
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Plus,
  User,
  Heart,
  ThumbsUp,
  MessageCircle,
} from "lucide-react"
import { useState } from "react"

export default function PlannerPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const upcomingDates = [
    {
      id: 1,
      name: "Coffee Date with Sarah",
      date: "2024-12-18",
      time: "15:00",
      location: "Starbucks Downtown",
      status: "confirmed",
    },
    {
      id: 2,
      name: "Dinner with Emily",
      date: "2024-12-20",
      time: "19:00",
      location: "Italian Restaurant",
      status: "pending",
    },
  ]

  const dateIdeas = [
    {
      title: "Art Gallery Exhibition",
      description: "Explore contemporary art together",
      category: "Cultural",
      rating: 4.8,
    },
    {
      title: "Cooking Class",
      description: "Learn to make pasta from scratch",
      category: "Activity",
      rating: 4.9,
    },
    {
      title: "Sunset Picnic",
      description: "Romantic evening at the park",
      category: "Outdoor",
      rating: 4.7,
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Date Planner</h2>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            <Plus className="mr-2 h-4 w-4" /> Plan New Date
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-7">
          <Card className="col-span-7 md:col-span-3">
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Upcoming Dates</h3>
                  {upcomingDates.map((date) => (
                    <motion.div
                      key={date.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{date.name}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date.date}
                          <Clock className="ml-4 mr-2 h-4 w-4" />
                          {date.time}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" />
                          {date.location}
                        </div>
                      </div>
                      <Button
                        variant={date.status === "confirmed" ? "default" : "outline"}
                        size="sm"
                      >
                        {date.status === "confirmed" ? "Confirmed" : "Pending"}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </CardContent>
          </Card>

          <div className="col-span-7 space-y-6 md:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Date Ideas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dateIdeas.map((idea, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-lg border p-4 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h4 className="font-semibold">{idea.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {idea.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="flex items-center text-purple-600">
                              <Heart className="mr-1 h-4 w-4" />
                              {idea.category}
                            </span>
                            <span className="flex items-center">
                              <ThumbsUp className="mr-1 h-4 w-4" />
                              {idea.rating}
                            </span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Save Idea
                        </Button>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Date Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Get personalized date suggestions and advice based on your preferences
                    and past experiences.
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Get Suggestions
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <User className="mr-2 h-4 w-4" />
                      Date Coaching
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
