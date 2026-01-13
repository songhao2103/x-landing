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
  const t = useTranslations('products.xai-suppervisor')
  const dataHero = {
    logo: '/images/contents/xai-suppervisors/icon_hero.svg',
    image: '/images/contents/xai-suppervisors/image_hero.svg',
    title: t('hero.title'),
    description: t('hero.description'),
  }

  const overviewData = {
    title: t('overview.title'),
    description: t('overview.description'),
    items: [
      {
        title: t('overview.features_1.title'),
        image: '/images/contents/xai-suppervisors/overview_1.svg',
        description: t('overview.features_1.description'),
      },
      {
        title: t('overview.features_2.title'),
        image: '/images/contents/xai-suppervisors/overview_2.svg',
        description: t('overview.features_2.description'),
      },
      {
        title: t('overview.features_3.title'),
        image: '/images/contents/xai-suppervisors/overview_3.svg',
        description: t('overview.features_3.description'),
      },
      {
        title: t('overview.features_4.title'),
        image: '/images/contents/xai-suppervisors/overview_4.svg',
        description: t('overview.features_4.description'),
      },
      {
        title: t('overview.features_5.title'),
        image: '/images/contents/xai-suppervisors/overview_5.svg',
        description: t('overview.features_5.description'),
      },
    ],
  }

  const benefitsData = {
    title: t(`benerfits.title`),
    subtitle: t(`benerfits.subtitle`),
    tabs: [
      {
        key: 'qa',
        label: t(`benerfits.qa.title`),
        features: [
          t(`benerfits.qa.features_1`),
          t(`benerfits.qa.features_2`),
          t(`benerfits.qa.features_3`),
          t(`benerfits.qa.features_4`),
        ],
        image: '/images/contents/xai-suppervisors/benerfits_1.png',
      },
      {
        key: 'conversation',
        label: t(`benerfits.conversation.title`),
        features: [
          t(`benerfits.conversation.features_1`),
          t(`benerfits.conversation.features_2`),
          t(`benerfits.conversation.features_3`),
          t(`benerfits.conversation.features_4`),
        ],
        image: '/images/contents/xai-suppervisors/benerfits_2.png',
      },
      {
        key: 'analysis',
        label: t(`benerfits.analysis.title`),
        features: [
          t(`benerfits.analysis.features_1`),
          t(`benerfits.analysis.features_2`),
          t(`benerfits.analysis.features_3`),
          t(`benerfits.analysis.features_4`),
        ],
        image: '/images/contents/xai-suppervisors/benerfits_3.png',
      },
      {
        key: 'report',
        label: t(`benerfits.report.title`),
        features: [
          t(`benerfits.report.features_1`),
          t(`benerfits.report.features_2`),
          t(`benerfits.report.features_3`),
          t(`benerfits.report.features_4`),
        ],
        image: '/images/contents/xai-suppervisors/benerfits_4.png',
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
      icon: '/images/contents/xai-call-agents/step_1.svg',
    },
    {
      description: [
        t(`howItWorks.step_2.desc_1`),
        t(`howItWorks.step_2.desc_2`),
        t(`howItWorks.step_2.desc_3`),
      ],

      step: 2,
      title: t(`howItWorks.step_2.title`),
      icon: '/images/contents/xai-call-agents/step_2.svg',
    },
    {
      description: [
        t(`howItWorks.step_3.desc_1`),
        t(`howItWorks.step_3.desc_2`),
        t(`howItWorks.step_3.desc_3`),
        t(`howItWorks.step_3.desc_4`),
        t(`howItWorks.step_3.desc_5`),
        t(`howItWorks.step_3.desc_6`),
      ],
      step: 3,
      title: t(`howItWorks.step_3.title`),
      icon: '/images/contents/xai-call-agents/step_3.svg',
    },
    {
      description: [
        t(`howItWorks.step_4.desc_1`),
        t(`howItWorks.step_4.desc_2`),
        t(`howItWorks.step_4.desc_3`),
        t(`howItWorks.step_4.desc_4`),
      ],
      step: 4,
      title: t(`howItWorks.step_4.title`),
      icon: '/images/contents/xai-call-agents/step_4.svg',
    },
  ]

  const whyDatas: WhyItem[] = [
    {
      title: t(`why.title_1`),
      desc: t(`why.desc_1`),
      icon: '/images/contents/xomis/why_1.svg',
    },
    {
      title: t(`why.title_2`),
      desc: t(`why.desc_2`),
      icon: '/images/contents/xomis/why_2.svg',
    },
    {
      title: t(`why.title_3`),
      desc: t(`why.desc_3`),
      icon: '/images/contents/xomis/why_3.svg',
    },
    {
      title: t(`why.title_4`),
      desc: t(`why.desc_4`),
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
