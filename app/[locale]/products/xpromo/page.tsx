import { ApproachSection } from '@/components/sections/ApproachSection'
import { HeroProductSection } from '@/components/sections/HeroProductSection'
import { ProductBenefitsSection } from '@/components/sections/ProductBenefitsSection'
import { ProductHowItWorksSection } from '@/components/sections/ProductHowItWorksSection'
import { ProductWhySection } from '@/components/sections/ProductWhySection'
import { useTranslations } from 'next-intl'

export default function XPromoPage() {
  const t = useTranslations('')

  const dataIntro = {
    logo: '/images/icons/xpromo_logo.svg',
    image: '/images/icons/xpromo/logo_saas.svg',
    title: 'In-SaaS Promotion Platform',
    description: t('products.xpromo.description'),
  }

  const benefitsLocale = 'products.xpromo.benefits'
  const benefitsData = {
    title: t(`${benefitsLocale}.title`),
    subtitle: t(`${benefitsLocale}.subtitle`),
    tabs: [
      {
        key: 'business',
        label: t(`${benefitsLocale}.business.title`),
        features: [
          t(`${benefitsLocale}.business.features_1`),
          t(`${benefitsLocale}.business.features_2`),
          t(`${benefitsLocale}.business.features_3`),
        ],
        image: '/images/icons/xpromo/image_doanhnghiep.svg',
      },
      {
        key: 'saas',
        label: t(`${benefitsLocale}.saas.title`),
        features: [
          t(`${benefitsLocale}.saas.features_1`),
          t(`${benefitsLocale}.saas.features_2`),
          t(`${benefitsLocale}.saas.features_3`),
        ],
        image: '/images/icons/xpromo/image_saas.svg',
      },
      {
        key: 'user',
        label: t(`${benefitsLocale}.user.title`),
        features: [
          t(`${benefitsLocale}.user.features_1`),
          t(`${benefitsLocale}.user.features_2`),
          t(`${benefitsLocale}.user.features_3`),
        ],
        image: '/images/icons/xpromo/image_credit.svg',
      },
    ],
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroProductSection {...dataIntro} />

      <ApproachSection />

      {/* Benefits Section */}
      <ProductBenefitsSection {...benefitsData} />

      {/* How it works */}
      <ProductHowItWorksSection />

      {/* Why Choose XPromo */}
      <ProductWhySection />
    </main>
  )
}
