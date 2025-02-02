"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import {
  Bell,
  Crown,
  Eye,
  Globe,
  Key,
  Lock,
  LogOut,
  Moon,
  Settings,
  Shield,
  Smartphone,
  Sun,
  User,
  UserCog,
  Wallet,
  Zap,
} from "lucide-react"

export default function SettingsPage() {
  const subscriptionFeatures = [
    {
      title: "AI Dating Coach",
      description: "24/7 personalized dating advice",
      included: true,
    },
    {
      title: "Advanced Analytics",
      description: "Deep insights into your dating journey",
      included: true,
    },
    {
      title: "Priority Support",
      description: "Get help when you need it most",
      included: true,
    },
  ]

  const privacySettings = [
    {
      category: "Profile Visibility",
      settings: [
        {
          name: "Show Online Status",
          description: "Let others see when you're active",
          enabled: true,
        },
        {
          name: "Profile Discovery",
          description: "Allow others to find your profile",
          enabled: true,
        },
      ],
    },
    {
      category: "Data Protection",
      settings: [
        {
          name: "Two-Factor Auth",
          description: "Extra security for your account",
          enabled: true,
        },
        {
          name: "Data Encryption",
          description: "End-to-end encryption for messages",
          enabled: true,
        },
      ],
    },
  ]

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account preferences and security
          </p>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general" className="space-x-2">
              <Settings className="h-4 w-4" />
              <span>General</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="space-x-2">
              <Shield className="h-4 w-4" />
              <span>Privacy</span>
            </TabsTrigger>
            <TabsTrigger value="subscription" className="space-x-2">
              <Crown className="h-4 w-4" />
              <span>Subscription</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="space-x-2">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-20 w-20">
                        <div className="h-full w-full rounded-full bg-purple-100">
                          <User className="h-full w-full p-4 text-purple-600" />
                        </div>
                        <Button
                          size="sm"
                          className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div>
                        <h4 className="font-semibold">Profile Photo</h4>
                        <p className="text-sm text-muted-foreground">
                          Update your profile picture
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label>Display Name</Label>
                        <Input placeholder="Your name" />
                      </div>
                      <div className="grid gap-2">
                        <Label>Email</Label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                      <div className="grid gap-2">
                        <Label>Bio</Label>
                        <Textarea placeholder="Tell us about yourself" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Theme</Label>
                      <p className="text-sm text-muted-foreground">
                        Choose your preferred theme
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Sun className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-zinc-900 text-white"
                      >
                        <Moon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Language</Label>
                      <p className="text-sm text-muted-foreground">
                        Select your language
                      </p>
                    </div>
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="English" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="privacy">
            <div className="grid gap-6">
              {privacySettings.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {section.settings.map((setting, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between space-x-4"
                      >
                        <div className="space-y-0.5">
                          <Label>{setting.name}</Label>
                          <p className="text-sm text-muted-foreground">
                            {setting.description}
                          </p>
                        </div>
                        <Switch checked={setting.enabled} />
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              ))}

              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label>Current Password</Label>
                      <Input type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label>New Password</Label>
                      <Input type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label>Confirm Password</Label>
                      <Input type="password" />
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                      Update Password
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="subscription">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Premium Subscription</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg border bg-gradient-to-r from-purple-50 to-blue-50 p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold">Premium Plan</h3>
                        <p className="text-sm text-muted-foreground">
                          Unlock all premium features
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">$19.99</div>
                        <div className="text-sm text-muted-foreground">
                          per month
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      {subscriptionFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="rounded-full bg-green-100 p-1">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium">{feature.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {feature.description}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <Button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600">
                      Upgrade to Premium
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 rounded-lg border p-4">
                    <div className="rounded-full bg-purple-100 p-2">
                      <CreditCard className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">•••• •••• •••• 4242</div>
                      <div className="text-sm text-muted-foreground">
                        Expires 12/24
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications on your device
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Get updates in your inbox
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Marketing Emails</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive special offers and updates
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            Save Changes
          </Button>
        </div>
      </div>
    </DashboardShell>
  )
}
