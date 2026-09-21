"use client"

import { Server, Database, Cpu, Zap, Shield, Image as ImageIcon, Smartphone } from "lucide-react"

const architectureNodes = [
  {
    icon: <Cpu className="w-5 h-5 text-tertiary" />,
    title: "Azure OpenAI GPT-5.6",
    subtitle: "Custom prompt tuning & streaming completion",
    tag: "AI Engine",
  },
  {
    icon: <Database className="w-5 h-5 text-success" />,
    title: "MongoDB Atlas Cloud",
    subtitle: "Indexed collections for users, chats & rivals",
    tag: "Persistence",
  },
  {
    icon: <ImageIcon className="w-5 h-5 text-secondary" />,
    title: "Multi-Source Art Pipeline",
    subtitle: "Jikan MAL, Safebooru, Bing & Wikipedia",
    tag: "Image Scrapers",
  },
  {
    icon: <Zap className="w-5 h-5 text-yellow-400" />,
    title: "4-Tier Distributed Cache",
    subtitle: "0ms client memory to server in-memory maps",
    tag: "Ultra Fast",
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: "Scrypt & HMAC Security",
    subtitle: "Salted cryptographic hashes & session tokens",
    tag: "Security",
  },
  {
    icon: <Smartphone className="w-5 h-5 text-pink-400" />,
    title: "EAS Over-the-Air Sync",
    subtitle: "Instant JS/asset updates without re-downloading APK",
    tag: "OTA Delivery",
  },
]

export function BrainAISection() {
  return (
    <section id="architecture" className="py-20 md:py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary text-xs font-semibold uppercase tracking-wider">
            <Server size={12} />
            Full-Stack Infrastructure
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Engineered for high fidelity, <br />
            <span className="text-on-surface-muted">zero latency, and complete security.</span>
          </h2>
          <p className="text-base sm:text-lg text-on-surface-muted leading-relaxed">
            Detailed in GuideTalk&apos;s architectural specifications — built with an asynchronous Node.js microservice on Render, MongoDB Atlas cluster, and Azure OpenAI.
          </p>
        </div>

        {/* Architecture Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {architectureNodes.map((node) => (
            <div
              key={node.title}
              className="p-6 rounded-3xl bg-surface-container-low/70 border border-white/10 hover:border-tertiary/40 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center group-hover:scale-110 transition-transform">
                  {node.icon}
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-on-surface-muted">
                  {node.tag}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-tertiary transition-colors">
                  {node.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-muted mt-1.5 leading-relaxed">
                  {node.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Flow Bar */}
        <div className="mt-12 p-6 rounded-3xl bg-surface-container-lowest border border-white/5 max-w-4xl mx-auto text-center space-y-3">
          <p className="text-xs font-mono text-tertiary uppercase tracking-wider">
            End-to-End Dynamic Image Pipeline
          </p>
          <div className="flex items-center justify-center flex-wrap gap-2 text-xs font-semibold text-white">
            <span className="px-3 py-1.5 rounded-xl bg-surface-container-high">useDynamicCharacterImage</span>
            <span className="text-tertiary">&rarr;</span>
            <span className="px-3 py-1.5 rounded-xl bg-surface-container-high">Memory Cache (0ms)</span>
            <span className="text-tertiary">&rarr;</span>
            <span className="px-3 py-1.5 rounded-xl bg-surface-container-high">SecureStore Hydration</span>
            <span className="text-tertiary">&rarr;</span>
            <span className="px-3 py-1.5 rounded-xl bg-surface-container-high">Render API /character-image</span>
            <span className="text-tertiary">&rarr;</span>
            <span className="px-3 py-1.5 rounded-xl bg-surface-container-high">Global Event Broadcast</span>
          </div>
        </div>

      </div>
    </section>
  )
}
