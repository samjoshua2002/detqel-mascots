"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ApprovalCardProps {
  avatar: string
  title: string
  delay?: number
}

function ApprovalCard({ avatar, title, delay = 0 }: ApprovalCardProps) {
  return (
    <div
      className="flex items-center gap-4 rounded-3xl bg-surface-container-highest/80 backdrop-blur-sm px-5 py-4 shadow-lg ghost-border animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-12 w-12 flex-shrink-0 rounded-full overflow-hidden">
        <Image
          src={avatar}
          alt="AI Assistant"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-on-surface font-medium truncate">{title}</p>
        <div className="flex items-center gap-1.5 text-warning">
          <span className="inline-flex items-center gap-1 text-sm font-medium">
            <span className="inline-block h-4 w-4 rounded border-2 border-dashed border-warning" />
            Needs action
          </span>
        </div>
      </div>
      <button className="rounded-full bg-surface-container-high/80 px-5 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-container/80 transition-colors">
        Approve
      </button>
    </div>
  )
}

export function ApprovalSection() {
  return (
    <section className="relative py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-surface-container-low p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-on-surface">Stay in control</span>{" "}
                <span className="text-on-surface-muted">with approval workflows.</span>
              </h2>

              <p className="text-lg text-on-surface-muted leading-relaxed">
                Your AI team works autonomously, but you always have the final say.
                Review and approve important tasks before they go live. Perfect for
                maintaining quality and brand consistency.
              </p>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="rounded-full bg-on-surface hover:bg-on-surface/90 text-surface font-semibold px-8 py-6 text-base group"
                >
                  See how it works
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Right - Approval Cards */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <ApprovalCard
                avatar="/assets/ai-assistant-male.png"
                title="Review your new website"
                delay={0}
              />
              <ApprovalCard
                avatar="/assets/ai-assistant-male.png"
                title="New business idea"
                delay={150}
              />
              <ApprovalCard
                avatar="/assets/ai-assistant-female.png"
                title="New post"
                delay={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
