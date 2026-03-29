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
        <div className="relative max-w-4xl mx-auto h-[450px] md:h-[600px] overflow-visible">
          {/* Connection lines - Circuit style (Hidden on mobile) */}
          <svg className="absolute inset-0 w-full h-full hidden md:block" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top Left Connection (Facebook Insights) */}
            <path d="M220 50 H 320 Q 350 50 350 100 V 250" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
            
            {/* Mid Left Connection (Services pricing) */}
            <path d="M180 300 H 320" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
            
            {/* Bottom Left Connection (Brand website) */}
            <path d="M240 500 H 320 Q 350 500 350 450 V 350" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
            
            {/* Top Right Connection (Inquiry from Julia) */}
            <path d="M580 50 H 480 Q 450 50 450 100 V 250" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
            
            {/* Mid Right Connection (Client proposal) */}
            <path d="M620 300 H 480" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
            
            {/* Bottom Right Connection (Chat with Julia) */}
            <path d="M560 500 H 480 Q 450 500 450 450 V 350" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
            
            {/* Bottom Center Connection (Team handbook) */}
            <path d="M400 550 V 430" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
          </svg>

          {/* Brain image - Scaled for mobile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-80 lg:w-96 z-10 transition-all duration-500">
            <Image
              src="/assets/brain.png"
              alt="Brain AI"
              width={400}
              height={400}
              className="w-full h-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            />
          </div>

          {/* Knowledge cards - Responsive Positioning */}
          {/* Top center-left */}
          <div className="absolute top-4 left-0 md:top-8 md:left-16 z-20">
            <KnowledgeCard
              icon={<div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white text-[10px] md:text-sm font-bold">f</div>}
              title="Facebook Insights"
              subtitle="Trustpilot, 43 reviews"
            />
          </div>

          {/* Left - Mid */}
          <div className="absolute top-1/3 -translate-y-1/2 -left-4 md:top-1/2 md:left-0 z-20">
            <KnowledgeCard
              icon={<Globe className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />}
              title="Services pricing"
              subtitle="sintra.ai, +2 more"
            />
          </div>

          {/* Bottom left */}
          <div className="absolute bottom-12 left-0 md:bottom-24 md:left-24 z-20">
            <KnowledgeCard
              icon={<Globe className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />}
              title="Brand website"
              subtitle="eCommerce, 24 pages"
            />
          </div>

          {/* Top center-right */}
          <div className="absolute top-4 right-0 md:top-8 md:right-16 z-20">
            <KnowledgeCard
              icon={<MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-pink-400" />}
              title="Inquiry from Julia"
              subtitle="Follow-up scheduled"
            />
          </div>

          {/* Right - Mid */}
          <div className="absolute top-1/3 -translate-y-1/2 -right-4 md:top-1/2 md:right-0 z-20">
            <KnowledgeCard
              icon={<FileText className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />}
              title="Client proposal"
              subtitle="$25k budget"
            />
          </div>

          {/* Bottom right */}
          <div className="absolute bottom-12 right-0 md:bottom-24 md:right-24 z-20">
            <KnowledgeCard
              icon={<MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-pink-400" />}
              title="Chat with Julia"
              subtitle="Follow-up scheduled"
            />
          </div>

          {/* Bottom center */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 md:z-20">
            <KnowledgeCard
              icon={<FileText className="w-4 h-4 md:w-5 md:h-5 text-red-500" />}
              title="Team handbook"
              subtitle="11 pages, guidelines"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-20 md:mt-12">
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all hover:scale-105 border border-white/5">
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
    <div className="bg-white/10 backdrop-blur-md rounded-2xl px-3 py-2 md:px-4 md:py-3 flex items-center gap-2 md:gap-3 border border-white/10 shadow-lg whitespace-nowrap min-w-[120px] md:min-w-0">
      <div className="flex-shrink-0">{icon}</div>
      <div className="min-w-0">
        <p className="text-white text-[10px] md:text-sm font-medium leading-none">{title}</p>
        <p className="text-white/60 text-[8px] md:text-xs mt-0.5 hidden sm:block">{subtitle}</p>
      </div>
    </div>
  )
}
