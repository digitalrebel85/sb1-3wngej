import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { FeaturesSection } from "@/components/sections/features-section"

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
    </main>
  )
}