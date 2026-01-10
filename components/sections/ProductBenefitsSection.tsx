'use client'

import TabsSection from '@/components/ui/TabSection'
import { TittleSection } from '@/components/ui/TittleSection'
import { useTranslations } from 'next-intl'

interface IProductBenefitItems {
  key: string
  label: string
  features: string[]
  image: string
}
interface ProductBenefitsSectionProps {
  title: string
  subtitle: string
  defaultActive?: string
  tabs: IProductBenefitItems[]
}
export const ProductBenefitsSection: React.FC<ProductBenefitsSectionProps> = ({
  subtitle,
  tabs,
  title,
  defaultActive,
}) => {
  const t = useTranslations('')

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
          <TittleSection title={title} color="white" noMargin={true} />
          <p className="text-lg text-white/80 mt-4">{subtitle}</p>
        </div>
        <div>
          <TabsSection tabs={tabs} defaultActive={defaultActive} />
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
