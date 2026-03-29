"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 40,
    seconds: 42
  })

  // Timer logic
  useEffect(() => {
    if (!showBanner) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [showBanner])

  const formatTime = (num: number) => num.toString().padStart(2, "0")

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] w-full">
      {/* Promo Banner */}
      {showBanner && (
        <div className="relative bg-gradient-to-r from-secondary-container to-secondary py-2.5 px-4 text-center">
          <div className="flex items-center justify-center gap-3 text-sm font-medium text-surface max-w-7xl mx-auto">
            <span className="text-lg">🌷</span>
            <span className="hidden sm:inline">Spring Sale:</span>
            <span>Get up to 70% OFF</span>
            <span className="flex items-center gap-1.5 rounded-full bg-surface/20 px-3 py-1 text-xs font-semibold tabular-nums">
              <span className="inline-block h-2 w-2 rounded-full bg-surface animate-pulse" />
              {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
            <span className="text-lg">🐣</span>
          </div>
          <button 
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-surface/60 hover:text-surface transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* Navigation */}
      <header className="glass border-b border-outline-variant/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-tight text-on-surface">
                sintra
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <NavItem label="Products" hasDropdown />
              <NavItem label="Features" hasDropdown />
              <NavItem label="Pricing" />
              <NavItem label="Resources" hasDropdown />
              <NavItem label="Careers" />
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="rounded-full bg-primary-container hover:bg-primary-container/90 text-on-surface font-semibold px-6">
                Buy Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-on-surface"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-outline-variant/10 bg-surface-container-low">
            <nav className="flex flex-col p-4 gap-4">
              <MobileNavItem label="Products" />
              <MobileNavItem label="Features" />
              <MobileNavItem label="Pricing" />
              <MobileNavItem label="Resources" />
              <MobileNavItem label="Careers" />
              <Button className="mt-4 w-full rounded-full bg-primary-container hover:bg-primary-container/90 text-on-surface font-semibold">
                Buy Now
              </Button>
            </nav>
          </div>
        )}
      </header>
    </div>
  )
}

function NavItem({ label, hasDropdown }: { label: string; hasDropdown?: boolean }) {
  return (
    <button className="flex items-center gap-1 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">
      {label}
      {hasDropdown && <ChevronDown size={16} className="opacity-60" />}
    </button>
  )
}

function MobileNavItem({ label }: { label: string }) {
  return (
    <Link
      href="#"
      className="text-base font-medium text-on-surface-variant hover:text-on-surface transition-colors py-2"
    >
      {label}
    </Link>
  )
}
