"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-12 lg:py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] bg-surface-container-low overflow-hidden p-8 lg:p-16 min-h-[600px] flex items-center">
          {/* Background - Earth Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/earth.png"
              alt="Earth from space"
              fill
              className="object-cover object-right opacity-60"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="text-on-surface">Your AI team,</span>
                  <br />
                  <span className="text-on-surface-muted">that never sleeps.</span>
                </h1>

                <p className="text-lg text-on-surface-muted max-w-lg leading-relaxed">
                  They don&apos;t get tired. They don&apos;t call in sick. They don&apos;t socialise. Meet Sintra
                  X - 12 highly trained AI teammates, perfect for tasks you keep meaning to
                  delegate. P.S. They don&apos;t drink coffee either.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    size="lg"
                    className="rounded-full bg-secondary-container hover:bg-secondary-container/90 text-surface font-semibold px-8 py-6 text-base group"
                  >
                    Buy now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle className="h-4 w-4" />
                  <span>Zero risk 14-day money-back guarantee</span>
                </div>

                {/* Press Logos */}
                <div className="pt-8 border-t border-outline-variant/10">
                  <p className="text-xs text-on-surface-muted mb-4 uppercase tracking-wider">As seen on</p>
                  <div className="flex items-center gap-8 flex-wrap">
                    <span className="text-xl font-serif font-bold text-on-surface-variant">Forbes</span>
                    <span className="text-xl font-bold tracking-wider text-on-surface-variant">FORTUNE</span>
                    <span className="text-lg font-bold text-on-surface-variant">
                      <span className="block text-xs leading-none">BUSINESS</span>
                      <span className="block text-sm leading-none">INSIDER</span>
                    </span>
                    <span className="text-lg font-semibold text-on-surface-variant flex items-center gap-1">
                      <span className="text-xl">⬡</span> cybernews
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - Floating Astronauts */}
              <div className="relative h-[400px] lg:h-[500px] hidden lg:block">
                <Image
                  src="/assets/astronauts.png"
                  alt="AI Team Astronauts"
                  fill
                  className="object-contain object-center animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

