import { AchievementsSection } from '@/components/sections/AchievementsSection'
import { ClientsSection } from '@/components/sections/ClientsSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { IndustriesSection } from '@/components/sections/IndustriesSection'
import { PlatformOverview } from '@/components/sections/PlatformOverview'
import { ProductDetails } from '@/components/sections/ProductDetails'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <HeroSection />
      <PlatformOverview />
      <ProductDetails />
      <AchievementsSection />
      <IndustriesSection />
      <ClientsSection />

      {/* <Footer /> */}
    </main>
  )
}
