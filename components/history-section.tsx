import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HistorySection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 hidden md:block">
        <Image
          src="/images/black-forest.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-primary text-xs sm:text-sm uppercase tracking-widest font-medium">
            Jahrhundertealtes Erbe
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
            Geschichte des Kirschwassers
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Von mittelalterlichen Klöstern zu modernen Destillerien —
            der Weg des legendären Kirschbrands.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/50 transition-colors">
            <span className="text-4xl sm:text-5xl font-bold text-primary/20">XVI</span>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-3 sm:mt-4 mb-2 sm:mb-3">Ursprünge</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Erste Aufzeichnungen über die Destillation von Kirschbrand in der
              Schwarzwald-Region. Mönche nutzten das Getränk zu Heilzwecken.
            </p>
          </div>

          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/50 transition-colors">
            <span className="text-4xl sm:text-5xl font-bold text-primary/20">XVIII</span>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-3 sm:mt-4 mb-2 sm:mb-3">Blütezeit</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Kirschwasser erlangt Popularität in ganz Europa.
              Traditionelle Herstellungsmethoden und Qualitätsstandards entstehen.
            </p>
          </div>

          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/50 transition-colors sm:col-span-2 md:col-span-1">
            <span className="text-4xl sm:text-5xl font-bold text-primary/20">XXI</span>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-3 sm:mt-4 mb-2 sm:mb-3">Gegenwart</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Geschützte geografische Angabe. Moderne Destillerien
              verbinden Tradition mit innovativen Technologien.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/kirschwasser"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all group text-sm sm:text-base"
          >
            Vollständige Geschichte lesen
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
