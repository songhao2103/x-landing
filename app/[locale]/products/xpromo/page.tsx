import { ApproachSection } from '@/components/sections/ApproachSection'
import { HeroProductSection } from '@/components/sections/HeroProductSection'
import { ProductBenefitsSection } from '@/components/sections/ProductBenefitsSection'
import {
  ProductHowItWorksSection,
  Step,
} from '@/components/sections/ProductHowItWorksSection'
import {
  ProductWhySection,
  WhyItem,
} from '@/components/sections/ProductWhySection'
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

  const howItWorkLocale = 'products.xpromo.howItWorks'
  const howItWorkSteps: Step[] = [
    {
      description: [t(`${howItWorkLocale}.step_1.description`)],
      step: 1,
      title: t(`${howItWorkLocale}.step_1.title`),
      icon: '/images/contents/xpromos/step_1.svg',
    },
    {
      description: [t(`${howItWorkLocale}.step_2.description`)],
      step: 2,
      title: t(`${howItWorkLocale}.step_2.title`),
      icon: '/images/contents/xpromos/step_2.svg',
    },
    {
      description: [t(`${howItWorkLocale}.step_3.description`)],
      step: 3,
      title: t(`${howItWorkLocale}.step_3.title`),
      icon: '/images/contents/xpromos/step_3.svg',
    },
    {
      description: [t(`${howItWorkLocale}.step_4.description`)],
      step: 4,
      title: t(`${howItWorkLocale}.step_4.title`),
      icon: '/images/contents/xpromos/step_4.svg',
    },
    {
      description: [t(`${howItWorkLocale}.step_5.description`)],
      step: 5,
      title: t(`${howItWorkLocale}.step_5.title`),
      icon: '/images/contents/xpromos/step_5.svg',
    },
  ]

  const whyPrefixLocale = 'products.xpromo.why'
  const whyDatas: WhyItem[] = [
    {
      title: t(`${whyPrefixLocale}.title_1`),
      icon: '/images/contents/xpromos/why_1.svg',
    },
    {
      title: t(`${whyPrefixLocale}.title_2`),
      icon: '/images/contents/xpromos/why_2.svg',
    },
    {
      title: t(`${whyPrefixLocale}.title_3`),
      icon: '/images/contents/xpromos/why_3.svg',
    },
    {
      title: t(`${whyPrefixLocale}.title_4`),
      icon: '/images/contents/xpromos/why_4.svg',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroProductSection {...dataIntro} />

      <ApproachSection />

      {/* Benefits Section */}
      <ProductBenefitsSection {...benefitsData} />

      {/* How it works */}
      <ProductHowItWorksSection steps={howItWorkSteps} />

      {/* Why Choose XPromo */}
      <ProductWhySection items={whyDatas} />
    </main>
  )
}
