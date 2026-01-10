import { HeroProductSection } from '@/components/sections/HeroProductSection'
import OverviewSection from '@/components/sections/OverviewSection'
import { ProductBenefitsSection } from '@/components/sections/ProductBenefitsSection'
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

  return (
    <main className="min-h-screen space-y-2 md:space-y-4 lg:space-y-10">
      {/* Hero Section */}
      <HeroProductSection {...dataHero} />

      {/*Overview - Tổng quan XOmi */}
      <OverviewSection {...overviewData} />

      {/* Benefits Section */}
      <ProductBenefitsSection {...benefitsData} />
    </main>
  )
}

export default XOmiPage
