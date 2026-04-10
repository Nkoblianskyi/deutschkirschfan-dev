import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Beer,
  Wine,
  Grape,
  Wheat,
  MapPin,
  Thermometer,
  Building2,
  Trees,
  Palette,
  ChefHat,
  Sparkles,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Regionale Spirituosen Deutschlands",
  description: "Leitfaden zu traditionellen alkoholischen Getränken Deutschlands: Obstbrände, Bier, regionale Spezialitäten aus dem Schwarzwald und Bayern.",
}

const spirits = [
  {
    name: "Obstler",
    category: "Obstbrand",
    description: "Traditioneller Brand aus Äpfeln und Birnen, der in Süddeutschland und Österreich hergestellt wird. Der Name stammt vom deutschen Wort 'Obst'.",
    strength: "38-40%",
    region: "Bayern, Baden-Württemberg",
    icon: Grape,
    details: [
      "Hergestellt aus einer Mischung von Äpfeln und Birnen in verschiedenen Verhältnissen",
      "Klare Farbe, intensives Fruchtaroma",
      "Traditionell als Digestif serviert",
      "Beliebt auf regionalen Bauernmärkten"
    ]
  },
  {
    name: "Zwetschgenwasser",
    category: "Zwetschgenbrand",
    description: "Eleganter Pflaumenbrand aus der besonderen Zwetschgensorte, die im Alpenvorland wächst. Unterscheidet sich vom serbischen Slivovitz durch einen milderen Geschmack.",
    strength: "40-45%",
    region: "Bayern, Schwarzwald",
    icon: Wine,
    details: [
      "Verwendet eine besondere Pflaumensorte mit länglicher Form",
      "Hat ein charakteristisches Fruchtaroma mit Mandelnoten",
      "Wird zusammen mit den Kernen für zusätzliches Aroma destilliert",
      "Oft bis zu einem Jahr in Glasflaschen gereift"
    ]
  },
  {
    name: "Williamsbirne",
    category: "Birnenbrand",
    description: "Raffinierter Brand aus Williams-Christ-Birnen. Gilt als einer der elegantesten Obstbrände dank seines intensiven und reinen Birnenaromas.",
    strength: "40-43%",
    region: "Süddeutschland",
    icon: Grape,
    details: [
      "Ausschließlich aus Williams-Christ-Birnen hergestellt",
      "Kristallklar mit hellem Birnenaroma",
      "Oft mit einer ganzen Birne in der Flasche verkauft",
      "Gekühlt als Premium-Digestif serviert"
    ]
  },
  {
    name: "Korn",
    category: "Kornbrand",
    description: "Traditioneller deutscher Getreidebrannt, der aus Weizen, Roggen oder Gerste hergestellt wird. Einer der beliebtesten Schnäpse in Norddeutschland.",
    strength: "32-38%",
    region: "Norddeutschland",
    icon: Wheat,
    details: [
      "Aus verschiedenen Getreidesorten hergestellt",
      "Doppelkorn — Version mit höherem Alkoholgehalt (38%+)",
      "Traditionell in kleinen Portionen (Kurze) getrunken",
      "Bei der Arbeiterklasse seit dem 18. Jahrhundert beliebt"
    ]
  }
]

const beers = [
  {
    name: "Weizenbier",
    style: "Weißbier",
    description: "Traditionelles bayerisches Weizenbier mit charakteristischem Bananen- und Nelkenaroma. Mindestens 50% des Malzes muss aus Weizen sein.",
    strength: "4,5-5,5%",
    serving: "Spezielles hohes Glas",
  },
  {
    name: "Schwarzbier",
    style: "Dunkles Bier",
    description: "Dunkles Lagerbier mit mildem Geschmack und leichter Bitterkeit. Trotz der dunklen Farbe hat es einen erfrischenden Charakter ohne die Schwere von Stouts.",
    strength: "4,4-5,4%",
    serving: "Traditioneller Bierkrug",
  },
  {
    name: "Helles",
    style: "Helles Lager",
    description: "Klassisches bayerisches helles Bier — trocken, leicht und erfrischend. Weniger bitter als Pilsner, mit Betonung auf dem Malzgeschmack.",
    strength: "4,7-5,4%",
    serving: "Maßkrug",
  },
  {
    name: "Rauchbier",
    style: "Rauchbier",
    description: "Einzigartiges Bier aus Bamberg, hergestellt aus Malz, das über Buchenholzfeuer geräuchert wurde. Hat ein ausgeprägtes Raucharoma und Geschmack.",
    strength: "4,8-6%",
    serving: "Traditionelles fränkisches Glas",
  }
]

