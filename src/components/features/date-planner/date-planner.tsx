import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function DatePlanner() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Date Planner</CardTitle>
        <CardDescription>
          Get personalized date ideas and detailed itineraries
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Location</h3>
            <Input placeholder="Enter your city" />
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Budget</h3>
            <Input placeholder="Enter your budget" type="number" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Preferences</h3>
          <Textarea 
            placeholder="Any specific interests, dietary restrictions, or activities you'd prefer?"
            className="min-h-[100px]"
          />
        </div>
        <Button className="w-full">Generate Date Plan</Button>
        <div className="mt-4 p-4 rounded-lg bg-muted">
          <h4 className="font-medium mb-2">Your Personalized Date Plan</h4>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Itinerary</p>
              <p className="text-sm text-muted-foreground">Your custom date plan will appear here...</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Estimated Cost</p>
              <p className="text-sm text-muted-foreground">Cost breakdown will appear here...</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
