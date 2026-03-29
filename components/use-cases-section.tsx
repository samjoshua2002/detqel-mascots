"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Check, Loader2, AlertCircle, Trash2, Send, ThumbsUp, ThumbsDown, Globe } from "lucide-react"

function useOnScreen(ref: React.RefObject<Element | null>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
      threshold: 0.1,
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return isIntersecting
}

interface UseCaseCardProps {
  name: string
  role: string
  message: string
  characterImg: string
  children?: React.ReactNode
  gradient?: string
  index: number
}

function UseCaseCard({ name, role, message, characterImg, children, gradient, index }: UseCaseCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)

  return (
    <div
      ref={ref}
      className={`group relative rounded-[2.5rem] overflow-hidden p-8 lg:p-12 min-h-[480px] bg-surface-container-low border border-white/5 shadow-2xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Accent Glow */}
      <div className={`absolute -top-24 -left-24 w-64 h-64 blur-3xl rounded-full opacity-20 pointer-events-none ${gradient || "bg-primary"}`} />

      {/* Content */}
      <div className="relative z-20 space-y-6 max-w-full lg:max-w-[65%]">
        {/* Quote icon */}
        <div className="text-white/40">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
          </svg>
        </div>

        {/* Quote text */}
        <div className="space-y-2">
          <h3 className="text-2xl lg:text-3xl font-medium leading-tight">
            <span className="text-on-surface font-bold">{name},</span>
            <br />
            <span className="text-on-surface-muted leading-relaxed">{message}</span>
          </h3>
          <p className="text-sm font-semibold text-secondary uppercase tracking-[0.2em]">{role}</p>
        </div>

        {/* Inner Card (UI Slice) */}
        <div className="relative transform transition-transform group-hover:-translate-y-1">
          {children}
        </div>
      </div>

      {/* Character Image - Now contained within the card */}
      <div className="absolute bottom-0 right-0 w-64 md:w-80 h-[380px] md:h-[480px] z-30 pointer-events-none drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105">
        <Image
          src={characterImg}
          alt={name}
          fill
          className="object-contain object-right-bottom"
        />
      </div>
    </div>
  )
}

export function UseCasesSection() {
  return (
    <section className="py-24 md:py-40 bg-surface overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-on-surface">
            Automation that <span className="text-tertiary">feels like teamwork.</span>
          </h2>
          <p className="text-xl text-on-surface-muted max-w-2xl">
            Our AI coworkers don&apos;t just follow directions; they understand your business.
            Choose a teammate and watch them handle the complexity for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Cassie - Support */}
          <UseCaseCard
            index={0}
            name="Cassie"
            role="Support Specialist"
            message="respond to all inquiries from today."
            characterImg="/assets/ai-assistant-female.png"
            gradient="bg-blue-500"
          >
            <div className="bg-white rounded-3xl p-5 shadow-2xl border border-blue-100 max-w-sm">
              <div className="flex items-center gap-3 mb-4 bg-blue-50/80 rounded-2xl p-3">
                <Image
                  src="/assets/cassie-avatar.png"
                  alt="Cassie"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <p className="text-gray-700 text-xs font-medium">
                  Emily is asking about opening hours and pricing...
                </p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4 py-1 mb-6">
                <p className="text-gray-800 text-sm italic font-medium">
                  &quot;We&apos;re open Mon-Fri, 9 AM to 6 PM. Would you like me to reserve a slot?&quot;
                </p>
              </div>
              <div className="flex justify-between items-center bg-gray-50 rounded-2xl p-3">
                 <button className="text-gray-400 text-xs flex items-center gap-1">
                   <Trash2 className="w-3 h-3" /> Cancel
                 </button>
                 <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                   Send <Send className="w-3 h-3" />
                 </button>
              </div>
            </div>
          </UseCaseCard>

          {/* Soshie - Marketing */}
          <UseCaseCard
            index={1}
            name="Soshie"
            role="Growth Specialist"
            message="make this brand go viral."
            characterImg="/assets/ai-assistant-female.png"
            gradient="bg-purple-600"
          >
            <div className="bg-white rounded-3xl p-5 shadow-2xl border border-purple-100 max-w-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500" />
                </div>
                <div>
                   <p className="text-gray-800 font-bold text-sm">Campaign Draft</p>
                   <p className="text-gray-400 text-xs">Ready for review</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                   <div className="h-full w-4/5 bg-purple-500" />
                </div>
                <div className="h-2 w-2/3 bg-gray-100 rounded-full" />
              </div>
              <div className="flex items-center justify-around border-t pt-4">
                <ThumbsDown className="w-5 h-5 text-gray-300 pointer-events-auto" />
                <ThumbsUp className="w-5 h-5 text-purple-600 cursor-pointer" />
              </div>
            </div>
          </UseCaseCard>

          {/* Milli - Sales */}
          <UseCaseCard
            index={2}
            name="Milli"
            role="Sales Expert"
            message="build me a winning sales playbook."
            characterImg="/assets/ai-assistant-female.png"
            gradient="bg-pink-500"
          >
             <div className="space-y-3 max-w-xs">
              <TaskCard
                avatar="/assets/ai-assistant-male.png"
                title="Lead Qualification"
                status="done"
                action="View"
              />
              <TaskCard
                avatar="/assets/ai-assistant-male.png"
                title="Sales Deck Creation"
                status="working"
                statusText="Designing..."
                action="View"
              />
            </div>
          </UseCaseCard>

          {/* Penn - Copywriting */}
          <UseCaseCard
            index={3}
            name="Penn"
            role="Conversion Copywriter"
            message="re-write my landing page headline."
            characterImg="/assets/ai-assistant-female.png"
            gradient="bg-teal-500"
          >
            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-teal-100 max-w-sm">
               <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Brand Voice</span>
               </div>
               <h4 className="text-gray-800 font-bold text-lg mb-2">Original Headline:</h4>
               <p className="text-gray-400 text-sm line-through mb-4">We sell good products for you.</p>
               <h4 className="text-teal-600 font-bold text-lg mb-2">Penn&apos;s Suggestion:</h4>
               <p className="text-gray-800 text-sm font-medium italic">&quot;Transform your business with AI that actually works for you.&quot;</p>
            </div>
          </UseCaseCard>
        </div>
      </div>
    </section>
  )
}

function TaskCard({
  avatar,
  icon,
  title,
  status,
  statusText,
  action,
}: {
  avatar?: string
  icon?: React.ReactNode
  title: string
  status: "done" | "working" | "review"
  statusText?: string
  action: string
}) {
  return (
    <div className="bg-white rounded-2xl px-4 py-3 flex items-center justify-between shadow-xl border border-gray-100">
      <div className="flex items-center gap-3">
        {avatar ? (
          <Image src={avatar} alt="" width={40} height={40} className="rounded-full" />
        ) : (
          icon
        )}
        <div>
          <p className="text-gray-900 font-bold text-sm">{title}</p>
          <div className="flex items-center gap-1 mt-0.5">
            {status === "done" && (
              <>
                <Check className="w-3.5 h-3.5 text-green-500" />
                <span className="text-green-600 text-[10px] font-bold uppercase">Done</span>
              </>
            )}
            {status === "working" && (
              <>
                <Loader2 className="w-3.5 h-3.5 text-blue-500 animate-spin" />
                <span className="text-blue-600 text-[10px] font-bold uppercase">{statusText || "Working"}</span>
              </>
            )}
            {status === "review" && (
              <>
                <AlertCircle className="w-3.5 h-3.5 text-orange-500" />
                <span className="text-orange-600 text-[10px] font-bold uppercase">Review</span>
              </>
            )}
          </div>
        </div>
      </div>
      <button className="px-4 py-2 bg-gray-100/50 hover:bg-gray-100 rounded-full text-gray-700 text-xs font-bold transition-colors">
        {action}
      </button>
    </div>
  )
}
