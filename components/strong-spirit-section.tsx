import Image from "next/image"
import { Flame, Thermometer, Clock } from "lucide-react"

export function StrongSpiritSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/strong-spirit.jpg"
              alt="Hochprozentiger Kirschwasser"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            
            {/* Floating badge */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="bg-background/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Maximaler Alkoholgehalt</p>
                    <p className="text-xl sm:text-2xl font-bold text-primary">Bis zu 50% ABV</p>
                  </div>
                  <Flame className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary text-xs sm:text-sm uppercase tracking-widest font-medium">
              Premium-Kategorie
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6 text-balance">
              Hochprozentiger Kirschwasser
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Neben dem Standard-Kirschwasser mit 40-45% Alkoholgehalt gibt es 
              Premium-Versionen mit höherem Alkoholgehalt. Diese Spirituosen 
              durchlaufen eine zusätzliche Destillation und Reifung, was ihnen 
              einen intensiveren Geschmack verleiht.
            </p>

            {/* Features */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Thermometer className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1 text-sm sm:text-base">Doppelte Destillation</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Zusätzlicher Reinigungsprozess für höhere Konzentration
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1 text-sm sm:text-base">Lange Reifung</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Lagerung in Keramik- oder Glasbehältern zur Erhaltung der Reinheit
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Flame className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1 text-sm sm:text-base">Konzentriertes Aroma</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Intensiver Kirschgeschmack mit ausgeprägten Mandelnoten von den Kernen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
