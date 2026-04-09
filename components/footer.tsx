import Link from "next/link"
import { Wine } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Wine className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span className="text-lg sm:text-xl font-semibold text-foreground">
                deutschkirschfan
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Informationsportal über traditionellen deutschen Kirschbrand Kirschwasser 
              und regionale alkoholische Getränke der Schwarzwald-Region.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-foreground font-medium mb-4 uppercase text-sm tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/kirschwasser" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Kirschwasser
                </Link>
              </li>
              <li>
                <Link href="/local-spirits" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Regionale Spirituosen
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Über uns
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground font-medium mb-4 uppercase text-sm tracking-wider">
              Rechtliches
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Cookie-Richtlinie
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 sm:mt-10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} deutschkirschfan.com. Alle Rechte vorbehalten.
          </p>
          <p className="text-muted-foreground text-xs text-center sm:text-right">
            Nur zu Informationszwecken. Alkoholkonsum schadet der Gesundheit.
          </p>
        </div>
      </div>
    </footer>
  )
}
