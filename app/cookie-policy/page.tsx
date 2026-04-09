import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Cookie, Calendar, Settings, BarChart, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie-Richtlinie",
  description: "Cookie-Richtlinie von deutschkirschfan.com - welche Cookies wir verwenden und wie Sie diese verwalten können.",
}

export default function CookiePolicyPage() {
  return (
    <article className="pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10 sm:mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8 text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Startseite
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Cookie-Richtlinie
                </h1>
                <div className="flex items-center gap-2 mt-2 text-muted-foreground text-xs sm:text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Letzte Aktualisierung: 2026</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Diese Cookie-Richtlinie erklärt, was Cookies sind, welche Arten von Cookies
              unsere Website deutschkirschfan.com verwendet und wie Sie Ihre
              Cookie-Einstellungen verwalten können.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 sm:space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                1. Was sind Cookies?
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  Cookies sind kleine Textdateien, die beim Besuch von Websites auf Ihrem
                  Gerät (Computer, Tablet oder Smartphone) gespeichert werden. Sie helfen
                  Websites, Informationen über Ihren Besuch zu speichern, was nachfolgende
                  Besuche einfacher und nützlicher macht.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Cookies können &quot;persistent&quot; (bleiben für einen bestimmten Zeitraum
                  auf Ihrem Gerät) oder &quot;Session-Cookies&quot; (werden nach dem Schließen
                  des Browsers gelöscht) sein.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                2. Welche Arten von Cookies wir verwenden
              </h2>
              <div className="space-y-4">
                {/* Essential Cookies */}
                <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 text-primary shrink-0 w-fit">
                      <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Notwendige (technische) Cookies
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3">
                        Diese Cookies sind für das Funktionieren der Website unerlässlich.
                        Sie ermöglichen Ihnen, auf der Website zu navigieren und ihre Funktionen
                        zu nutzen. Ohne diese Cookies funktionieren einige Teile der Website
                        möglicherweise nicht ordnungsgemäß.
                      </p>
                      <div className="bg-background rounded-lg p-3 sm:p-4 overflow-x-auto">
                        <table className="w-full text-xs sm:text-sm min-w-[300px]">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-2 text-foreground">Cookie</th>
                              <th className="text-left py-2 text-foreground">Zweck</th>
                              <th className="text-left py-2 text-foreground">Dauer</th>
                            </tr>
                          </thead>
                          <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                              <td className="py-2">cookie-consent</td>
                              <td className="py-2">Speichert Ihre Cookie-Einwilligung</td>
                              <td className="py-2">1 Jahr</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <div className="p-2.5 sm:p-3 rounded-lg bg-accent/10 text-accent shrink-0 w-fit">
                      <BarChart className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Analyse-Cookies
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3">
                        Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer
                        Website interagieren, indem sie anonyme Informationen sammeln.
                        Dies ermöglicht es uns, die Funktion der Website zu verbessern.
                      </p>
                      <div className="bg-background rounded-lg p-3 sm:p-4 overflow-x-auto">
                        <table className="w-full text-xs sm:text-sm min-w-[300px]">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-2 text-foreground">Cookie</th>
                              <th className="text-left py-2 text-foreground">Zweck</th>
                              <th className="text-left py-2 text-foreground">Dauer</th>
                            </tr>
                          </thead>
                          <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                              <td className="py-2">_ga</td>
                              <td className="py-2">Google Analytics - Identifikation</td>
                              <td className="py-2">2 Jahre</td>
                            </tr>
                            <tr className="border-b border-border">
                              <td className="py-2">_gid</td>
                              <td className="py-2">Google Analytics - Sitzung</td>
                              <td className="py-2">24 Stunden</td>
                            </tr>
                            <tr>
                              <td className="py-2">_gat</td>
                              <td className="py-2">Google Analytics - Begrenzung</td>
                              <td className="py-2">1 Minute</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 text-primary shrink-0 w-fit">
                      <Settings className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Funktionale Cookies
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3">
                        Diese Cookies ermöglichen es der Website, Ihre Einstellungen zu
                        speichern und ein personalisiertes Erlebnis zu bieten. Sie können
                        beispielsweise die ausgewählte Sprache oder Region speichern.
                      </p>
                      <div className="bg-background rounded-lg p-3 sm:p-4 overflow-x-auto">
                        <table className="w-full text-xs sm:text-sm min-w-[300px]">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-2 text-foreground">Cookie</th>
                              <th className="text-left py-2 text-foreground">Zweck</th>
                              <th className="text-left py-2 text-foreground">Dauer</th>
                            </tr>
                          </thead>
                          <tbody className="text-muted-foreground">
                            <tr>
                              <td className="py-2">preferences</td>
                              <td className="py-2">Speichert Benutzereinstellungen</td>
                              <td className="py-2">1 Jahr</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                3. Wie Sie Cookies verwalten
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  Beim ersten Besuch unserer Website sehen Sie ein Banner mit der Bitte
                  um Einwilligung zur Verwendung von Cookies. Sie können optionale Cookies
                  akzeptieren oder ablehnen.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  Sie können Cookies auch über Ihre Browsereinstellungen verwalten:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                  <li><strong className="text-foreground">Google Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies</li>
                  <li><strong className="text-foreground">Mozilla Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies</li>
                  <li><strong className="text-foreground">Safari:</strong> Einstellungen → Datenschutz → Website-Daten verwalten</li>
                  <li><strong className="text-foreground">Microsoft Edge:</strong> Einstellungen → Datenschutz → Cookies</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 text-sm sm:text-base">
                  <strong className="text-foreground">Hinweis:</strong> Das Blockieren
                  bestimmter Cookie-Typen kann die Funktion der Website beeinträchtigen
                  und den Zugang zu bestimmten Funktionen einschränken.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                4. Cookies von Drittanbietern
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  Einige Cookies auf unserer Website werden von Dritten gesetzt —
                  Anbietern von Analysediensten und anderen Partnern.
                  Wir verwenden:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                  <li><strong className="text-foreground">Google Analytics:</strong> zur Analyse von Traffic und Nutzerverhalten</li>
                  <li><strong className="text-foreground">Vercel Analytics:</strong> zur Überwachung der Website-Performance</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 text-sm sm:text-base">
                  Diese Dienste haben eigene Datenschutzrichtlinien, mit denen wir Ihnen
                  empfehlen, sich vertraut zu machen.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                5. Aktualisierung der Richtlinie
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren,
                  um Änderungen in unseren Praktiken oder aus anderen betrieblichen,
                  rechtlichen oder regulatorischen Gründen widerzuspiegeln. Das Datum
                  der letzten Aktualisierung ist am Anfang dieses Dokuments angegeben.
                  Wir empfehlen, diese Richtlinie regelmäßig zu überprüfen.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                6. Kontakt
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Bei Fragen zu unserer Verwendung von Cookies kontaktieren Sie uns
                  über das{" "}
                  <Link href="/about" className="text-primary hover:underline">
                    Kontaktformular
                  </Link>{" "}
                  auf unserer Website. Wir empfehlen Ihnen auch, unsere{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </Link>{" "}
                  für weitere Informationen über die Verarbeitung personenbezogener Daten
                  zu lesen.
                </p>
              </div>
            </section>

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
      </div>
    </article>
  )
}
