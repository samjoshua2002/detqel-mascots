"use client"

import { useState, useEffect } from "react"
import { 
  ArrowRight, 
  Sparkles, 
  Smartphone, 
  Apple, 
  QrCode, 
  RotateCw, 
  Volume2, 
  Heart, 
  MessageSquare,
  ShieldCheck,
  Zap,
  Play,
  Pause
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FEATURED_CHARACTERS, fetchDynamicImageFromApi } from "@/lib/api"
import { DownloadModal } from "@/components/download-modal"

export function HeroSection() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState<"android" | "ios" | "qr">("android")
  const [activeCharIndex, setActiveCharIndex] = useState(0)
  const [characterImages, setCharacterImages] = useState<Record<string, string>>({})
  const [candidatePools, setCandidatePools] = useState<Record<string, string[]>>({})
  const [isCycling, setIsCycling] = useState(false)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  const currentChar = FEATURED_CHARACTERS[activeCharIndex]
  const currentImage = characterImages[currentChar.name] || currentChar.initialImage

  // Automatically fetch dynamic HD images on mount
  useEffect(() => {
    FEATURED_CHARACTERS.forEach((char) => {
      fetchDynamicImageFromApi(char.name, char.series).then((res) => {
        if (res.imageUrl) {
          setCharacterImages((prev) => ({ ...prev, [char.name]: res.imageUrl }))
          if (res.candidates && res.candidates.length > 0) {
            setCandidatePools((prev) => ({ ...prev, [char.name]: res.candidates! }))
          }
        }
      })
    })
  }, [])

  // Instant Change Look cycling
  const handleNextLook = async () => {
    setIsCycling(true)
    const pool = candidatePools[currentChar.name]
    if (pool && pool.length > 1) {
      const remaining = pool.filter((u) => u !== currentImage)
      const nextUrl = remaining.length > 0 ? remaining[Math.floor(Math.random() * remaining.length)] : pool[0]
      setCharacterImages((prev) => ({ ...prev, [currentChar.name]: nextUrl }))
      setTimeout(() => setIsCycling(false), 250)
      return
    }

    try {
      const res = await fetchDynamicImageFromApi(currentChar.name, currentChar.series, true)
      if (res.imageUrl) {
        setCharacterImages((prev) => ({ ...prev, [currentChar.name]: res.imageUrl }))
        if (res.candidates) setCandidatePools((prev) => ({ ...prev, [currentChar.name]: res.candidates! }))
      }
    } finally {
      setIsCycling(false)
    }
  }

  const handleOpenDownload = (platform: "android" | "ios" | "qr" = "android") => {
    setSelectedPlatform(platform)
    setDownloadModalOpen(true)
  }

  return (
    <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 bg-surface overflow-hidden">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[1000px] h-[400px] lg:h-[600px] bg-tertiary-container/20 blur-[130px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-secondary-container/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-primary-container/20 blur-[110px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (7 cols) - Headline & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high/80 border border-white/10 text-xs sm:text-sm text-tertiary font-medium shadow-inner backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-success animate-pulse" />
              <span>GuideTalk v1.0.1 Live &bull; Powered by Azure OpenAI GPT-5.6</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              Chat with your <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-tertiary via-secondary to-primary-container bg-clip-text text-transparent">
                favourite characters.
              </span>
              <br />
              <span className="text-white/90 text-3xl sm:text-5xl lg:text-6xl font-bold">
                In their voice. Alive in your pocket.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-on-surface-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Step into the world of <strong>Genshin Impact</strong>, <strong>Jujutsu Kaisen</strong>, and anime legends. GuideTalk brings your dream companions to life with dynamic studio-grade artwork, voice notes, and authentic canon personalities that never break character.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                size="lg"
                onClick={() => handleOpenDownload("android")}
                className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-secondary-container via-secondary to-secondary-container hover:opacity-95 text-white font-bold px-8 py-7 text-base shadow-xl shadow-secondary-container/25 flex items-center justify-center gap-3 group"
              >
                <Smartphone className="h-5 w-5" />
                <span>Download Android APK (v1.0.1)</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => handleOpenDownload("ios")}
                className="w-full sm:w-auto rounded-2xl border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-7 text-base flex items-center justify-center gap-2.5 backdrop-blur-md"
              >
                <Apple className="h-5 w-5" />
                <span>iOS / Expo Preview</span>
              </Button>

              <button
                onClick={() => handleOpenDownload("qr")}
                className="hidden sm:flex p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-on-surface-variant hover:text-white transition-colors items-center justify-center shadow-md backdrop-blur-md"
                title="Scan QR Code to install on phone"
              >
                <QrCode className="h-5 w-5" />
              </button>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-on-surface-variant pt-2">
              <span className="flex items-center gap-1.5 text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                100% Free Preview Build
              </span>
              <span className="flex items-center gap-1.5 text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
                Instant Change Look (0ms)
              </span>
              <span className="flex items-center gap-1.5 text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Silent Over-The-Air Updates
              </span>
            </div>

            {/* Tech Stack Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-on-surface-muted font-medium">
              <span className="flex items-center gap-1.5 text-white">
                <Zap className="h-3.5 w-3.5 text-tertiary" /> Azure OpenAI
              </span>
              <span className="flex items-center gap-1.5 text-white">
                <ShieldCheck className="h-3.5 w-3.5 text-success" /> MongoDB Atlas
              </span>
              <span>AniList GraphQL CDN</span>
              <span>Expo EAS</span>
              <span>Render Cloud</span>
            </div>

          </div>

          {/* Right Column (5 cols) - Interactive Live Phone / Chat Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            
            {/* Phone Frame Container */}
            <div className="relative w-full max-w-[380px] rounded-[3rem] p-3 bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/20 backdrop-blur-2xl">
              
              {/* Inner Screen */}
              <div className="rounded-[2.5rem] bg-surface-container-lowest overflow-hidden border border-white/10 p-4 space-y-4 relative">
                
                {/* Character Quick Switcher Tabs */}
                <div className="flex items-center gap-1 p-1 bg-surface-container-low rounded-2xl border border-white/5">
                  {FEATURED_CHARACTERS.slice(0, 4).map((char, idx) => (
                    <button
                      key={char.id}
                      onClick={() => setActiveCharIndex(idx)}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-xl transition-all truncate ${
                        activeCharIndex === idx
                          ? "bg-tertiary-container text-white shadow-md"
                          : "text-on-surface-muted hover:text-white"
                      }`}
                    >
                      {char.name.split(" ")[0]}
                    </button>
                  ))}
                </div>

                {/* Character Portrait Card with Live Look Cycling */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-lg group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentImage}
                    alt={currentChar.name}
                    className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${
                      isCycling ? "opacity-50 scale-95" : "opacity-100 scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white">
                      {currentChar.series}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] text-tertiary font-bold flex items-center gap-1">
                      <Heart size={11} className="fill-tertiary" />
                      Lv. {currentChar.affinityLevel}
                    </span>
                  </div>

                  {/* Change Look Button */}
                  <button
                    onClick={handleNextLook}
                    disabled={isCycling}
                    className="absolute bottom-3 right-3 z-20 px-3 py-1.5 rounded-full bg-black/75 hover:bg-secondary-container border border-white/20 text-xs font-semibold text-white shadow-lg transition-all flex items-center gap-1.5 backdrop-blur-md active:scale-95"
                    title="Cycle dynamic looks live from API"
                  >
                    <RotateCw size={12} className={isCycling ? "animate-spin" : ""} />
                    <span>Change Look</span>
                  </button>

                  {/* Character Name Overlay */}
                  <div className="absolute bottom-3 left-3 right-28 pointer-events-none">
                    <h3 className="text-xl font-extrabold text-white leading-tight drop-shadow">
                      {currentChar.name}
                    </h3>
                    <p className="text-[11px] text-tertiary font-medium truncate drop-shadow">
                      {currentChar.tagline}
                    </p>
                  </div>
                </div>

                {/* Simulated In-App Live Speech Bubble */}
                <div className="p-3.5 rounded-2xl bg-surface-container-low border border-white/5 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-on-surface-muted">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-success" />
                      {currentChar.name}
                    </span>
                    <span className="font-mono text-[10px]">Active Now</span>
                  </div>
                  <p className="text-xs text-on-surface leading-relaxed italic font-serif">
                    &ldquo;{currentChar.greeting}&rdquo;
                  </p>
                </div>

                {/* In-App Voice Note Waveform Simulator */}
                <div className="flex items-center justify-between gap-3 p-2.5 rounded-2xl bg-surface-container-high/70 border border-white/5">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-8 h-8 rounded-full bg-secondary-container text-white flex items-center justify-center hover:scale-105 transition-transform flex-shrink-0"
                    aria-label="Play sample voice quote"
                  >
                    {isPlayingAudio ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                  </button>

                  <div className="flex-1 flex items-center gap-1 overflow-hidden">
                    {[45, 80, 30, 95, 60, 85, 40, 70, 90, 50, 80, 35, 75, 55, 90, 45, 65, 30].map((h, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all ${
                          isPlayingAudio 
                            ? "bg-tertiary animate-pulse" 
                            : i < 7 ? "bg-secondary" : "bg-white/25"
                        }`}
                        style={{ height: `${h * 0.22}px`, animationDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-mono text-on-surface-muted tabular-nums">0:14</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      <DownloadModal 
        isOpen={downloadModalOpen} 
        onClose={() => setDownloadModalOpen(false)} 
        initialPlatform={selectedPlatform}
      />
    </section>
  )
}
