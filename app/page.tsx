import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoworkersSection } from "@/components/coworkers-section"
import { FeaturesSection } from "@/components/features-section"
import { MemorySection } from "@/components/memory-section"
import { ApprovalSection } from "@/components/approval-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { TeamSection } from "@/components/team-section"
import { BrainAISection } from "@/components/brain-ai-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-surface overflow-x-hidden pt-[100px] sm:pt-[106px]">
      <Header />
      
      {/* 1. Hero with live interactive phone mockup */}
      <HeroSection />

      {/* 2. Spotlight Character Universe Showcase */}
      <CoworkersSection />

      {/* 3. Core Chat Features & Voice Notes */}
      <FeaturesSection />

      {/* 4. Dynamic Rivals & Foils Duel Engine */}
      <MemorySection />

      {/* 5. Daily Character Prophecy & Astronomical Forecast */}
      <ApprovalSection />

      {/* 6. Deep Roleplay & User Experience Showcase */}
      <UseCasesSection />

      {/* Shared Ambient Glow Wrapper for Architecture & Multiverse */}
      <div className="relative overflow-hidden bg-surface">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[1100px] h-[300px] md:h-[900px] bg-tertiary-container/20 blur-[90px] md:blur-[160px] rounded-full opacity-70" />
          <div className="absolute top-[20%] left-1/4 w-[200px] md:w-[700px] h-[200px] md:h-[600px] bg-primary-container/20 blur-[80px] md:blur-[140px] rounded-full opacity-60" />
          <div className="absolute bottom-[20%] right-1/4 w-[250px] md:w-[700px] h-[250px] md:h-[600px] bg-secondary-container/15 blur-[80px] md:blur-[140px] rounded-full opacity-50" />
        </div>

        <div className="relative z-10">
          {/* 7. Multiverse Search & AI Character Auto-Creation */}
          <TeamSection />

          {/* 8. Full-Stack Infrastructure & 4-Tier Zero-Latency Cache */}
          <BrainAISection />

          {/* 9. Final Download CTA */}
          <CTASection />
        </div>
      </div>

      {/* 10. Footer */}
      <Footer />
    </main>
  )
}
