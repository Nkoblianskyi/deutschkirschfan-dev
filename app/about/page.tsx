import type { Metadata } from "next"
import Image from "next/image"
import { Mail } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Über uns",
  description: "Erfahren Sie mehr über deutschkirschfan - Ihr Informationsportal über deutsche Spirituosen und die Schwarzwaldkultur.",
}

export default function AboutPage() {
  return (
    <article className="pt-24 sm:pt-28">
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/10 mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm text-primary font-medium">Über das Projekt</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              deutschkirschfan
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Informationsportal, das sich den traditionellen deutschen Spirituosen,
              der Herstellungskultur und dem jahrhundertealten Erbe der Schwarzwald-Region widmet.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src="/images/black-forest.jpg"
                alt="Schwarzwald"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <span className="text-primary text-xs sm:text-sm uppercase tracking-widest font-medium">
                Unsere Mission
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
                Wissen bewahren und verbreiten
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Wir haben dieses Portal geschaffen, um unsere Begeisterung für traditionelle
                deutsche Getränke und ihre Herstellungskultur zu teilen. Unser Ziel ist es,
                zuverlässige und interessante Informationen über Kirschwasser,
                Obstbrände und andere regionale Spirituosen zu vermitteln.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Wir verkaufen keinen Alkohol — unsere Website ist ein reines
                Informationsportal für Enthusiasten, die mehr über das reiche kulturelle
                Erbe des Schwarzwaldes und Deutschlands erfahren möchten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-primary text-xs sm:text-sm uppercase tracking-widest font-medium">
                Unsere Werte
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-3 sm:mt-4">
                Warum wir das tun
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">

                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  Bildung
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Wir glauben an die Kraft des Wissens. Wir bieten detaillierte Informationen
                  über Geschichte, Herstellung und Trinkkultur traditioneller Getränke.
                </p>
              </div>

              <div className="text-center">

                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  Tradition
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Wir ehren und fördern jahrhundertealte Traditionen der Spirituosenherstellung,
                  die von Generation zu Generation weitergegeben werden.
                </p>
              </div>

              <div className="text-center sm:col-span-2 md:col-span-1">

                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  Verantwortung
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Wir erinnern stets an den verantwortungsvollen Umgang mit Alkohol.
                  Die Informationen dienen ausschließlich Bildungszwecken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/10 mb-4 sm:mb-6">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                <span className="text-xs sm:text-sm text-primary font-medium">Kontakt</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Schreiben Sie uns
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Haben Sie Fragen oder Anregungen? Wir freuen uns, von Ihnen zu hören!
              </p>
            </div>

            <div className="bg-background rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-border">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 sm:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-xs sm:text-sm">
              <strong className="text-foreground">Hinweis:</strong> Diese Website dient
              ausschließlich Informationszwecken. Wir verkaufen und bewerben keine
              alkoholischen Getränke. Übermäßiger Alkoholkonsum schadet Ihrer Gesundheit.
              Der Inhalt dieser Website richtet sich an Personen, die das gesetzliche
              Mindestalter für Alkoholkonsum in ihrem Land erreicht haben.
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}
