import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Droplets } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-kirsch.jpg"
          alt="Kirschwasser - traditioneller Kirschbrand"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 md:to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 sm:pt-28 pb-12">
        <div className="max-w-2xl">

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            <span className="text-primary">Kirschwasser</span>
            <br />
            <span className="text-balance">Kirschbrand</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-xl">
            Klarer Obstbrand mit feinem Mandelaroma,
            der im Herzen des Schwarzwaldes entsteht.
            Destillationstradition seit dem 16. Jahrhundert.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10">
            <div className="border-l-2 border-primary pl-3 sm:pl-4">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">40-45%</p>
              <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Alkoholgehalt</p>
            </div>
            <div className="border-l-2 border-accent pl-3 sm:pl-4">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">16. Jh.</p>
              <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Geschichte</p>
            </div>
            <div className="border-l-2 border-muted-foreground pl-3 sm:pl-4">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">100%</p>
              <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Kirschen</p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/kirschwasser"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all group text-sm sm:text-base"
          >
            Mehr erfahren
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
