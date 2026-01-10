'use client'

import TabsSection from '@/components/ui/TabSection'
import { TittleSection } from '@/components/ui/TittleSection'
import { useTranslations } from 'next-intl'

export interface Benefit {
  title: string
  description: string
  icon?: string
}

export const ProductBenefitsSection = () => {
  const prifixLocale = 'products.xpromo.tabs'
  const t = useTranslations('')

  const tabsContent = [
    {
      key: 'business',
      label: t(`${prifixLocale}.items.business.title`),
      features: [
        t(`${prifixLocale}.items.business.features_1`),
        t(`${prifixLocale}.items.business.features_2`),
        t(`${prifixLocale}.items.business.features_3`),
      ],
      image: '/images/icons/xpromo/image_doanhnghiep.svg',
    },
    {
      key: 'saas',
      label: t(`${prifixLocale}.items.saas.title`),
      features: [
        t(`${prifixLocale}.items.saas.features_1`),
        t(`${prifixLocale}.items.saas.features_2`),
        t(`${prifixLocale}.items.saas.features_3`),
      ],
      image: '/images/icons/xpromo/image_saas.svg',
    },
    {
      key: 'user',
      label: t(`${prifixLocale}.items.user.title`),
      features: [
        t(`${prifixLocale}.items.user.features_1`),
        t(`${prifixLocale}.items.user.features_2`),
        t(`${prifixLocale}.items.user.features_3`),
      ],
      image: '/images/icons/xpromo/image_credit.svg',
    },
  ]

  return (
    <section
      style={{
        backgroundImage:
          'url(/images/backgrounds/xpromo/benefits_background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={`py-16 lg:py-24 relative overflow-hidden`}
    >
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <TittleSection
            title={t(`${prifixLocale}.title`)}
            color="white"
            noMargin={true}
          />
          <p className="text-lg text-white/80 mt-4">
            {t(`${prifixLocale}.subtitle`)}
          </p>
        </div>
        <div>
          <TabsSection tabs={tabsContent} />
        </div>
        <div className="flex justify-start mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200">
            {t('contact.title')}
          </button>
        </div>
      </div>
    </section>
  )
}
