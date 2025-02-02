import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export function ConversationVault() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Conversation Vault</CardTitle>
        <CardDescription>
          Get personalized conversation starters and response suggestions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Match Details</h3>
          <Input 
            placeholder="What interests or hobbies did you notice in their profile?"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Context</h3>
          <Textarea 
            placeholder="Paste the conversation context or describe the situation..."
            className="min-h-[100px]"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline">Generate Icebreaker</Button>
          <Button>Get Response Suggestions</Button>
        </div>
        <div className="mt-4 p-4 rounded-lg bg-muted">
          <h4 className="font-medium mb-2">AI Suggestions</h4>
          <p className="text-muted-foreground">Your suggestions will appear here...</p>
        </div>
      </CardContent>
    </Card>
  );
}
