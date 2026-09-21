"use client"

import { useState, useEffect } from "react"
import { Sparkles, RotateCw, Heart, MessageSquare, Flame } from "lucide-react"
import { FEATURED_CHARACTERS, fetchDynamicImageFromApi, CharacterData } from "@/lib/api"
import { DownloadModal } from "@/components/download-modal"

export function CoworkersSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [characterImages, setCharacterImages] = useState<Record<string, string>>({})
  const [candidatePools, setCandidatePools] = useState<Record<string, string[]>>({})
  const [cyclingMap, setCyclingMap] = useState<Record<string, boolean>>({})
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)

  // Fetch dynamic HD images for characters
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

  const handleCycleLook = async (char: CharacterData) => {
    setCyclingMap((prev) => ({ ...prev, [char.name]: true }))
    const pool = candidatePools[char.name]
    const currentImg = characterImages[char.name] || char.initialImage

    if (pool && pool.length > 1) {
      const filtered = pool.filter((u) => u !== currentImg)
      const nextPick = filtered.length > 0 ? filtered[Math.floor(Math.random() * filtered.length)] : pool[0]
      setCharacterImages((prev) => ({ ...prev, [char.name]: nextPick }))
      setTimeout(() => setCyclingMap((prev) => ({ ...prev, [char.name]: false })), 250)
      return
    }

    try {
      const res = await fetchDynamicImageFromApi(char.name, char.series, true)
      if (res.imageUrl) {
        setCharacterImages((prev) => ({ ...prev, [char.name]: res.imageUrl }))
        if (res.candidates) {
          setCandidatePools((prev) => ({ ...prev, [char.name]: res.candidates! }))
        }
      }
    } finally {
      setCyclingMap((prev) => ({ ...prev, [char.name]: false }))
    }
  }

  const categories = ["All", "Genshin Impact", "Jujutsu Kaisen", "Anime Legends", "Gaming"]

  const filteredCharacters = FEATURED_CHARACTERS.filter((char) => {
    if (selectedCategory === "All") return true
    if (selectedCategory === "Genshin Impact") return char.series.toLowerCase().includes("genshin")
    if (selectedCategory === "Jujutsu Kaisen") return char.series.toLowerCase().includes("jujutsu")
    if (selectedCategory === "Gaming") return char.category === "Gaming" || char.series.toLowerCase().includes("nier")
    if (selectedCategory === "Anime Legends") return !char.series.toLowerCase().includes("genshin")
    return true
  })

  return (
    <section id="characters" className="py-20 sm:py-28 bg-surface-container-lowest/90 overflow-hidden relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-tertiary-container/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={12} />
            Spotlight Universe
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Meet the Characters of GuideTalk.
          </h2>
          <p className="text-base sm:text-lg text-on-surface-muted leading-relaxed">
            Loaded with canon voice patterns, custom greetings, relationship affinity progression, and live studio-grade artwork fetched directly from the GuideTalk server.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-secondary-container text-white shadow-lg shadow-secondary-container/20"
                    : "bg-surface-container-high/60 text-on-surface-muted hover:text-white hover:bg-surface-container-high border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Character Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {filteredCharacters.map((char) => {
            const img = characterImages[char.name] || char.initialImage
            const isCycling = !!cyclingMap[char.name]

            return (
              <div
                key={char.id}
                className="group relative rounded-3xl bg-surface-container-low border border-white/10 p-3.5 shadow-xl flex flex-col justify-between hover:border-tertiary/40 transition-all hover:-translate-y-1.5 duration-300 overflow-hidden backdrop-blur-md"
              >
                {/* Character Portrait Box */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-black/60 mb-3 border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={char.name}
                    className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${
                      isCycling ? "opacity-50 scale-95" : "opacity-100 scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] text-white font-medium">
                      {char.series}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] text-tertiary font-bold flex items-center gap-1">
                      <Heart size={10} className="fill-tertiary" />
                      Lv. {char.affinityLevel}
                    </span>
                  </div>

                  {/* Change Look Button */}
                  <button
                    onClick={() => handleCycleLook(char)}
                    disabled={isCycling}
                    className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/75 hover:bg-secondary-container backdrop-blur-md border border-white/20 text-[10px] font-semibold text-white transition-all flex items-center gap-1 shadow-md active:scale-95"
                    title="Click to cycle dynamic looks live from API"
                  >
                    <RotateCw size={10} className={isCycling ? "animate-spin" : ""} />
                    <span>Change Look</span>
                  </button>

                  {/* Name Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-24 pointer-events-none">
                    <h4 className="text-base sm:text-lg font-bold text-white leading-tight drop-shadow truncate">
                      {char.name}
                    </h4>
                    <p className="text-[10px] text-tertiary font-medium truncate drop-shadow">
                      {char.tagline}
                    </p>
                  </div>
                </div>

                {/* Body Details */}
                <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-on-surface-muted italic line-clamp-2 leading-relaxed font-serif">
                      &ldquo;{char.sampleQuote}&rdquo;
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1 pt-2">
                      {char.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[10px] px-2 py-0.5 rounded-md bg-surface-container-high/80 text-on-surface-variant font-medium border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Chat Action Button */}
                  <button
                    onClick={() => setDownloadModalOpen(true)}
                    className="w-full mt-2 py-2.5 rounded-xl bg-surface-container-high hover:bg-gradient-to-r hover:from-secondary-container hover:to-secondary hover:text-white text-xs font-semibold text-on-surface transition-all flex items-center justify-center gap-1.5 border border-white/5 shadow-sm"
                  >
                    <MessageSquare size={13} />
                    <span>Chat with {char.name.split(" ")[0]}</span>
                  </button>
                </div>
              </div>
            )
          })}
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
