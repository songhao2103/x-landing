import { ApproachSection } from '@/components/sections/ApproachSection'
import { HeroProductSection } from '@/components/sections/HeroProductSection'
import { ProductBenefitsSection } from '@/components/sections/ProductBenefitsSection'
import { ProductHowItWorksSection } from '@/components/sections/ProductHowItWorksSection'
import { ProductWhySection } from '@/components/sections/ProductWhySection'
import { vi } from '@/lib/locales/vi'

export default function XPromoPage() {
  const product = vi.products.xpromo

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroProductSection />

      <ApproachSection />

      {/* Benefits Section */}
      <ProductBenefitsSection />

      {/* How it works */}
      <ProductHowItWorksSection />

      {/* Why Choose XPromo */}
      <ProductWhySection />
    </main>
  )
}
