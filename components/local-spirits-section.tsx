import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Beer, Wine, Grape } from "lucide-react"

const spirits = [
  {
    name: "Obstler",
    description: "Obstbrand aus Äpfeln und Birnen",
    strength: "38-40%",
    icon: Grape,
  },
  {
    name: "Weizenbier",
    description: "Traditionelles bayerisches Weißbier",
    strength: "4,5-5,5%",
    icon: Beer,
  },
  {
    name: "Zwetschgenwasser",
    description: "Zwetschgenbrand aus Bayern",
    strength: "40-45%",
    icon: Wine,
  },
]

export function LocalSpiritsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-card relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-primary mb-3 sm:mb-4">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm uppercase tracking-widest font-medium">
                Schwarzwald-Region
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
              Regionale Spirituosen Deutschlands
            </h2>
            
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              Neben dem berühmten Kirschwasser ist die Region für ihre Vielfalt 
              an traditionellen Getränken bekannt — von Obstbränden bis hin zu 
              klassischem deutschen Bier.
            </p>

            {/* Spirit Cards */}
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {spirits.map((spirit) => (
                <div
                  key={spirit.name}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background rounded-lg sm:rounded-xl border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <spirit.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-foreground font-semibold text-sm sm:text-base truncate">{spirit.name}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm truncate">{spirit.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-primary font-bold text-sm sm:text-base">{spirit.strength}</span>
                    <p className="text-muted-foreground text-xs">ABV</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/local-spirits"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-all group text-sm sm:text-base"
            >
              Alle Getränke entdecken
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image Grid */}
          <div className="relative mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src="/images/local-spirits.jpg"
                    alt="Regionale deutsche Getränke"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-primary rounded-xl sm:rounded-2xl p-4 sm:p-6 text-primary-foreground">
                  <p className="text-2xl sm:text-3xl font-bold">500+</p>
                  <p className="text-xs sm:text-sm opacity-90">Jahre Tradition</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <div className="bg-secondary rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <p className="text-2xl sm:text-3xl font-bold text-secondary-foreground">1000+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Destillerien in der Region</p>
                </div>
                <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src="/images/distillery.jpg"
                    alt="Traditionelle Destillerie"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
