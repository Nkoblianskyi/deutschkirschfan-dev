import Link from "next/link"
import {
  ArrowRight,
  Beer,
  Building2,
  ChefHat,
  Landmark,
  Palette,
  Sparkles,
  Trees,
} from "lucide-react"

const highlights = [
  {
    icon: Building2,
    title: "Brauereien & Bierbars",
    text: "Von Familienbetrieben und Gasthausbrauereien bis zu kleinen Craft-Brauereien: oft trinkt man das Bier dort, wo es gebraut wird. Urige Stuben, helle Taprooms und traditionelle Bierhallen ergänzen sich.",
    accent: "primary" as const,
  },
  {
    icon: Trees,
    title: "Biergärten & Ausschenken",
    text: "Unter Kastanien und Lampions, mit Kieselboden und langen Tischen — der Biergarten ist Kultur im Freien. Viele Lokale verbinden Ausschank mit einfacher Brotzeit und regionaler Küche.",
    accent: "accent" as const,
  },
  {
    icon: Sparkles,
    title: "Brauchtum & Tradition",
    text: "Das Reinheitsgebot von 1516, Volksfeste, Stammtische und Brauchtum rund ums Bier prägen das gesellschaftliche Leben. Keller- und Rauchbiertraditionen erzählen von jahrhundertelanger Handwerkssorge.",
    accent: "primary" as const,
  },
  {
    icon: Palette,
    title: "Ambiente & Gestaltung",
    text: "Sichtbare Kupferkessel, Fachwerk und Holz, Zunftzeichen und Emailleschilder: Brauhäuser inszenieren Handwerk und Geschichte. Licht, Material und Anordnung der Gästebereiche wirken oft genauso bewusst wie das Sortiment.",
    accent: "accent" as const,
  },
  {
    icon: ChefHat,
    title: "Rezeptur & Küche",
    text: "Im Sudhaus zählen Malz, Hopfen, Hefe und Wasser — regional variieren Röstung, Hopfensorten und Gärung. In der Brauereigastronomie findet sich Bier auch in Ragouts, Suppen, Teigen und Marinaden wieder.",
    accent: "primary" as const,
  },
  {
    icon: Landmark,
    title: "Regionale Vielfalt",
    text: "Bayern, Franken, Köln oder Norden: jedes Bundesland hat eigene Stile und Rituale. Wer Brauerei und Bierbar besucht, entdeckt neben dem Glas auch Architektur, Feste und lokale Speisen.",
    accent: "accent" as const,
  },
]

export function BreweryBeerCultureSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-20"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.12), transparent 45%), radial-gradient(circle at 80% 60%, hsl(var(--accent) / 0.1), transparent 40%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 text-primary mb-3 sm:mb-4">
            <Beer className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs sm:text-sm font-medium uppercase tracking-widest">
              Brauereien & Bierkultur
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Wo Bier gebraut und gelebt wird
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Deutsche Brauereien und Bierbars sind mehr als Ausschankorte — sie sind Orte
            für Tradition, Gemeinschaft, handwerkliche Rezeptur und oft auch fürs
            regionale Essen. Hier ein Überblick, der Lust macht, tiefer einzusteigen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl sm:rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-5 sm:p-6 hover:border-primary/35 transition-colors"
            >
              <div
                className={
                  item.accent === "primary"
                    ? "mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary"
                    : "mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent"
                }
              >
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/local-spirits#bierkultur-detail"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all group text-sm sm:text-base"
          >
            Mehr zu Bier & Brauereien
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left max-w-xs">
            Auf der Seite zu regionalen Getränken: Stile, Traditionen und Rezeptur im Detail.
          </p>
        </div>
      </div>
    </section>
  )
}
