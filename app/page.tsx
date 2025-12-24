import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { PlatformOverview } from '@/components/sections/PlatformOverview'
import { ProductDetails } from '@/components/sections/ProductDetails'
import { AchievementsSection } from '@/components/sections/AchievementsSection'
import { IndustriesSection } from '@/components/sections/IndustriesSection'
import { ClientsSection } from '@/components/sections/ClientsSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PlatformOverview />
      <ProductDetails />
      <AchievementsSection />
      <IndustriesSection />
      <ClientsSection />
      <Footer />
    </main>
  )
}

