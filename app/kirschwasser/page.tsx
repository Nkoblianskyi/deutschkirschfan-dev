import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Droplets, Thermometer, Clock, MapPin, Grape, Leaf, FlaskConical } from "lucide-react"

export const metadata: Metadata = {
  title: "Kirschwasser - Der vollständige Leitfaden",
  description: "Ausführliche Informationen über Kirschwasser - den traditionellen deutschen Kirschbrand aus dem Schwarzwald. Geschichte, Herstellung, Eigenschaften.",
}

export default function KirschwasserPage() {
  return (
    <article className="pt-24 sm:pt-28">
      {/* Hero */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-kirsch.jpg"
            alt="Kirschwasser"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>

          <div className="max-w-3xl">
            <span className="text-primary text-xs sm:text-sm uppercase tracking-widest font-medium">
              Vollständiger Leitfaden
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
              Kirschwasser
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Klarer Obstbrand, der aus sorgfältig ausgewählten Kirschen 
              der Schwarzwald-Region hergestellt wird. Das einzigartige Mandelaroma 
              entsteht durch die Destillation zusammen mit den Kirschkernen.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10">
              <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-card rounded-lg border border-border">
                <Thermometer className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <div>
                  <p className="text-foreground font-semibold text-sm sm:text-base">40-45%</p>
                  <p className="text-xs text-muted-foreground">Alkoholgehalt ABV</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-card rounded-lg border border-border">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <div>
                  <p className="text-foreground font-semibold text-sm sm:text-base">Schwarzwald</p>
                  <p className="text-xs text-muted-foreground">Herkunftsregion</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-card rounded-lg border border-border">
                <Droplets className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <div>
                  <p className="text-foreground font-semibold text-sm sm:text-base">Kristallklar</p>
                  <p className="text-xs text-muted-foreground">Farbe des Getränks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* What is Kirschwasser */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Was ist Kirschwasser?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  Kirschwasser (wörtlich &quot;Kirschwasser&quot;) ist ein klarer Obstbrand, 
                  der durch doppelte Destillation von vergorenen Kirschen hergestellt wird. 
                  Im Gegensatz zu vielen anderen Obstbränden wird Kirschwasser zusammen 
                  mit den Kirschkernen destilliert, was dem Getränk sein charakteristisches 
                  feines Mandelaroma verleiht.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  Traditionell werden für die Herstellung dunkle Sauerkirschen der Sorte Morello 
                  oder ähnliche lokale Sorten verwendet, die in den Kirschgärten des Schwarzwaldes 
                  wachsen. Die Qualität des Endprodukts hängt direkt von der Qualität der Rohstoffe ab — 
                  für die Herstellung eines Liters Kirschwasser werden etwa 10-12 Kilogramm 
                  frische Kirschen benötigt.
                </p>
              </div>
            </div>

            {/* Production Process */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Herstellungsprozess
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden">
                  <Image
                    src="/images/distillery.jpg"
                    alt="Destillationsprozess"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden">
                  <Image
                    src="/images/black-forest.jpg"
                    alt="Kirschgärten im Schwarzwald"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-primary/10 text-primary shrink-0">
                    <Grape className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                      1. Ernte und Vorbereitung
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Die Kirschen werden zur Zeit der optimalen Reife geerntet — normalerweise im Juli-August. 
                      Die Früchte werden sorgfältig ausgewählt und beschädigte Exemplare entfernt. 
                      Wichtig ist, dass die Kerne verbleiben — sie enthalten Amygdalin, 
                      das sich während der Destillation zersetzt und das charakteristische Mandelaroma bildet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-primary/10 text-primary shrink-0">
                    <Leaf className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                      2. Fermentation
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Die zerkleinerten Kirschen mit Kernen werden in große Gärbehälter gegeben. 
                      Natürliche Hefen auf der Fruchtschale oder speziell zugesetzte 
                      Kulturstämme wandeln den Zucker über 2-4 Wochen in Alkohol um. 
                      Die Prozesstemperatur wird sorgfältig kontrolliert, um die Aromen zu bewahren.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-primary/10 text-primary shrink-0">
                    <FlaskConical className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                      3. Destillation
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Die vergorene Maische durchläuft eine doppelte Destillation in kupfernen Brennblasen. 
                      Bei der ersten Destillation entsteht &quot;Rohwein&quot;, der dann ein zweites Mal 
                      destilliert wird. Der Meisterbrenner trennt sorgfältig &quot;Vorlauf&quot; und &quot;Nachlauf&quot; 
                      vom &quot;Herzstück&quot; — dem reinsten Teil des Destillats.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-primary/10 text-primary shrink-0">
                    <Clock className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                      4. Reifung und Abfüllung
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Im Gegensatz zu Cognac oder Whisky wird Kirschwasser traditionell nicht 
                      in Eichenfässern gereift — dies bewahrt seine Klarheit. Stattdessen 
                      &quot;ruht&quot; das Getränk in Glas- oder Keramikbehältern von einigen Monaten 
                      bis zu mehreren Jahren, wodurch sich die Aromen harmonisieren können.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* History */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Geschichte des Getränks
              </h2>
              <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-border">
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-l-4 border-primary pl-4 sm:pl-6">
                    <span className="text-3xl sm:text-4xl font-bold text-primary/30">16. Jh.</span>
                    <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                      Erste dokumentarische Erwähnungen der Kirschbranddestillation in der 
                      Schwarzwald-Region. Mönche nutzten das Getränk zu Heilzwecken.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4 sm:pl-6">
                    <span className="text-3xl sm:text-4xl font-bold text-accent/30">17. Jh.</span>
                    <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                      Kirschwasser beginnt, bei der lokalen Bevölkerung an Popularität zu gewinnen. 
                      Die ersten privaten Destillerien entstehen.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4 sm:pl-6">
                    <span className="text-3xl sm:text-4xl font-bold text-primary/30">18. Jh.</span>
                    <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                      Das Getränk erlangt Anerkennung in ganz Europa. Die Schweiz und das Elsass 
                      entwickeln ebenfalls ihre eigenen Herstellungstraditionen.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4 sm:pl-6">
                    <span className="text-3xl sm:text-4xl font-bold text-accent/30">19. Jh.</span>
                    <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                      Kirschwasser wird zu einer unverzichtbaren Zutat der berühmten 
                      &quot;Schwarzwälder Kirschtorte&quot;.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4 sm:pl-6">
                    <span className="text-3xl sm:text-4xl font-bold text-primary/30">21. Jh.</span>
                    <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                      Echter Schwarzwälder Kirschwasser erhält eine geschützte geografische 
                      Angabe in der EU, die die Authentizität der Herkunft garantiert.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Characteristics */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Sensorische Eigenschaften
              </h2>
              
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-foreground/10 border-2 border-foreground/30" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-2 text-sm sm:text-base">Farbe</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Kristallklar, ohne jegliche Färbung
                  </p>
                </div>

                <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Droplets className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-2 text-sm sm:text-base">Aroma</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Intensives Kirscharoma mit feinen Mandel- und Marzipannoten
                  </p>
                </div>

                <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Thermometer className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-2 text-sm sm:text-base">Geschmack</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Reiner Fruchtgeschmack mit sanftem Mandelnachklang, ohne Süße
                  </p>
                </div>
              </div>
            </div>

            {/* Usage */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Verwendung
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    Digestif
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Traditionell wird er gekühlt als Digestif nach dem Essen serviert. 
                    Empfohlene Serviertemperatur: 12-16°C. Kleine Portionen 
                    (20-30 ml) in speziellen Brandygläsern.
                  </p>
                </div>

                <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    Küche
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Unverzichtbare Zutat der &quot;Schwarzwälder Kirschtorte&quot;. 
                    Wird auch zum Flambieren von Früchten, in Saucen 
                    und zum Aromatisieren von Schokoladenprodukten verwendet.
                  </p>
                </div>

                <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    Cocktails
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Basis für klassische Cocktails wie Rose oder Singapore Sling. 
                    Verleiht Getränken auf Basis anderer Spirituosen 
                    fruchtige Tiefe und Komplexität.
                  </p>
                </div>

                <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    Fondue
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Klassische Zutat des Schweizer Käsefondues. 
                    Wird zur Geschmacksverbesserung hinzugefügt und hilft, 
                    die Homogenität der Käsemasse zu bewahren.
                  </p>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="text-center pt-6 sm:pt-8 border-t border-border">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm sm:text-base"
              >
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
