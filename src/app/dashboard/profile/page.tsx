"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { ProfileOptimizer } from "@/components/features/profile-optimizer/profile-optimizer"

export default function ProfilePage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            <Crown className="mr-2 h-4 w-4" /> Upgrade to Premium
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-7">
          <Card className="col-span-7 md:col-span-3">
            <CardHeader>
              <CardTitle>Profile Details</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="relative mx-auto w-32">
                  <div className="relative aspect-square overflow-hidden rounded-full">
                    <Image
                      src="/placeholder-avatar.jpg"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full bg-purple-600"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="location" className="pl-8" placeholder="Your location" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      className="min-h-[100px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>

          <div className="col-span-7 space-y-6 md:col-span-4">
            <Tabs defaultValue="preferences" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="preferences" className="w-full">
                  <Heart className="mr-2 h-4 w-4" /> Dating Preferences
                </TabsTrigger>
                <TabsTrigger value="personality" className="w-full">
                  <User className="mr-2 h-4 w-4" /> Personality
                </TabsTrigger>
                <TabsTrigger value="settings" className="w-full">
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="preferences" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Dating Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label>Age Range</Label>
                        <div className="flex items-center space-x-4">
                          <Input type="number" placeholder="Min" className="w-24" />
                          <span>to</span>
                          <Input type="number" placeholder="Max" className="w-24" />
                        </div>
                      </div>
                      
                      <div>
                        <Label>Looking For</Label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {["Relationship", "Friendship", "Casual"].map((item) => (
                            <Button
                              key={item}
                              variant="outline"
                              className="rounded-full"
                            >
                              {item}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label>Interests</Label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {["Travel", "Music", "Sports", "Art", "Food", "Tech"].map(
                            (interest) => (
                              <Button
                                key={interest}
                                variant="outline"
                                className="rounded-full"
                              >
                                {interest}
                              </Button>
                            )
                          )}
                          <Button
                            variant="outline"
                            className="rounded-full bg-purple-100 text-purple-600"
                          >
                            <Edit2 className="mr-2 h-4 w-4" /> Add More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Profile Strength</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Progress value={75} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        Your profile is 75% complete. Add more details to improve your
                        matches!
                      </p>
                      <div className="grid gap-2">
                        {[
                          { text: "Add profile photo", done: true },
                          { text: "Complete bio", done: true },
                          { text: "Add interests", done: true },
                          { text: "Verify profile", done: false },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <div
                              className={`h-4 w-4 rounded-full ${
                                item.done
                                  ? "bg-green-500"
                                  : "border border-muted-foreground"
                              }`}
                            />
                            <span>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="personality">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold">Personality Assessment</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete our personality assessment to get better matches!
                    </p>
                    <Button className="mt-4">
                      Start Assessment
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold">Account Settings</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-muted-foreground">
                            Receive updates about matches and messages
                          </p>
                        </div>
                        <Button variant="outline">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Privacy Settings</p>
                          <p className="text-sm text-muted-foreground">
                            Control who can see your profile
                          </p>
                        </div>
                        <Button variant="outline">Configure</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
