"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowUpRight,
  Heart,
  MessageCircle,
  Star,
  Calendar,
  TrendingUp,
  Settings,
  BookOpen,
  Sparkles,
} from "lucide-react"
import { ProfileOptimizer } from "@/components/features/profile-optimizer/profile-optimizer"
import { ConversationVault } from "@/components/features/conversation-vault/conversation-vault"
import { DatePlanner } from "@/components/features/date-planner/date-planner"
import { ReflectionHub } from "@/components/features/reflection-hub/reflection-hub"
import { CrisisModeDialog } from "@/components/features/crisis-mode/crisis-mode-dialog"
import { useState } from "react"
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function DashboardPage() {
  const [activeFeature, setActiveFeature] = useState<string>("overview")
  const [isCrisisModeOpen, setIsCrisisModeOpen] = useState(false)

  const stats = [
    {
      title: "Dating Score",
      value: "8.5",
      change: "+12%",
      icon: Star,
      description: "Your overall dating success metric",
    },
    {
      title: "Active Conversations",
      value: "3",
      change: "+2",
      icon: MessageCircle,
      description: "Ongoing chats with potential matches",
    },
    {
      title: "Upcoming Dates",
      value: "2",
      change: "Next: Friday",
      icon: Calendar,
      description: "Scheduled dates in your calendar",
    },
    {
      title: "Relationship Goals",
      value: "4/5",
      change: "On Track",
      icon: TrendingUp,
      description: "Progress towards your dating objectives",
    },
  ]

  const features = [
    { 
      id: "profile", 
      title: "Profile Optimizer", 
      icon: Settings, 
      component: ProfileOptimizer,
      description: "Get AI-powered suggestions to enhance your dating profile",
    },
    { 
      id: "conversations", 
      title: "Conversation Vault", 
      icon: MessageCircle, 
      component: ConversationVault,
      description: "Access conversation starters and response suggestions",
    },
    { 
      id: "dates", 
      title: "Date Planner", 
      icon: Calendar, 
      component: DatePlanner,
      description: "Plan perfect dates with personalized recommendations",
    },
    { 
      id: "reflection", 
      title: "Reflection Hub", 
      icon: BookOpen, 
      component: ReflectionHub,
      description: "Analyze your dating experiences and track progress",
    },
  ]

  return (
    <DashboardShell>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    onClick={() => setIsCrisisModeOpen(true)}
                    variant="default"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Crisis Mode <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Need immediate dating advice? Click for instant help!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeFeature === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <TooltipProvider key={stat.title}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card className="relative overflow-hidden cursor-help">
                            <div className="absolute right-2 top-2">
                              <stat.icon className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <div className="p-6">
                              <div className="text-2xl font-bold">{stat.value}</div>
                              <div className="text-xs text-muted-foreground">{stat.title}</div>
                              <div className="mt-4 flex items-center text-sm text-green-600">
                                <ArrowUpRight className="mr-1 h-4 w-4" />
                                {stat.change}
                              </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600" />
                          </Card>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{stat.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActiveFeature(feature.id)}
                    className="cursor-pointer"
                  >
                    <Card className="relative overflow-hidden hover:border-primary/50 transition-colors">
                      <div className="p-6">
                        <div className="flex items-center space-x-2">
                          <feature.icon className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold">{feature.title}</h3>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600" />
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeFeature !== "overview" && (
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mt-4">
                <div className="mb-4">
                  <Button
                    variant="ghost"
                    onClick={() => setActiveFeature("overview")}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ← Back to Overview
                  </Button>
                </div>
                {features.map((feature) => {
                  if (feature.id === activeFeature) {
                    const FeatureComponent = feature.component
                    return <FeatureComponent key={feature.id} />
                  }
                  return null
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <CrisisModeDialog 
          open={isCrisisModeOpen}
          onOpenChange={setIsCrisisModeOpen}
        />
      </div>
    </DashboardShell>
  )
}
