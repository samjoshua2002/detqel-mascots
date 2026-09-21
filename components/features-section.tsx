"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Sparkles, MessageCircle, RefreshCw, Cpu, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TaskCardsStack } from "@/components/task-cards"
import { fetchDynamicImageFromApi } from "@/lib/api"
import { DownloadModal } from "@/components/download-modal"

export function FeaturesSection() {
  const [characterImage, setCharacterImage] = useState<string>(
    "https://static.wikia.nocookie.net/gensin-impact/images/2/27/Furina_Card.png/revision/latest?cb=20230925100151"
  )
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)

  useEffect(() => {
    fetchDynamicImageFromApi("Furina", "Genshin Impact").then((res) => {
      if (res.imageUrl) setCharacterImage(res.imageUrl)
    })
  }, [])

  return (
    <section id="features" className="relative py-16 sm:py-24 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={12} />
            Pure Canon Personality Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Conversations that feel real, <br />
            <span className="text-on-surface-muted">because they never break character.</span>
          </h2>
          <p className="text-base sm:text-lg text-on-surface-muted leading-relaxed">
            Powered by customized Azure OpenAI system architectures. Every character adheres to their lore-accurate speech patterns, emotional temperaments, honorifics, and dynamic memory.
          </p>
        </div>

        {/* Feature 1 - Core Interaction Card */}
        <div className="rounded-3xl bg-surface-container-low p-6 md:p-12 lg:p-16 mb-12 overflow-hidden border border-white/5 shadow-2xl relative">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 text-xs font-mono text-tertiary bg-tertiary-container/20 px-3 py-1 rounded-full">
                <Cpu size={14} />
                <span>Zero Hallucination Canon Tuning</span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold leading-tight text-white">
                Deep roleplay, emotional affinity, and live timeline branching.
              </h3>

              <p className="text-base sm:text-lg text-on-surface-muted leading-relaxed">
                Made a wrong choice in a duel or dialogue? Tap any previous message, edit your words, and GuideTalk automatically re-branches the conversation history with fresh AI thoughts.
              </p>

              {/* Feature bullets */}
              <div className="grid sm:grid-cols-2 gap-4 py-2 text-sm text-on-surface-variant">
                <div className="flex items-start gap-2.5">
                  <MessageCircle className="h-5 w-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <span><strong>Voice Messages:</strong> High-contrast animated waveforms and audio player.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <RefreshCw className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span><strong>Regenerate Turns:</strong> Swipe between alternate replies on any prompt.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Layers className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Affinity Levels:</strong> Characters warm up to you as your bonds grow deeper.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Sparkles className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span><strong>Hourly Check-ins:</strong> Companions send you personalized push notifications.</span>
                </div>
              </div>

              {/* Task Cards Stack Preview */}
              <div className="pt-2">
                <TaskCardsStack />
              </div>
            </div>

            {/* Right - Dynamic Portrait Presentation (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 aspect-[4/5] shadow-2xl group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={characterImage}
                  alt="Furina - GuideTalk Companion"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-tertiary">
                    Genshin Impact &bull; Fontaine
                  </span>
                  <h4 className="text-2xl font-bold text-white mt-1">
                    Lady Furina
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1 italic line-clamp-2">
                    &ldquo;Play your role with audacity, darling—destiny always applauds the boldest performer!&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Row */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold">Ready to test GuideTalk on your phone?</p>
              <p className="text-xs text-on-surface-muted">Free preview download available for Android and iOS.</p>
            </div>
            
            <Button
              size="lg"
              onClick={() => setDownloadModalOpen(true)}
              className="rounded-full bg-gradient-to-r from-secondary-container to-secondary hover:opacity-95 text-white font-bold px-8 py-6 text-base group shadow-lg"
            >
              Get GuideTalk Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
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
