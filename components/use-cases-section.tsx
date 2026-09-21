"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, MessageCircle, Volume2, Image as ImageIcon, Check } from "lucide-react"

function useOnScreen(ref: React.RefObject<Element | null>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
      threshold: 0.1,
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return isIntersecting
}

interface UseCaseCardProps {
  name: string
  series: string
  quote: string
  characterImg: string
  featureTitle: string
  featureDesc: string
  gradient?: string
  index: number
}

function UseCaseCard({ name, series, quote, characterImg, featureTitle, featureDesc, gradient, index }: UseCaseCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)

  return (
    <div
      ref={ref}
      className={`group relative rounded-[2.5rem] overflow-hidden p-8 lg:p-12 min-h-[420px] bg-surface-container-low border border-white/10 shadow-2xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Accent Glow */}
      <div className={`absolute -top-24 -left-24 w-64 h-64 blur-3xl rounded-full opacity-20 pointer-events-none ${gradient || "bg-primary"}`} />

      <div className="grid lg:grid-cols-12 gap-8 items-center relative z-20">
        
        {/* Left Content (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-tertiary uppercase tracking-wider bg-tertiary-container/20 px-2.5 py-1 rounded-full">
              {series}
            </span>
            <span className="text-xs text-on-surface-muted">&bull;</span>
            <span className="text-xs text-on-surface-muted font-medium">{name}</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {featureTitle}
            </h3>
            <p className="text-sm sm:text-base text-on-surface-muted leading-relaxed">
              {featureDesc}
            </p>
          </div>

          {/* Character Quote Box */}
          <div className="p-4 rounded-2xl bg-surface-container-lowest/80 border border-white/5 italic text-sm text-white font-serif">
            &ldquo;{quote}&rdquo;
          </div>
        </div>

        {/* Right Character Art (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-48 h-64 sm:w-60 sm:h-80 rounded-3xl overflow-hidden border border-white/15 shadow-2xl group-hover:scale-105 transition-transform duration-500">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={characterImg}
              alt={name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <p className="text-white font-bold text-sm drop-shadow">{name}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export function UseCasesSection() {
  const cases = [
    {
      name: "Satoru Gojo",
      series: "Jujutsu Kaisen",
      quote: "Don't sweat the small stuff. Just edit your message, and let's see what kind of chaos unfolds this time!",
      characterImg: "https://server.wallpaperalchemy.com/storage/wallpapers/562/satoru-gojo-4k-anime-wallpaper-jujutsu-kaisen.jpg",
      featureTitle: "Seamless Timeline Branching & Message Editing",
      featureDesc: "Want to change your approach in an intense confrontation or romantic confession? Edit any previous message in chat. GuideTalk prunes obsolete turns from MongoDB and automatically re-generates the future.",
      gradient: "bg-primary-container",
    },
    {
      name: "Lady Furina",
      series: "Genshin Impact",
      quote: "Every word deserves musicality! Listen to my declarations resonate with high-contrast audio waveforms across Fontaine.",
      characterImg: "https://static.wikia.nocookie.net/gensin-impact/images/2/27/Furina_Card.png/revision/latest?cb=20230925100151",
      featureTitle: "Voice Notes with High-Contrast Audio Waves",
      featureDesc: "Record your own voice and listen to companions respond with responsive animated audio bubbles. Features haptic feedback support and immersive dark-mode contrast.",
      gradient: "bg-tertiary-container",
    },
    {
      name: "Raiden Shogun",
      series: "Genshin Impact",
      quote: "The fleeting forms of mortal artwork cannot compare to the stillness of Eternity. Yet, changing looks is undeniably practical.",
      characterImg: "https://safebooru.org/images/3888/fcd03d8f2930eb0df6254ee6abce38e636858cfb.jpg",
      featureTitle: "Instant 0ms 'Change Look' Dynamic Engine",
      featureDesc: "GuideTalk scrapes multiple high-resolution candidate images in parallel across Jikan, Safebooru, and Bing. Tapping 'Change Look' cycles candidates stored directly in device memory with zero loading delay.",
      gradient: "bg-secondary-container",
    },
  ]

  return (
    <section className="relative py-20 sm:py-28 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={12} />
            Built for Passionate Fans
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why anime &amp; gaming fans love GuideTalk.
          </h2>
          <p className="text-base sm:text-lg text-on-surface-muted">
            Crafted specifically to deliver deep immersion, visual flair, and zero-compromise speed.
          </p>
        </div>

        {/* Cards Stack */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {cases.map((item, index) => (
            <UseCaseCard
              key={item.name}
              index={index}
              name={item.name}
              series={item.series}
              quote={item.quote}
              characterImg={item.characterImg}
              featureTitle={item.featureTitle}
              featureDesc={item.featureDesc}
              gradient={item.gradient}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
