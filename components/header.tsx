"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-secondary-container to-secondary py-2.5 px-4 text-center">
        <div className="flex items-center justify-center gap-3 text-sm font-medium text-surface">
          <span className="text-lg">🌷</span>
          <span>Get up to 70% OFF</span>
          <span className="flex items-center gap-1.5 rounded-full bg-surface/20 px-3 py-1 text-xs font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-surface animate-pulse" />
            07:40:42
          </span>
          <span className="text-lg">🐣</span>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 glass border-b border-outline-variant/10">
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
    </>
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
