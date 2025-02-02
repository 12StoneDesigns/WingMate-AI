"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

const tiers = [
  {
    name: "Free",
    id: "tier-free",
    href: "#",
    price: { monthly: "$0" },
    description: "Get started with essential dating assistance.",
    features: [
      "Basic conversation starters",
      "Simple date preparation tips",
      "Limited message history",
      "Community support",
    ],
    featured: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#",
    price: { monthly: "$19" },
    description: "Everything you need for successful dating.",
    features: [
      "Advanced AI conversation assistance",
      "Comprehensive date planning",
      "Unlimited message history",
      "Priority support",
      "Personality insights",
      "Custom conversation styles",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: { monthly: "$49" },
    description: "Advanced features for dating professionals.",
    features: [
      "All Pro features",
      "White-label solution",
      "API access",
      "Custom AI training",
      "Advanced analytics",
      "Dedicated account manager",
    ],
    featured: false,
  },
]

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="container py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-xl text-muted-foreground">
          Choose the perfect plan for your dating journey
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12"
      >
        {tiers.map((tier) => (
          <motion.div
            key={tier.id}
            whileHover={{ scale: 1.02 }}
            className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
              tier.featured
                ? "bg-purple-500 text-white ring-purple-500"
                : "bg-white text-black"
            } xl:p-10`}
          >
            <div className="flex items-center justify-between gap-x-4">
              <h3 className={`text-lg font-semibold leading-8 ${
                tier.featured ? "text-white" : "text-gray-900"
              }`}>
                {tier.name}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              {tier.description}
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className={`text-4xl font-bold tracking-tight ${
                tier.featured ? "text-white" : "text-gray-900"
              }`}>
                {tier.price.monthly}
              </span>
              <span className={`text-sm font-semibold leading-6 ${
                tier.featured ? "text-gray-100" : "text-gray-600"
              }`}>
                /month
              </span>
            </p>
            <Button
              variant={tier.featured ? "secondary" : "default"}
              className={`mt-6 w-full ${
                tier.featured
                  ? "bg-white text-purple-600 hover:bg-gray-50"
                  : "bg-purple-600 text-white hover:bg-purple-500"
              }`}
            >
              Get started today
            </Button>
            <ul
              role="list"
              className={`mt-8 space-y-3 text-sm leading-6 ${
                tier.featured ? "text-gray-100" : "text-gray-600"
              }`}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check
                    className={`h-6 w-5 flex-none ${
                      tier.featured ? "text-white" : "text-purple-600"
                    }`}
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
