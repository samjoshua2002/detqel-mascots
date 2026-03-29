"use client"

import Image from "next/image"
import { Globe, FileText, MessageSquare, Users } from "lucide-react"

const knowledgeItems = [
  {
    icon: <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white text-sm font-bold">f</div>,
    title: "Facebook Insights",
    subtitle: "Trustpilot, 43 reviews",
    position: "top-left",
  },
  {
    icon: <Globe className="w-5 h-5 text-muted-foreground" />,
    title: "Services pricing",
    subtitle: "sintra.ai, +2 more",
    position: "left",
  },
  {
    icon: <Globe className="w-5 h-5 text-muted-foreground" />,
    title: "Brand website",
    subtitle: "eCommerce, 24 pages",
    position: "bottom-left",
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-pink-400" />,
    title: "Conversation with Julia",
    subtitle: "Follow-up scheduled",
    position: "top-right",
  },
  {
    icon: <FileText className="w-5 h-5 text-muted-foreground" />,
    title: "Client proposal",
    subtitle: "$25k budget",
    position: "right",
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-pink-400" />,
    title: "Conversation with Julia",
    subtitle: "Follow-up scheduled",
    position: "bottom-right",
  },
  {
    icon: <FileText className="w-5 h-5 text-red-500" />,
    title: "Team handbook",
    subtitle: "11 pages, guidelines",
    position: "bottom-center",
  },
]

export function BrainAISection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-white/80 mb-16 md:mb-24">
          Powered by<br />
          <span className="text-white/60">your Brain AI</span>
        </h2>

        {/* Brain with connections */}
        <div className="relative max-w-4xl mx-auto h-[500px] md:h-[600px]">
          {/* Connection lines - SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top left connection */}
            <path d="M200 150 Q 300 200 350 280" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
            {/* Left connection */}
            <path d="M150 300 Q 250 300 320 320" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
            {/* Bottom left connection */}
            <path d="M200 480 Q 300 450 350 400" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
            {/* Top right connection */}
            <path d="M600 150 Q 500 200 450 280" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
            {/* Right connection */}
            <path d="M650 300 Q 550 300 480 320" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
            {/* Bottom right connection */}
            <path d="M600 480 Q 500 450 450 400" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
            {/* Bottom center connection */}
            <path d="M400 520 Q 400 480 400 420" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
          </svg>

          {/* Brain image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 lg:w-96">
            <Image
              src="/assets/brain.png"
              alt="Brain AI"
              width={5}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Knowledge cards */}
          {/* Top left */}
          <div className="absolute top-8 left-4 md:left-16">
            <KnowledgeCard
              icon={<div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white text-sm font-bold">f</div>}
              title="Facebook Insights"
              subtitle="Trustpilot, 43 reviews"
            />
          </div>

          {/* Left */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-8">
            <KnowledgeCard
              icon={<Globe className="w-5 h-5 text-muted-foreground" />}
              title="Services pricing"
              subtitle="sintra.ai, +2 more"
            />
          </div>

          {/* Bottom left */}
          <div className="absolute bottom-24 left-8 md:left-24">
            <KnowledgeCard
              icon={<Globe className="w-5 h-5 text-muted-foreground" />}
              title="Brand website"
              subtitle="eCommerce, 24 pages"
            />
          </div>

          {/* Top right */}
          <div className="absolute top-8 right-4 md:right-16">
            <KnowledgeCard
              icon={<MessageSquare className="w-5 h-5 text-pink-400" />}
              title="Conversation with Julia"
              subtitle="Follow-up scheduled"
            />
          </div>

          {/* Right */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-8">
            <KnowledgeCard
              icon={<FileText className="w-5 h-5 text-muted-foreground" />}
              title="Client proposal"
              subtitle="$25k budget"
            />
          </div>

          {/* Bottom right */}
          <div className="absolute bottom-24 right-8 md:right-24">
            <KnowledgeCard
              icon={<MessageSquare className="w-5 h-5 text-pink-400" />}
              title="Conversation with Julia"
              subtitle="Follow-up scheduled"
            />
          </div>

          {/* Bottom center */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <KnowledgeCard
              icon={<FileText className="w-5 h-5 text-red-500" />}
              title="Team handbook"
              subtitle="11 pages, guidelines"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all hover:scale-105">
            Get Sintra X
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

function KnowledgeCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
}) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 flex items-center gap-3 border border-white/10 shadow-lg">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <p className="text-white text-sm font-medium">{title}</p>
        <p className="text-white/60 text-xs">{subtitle}</p>
      </div>
    </div>
  )
}
