"use client"

import { useState } from "react"
import { Smartphone, Apple, QrCode, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DownloadModal } from "@/components/download-modal"

export function CTASection() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState<"android" | "ios" | "qr">("android")

  const handleOpenDownload = (platform: "android" | "ios" | "qr" = "android") => {
    setSelectedPlatform(platform)
    setDownloadModalOpen(true)
  }

  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/20 text-secondary text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Sparkles size={14} />
            Experience Next-Gen Anime AI
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight">
            Ready to meet your <br />
            <span className="bg-gradient-to-r from-tertiary via-secondary to-primary bg-clip-text text-transparent">
              AI character companion?
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-on-surface-muted leading-relaxed max-w-2xl mx-auto">
            Download GuideTalk v1.0.1 today. Jump straight into canon roleplay, dynamic look cycling, and personalized daily prophecies.
          </p>

          {/* Download Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => handleOpenDownload("android")}
              className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-secondary-container to-secondary hover:opacity-95 text-white font-bold px-8 py-7 text-base shadow-xl shadow-secondary-container/20 flex items-center justify-center gap-2.5"
            >
              <Smartphone className="h-5 w-5" />
              <span>Download Android APK (v1.0.1)</span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => handleOpenDownload("ios")}
              className="w-full sm:w-auto rounded-2xl border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-7 text-base flex items-center justify-center gap-2.5"
            >
              <Apple className="h-5 w-5" />
              <span>iOS / Expo Go Preview</span>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              onClick={() => handleOpenDownload("qr")}
              className="rounded-2xl hover:bg-white/5 text-on-surface-muted hover:text-white px-5 py-7 flex items-center justify-center gap-2"
            >
              <QrCode className="h-5 w-5" />
              <span>Scan QR</span>
            </Button>
          </div>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm text-on-surface-muted">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              100% Free Preview Build
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Zero Advertisements
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Silent Over-the-Air Updates
            </span>
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
