"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Sparkles, Download, MessageSquareQuote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DownloadModal } from "@/components/download-modal"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState<"android" | "ios" | "qr">("android")

  const handleOpenDownload = (platform: "android" | "ios" | "qr" = "android") => {
    setSelectedPlatform(platform)
    setDownloadModalOpen(true)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] w-full">
        {/* Release Announcement Banner */}
        {showBanner && (
          <div className="relative bg-gradient-to-r from-tertiary-container via-primary-container to-secondary-container py-2 px-4 text-center">
            <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-medium text-white max-w-7xl mx-auto">
              <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider bg-black/25 px-2.5 py-0.5 rounded-full text-[11px]">
                <Sparkles size={12} className="text-yellow-300" />
                v1.0.1 Released
              </span>
              <span className="hidden md:inline">Instant Change Look &amp; Azure OpenAI Canon Personality Sync!</span>
              <button 
                onClick={() => handleOpenDownload("android")}
                className="underline font-bold hover:text-white/80 transition-opacity ml-1"
              >
                Download APK &rarr;
              </button>
            </div>
            <button 
              onClick={() => setShowBanner(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              aria-label="Close banner"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Navigation Bar */}
        <header className="glass border-b border-outline-variant/10 bg-surface/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-tertiary-container via-secondary-container to-primary-container p-0.5 shadow-lg group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-[14px] bg-surface flex items-center justify-center">
                    <MessageSquareQuote size={20} className="text-tertiary" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                    GuideTalk
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-tertiary-container/30 text-tertiary font-mono font-medium border border-tertiary-container/40">
                      AI
                    </span>
                  </span>
                  <span className="text-[10px] text-on-surface-muted -mt-1 tracking-wider uppercase">Anime Companion</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-on-surface-variant">
                <a href="#features" className="hover:text-white transition-colors">Features</a>
                <a href="#characters" className="hover:text-white transition-colors">Characters</a>
                <a href="#rivals" className="hover:text-white transition-colors">Dynamic Rivals</a>
                <a href="#prophecy" className="hover:text-white transition-colors">Daily Prophecy</a>
                <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
                <a 
                  href="https://github.com/samjoshua2002/GuideTalk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1 text-xs text-on-surface-muted"
                >
                  GitHub
                </a>
              </nav>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center gap-3">
                <Button 
                  onClick={() => handleOpenDownload("ios")}
                  variant="ghost"
                  className="rounded-full text-on-surface-variant hover:text-white hover:bg-white/5 font-medium px-4 text-xs"
                >
                  iOS Preview
                </Button>
                <Button 
                  onClick={() => handleOpenDownload("android")}
                  className="rounded-full bg-gradient-to-r from-secondary-container to-secondary hover:opacity-95 text-white font-semibold px-6 shadow-lg shadow-secondary-container/20 flex items-center gap-2"
                >
                  <Download size={16} />
                  Download App
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-on-surface"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-outline-variant/10 bg-surface-container-low/95 backdrop-blur-xl px-4 py-6 space-y-4">
              <nav className="flex flex-col gap-3 font-medium text-on-surface-variant">
                <a 
                  href="#features" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-white transition-colors"
                >
                  Features &amp; AI Chat
                </a>
                <a 
                  href="#characters" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-white transition-colors"
                >
                  Character Universe
                </a>
                <a 
                  href="#rivals" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-white transition-colors"
                >
                  Dynamic Rivals
                </a>
                <a 
                  href="#prophecy" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-white transition-colors"
                >
                  Daily Prophecy
                </a>
                <a 
                  href="#architecture" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-white transition-colors"
                >
                  Server Architecture
                </a>
              </nav>

              <div className="pt-4 border-t border-outline-variant/10 flex flex-col gap-2">
                <Button 
                  onClick={() => handleOpenDownload("android")}
                  className="w-full rounded-2xl bg-secondary-container text-white font-bold py-5 flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  Download Android APK
                </Button>
                <Button 
                  onClick={() => handleOpenDownload("ios")}
                  variant="outline"
                  className="w-full rounded-2xl border-white/10 text-white font-medium py-5 flex items-center justify-center gap-2"
                >
                  iOS / Expo Go Preview
                </Button>
              </div>
            </div>
          )}
        </header>
      </div>

      <DownloadModal 
        isOpen={downloadModalOpen} 
        onClose={() => setDownloadModalOpen(false)} 
        initialPlatform={selectedPlatform}
      />
    </>
  )
}
