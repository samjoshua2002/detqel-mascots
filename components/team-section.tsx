"use client"

import { useState } from "react"
import { Sparkles, Search, Wand2, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DownloadModal } from "@/components/download-modal"

export function TeamSection() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary text-xs font-semibold uppercase tracking-wider">
            <Search size={12} />
            Infinite Anime &amp; Game Multiverse
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Can&apos;t find your favourite character? <br />
            <span className="bg-gradient-to-r from-tertiary via-secondary to-primary bg-clip-text text-transparent">
              Our AI creates them in seconds.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-on-surface-muted leading-relaxed">
            Search for any obscure hero, villain, or mascot. If they aren&apos;t already in GuideTalk, our backend combines Azure OpenAI with live web art scrapers to generate their lore, quotes, and avatars instantly.
          </p>
        </div>

        {/* Feature Pill Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {[
            "Genshin Impact",
            "Jujutsu Kaisen",
            "Chainsaw Man",
            "One Piece",
            "Honkai: Star Rail",
            "NieR:Automata",
            "Eminence in Shadow",
            "Demon Slayer",
            "Solo Leveling",
            "Bleach",
            "Fate/stay night",
            "Cyberpunk: Edgerunners"
          ].map((series) => (
            <span
              key={series}
              className="px-4 py-2 rounded-full bg-surface-container-high/60 border border-white/10 text-xs sm:text-sm text-on-surface font-medium hover:border-tertiary/50 hover:text-white transition-colors"
            >
              {series}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center mb-16">
          <Button
            size="lg"
            onClick={() => setDownloadModalOpen(true)}
            className="bg-gradient-to-r from-secondary-container to-secondary hover:opacity-95 text-white px-8 py-6 rounded-full font-bold text-base flex items-center gap-2 shadow-xl shadow-secondary-container/20 hover:scale-105 transition-all"
          >
            <Wand2 size={18} />
            Explore Multiverse on GuideTalk
            <ArrowRight size={18} />
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto pt-8 border-t border-white/10">
          <StatItem label="Curated Companions" value="100+" description="Ready to chat out-of-the-box" />
          <StatItem label="AI Auto-Creation" value="Instant" description="Search any character from any series" />
          <StatItem label="Look Cycling" value="0 ms" description="Instant local candidates cache" />
          <StatItem label="Availability" value="24/7" description="Direct Azure OpenAI GPT-5.6 cloud" />
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

function StatItem({
  label,
  value,
  description,
}: {
  label: string
  value: string
  description: string
}) {
  return (
    <div className="text-center p-4 rounded-2xl bg-surface-container-low/40 border border-white/5">
      <p className="text-on-surface-muted text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
      <p className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-on-surface-variant bg-clip-text text-transparent">{value}</p>
      <p className="text-on-surface-muted text-xs mt-1 leading-snug">{description}</p>
    </div>
  )
}
