import { BreweryBeerCultureSection } from "@/components/brewery-beer-culture-section"
import { HeroSection } from "@/components/hero-section"
import { StrongSpiritSection } from "@/components/strong-spirit-section"
import { HistorySection } from "@/components/history-section"
import { LocalSpiritsSection } from "@/components/local-spirits-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StrongSpiritSection />
      <HistorySection />
      <BreweryBeerCultureSection />
      <LocalSpiritsSection />
    </>
  )
}
