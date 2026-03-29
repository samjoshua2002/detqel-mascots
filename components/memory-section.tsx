"use client"

import Image from "next/image"
import { ArrowRight, Paperclip, Globe, FileText, MessageSquare, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MemoryItemProps {
  icon: React.ReactNode
  iconBg: string
  title: string
  subtitle: string
  isHighlighted?: boolean
}

function MemoryItem({ icon, iconBg, title, subtitle, isHighlighted }: MemoryItemProps) {
  return (
    <div
      className={`flex items-center gap-4 rounded-3xl px-6 py-5 ${
        isHighlighted
          ? "bg-surface-container-highest/90 shadow-lg"
          : "bg-surface-container-high/50"
      } backdrop-blur-sm ghost-border`}
    >
      <div className={`flex h-14 w-14 items-center justify-center rounded-full ${iconBg}`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-on-surface font-semibold text-lg">{title}</p>
        <p className="text-on-surface-muted text-sm">{subtitle}</p>
      </div>
    </div>
  )
}

export function MemorySection() {
  return (
    <section className="relative py-24 bg-surface-container-lowest overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Memory Items Stack */}
          <div className="relative">
            <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
              <MemoryItem
                icon={<Paperclip className="h-6 w-6 text-tertiary" />}
                iconBg="bg-surface-container-high"
                title="walker_service.docx (file item)"
                subtitle="Walker's client service info..."
              />
              <MemoryItem
                icon={<Globe className="h-6 w-6 text-tertiary" />}
                iconBg="bg-surface-container-high"
                title="walkers.com (Webpage item)"
                subtitle="Walkers website home page..."
              />
              <MemoryItem
                icon={<Paperclip className="h-6 w-6 text-tertiary" />}
                iconBg="bg-surface-container-high"
                title="company_pricing.pdf (file item)"
                subtitle="To revolutionize the travel experience."
              />
              <MemoryItem
                icon={
                  <div className="relative">
                    <MessageSquare className="h-6 w-6 text-tertiary" />
                    <Lock className="h-3 w-3 text-on-surface absolute -bottom-1 -right-1" />
                  </div>
                }
                iconBg="bg-surface"
                title="Companies values (Memory item)"
                subtitle="Safety, Velocity, Speed, Quality."
                isHighlighted
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-on-surface">Give your Brain</span>{" "}
              <span className="text-on-surface-muted">a knowledge base to work from.</span>
            </h2>

            <p className="text-lg text-on-surface-muted leading-relaxed">
              Upload files, add webpages, and share memories with your AI team. 
              They&apos;ll use this knowledge to complete tasks more accurately and 
              consistently, maintaining your brand voice and company standards.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="rounded-full bg-on-surface hover:bg-on-surface/90 text-surface font-semibold px-8 py-6 text-base group"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
