"use client"

import { useState } from "react"
import { Swords, ArrowRight, ShieldAlert, Flame, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RIVALS_SHOWCASE } from "@/lib/api"
import { DownloadModal } from "@/components/download-modal"

export function MemorySection() {
  const [selectedRivalIndex, setSelectedRivalIndex] = useState(0)
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)
  const currentClash = RIVALS_SHOWCASE[selectedRivalIndex]

  return (
    <section id="rivals" className="relative py-20 sm:py-28 bg-surface-container-lowest overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-tertiary-container/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left - Interactive Rivals Clash Showcase (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Quick Rival Selectors */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-surface-container-high/40 border border-white/5 overflow-x-auto">
              {RIVALS_SHOWCASE.map((item, idx) => (
                <button
                  key={item.hero}
                  onClick={() => setSelectedRivalIndex(idx)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center justify-center gap-1.5 ${
                    selectedRivalIndex === idx
                      ? "bg-secondary-container text-white shadow-md"
                      : "text-on-surface-muted hover:text-white"
                  }`}
                >
                  <Swords size={13} />
                  <span>{item.hero.split(" ")[0]} vs {item.rival.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            {/* Duel Clash Card */}
            <div className="relative rounded-3xl bg-surface-container-high/50 p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-md space-y-6">
              
              {/* Top Avatars Clash Row */}
              <div className="flex items-center justify-between gap-4">
                {/* Hero */}
                <div className="flex flex-col items-center text-center space-y-2 flex-1 min-w-0">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-tertiary shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={currentClash.heroAvatar} alt={currentClash.hero} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm truncate">{currentClash.hero}</h4>
                    <span className="text-[10px] text-tertiary">{currentClash.heroSeries}</span>
                  </div>
                </div>

                {/* Clash Center Badge */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary-container/90 text-white flex items-center justify-center shadow-lg animate-pulse">
                    <Swords size={18} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-secondary mt-1">VS</span>
                </div>

                {/* Rival */}
                <div className="flex flex-col items-center text-center space-y-2 flex-1 min-w-0">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-secondary shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={currentClash.rivalAvatar} alt={currentClash.rival} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm truncate">{currentClash.rival}</h4>
                    <span className="text-[10px] text-secondary">{currentClash.rivalSeries}</span>
                  </div>
                </div>
              </div>

              {/* Relationship Rationale */}
              <div className="p-4 rounded-2xl bg-surface-container-lowest/80 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-warning font-semibold">
                  <Flame size={14} />
                  <span>Canonical Dynamic</span>
                </div>
                <p className="text-xs sm:text-sm text-on-surface leading-relaxed">
                  {currentClash.relationship}
                </p>
              </div>

              {/* Clash Dialogue Quote */}
              <div className="p-4 rounded-2xl bg-surface-container-lowest/80 border border-secondary-container/20 space-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 blur-xl pointer-events-none" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-secondary">
                  Adversary Clash Quote
                </span>
                <p className="text-xs sm:text-sm text-white italic font-serif leading-relaxed">
                  &ldquo;{currentClash.clashQuote}&rdquo;
                </p>
              </div>

              {/* Bottom In-App Action */}
              <div className="flex items-center justify-between text-xs text-on-surface-muted pt-2 border-t border-white/5">
                <span className="flex items-center gap-1">
                  <ShieldAlert size={14} className="text-tertiary" />
                  <span>Instant Rival Transition in Chat</span>
                </span>
                <span className="text-success font-medium">Cached in MongoDB</span>
              </div>

            </div>
          </div>

          {/* Right - Explanatory Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={12} />
              Adversary Generation System
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white tracking-tight">
              Every hero has a foil. <br />
              <span className="text-on-surface-muted">Face their greatest rivals in one tap.</span>
            </h2>

            <p className="text-base sm:text-lg text-on-surface-muted leading-relaxed">
              Why chat in a vacuum? In GuideTalk, every character brings their universe with them. When speaking to Raiden Shogun, the app dynamically discovers Kazuha and Yae Miko. When conversing with Gojo, face Sukuna or Geto.
            </p>

            <div className="space-y-3 pt-2 text-sm text-on-surface-variant">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary font-bold text-xs mt-0.5">
                  1
                </div>
                <p><strong>Contextual Lore AI:</strong> The server prompts Azure OpenAI to identify canonical foils, historical clashes, and emotional tension.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center text-secondary font-bold text-xs mt-0.5">
                  2
                </div>
                <p><strong>Parallel HD Art Scraping:</strong> As rivals generate, the backend queries Jikan and Safebooru simultaneously so each card is delivered with crisp artwork.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-xs mt-0.5">
                  3
                </div>
                <p><strong>Zero-Delay Switch:</strong> Tap any rival card inside the mobile app to initiate an instant face-off or cross-examination.</p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                onClick={() => setDownloadModalOpen(true)}
                className="rounded-full bg-on-surface hover:bg-on-surface/90 text-surface font-bold px-8 py-6 text-base group shadow-lg"
              >
                Experience Dynamic Rivals
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
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
