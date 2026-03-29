import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { MemorySection } from "@/components/memory-section"
import { ApprovalSection } from "@/components/approval-section"
import { TeamSection } from "@/components/team-section"
import { CoworkersSection } from "@/components/coworkers-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { BrainAISection } from "@/components/brain-ai-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MemorySection />
      <ApprovalSection />
      {/* Shared Gradient Effect Section */}
      <div className="relative overflow-hidden bg-surface">
        {/* Vibrant Decorative Blur Gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Main Central Glow - Bright Purple (Tertiary-Container) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[900px] bg-tertiary-container/40 blur-[140px] rounded-full opacity-80 animate-glow-pulse mix-blend-plus-lighter" />
          
          {/* Top Secondary Glow - Vibrant Blue (Primary-Container) */}
          <div className="absolute top-[15%] left-1/3 -translate-x-1/2 w-[900px] h-[700px] bg-primary-container/30 blur-[130px] rounded-full opacity-60 animate-float mix-blend-plus-lighter" />
          
          {/* Bottom Secondary Glow - Vivid Peach (Secondary-Container) */}
          <div className="absolute bottom-[15%] right-1/3 translate-x-1/2 w-[900px] h-[700px] bg-secondary-container/20 blur-[130px] rounded-full opacity-60 animate-float-delayed mix-blend-plus-lighter" />
          
          {/* Sharp Highlighting Blobs for extra "Pop" */}
          <div className="absolute top-[45%] right-[15%] w-[400px] h-[400px] bg-tertiary/30 blur-[100px] rounded-full opacity-50 animate-glow-pulse" />
          <div className="absolute bottom-[45%] left-[15%] w-[400px] h-[400px] bg-primary-container/25 blur-[100px] rounded-full opacity-50 animate-float-delayed" />
        </div>

        <div className="relative z-10">
          <TeamSection />
          <BrainAISection />
          <CTASection />
        </div>
      </div>
      <CoworkersSection />
      <UseCasesSection />

    
      <Footer />
    </main>
  )
}
