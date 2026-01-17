import { HeroProductSection } from '@/components/sections/HeroProductSection'
import OverviewSection from '@/components/sections/OverviewSection'
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

const XOmiPage = () => {
  const t = useTranslations('products.xomi')

  const dataHero = {
    logo: '/images/icons/xomi_logo.svg',
    image: '/images/contents/xomis/image_hero.svg',
    title: 'In-SaaS Promotion Platform',
    description: t('description'),
  }

  const overviewData = {
    title: t('overview.title'),
    description: t('overview.description'),
    items: [
      {
        title: t('overview.features_1.title'),
        image: '/images/contents/xomis/overview_1.svg',
        description: t('overview.features_1.description'),
      },
      {
        title: t('overview.features_2.title'),
        image: '/images/contents/xomis/overview_2.svg',
        description: t('overview.features_2.description'),
      },
      {
        title: t('overview.features_3.title'),
        image: '/images/contents/xomis/overview_3.svg',
        description: t('overview.features_3.description'),
      },
      {
        title: t('overview.features_4.title'),
        image: '/images/contents/xomis/overview_4.svg',
        description: t('overview.features_4.description'),
      },
      {
        title: t('overview.features_5.title'),
        image: '/images/contents/xomis/overview_5.svg',
        description: t('overview.features_5.description'),
      },
    ],
  }

  const benefitsData = {
    title: t(`benerfits.title`),
    subtitle: t(`benerfits.subtitle`),
    tabs: [
      {
        key: 'dynamic_crm',
        label: t(`benerfits.dynamic_crm.title`),
        features: [
          t(`benerfits.dynamic_crm.features_1`),
          t(`benerfits.dynamic_crm.features_2`),
          t(`benerfits.dynamic_crm.features_3`),
          t(`benerfits.dynamic_crm.features_4`),
          t(`benerfits.dynamic_crm.features_5`),
          t(`benerfits.dynamic_crm.features_6`),
        ],
        image: '/images/contents/xomis/benerfits_1.svg',
      },
      {
        key: 'switchboard',
        label: t(`benerfits.switchboard.title`),
        features: [
          t(`benerfits.switchboard.features_1`),
          t(`benerfits.switchboard.features_2`),
          t(`benerfits.switchboard.features_3`),
          t(`benerfits.switchboard.features_4`),
          t(`benerfits.switchboard.features_5`),
          t(`benerfits.switchboard.features_6`),
          t(`benerfits.switchboard.features_7`),
          t(`benerfits.switchboard.features_8`),
          t(`benerfits.switchboard.features_9`),
        ],
        image: '/images/contents/xomis/benerfits_1.svg',
      },
      {
        key: 'channel',
        label: t(`benerfits.channel.title`),
        features: [
          t(`benerfits.channel.features_1`),
          t(`benerfits.channel.features_2`),
          t(`benerfits.channel.features_3`),
          t(`benerfits.channel.features_4`),
        ],
        image: '/images/contents/xomis/benerfits_1.svg',
      },
      {
        key: 'mobile-app',
        label: t(`benerfits.mobile-app.title`),
        features: [
          t(`benerfits.mobile-app.features_1`),
          t(`benerfits.mobile-app.features_2`),
          t(`benerfits.mobile-app.features_3`),
          t(`benerfits.mobile-app.features_4`),
          t(`benerfits.mobile-app.features_5`),
        ],
        image: '/images/contents/xomis/benerfits_4.svg',
      },
      {
        key: 'ai',
        label: t(`benerfits.ai.title`),
        features: [
          t(`benerfits.ai.features_1`),
          t(`benerfits.ai.features_2`),
          t(`benerfits.ai.features_3`),
          t(`benerfits.ai.features_4`),
          t(`benerfits.ai.features_5`),
        ],
        image: '/images/contents/xomis/benerfits_5.svg',
      },
    ],
  }

  const howItWorkSteps: Step[] = [
    {
      description: [
        t(`howItWorks.step_1.desc_1`),
        t(`howItWorks.step_1.desc_2`),
        t(`howItWorks.step_1.desc_3`),
        t(`howItWorks.step_1.desc_4`),
      ],
      step: 1,
      title: t(`howItWorks.step_1.title`),
      icon: '/images/contents/xpromos/step_1.svg',
      isLi: true,
    },
    {
      description: [
        t(`howItWorks.step_2.desc_1`),
        t(`howItWorks.step_2.desc_2`),
        t(`howItWorks.step_2.desc_3`),
      ],
      step: 2,
      title: t(`howItWorks.step_2.title`),
      icon: '/images/contents/xpromos/step_2.svg',
      isLi: true,
    },
    {
      description: [
        t(`howItWorks.step_3.desc_1`),
        t(`howItWorks.step_3.desc_2`),
        t(`howItWorks.step_3.desc_3`),
        t(`howItWorks.step_3.desc_4`),
        t(`howItWorks.step_3.desc_5`),
        t(`howItWorks.step_3.desc_6`),
        t(`howItWorks.step_3.desc_7`),
      ],
      step: 3,
      title: t(`howItWorks.step_3.title`),
      icon: '/images/contents/xpromos/step_3.svg',
      isLi: true,
    },
    {
      description: [
        t(`howItWorks.step_4.desc_1`),
        t(`howItWorks.step_4.desc_2`),
        t(`howItWorks.step_4.desc_3`),
        t(`howItWorks.step_4.desc_4`),
        t(`howItWorks.step_4.desc_5`),
      ],
      step: 4,
      title: t(`howItWorks.step_4.title`),
      icon: '/images/contents/xpromos/step_4.svg',
      isLi: true,
    },
  ]

  const whyDatas: WhyItem[] = [
    {
      title: t(`why.title_1`),
      icon: '/images/contents/xomis/why_1.svg',
    },
    {
      title: t(`why.title_2`),
      icon: '/images/contents/xomis/why_2.svg',
    },
    {
      title: t(`why.title_3`),
      icon: '/images/contents/xomis/why_3.svg',
    },
    {
      title: t(`why.title_4`),
      icon: '/images/contents/xomis/why_4.svg',
    },
  ]

  return (
    <main className="min-h-screen space-y-2 md:space-y-4 lg:space-y-10">
      {/* Hero Section */}
      <HeroProductSection {...dataHero} />

      {/*Overview - Tổng quan XOmi */}
      <OverviewSection {...overviewData} />

      {/* Benefits Section */}
      <ProductBenefitsSection {...benefitsData} />

      {/* How it works */}
      <ProductHowItWorksSection steps={howItWorkSteps} />

      {/* Why Choose XPromo */}
      <ProductWhySection items={whyDatas} />
    </main>
  )
}

export default XOmiPage
