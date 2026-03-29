"use client"

import Image from "next/image"
import { Check } from "lucide-react"

interface TaskCardProps {
  avatar: string
  title: string
  status: "Completed" | "Scheduled"
  delay?: number
}

export function TaskCard({ avatar, title, status, delay = 0 }: TaskCardProps) {
  return (
    <div
      className="flex items-center gap-3 md:gap-4 rounded-3xl bg-surface-container-highest/80 backdrop-blur-sm px-4 md:px-5 py-3 md:py-4 shadow-lg ghost-border animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0 rounded-full overflow-hidden">
        <Image
          src={avatar}
          alt="AI Assistant"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-on-surface font-medium truncate text-sm md:text-base">{title}</p>
        <div className="flex items-center gap-1.5 text-success">
          <Check className="h-3.5 w-3.5 md:h-4 md:w-4" />
          <span className="text-xs md:text-sm font-medium">{status}</span>
        </div>
      </div>
      <button className="flex-shrink-0 rounded-full bg-surface-container-high/80 px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium text-on-surface-variant hover:bg-surface-container/80 transition-colors whitespace-nowrap">
        View
      </button>
    </div>
  )
}

export function TaskCardsStack() {
  const tasks = [
    {
      avatar: "/assets/ai-assistant-male.png",
      title: "Email inquiry responded",
      status: "Completed" as const,
    },
    {
      avatar: "/assets/ai-assistant-female.png",
      title: "Keywords researched",
      status: "Completed" as const,
    },
    {
      avatar: "/assets/ai-assistant-female.png",
      title: "Scheduled a post",
      status: "Scheduled" as const,
    },
  ]

  return (
    <div className="space-y-4 max-w-md">
      {tasks.map((task, index) => (
        <TaskCard
          key={task.title}
          avatar={task.avatar}
          title={task.title}
          status={task.status}
          delay={index * 150}
        />
      ))}
    </div>
  )
}
