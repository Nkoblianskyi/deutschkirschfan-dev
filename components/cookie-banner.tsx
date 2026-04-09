"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6">
      <div className="container mx-auto">
        <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl max-w-4xl mx-auto relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

            
            <div className="flex-1 pr-8 sm:pr-0">
              <h3 className="text-foreground font-semibold mb-1 text-sm sm:text-base">
                Wir verwenden Cookies
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Um Ihr Erlebnis auf unserer Website zu verbessern, verwenden wir Cookies. 
                Weitere Informationen finden Sie in unserer{" "}
                <Link href="/cookie-policy" className="text-primary hover:underline">
                  Cookie-Richtlinie
                </Link>.
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 border border-border text-foreground rounded-lg hover:bg-secondary transition-colors text-xs sm:text-sm font-medium"
              >
                Ablehnen
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-xs sm:text-sm font-medium"
              >
                Akzeptieren
              </button>
            </div>

            <button
              onClick={handleDecline}
              className="absolute top-3 right-3 sm:static p-1.5 sm:p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Schließen"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
