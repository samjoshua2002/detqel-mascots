"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TaskCardsStack } from "@/components/task-cards"

export function FeaturesSection() {
  return (
    <section className="relative py-24 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Feature 1 - AI Assistant Team */}
        <div className="rounded-3xl bg-surface-container-low p-6 md:p-12 lg:p-16 mb-12 overflow-hidden border border-white/5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-on-surface">AI assistant team,</span>{" "}
                <span className="text-on-surface-muted">that complete tasks for you.</span>
              </h2>

              <p className="text-lg text-on-surface-muted leading-relaxed max-w-lg">
                From inbox to support, Sintra X AI team runs essential workflows
                across your business. Think of it as extra hands for your business -
                only faster and always on time.
              </p>

              {/* Task Cards */}
              <div className="pt-4">
                <TaskCardsStack />
              </div>
            </div>

            {/* Right - Character Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <Image
                src="/assets/ai-assistant-female.png"
                alt="AI Assistant Character"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="w-full max-w-xl rounded-full bg-secondary-container hover:bg-secondary-container/90 text-surface font-semibold py-6 text-base group"
            >
              Get Sintra X
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
