"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* Background glow removed - handled by parent wrapper */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          {/* Character */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image
              src="/assets/ai-assistant-male.png"
              alt="AI Assistant"
              fill
              className="object-contain animate-float"
            />
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            <span className="text-on-surface">Ready to hire your</span>
            <br />
            <span className="text-tertiary">first AI employee?</span>
          </h2>

          <p className="text-xl text-on-surface-muted leading-relaxed max-w-2xl mx-auto">
            Join thousands of businesses already using Sintra X to automate their
            workflows and scale their operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="rounded-full bg-secondary-container hover:bg-secondary-container/90 text-surface font-semibold px-10 py-7 text-lg group"
            >
              Get started now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 text-sm text-on-surface-muted">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              14-day money-back guarantee
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
