"use client"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import { ConversationVault } from "@/components/features/conversation-vault/conversation-vault"

export default function ConversationsPage() {
  return (
    <DashboardShell>
      <ConversationVault />
    </DashboardShell>
  )
}
