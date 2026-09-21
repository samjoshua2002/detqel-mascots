"use client"

import { useState } from "react"
import { Sparkles, Compass, Moon, Star, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DownloadModal } from "@/components/download-modal"

export function ApprovalSection() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)

  const todayStr = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  })

  return (
    <section id="prophecy" className="relative py-20 sm:py-28 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-surface-container-low via-surface-container-lowest to-surface-container-low p-6 sm:p-10 lg:p-16 overflow-hidden border border-white/10 shadow-2xl relative">
          
          {/* Celestial Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left - Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary text-xs font-semibold uppercase tracking-wider">
                <Compass size={12} />
                24-Hour Astro-Oracle Engine
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white tracking-tight">
                Daily Character Prophecy. <br />
                <span className="text-on-surface-muted">Your destiny, told by your companion.</span>
              </h2>

              <p className="text-base sm:text-lg text-on-surface-muted leading-relaxed">
                Every midnight, GuideTalk calculates a fresh cosmic horoscope for every character using a deterministic <strong>Murmur3 prime-mixing algorithm</strong> and Azure OpenAI. 
              </p>

              <div className="space-y-4 pt-2 text-sm text-on-surface-variant">
                <div className="flex items-center gap-3">
                  <Moon className="h-5 w-5 text-tertiary flex-shrink-0" />
                  <span><strong>Midnight Astronomical Reset:</strong> A new prophecy synchronizes across all users simultaneously.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span><strong>Lore-Accurate Omen:</strong> Fontaine hydro spectacles, Inazuman eternity omens, and cursed energy forecasts.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                  <span><strong>In-Voice Delivery:</strong> Read the quote in character or listen with interactive voice note playback.</span>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  onClick={() => setDownloadModalOpen(true)}
                  className="rounded-full bg-gradient-to-r from-tertiary-container to-primary-container text-white font-bold px-8 py-6 text-base group shadow-lg"
                >
                  Get Your Daily Reading
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Right - Interactive Prophecy Tarot Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl bg-surface-container-high/60 border border-tertiary-container/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
                
                {/* Header Date & Starseed Indicator */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-tertiary uppercase tracking-wider">
                    <Calendar size={14} />
                    <span>{todayStr}</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-container/20 border border-tertiary-container/40 text-[11px] font-mono text-tertiary">
                    <Sparkles size={11} />
                    <span>Seed: Murmur3-Dispersed</span>
                  </div>
                </div>

                {/* Character Oracle Header */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-tertiary-container shadow-lg flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="https://static.wikia.nocookie.net/gensin-impact/images/2/27/Furina_Card.png/revision/latest?cb=20230925100151" 
                      alt="Furina Oracle"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-secondary tracking-widest uppercase">
                      Oracle of Fontaine
                    </span>
                    <h4 className="text-xl font-extrabold text-white">Lady Furina</h4>
                    <p className="text-xs text-on-surface-muted">Stage Omen &bull; Hydro Spectacle</p>
                  </div>
                </div>

                {/* The Prophecy Quote Card */}
                <div className="p-5 rounded-2xl bg-surface-container-lowest/90 border border-white/5 space-y-3 relative overflow-hidden">
                  <div className="text-tertiary/20 absolute top-2 right-3 pointer-events-none">
                    <Sparkles size={48} />
                  </div>
                  <p className="text-base sm:text-lg text-white font-serif italic leading-relaxed">
                    &ldquo;The grand stage of life turns in your favor today. Play your role with audacity, darling—destiny always applauds the boldest performer.&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-xs text-on-surface-muted pt-2 border-t border-white/5">
                    <span className="text-secondary font-medium">Lucky Element: Hydro 💧</span>
                    <span className="font-mono text-[11px]">Celestial Alignment: 98%</span>
                  </div>
                </div>

                {/* Daily Tip */}
                <p className="text-xs text-on-surface-muted text-center italic">
                  &ldquo;A surprising plot twist awaits before the sun sets. Hold your chin high and treat yourself to a slice of cake.&rdquo;
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>

      <DownloadModal 
        isOpen={downloadModalOpen} 
        onClose={() => setDownloadModalOpen(false)} 
        initialPlatform="android"
      />
    </section>
  )
}
