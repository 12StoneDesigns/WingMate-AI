"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Heart,
  Menu,
  MessageCircle,
  Settings,
  User,
  ChevronRight,
  LogOut,
  BarChart,
  Calendar,
  Crown,
  BookOpen,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  pro?: boolean
}

const navItems: NavItem[] = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: BarChart,
  },
  {
    title: "Profile Optimizer",
    href: "/dashboard/profile",
    icon: Settings,
  },
  {
    title: "Conversation Vault",
    href: "/dashboard/conversations",
    icon: MessageCircle,
    pro: true,
  },
  {
    title: "Date Planner",
    href: "/dashboard/planner",
    icon: Calendar,
    pro: true,
  },
  {
    title: "Reflection Hub",
    href: "/dashboard/reflection",
    icon: BookOpen,
    pro: true,
  },
]

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center gap-x-4 border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-lg">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] pr-0">
            <MobileNav items={navItems} setIsOpen={setIsOpen} />
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-purple-600" />
          <span className="font-bold">Wingmate AI</span>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button
              variant="outline"
              className="hidden md:inline-flex"
              onClick={() => {
                // TODO: Implement crisis mode
              }}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Crisis Mode
            </Button>
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </header>
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <ScrollArea className="h-full py-6 pl-4 pr-6">
            <Nav items={navItems} />
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex-1 space-y-4 p-8 pt-6"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

interface NavProps {
  items: NavItem[]
  setIsOpen?: (open: boolean) => void
}

function Nav({ items, setIsOpen }: NavProps) {
  const pathname = usePathname()

  return (
    <div className="flex w-full flex-col gap-2">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          onClick={() => {
            if (setIsOpen) setIsOpen(false)
          }}
        >
          <span
            className={cn(
              "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground",
              pathname === item.href
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground",
              item.pro && "relative"
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            <span>{item.title}</span>
            {item.pro && (
              <span className="ml-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-1.5 py-0.5 text-xs text-white">
                PRO
              </span>
            )}
            <ChevronRight className="ml-auto h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
          </span>
        </Link>
      ))}
    </div>
  )
}

function MobileNav({ items, setIsOpen }: NavProps) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <Nav items={items} setIsOpen={setIsOpen} />
    </div>
  )
}
