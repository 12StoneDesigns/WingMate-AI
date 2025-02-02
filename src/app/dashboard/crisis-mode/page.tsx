"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Crown,
  Heart,
  HelpCircle,
  MessageCircle,
  Phone,
  Send,
  Shield,
  Siren,
  Sparkles,
  ThumbsUp,
  Timer,
  Zap,
} from "lucide-react"
import { useState } from "react"

export default function CrisisModePage() {
  const [isEmergencyMode, setIsEmergencyMode] = useState(false)

  const quickResponses = [
    {
      title: "Date Safety",
      description: "Immediate assistance for uncomfortable situations",
      icon: Shield,
    },
    {
      title: "Conversation Help",
      description: "Real-time messaging support",
      icon: MessageCircle,
    },
    {
      title: "Emotional Support",
      description: "Instant connection with AI therapist",
      icon: Heart,
    },
  ]

  const resources = [
    {
      title: "Safety Guidelines",
      description: "Essential tips for safe dating",
      icon: BookOpen,
    },
    {
      title: "Emergency Contacts",
      description: "Quick access to trusted contacts",
      icon: Phone,
    },
    {
      title: "Crisis Hotlines",
      description: "24/7 professional support",
      icon: HelpCircle,
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Crisis Mode</h2>
            <p className="text-muted-foreground">
              Instant support when you need it most
            </p>
          </div>
          <Button
            onClick={() => setIsEmergencyMode(true)}
            className="bg-red-600 hover:bg-red-700"
          >
            <Siren className="mr-2 h-4 w-4" />
            Activate Emergency Mode
          </Button>
        </div>

        <AnimatePresence>
          {isEmergencyMode && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="border-red-600">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-red-600">
                    <AlertTriangle className="h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Emergency Mode Activated</h3>
                      <p className="text-sm">Help is on the way. Stay calm.</p>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <Button variant="outline" className="justify-start space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Call Emergency</span>
                    </Button>
                    <Button variant="outline" className="justify-start space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>Share Location</span>
                    </Button>
                    <Button variant="outline" className="justify-start space-x-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>Message Contact</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="col-span-12 space-y-6 md:col-span-8">
            <Card>
              <CardHeader>
                <CardTitle>AI Crisis Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col space-y-4">
                    <div className="self-start rounded-lg bg-muted p-4">
                      <p className="text-sm">How can I help you today?</p>
                    </div>
                    <div className="self-end rounded-lg bg-primary p-4 text-primary-foreground">
                      <p className="text-sm">I need help with a difficult situation...</p>
                    </div>
                    <div className="self-start rounded-lg bg-muted p-4">
                      <p className="text-sm">
                        I'm here to support you. Can you tell me more about what's
                        happening?
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Input placeholder="Type your message..." />
                    <Button>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              {quickResponses.map((response, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group relative overflow-hidden">
                    <CardContent className="p-6">
                      <response.icon className="h-8 w-8 text-purple-600" />
                      <h3 className="mt-4 font-semibold">{response.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {response.description}
                      </p>
                      <Button
                        className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600"
                        size="sm"
                      >
                        Get Help
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="col-span-12 space-y-6 md:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Safety Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-4">
                  {resources.map((resource, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex items-center space-x-4 rounded-lg border p-4 hover:shadow-md"
                    >
                      <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
                        <resource.icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{resource.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {resource.description}
                        </p>
                      </div>
                      <Button size="sm" variant="ghost" className="ml-auto">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
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
                    <h3 className="font-semibold">Premium Protection</h3>
                    <p className="text-sm text-muted-foreground">
                      Enhanced safety features
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>24/7 Priority Support</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Live Location Sharing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Emergency Contact Network</span>
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
