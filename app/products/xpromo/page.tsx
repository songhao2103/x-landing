import { HeroProductSectionProps } from '@/app/type'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ApproachSection } from '@/components/sections/ApproachSection'
import { HeroProductSection } from '@/components/sections/HeroProductSection'
import { ProductBenefitsSection } from '@/components/sections/ProductBenefitsSection'
import { vi } from '@/lib/locales/vi'

export default function XPromoPage() {
  const product = vi.products.xpromo

  const dataIntro: HeroProductSectionProps = {
    logo: '/images/icons/xpromo_logo.svg',
    banner: '/images/backgrounds/xpromo/intro_banner.png',
    image: '/images/icons/xpromo/logo_saas.svg',
    title: 'In-SaaS Promotion Platform',
    description: vi.products.xpromo.description,
    cta: vi.products.xpromo.cta,
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroProductSection
        {...dataIntro}
      />

      <ApproachSection 
        title={vi.products.xpromo.approach.title}
        image={'/images/icons/xpromo/promo_flow.svg'}
      />

      {/* Benefits Section */}
      <ProductBenefitsSection
        title={product.benefits.title}
        subtitle={product.benefits.subtitle}
        benefits={product.benefits.items.map(item => ({
          title: item.title,
          description: item.description,
        }))}
      />
{/* 
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            {product.tabs.title}
          </h2>
          <TabSection tabs={product.tabs.items} />
        </div>
      </section>

      <ProductWhySection
        title={product.why.title}
        items={product.why.items}
      />

      <ProductHowItWorksSection
        title={product.howItWorks.title}
        steps={product.howItWorks.steps}
      /> */}

      <Footer />
    </main>
  )
}

