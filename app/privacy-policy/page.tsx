import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von deutschkirschfan.com - wie wir Ihre personenbezogenen Daten erfassen, verwenden und schützen.",
}

export default function PrivacyPolicyPage() {
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
                  Datenschutzerklärung
                </h1>
                <div className="flex items-center gap-2 mt-2 text-muted-foreground text-xs sm:text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Letzte Aktualisierung: 2026</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Diese Datenschutzerklärung erläutert, wie deutschkirschfan.com Ihre
              personenbezogenen Daten bei der Nutzung unserer Website erfasst,
              verwendet und schützt.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 sm:space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                1. Allgemeine Bestimmungen
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  Verantwortlicher für die Verarbeitung personenbezogener Daten ist deutschkirschfan.com
                  (nachfolgend &quot;wir&quot;, &quot;uns&quot; oder &quot;unser&quot;). Wir respektieren Ihre Privatsphäre und
                  verpflichten uns, Ihre personenbezogenen Daten gemäß den geltenden Datenschutzgesetzen,
                  einschließlich der Datenschutz-Grundverordnung (DSGVO), zu schützen.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Diese Richtlinie gilt für alle Besucher unserer Website deutschkirschfan.com
                  und beschreibt unsere Praktiken bezüglich der Erfassung, Verwendung und
                  Offenlegung von Informationen.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                2. Welche Daten wir erfassen
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    2.1 Daten, die Sie direkt angeben
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                    <li>Kontaktdaten (Name, E-Mail) beim Ausfüllen des Kontaktformulars</li>
                    <li>Inhalt der Nachrichten, die Sie uns senden</li>
                    <li>Alle anderen Informationen, die Sie freiwillig angeben</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    2.2 Automatisch erfasste Daten
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                    <li>IP-Adresse und Geolokalisierung (Land/Region)</li>
                    <li>Browser- und Betriebssystemtyp</li>
                    <li>Datum und Uhrzeit des Besuchs</li>
                    <li>Aufgerufene Seiten</li>
                    <li>Verweisquelle auf die Website</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                3. Wie wir Ihre Daten verwenden
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  Wir verwenden die erfassten Daten für folgende Zwecke:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                  <li>Beantwortung Ihrer Anfragen und Nachrichten</li>
                  <li>Verbesserung der Funktionalität und des Inhalts unserer Website</li>
                  <li>Analyse von Besucherzahlen und Nutzerverhalten</li>
                  <li>Gewährleistung der Sicherheit und Betrugsprävention</li>
                  <li>Erfüllung unserer rechtlichen Verpflichtungen</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                4. Rechtsgrundlage der Datenverarbeitung
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  Wir verarbeiten Ihre personenbezogenen Daten auf folgenden Rechtsgrundlagen:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                  <li><strong className="text-foreground">Einwilligung</strong> — wenn Sie uns eine ausdrückliche Einwilligung zur Datenverarbeitung erteilen</li>
                  <li><strong className="text-foreground">Berechtigtes Interesse</strong> — für die Analyse und Verbesserung unserer Website</li>
                  <li><strong className="text-foreground">Vertragserfüllung</strong> — zur Beantwortung Ihrer Anfragen</li>
                  <li><strong className="text-foreground">Rechtliche Verpflichtung</strong> — wenn dies gesetzlich vorgeschrieben ist</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                5. Cookies
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Unsere Website verwendet Cookies zur Verbesserung Ihrer Nutzungserfahrung.
                  Detaillierte Informationen über die von uns verwendeten Cookie-Typen
                  und wie Sie diese verwalten können, finden Sie in unserer{" "}
                  <Link href="/cookie-policy" className="text-primary hover:underline">
                    Cookie-Richtlinie
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                6. Weitergabe von Daten an Dritte
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  Wir können Ihre Daten an folgende Empfängerkategorien weitergeben:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                  <li>Hosting- und technische Support-Anbieter</li>
                  <li>Analysedienste (z.B. Google Analytics)</li>
                  <li>Strafverfolgungsbehörden, wenn gesetzlich vorgeschrieben</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 text-sm sm:text-base">
                  Wir verkaufen oder übertragen Ihre personenbezogenen Daten nicht
                  zu Marketingzwecken an Dritte.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                7. Ihre Rechte
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  Gemäß der DSGVO haben Sie folgende Rechte:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                  <li><strong className="text-foreground">Auskunftsrecht</strong> — eine Kopie Ihrer Daten erhalten</li>
                  <li><strong className="text-foreground">Recht auf Berichtigung</strong> — unrichtige Daten korrigieren</li>
                  <li><strong className="text-foreground">Recht auf Löschung</strong> — die Löschung Ihrer Daten verlangen</li>
                  <li><strong className="text-foreground">Recht auf Einschränkung der Verarbeitung</strong> — die Verwendung Ihrer Daten einschränken</li>
                  <li><strong className="text-foreground">Recht auf Datenübertragbarkeit</strong> — Daten in maschinenlesbarem Format erhalten</li>
                  <li><strong className="text-foreground">Widerspruchsrecht</strong> — der Datenverarbeitung widersprechen</li>
                  <li><strong className="text-foreground">Recht auf Widerruf der Einwilligung</strong> — eine erteilte Einwilligung jederzeit widerrufen</li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                8. Datenspeicherung
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Wir speichern Ihre personenbezogenen Daten nur für den Zeitraum, der zur
                  Erreichung der in dieser Richtlinie beschriebenen Zwecke erforderlich ist,
                  oder gemäß den gesetzlichen Anforderungen. Kontaktformulardaten werden
                  2 Jahre ab dem letzten Kontakt gespeichert. Analysedaten werden bis zu
                  26 Monate gespeichert.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                9. Datensicherheit
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Wir implementieren angemessene technische und organisatorische Maßnahmen
                  zum Schutz Ihrer personenbezogenen Daten vor unbefugtem Zugriff, Änderung,
                  Offenlegung oder Vernichtung. Dazu gehören SSL/TLS-Verschlüsselung,
                  regelmäßige Software-Updates und eingeschränkter Datenzugriff.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                10. Änderungen der Richtlinie
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren.
                  Über wesentliche Änderungen informieren wir Sie durch Veröffentlichung
                  einer neuen Version auf dieser Seite mit aktualisiertem Datum.
                  Wir empfehlen, diese Richtlinie regelmäßig zu überprüfen.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                11. Kontakt
              </h2>
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  Bei Fragen zu dieser Datenschutzerklärung oder wenn Sie Ihre Rechte
                  ausüben möchten, kontaktieren Sie uns über das{" "}
                  <Link href="/about" className="text-primary hover:underline">
                    Kontaktformular
                  </Link>{" "}
                  auf unserer Website.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Sie haben auch das Recht, eine Beschwerde bei der zuständigen
                  Datenschutzaufsichtsbehörde in Ihrem Land einzureichen, wenn Sie
                  der Meinung sind, dass die Verarbeitung Ihrer Daten gegen geltendes
                  Recht verstößt.
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
