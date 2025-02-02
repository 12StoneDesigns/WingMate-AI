import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ProfileOptimizer() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Profile Optimizer</CardTitle>
        <CardDescription>
          Get AI-powered suggestions to enhance your dating profile
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Current Bio</h3>
          <Textarea 
            placeholder="Paste your current bio here..."
            className="min-h-[150px]"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Photos</h3>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((index) => (
              <div 
                key={index}
                className="aspect-square rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center"
              >
                <Button variant="ghost">Add Photo</Button>
              </div>
            ))}
          </div>
        </div>
        <Button className="w-full">Analyze Profile</Button>
      </CardContent>
    </Card>
  );
}
