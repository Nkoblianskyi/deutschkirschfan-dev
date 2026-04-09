"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Wine } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="border-b border-border/60 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 py-1.5 sm:py-2">
          <p className="text-center text-[10px] sm:text-xs leading-snug text-muted-foreground text-balance">
            <span className="font-semibold tabular-nums text-foreground/90">
              18+
            </span>
            <span className="mx-1.5 text-muted-foreground/40" aria-hidden="true">
              |
            </span>
            Diese Website informiert über alkoholische Getränke. Bitte
            verantwortungsvoll genießen. Nicht für Minderjährige bestimmt.
          </p>
        </div>
      </div>
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Wine className="h-5 w-5 sm:h-6 sm:w-6 text-primary transition-transform group-hover:rotate-12" />
            <span className="text-lg sm:text-xl uppercase font-semibold tracking-tight text-foreground">
              deutschkirschfan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
            >
              Startseite
            </Link>
            <Link
              href="/kirschwasser"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
            >
              Kirschwasser
            </Link>
            <Link
              href="/local-spirits"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
            >
              Regionale Spirituosen
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
            >
              Über uns
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pt-4 pb-4 border-t border-border mt-3">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors text-sm uppercase tracking-wider py-3 px-3 rounded-lg"
              >
                Startseite
              </Link>
              <Link
                href="/kirschwasser"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors text-sm uppercase tracking-wider py-3 px-3 rounded-lg"
              >
                Kirschwasser
              </Link>
              <Link
                href="/local-spirits"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors text-sm uppercase tracking-wider py-3 px-3 rounded-lg"
              >
                Regionale Spirituosen
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors text-sm uppercase tracking-wider py-3 px-3 rounded-lg"
              >
                Über uns
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
