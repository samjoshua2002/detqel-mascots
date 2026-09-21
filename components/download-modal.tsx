"use client"

import { useState, useEffect } from "react"
import { X, Download, Smartphone, Apple, QrCode, ExternalLink, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fetchLatestAppVersion, AppVersionInfo } from "@/lib/api"

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
  initialPlatform?: "android" | "ios" | "qr"
}

export function DownloadModal({ isOpen, onClose, initialPlatform = "android" }: DownloadModalProps) {
  const [activeTab, setActiveTab] = useState<"android" | "ios" | "qr">(initialPlatform)
  const [versionInfo, setVersionInfo] = useState<AppVersionInfo | null>(null)

  useEffect(() => {
    if (initialPlatform) {
      setActiveTab(initialPlatform)
    }
  }, [initialPlatform])

  useEffect(() => {
    if (isOpen) {
      fetchLatestAppVersion().then(setVersionInfo)
    }
  }, [isOpen])

  if (!isOpen) return null

  const apkDownloadUrl = versionInfo?.apkUrl || "https://expo.dev/accounts/samjoshua2002/projects/guildtalk/builds/3d96bb54-70dd-4554-af81-ff1cb86b4693"
  const expoProjectUrl = "https://expo.dev/accounts/samjoshua2002/projects/guildtalk"
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(apkDownloadUrl)}`

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-surface-container-low border border-white/10 shadow-2xl p-6 sm:p-8 overflow-hidden text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow blob */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-tertiary-container/30 blur-[70px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-primary-container/25 blur-[70px] rounded-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-surface-container-high/60 hover:bg-surface-container hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container/20 border border-tertiary-container/30 text-tertiary text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={12} />
            Official App Release
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Get GuideTalk {versionInfo ? `v${versionInfo.latestVersion}` : "v1.0.1"}
          </h3>
          <p className="text-sm text-on-surface-muted mt-1">
            AI-powered anime & game character companion. Select your platform below.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex rounded-2xl bg-surface-container-lowest p-1.5 mb-6 border border-white/5">
          <button
            onClick={() => setActiveTab("android")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "android"
                ? "bg-secondary-container text-white shadow-lg"
                : "text-on-surface-muted hover:text-white"
            }`}
          >
            <Smartphone size={16} />
            <span>Android (APK)</span>
          </button>
          <button
            onClick={() => setActiveTab("ios")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "ios"
                ? "bg-tertiary-container text-white shadow-lg"
                : "text-on-surface-muted hover:text-white"
            }`}
          >
            <Apple size={16} />
            <span>iOS / Expo</span>
          </button>
          <button
            onClick={() => setActiveTab("qr")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "qr"
                ? "bg-primary-container text-white shadow-lg"
                : "text-on-surface-muted hover:text-white"
            }`}
          >
            <QrCode size={16} />
            <span>Scan QR</span>
          </button>
        </div>

        {/* Tab Content: Android */}
        {activeTab === "android" && (
          <div className="space-y-4">
            <div className="rounded-2xl bg-surface-container-high/40 p-4 border border-white/5 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-tertiary font-medium">Build ID: Preview Build</span>
                <span className="text-xs text-success font-medium flex items-center gap-1">
                  <CheckCircle size={12} /> Direct APK Verified
                </span>
              </div>
              <p className="text-sm text-on-surface font-medium">
                Download the standalone Android package file (.apk) directly to your device and install with one tap.
              </p>
              <div className="text-xs text-on-surface-muted space-y-1 pt-1">
                <p>1. Tap the button below to download the APK file.</p>
                <p>2. Open your notification panel or Downloads folder.</p>
                <p>3. If prompted, select &quot;Allow from this source&quot; to complete installation.</p>
              </div>
            </div>

            <a 
              href={apkDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block"
            >
              <Button className="w-full py-6 rounded-2xl bg-gradient-to-r from-secondary-container to-secondary text-white font-bold text-base hover:opacity-95 shadow-lg flex items-center justify-center gap-2">
                <Download size={18} />
                Download Android APK ({versionInfo ? `v${versionInfo.latestVersion}` : "v1.0.1"})
              </Button>
            </a>

            <div className="text-center">
              <a 
                href={expoProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-on-surface-muted hover:text-tertiary transition-colors inline-flex items-center gap-1"
              >
                View project on Expo EAS Dashboard <ExternalLink size={12} />
              </a>
            </div>
          </div>
        )}

        {/* Tab Content: iOS */}
        {activeTab === "ios" && (
          <div className="space-y-4">
            <div className="rounded-2xl bg-surface-container-high/40 p-4 border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-tertiary font-medium">iOS Preview via Expo Go</span>
                <span className="text-xs text-primary font-medium flex items-center gap-1">
                  <Apple size={14} /> Apple iOS 14+
                </span>
              </div>
              <p className="text-sm text-on-surface font-medium">
                Experience GuideTalk on iPhone or iPad seamlessly through Apple TestFlight or the free Expo Go app:
              </p>
              <ol className="text-xs text-on-surface-muted space-y-1.5 list-decimal list-inside">
                <li>Install <strong>Expo Go</strong> from the Apple App Store on your iPhone.</li>
                <li>Tap the button below or open your camera to scan the project QR code.</li>
                <li>GuideTalk will launch immediately with full dark-mode and audio message support.</li>
              </ol>
            </div>

            <a 
              href={expoProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block"
            >
              <Button className="w-full py-6 rounded-2xl bg-gradient-to-r from-tertiary-container to-primary-container text-white font-bold text-base hover:opacity-95 shadow-lg flex items-center justify-center gap-2">
                <Apple size={18} />
                Launch on iOS via Expo Go
              </Button>
            </a>
          </div>
        )}

        {/* Tab Content: QR Code */}
        {activeTab === "qr" && (
          <div className="text-center space-y-4">
            <p className="text-sm text-on-surface-muted">
              Point your phone camera at this QR code to download the APK or open the project instantly:
            </p>
            <div className="inline-block p-4 rounded-3xl bg-white shadow-xl border-4 border-tertiary-container/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={qrCodeUrl} 
                alt="Scan to Download GuideTalk" 
                className="w-48 h-48 rounded-xl object-contain mx-auto" 
              />
            </div>
            <p className="text-xs text-on-surface-muted">
              Compatible with all Android and iOS device cameras
            </p>
          </div>
        )}

        {/* Footer info */}
        {versionInfo?.releaseNotes && (
          <div className="mt-6 pt-4 border-t border-outline-variant/10 text-xs text-on-surface-muted">
            <span className="font-semibold text-white">What&apos;s New in v1.0.1:</span> Instant Change Look cycling, HD live scraping, and dynamic rivals discovery.
          </div>
        )}
      </div>
    </div>
  )
}
