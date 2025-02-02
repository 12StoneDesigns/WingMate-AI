import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export function ReflectionHub() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Reflection Hub</CardTitle>
        <CardDescription>
          Log and analyze your dating experiences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Date Summary</h3>
          <Input type="date" className="w-full" />
          <Textarea 
            placeholder="How did the date go? Share your thoughts and feelings..."
            className="min-h-[150px]"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Key Moments</h3>
          <Textarea 
            placeholder="What were the highlights or challenging moments?"
            className="min-h-[100px]"
          />
        </div>
        <Button className="w-full">Get AI Analysis</Button>
        <div className="mt-4 p-4 rounded-lg bg-muted">
          <h4 className="font-medium mb-2">AI Insights</h4>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Strengths</p>
              <p className="text-sm text-muted-foreground">Analysis of what went well...</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Areas for Growth</p>
              <p className="text-sm text-muted-foreground">Suggestions for improvement...</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Next Steps</p>
              <p className="text-sm text-muted-foreground">Recommended actions...</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
