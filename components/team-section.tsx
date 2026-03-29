"use client"

import Image from "next/image"

export function TeamSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-8">
          <span className="text-white font-bold italic">Sintra X</span>
          <span className="text-muted-foreground"> - when intelligence</span>
          <br />
          <span className="text-muted-foreground italic">outperforms expertise</span>
        </h2>

        {/* Team carrying books */}
        <div className="flex justify-center mt-12 mb-16">
          <Image
            src="/assets/team.png"
            alt="Sintra X AI Team carrying books"
            width={1200}
            height={400}
            className="w-full max-w-5xl h-auto object-contain"
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all hover:scale-105 w-full max-w-md justify-center">
            Get Sintra X
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <StatItem label="More than" value="50M+" description="tasks completed" />
          <StatItem label="Available" value="24/7" description="always on" />
          <StatItem label="More than" value="100+" description="integrations" />
          <StatItem label="More than" value="12" description="AI teammates" />
        </div>
      </div>
    </section>
  )
}

function StatItem({
  label,
  value,
  description,
}: {
  label: string
  value: string
  description: string
}) {
  return (
    <div className="text-center">
      <p className="text-muted-foreground text-sm mb-1">{label}</p>
      <p className="text-white text-3xl md:text-4xl font-bold">{value}</p>
      <p className="text-muted-foreground text-sm mt-1">{description}</p>
    </div>
  )
}
