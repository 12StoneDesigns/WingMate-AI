"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { ReflectionHub } from "@/components/features/reflection-hub/reflection-hub"

export default function ReflectionPage() {
  return (
    <DashboardShell>
      <ReflectionHub />
    </DashboardShell>
  )
}
