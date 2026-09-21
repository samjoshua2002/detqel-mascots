"use client"

import { Check, Sparkles } from "lucide-react"

interface CompanionInteractionCardProps {
  avatar: string
  name: string
  series: string
  action: string
  status: "Completed" | "Active" | "Scheduled"
  delay?: number
}

export function CompanionInteractionCard({ 
  avatar, 
  name, 
  series, 
  action, 
  status, 
  delay = 0 
}: CompanionInteractionCardProps) {
  return (
    <div
      className="flex items-center gap-3 md:gap-4 rounded-3xl bg-surface-container-highest/80 backdrop-blur-md px-4 md:px-5 py-3.5 md:py-4 shadow-lg border border-white/5 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-11 w-11 md:h-12 md:w-12 flex-shrink-0 rounded-2xl overflow-hidden border border-white/15">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-white font-bold text-xs md:text-sm truncate">{name}</span>
          <span className="text-[10px] text-tertiary bg-tertiary-container/20 px-1.5 py-0.2 rounded font-medium truncate">
            {series}
          </span>
        </div>
        <p className="text-on-surface-muted text-xs md:text-sm truncate leading-snug">{action}</p>
      </div>
      <div className="flex-shrink-0 flex items-center gap-1 text-success text-xs font-semibold px-2.5 py-1 rounded-full bg-success/10 border border-success/20">
        {status === "Active" ? (
          <>
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-ping" />
            <span>Active</span>
          </>
        ) : status === "Scheduled" ? (
          <>
            <Sparkles className="h-3 w-3 text-warning" />
            <span className="text-warning">Daily</span>
          </>
        ) : (
          <>
            <Check className="h-3 w-3" />
            <span>Synced</span>
          </>
        )}
      </div>
    </div>
  )
}

export function TaskCardsStack() {
  const interactions = [
    {
      name: "Raiden Shogun",
      series: "Genshin",
      avatar: "https://safebooru.org/images/3888/fcd03d8f2930eb0df6254ee6abce38e636858cfb.jpg",
      action: "Inscribed Eternity decree for your morning goals",
      status: "Completed" as const,
    },
    {
      name: "Satoru Gojo",
      series: "Jujutsu Kaisen",
      avatar: "https://server.wallpaperalchemy.com/storage/wallpapers/562/satoru-gojo-4k-anime-wallpaper-jujutsu-kaisen.jpg",
      action: "Erected Infinity barrier against daily distractions",
      status: "Active" as const,
    },
    {
      name: "Furina",
      series: "Genshin",
      avatar: "https://static.wikia.nocookie.net/gensin-impact/images/2/27/Furina_Card.png/revision/latest?cb=20230925100151",
      action: "Prepared Fontaine Opera destiny prophecy for tonight",
      status: "Scheduled" as const,
    },
  ]

  return (
    <div className="space-y-3.5 max-w-lg">
      {interactions.map((item, index) => (
        <CompanionInteractionCard
          key={item.name}
          avatar={item.avatar}
          name={item.name}
          series={item.series}
          action={item.action}
          status={item.status}
          delay={index * 150}
        />
      ))}
    </div>
  )
}
