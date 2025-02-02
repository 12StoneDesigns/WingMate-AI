import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles } from "lucide-react"

interface CrisisModeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CrisisModeDialog({ open, onOpenChange }: CrisisModeDialogProps) {
  const [situation, setSituation] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [response, setResponse] = React.useState("")

  const handleSubmit = async () => {
    setIsLoading(true)
    // TODO: Integrate with AI backend
    // Simulating API call
    setTimeout(() => {
      setResponse(
        "Take a deep breath. Remember that authenticity is key. Here are some immediate suggestions:\n\n" +
        "1. Stay calm and be yourself\n" +
        "2. Listen actively and show genuine interest\n" +
        "3. Ask open-ended questions\n" +
        "4. Share your own experiences naturally\n\n" +
        "Would you like more specific advice for your situation?"
      )
      setIsLoading(false)
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-500" />
            Crisis Mode Activated
          </DialogTitle>
          <DialogDescription>
            Need immediate dating advice? Describe your situation and get instant AI guidance.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <Textarea
            placeholder="What's the situation? (e.g., 'On a date right now and conversation is dying...')"
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            className="min-h-[100px]"
          />
          <Button 
            onClick={handleSubmit} 
            className="w-full"
            disabled={!situation || isLoading}
          >
            {isLoading ? "Analyzing..." : "Get Instant Advice"}
          </Button>
          {response && (
            <div className="mt-4 rounded-lg bg-muted p-4">
              <p className="whitespace-pre-wrap text-sm">{response}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
