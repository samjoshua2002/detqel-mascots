"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MessageSquare, Share2, BarChart3, Lightbulb, PenTool, Users } from "lucide-react"

const coworkers = [
  {
    name: "Cassie",
    role: "Customer Support",
    image: "/assets/cassie-avatar.png",
    color: "from-blue-600 to-blue-400",
    features: [
      { icon: MessageSquare, text: "Replies to incoming customer requests" },
      { icon: MessageSquare, text: "Responds to comments on socials" },
      { icon: MessageSquare, text: "Handles customer support inquiries" },
    ],
  },
  {
    name: "Soshie",
    role: "Social Media Manager",
    image: "/assets/coworker-soshie.png",
    color: "from-purple-600 to-pink-400",
    features: [
      { icon: Share2, text: "Generates social media posts" },
      { icon: PenTool, text: "Creates your brand kit" },
      { icon: BarChart3, text: "Handles social media strategy" },
    ],
  },
  {
    name: "Milli",
    role: "Sales Manager",
    image: "/assets/coworker-milli.png",
    color: "from-pink-500 to-purple-500",
    features: [
      { icon: BarChart3, text: "Helps you polish your sales strategy" },
      { icon: Users, text: "Creates sales playbook" },
      { icon: Lightbulb, text: "Teaches you how to close sales" },
    ],
  },
  {
    name: "Buddy",
    role: "Business Strategist",
    image: "/assets/buddy-avatar.png",
    color: "from-sky-400 to-blue-300",
    features: [
      { icon: Lightbulb, text: "Guides your business expansion" },
      { icon: BarChart3, text: "Educates you on business growth" },
      { icon: PenTool, text: "Polishes business strategy" },
    ],
  },
  {
    name: "Penn",
    role: "Copywriter",
    image: "/assets/coworker-penn.png",
    color: "from-teal-400 to-emerald-300",
    features: [
      { icon: PenTool, text: "Generates website copy" },
      { icon: MessageSquare, text: "Creates your brands voice" },
      { icon: PenTool, text: "Writes engaging brand copy" },
    ],
  },
  {
    name: "Scout",
    role: "Recruiter",
    image: "/assets/coworker-scout.png",
    color: "from-emerald-400 to-teal-300",
    features: [
      { icon: Users, text: "Creates role briefs" },
      { icon: MessageSquare, text: "Creates employee structure" },
      { icon: Users, text: "Prepares you for hiring calls" },
    ],
  },
]

export function CoworkersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section className="py-24 md:py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2">
          <span className="text-white">AI coworkers that slot into your workflow.</span>
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-12">
          Set up once. Then... it just works. (Wild, we know.)
        </p>
 
        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {coworkers.map((coworker) => (
              <div
                key={coworker.name}
                className="flex-shrink-0 w-[280px] md:w-[300px] rounded-3xl overflow-hidden"
              >
                {/* Character card */}
                <div className={`relative h-[320px] bg-gradient-to-b ${coworker.color} p-4`}>
                  <p className="text-white/80 text-sm">{coworker.role}</p>
                  <h3 className="text-white text-5xl font-serif italic mt-1">{coworker.name}</h3>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[280px]">
                    <Image
                      src={coworker.image}
                      alt={coworker.name}
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>

                {/* Features */}
                <div className="bg-surface-elevated p-4 space-y-3">
                  {coworker.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <feature.icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full bg-surface-elevated flex items-center justify-center disabled:opacity-30 transition-opacity hover:bg-white/10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full bg-surface-elevated flex items-center justify-center disabled:opacity-30 transition-opacity hover:bg-white/10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all hover:scale-105 w-full max-w-md justify-center">
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