export default function LocalSpiritsPage() {
  return (
    <article className="pt-24 sm:pt-28">
      {/* Hero */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/local-spirits.jpg"
            alt="Regionale deutsche Getränke"
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
            <div className="inline-flex items-center gap-2 text-primary mb-3 sm:mb-4">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm uppercase tracking-widest font-medium">
                Regionen Deutschlands
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
              Regionale Spirituosen
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Deutschland ist berühmt für seine reiche Kultur der Getränkeherstellung — 
              vom weltberühmten Bier bis zu raffinierten Obstbränden. 
              Jede Region hat ihre eigenen Traditionen und Spezialitäten.
            </p>
          </div>
        </div>
      </section>

      {/* Fruit Brandies */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-primary text-xs sm:text-sm uppercase tracking-widest font-medium">
                Obstbrände
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 sm:mt-4 mb-3 sm:mb-4">
                Obstwasser und Schnaps
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Süddeutschland ist ein wahres Paradies für Liebhaber von Obstdestillaten. 
                Hier werden Dutzende von Brandyarten aus lokalen Früchten und Beeren hergestellt.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {spirits.map((spirit) => (
                <div
                  key={spirit.name}
                  className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                    <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-primary/10 text-primary shrink-0 self-start">
                      <spirit.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                          {spirit.name}
                        </h3>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                          {spirit.category}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                        {spirit.description}
                      </p>

                      <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="flex items-center gap-2">
                          <Thermometer className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">{spirit.strength}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-xs sm:text-sm text-muted-foreground">{spirit.region}</span>
                        </div>
                      </div>

                      <ul className="grid md:grid-cols-2 gap-2">
                        {spirit.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                            <span className="text-primary mt-0.5">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beer Section */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-primary text-xs sm:text-sm uppercase tracking-widest font-medium">
                Bierkultur
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 sm:mt-4 mb-3 sm:mb-4">
                Deutsches Bier
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Deutschland ist die Heimat des Reinheitsgebots — des Bierreinheitsgesetzes von 1516. 
                Das Land produziert über 5000 Biersorten in mehr als 1300 Brauereien.
              </p>
            </div>

            <div
              id="bierkultur-detail"
              className="scroll-mt-28 mb-10 sm:mb-12 rounded-xl sm:rounded-2xl border border-border bg-background/60 p-5 sm:p-8 md:p-10"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 text-center">
                Brauereien, Bierbars und lebendige Tradition
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base text-center max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
                Viele Besucher verbinden Deutschland zuerst mit Bier — doch hinter dem Glas stehen
                Handwerk, Orte und Bräuche: vom Familienbetrieb bis zur modernen Bar, vom Biergarten
                bis zur sichtbaren Brauküche. Die folgenden Aspekte gehören genauso zur Kultur wie
                Sorte und Alkoholgehalt.
              </p>

              <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                <div className="rounded-lg sm:rounded-xl border border-border p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground">Brauereien & Ausschank</h4>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    <strong className="text-foreground font-medium">Brauereigaststätten</strong> verbinden
                    Sudhaus und Schank: frisches Bier, oft direkt aus dem Lagerkeller.{" "}
                    <strong className="text-foreground font-medium">Bierbars und Taprooms</strong> setzen
                    auf kleine Sortimente, Fasswechsel und erklärende Ausschankkultur — ergänzt durch
                    Snacks oder regionale Küche.
                  </p>
                </div>

                <div className="rounded-lg sm:rounded-xl border border-border p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-lg bg-accent/10 p-2 text-accent">
                      <Trees className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground">Biergärten & Geselligkeit</h4>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Der <strong className="text-foreground font-medium">Biergarten</strong> ist Ritual:
                    eigene Brotzeit mitbringen oder Brezn und Obatzda bestellen, an langen Tischen
                    sitzen. <strong className="text-foreground font-medium">Volksfeste und Stammtische</strong>{" "}
                    zeigen, wie fest Bier in Fest- und Alltagskultur verwoben ist — von der Maß bis zur
                    kleinen Halben.
                  </p>
                </div>

                <div className="rounded-lg sm:rounded-xl border border-border p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground">Brauchtum & Geschichte</h4>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Das <strong className="text-foreground font-medium">Reinheitsgebot</strong> prägt
                    bis heute das Selbstverständnis vieler Brauer. Regional leben{" "}
                    <strong className="text-foreground font-medium">Kellerbierkultur</strong>,{" "}
                    Rauchmalz-Tradition oder Weizenbiergärung weiter — oft mit klaren Namen für Stile
                    und Gläser, die Einheimische sofort erkennen.
                  </p>
                </div>

                <div className="rounded-lg sm:rounded-xl border border-border p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-lg bg-accent/10 p-2 text-accent">
                      <Palette className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground">Raum, Dekor & Atmosphäre</h4>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    <strong className="text-foreground font-medium">Kupferkessel</strong> hinter Glas,
                    Holz, Fliesen und Fachwerk schaffen Wiedererkennung. Historische{" "}
                    <strong className="text-foreground font-medium">Schilder, Krüge und Zunftsymbole</strong>{" "}
                    erzählen von Handwerk und Ort — im Biergarten sorgen Bäume, Schotter und Lampions
                    für eine ruhige, festliche Stimmung.
                  </p>
                </div>

                <div className="md:col-span-2 rounded-lg sm:rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-lg bg-primary/15 p-2 text-primary">
                      <ChefHat className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground">Rezeptur im Sudhaus & auf dem Teller</h4>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Im Braualltag bedeutet <strong className="text-foreground font-medium">Rezeptur</strong>{" "}
                    die genaue Abstimmung von Malzsorten, Hopfen, Hefe und Wasser — Gärungstemperatur
                    und Lagerzeit formen Aroma und Körper. In der{" "}
                    <strong className="text-foreground font-medium">Brauereiküche</strong> taucht Bier als
                    Zutat wieder auf: in Soßen und Eintöpfen, für Teige und Schmorgerichte oder als
                    Begleiter zu deftigen Speisen — ein roter Faden zwischen Brauort und Teller.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {beers.map((beer) => (
                <div
                  key={beer.name}
                  className="bg-background rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="p-2.5 sm:p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                      <Beer className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground">{beer.name}</h3>
                      <span className="text-xs sm:text-sm text-primary">{beer.style}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    {beer.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">{beer.strength}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{beer.serving}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Map Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">
              Regionale Besonderheiten
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  Bayern
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Heimat des berühmten Weizenbiers und der Biergartenkultur. 
                  Das Münchner Oktoberfest ist das größte Bierfest der Welt. 
                  Auch bekannt für Obstbrände aus alpinen Früchten.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 sm:px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Weizenbier</span>
                  <span className="px-2 sm:px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Obstler</span>
                  <span className="px-2 sm:px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Helles</span>
                </div>
              </div>

              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  Schwarzwald
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Die Region ist berühmt für ihre Kirschgärten und die Kirschwasserproduktion. 
                  Hier befinden sich Hunderte kleiner Familiendestillerien, die 
                  Traditionen über Generationen bewahren.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 sm:px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Kirschwasser</span>
                  <span className="px-2 sm:px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Zwetschgenwasser</span>
                  <span className="px-2 sm:px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Williamsbirne</span>
                </div>
              </div>

              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  Franken
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Bierregion mit der höchsten Konzentration von Brauereien weltweit. 
                  Bamberg — Hauptstadt des Rauchbiers. Auch bekannt für 
                  die Weinproduktion im Maintal.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 sm:px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Rauchbier</span>
                  <span className="px-2 sm:px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Kellerbier</span>
                  <span className="px-2 sm:px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Frankenwein</span>
                </div>
              </div>

              <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  Norddeutschland
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Heimat des Korn — des traditionellen Kornbrandweins. Hier sind auch 
                  bittere Aufgüsse und Kräuterliköre beliebt. Die Bierkultur 
                  wird durch Pilsner und Altbier repräsentiert.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 sm:px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Korn</span>
                  <span className="px-2 sm:px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Altbier</span>
                  <span className="px-2 sm:px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Pilsner</span>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="text-center pt-10 sm:pt-12 border-t border-border mt-10 sm:mt-12">
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
