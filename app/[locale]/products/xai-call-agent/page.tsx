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

const page = () => {
  const t = useTranslations('products.xai-call-agent')

  const dataHero = {
    logo: '/images/contents/xai-call-agents/icon_hero.svg',
    image: '/images/contents/xai-call-agents/image_hero.png',
    title: t('hero.title'),
    description: t('hero.description'),
  }

  const overviewData = {
    title: t('overview.title'),
    description: t('overview.description'),
    items: [
      {
        title: t('overview.features_1.title'),
        image: '/images/contents/xai-call-agents/overview_1.svg',
        description: t('overview.features_1.description'),
      },
      {
        title: t('overview.features_2.title'),
        image: '/images/contents/xai-call-agents/overview_2.svg',
        description: t('overview.features_2.description'),
      },
      {
        title: t('overview.features_3.title'),
        image: '/images/contents/xai-call-agents/overview_3.svg',
        description: t('overview.features_3.description'),
      },
      {
        title: t('overview.features_4.title'),
        image: '/images/contents/xai-call-agents/overview_4.svg',
        description: t('overview.features_4.description'),
      },
      {
        title: t('overview.features_5.title'),
        image: '/images/contents/xai-call-agents/overview_5.svg',
        description: t('overview.features_5.description'),
      },
    ],
  }

  const benefitsData = {
    title: t(`benerfits.title`),
    subtitle: t(`benerfits.subtitle`),
    tabs: [
      {
        key: 'productivity',
        label: t(`benerfits.productivity.title`),
        features: [
          t(`benerfits.productivity.features_1`),
          t(`benerfits.productivity.features_2`),
          t(`benerfits.productivity.features_3`),
        ],
        image: '/images/contents/xai-call-agents/benerfits_1.svg',
      },
      {
        key: 'expense',
        label: t(`benerfits.expense.title`),
        features: [
          t(`benerfits.expense.features_1`),
          t(`benerfits.expense.features_2`),
        ],
        image: '/images/contents/xai-call-agents/benerfits_1.svg',
      },
      {
        key: 'experience',
        label: t(`benerfits.experience.title`),
        features: [
          t(`benerfits.experience.features_1`),
          t(`benerfits.experience.features_2`),
          t(`benerfits.experience.features_3`),
          t(`benerfits.experience.features_4`),
        ],
        image: '/images/contents/xai-call-agents/benerfits_1.svg',
      },
      {
        key: 'standardization',
        label: t(`benerfits.standardization.title`),
        features: [
          t(`benerfits.standardization.features_1`),
          t(`benerfits.standardization.features_2`),
          t(`benerfits.standardization.features_3`),
        ],
        image: '/images/contents/xai-call-agents/benerfits_1.svg',
      },
    ],
  }

  const howItWorkSteps: Step[] = [
    {
      description: [t(`howItWorks.step_1.desc`)],
      step: 1,
      title: t(`howItWorks.step_1.title`),
      icon: '/images/contents/xai-call-agents/step_1.svg',
    },
    {
      description: [t(`howItWorks.step_2.desc`)],
      step: 2,
      title: t(`howItWorks.step_2.title`),
      icon: '/images/contents/xai-call-agents/step_2.svg',
    },
    {
      description: [t(`howItWorks.step_3.desc`)],
      step: 3,
      title: t(`howItWorks.step_3.title`),
      icon: '/images/contents/xai-call-agents/step_3.svg',
    },
    {
      description: [t(`howItWorks.step_4.desc`)],
      step: 4,
      title: t(`howItWorks.step_4.title`),
      icon: '/images/contents/xai-call-agents/step_4.svg',
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

export default page
