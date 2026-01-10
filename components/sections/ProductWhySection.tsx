import { BenefitCard } from '@/components/ui/BenefitCard'
import { useTranslations } from 'next-intl'

export interface WhyItem {
  title: string
  icon?: string
}

export const ProductWhySection = () => {
  const t = useTranslations()
  const prefixLocale = 'products.xpromo.why'
  const datas: WhyItem[] = [
    {
      title: t(`${prefixLocale}.title_1`),
      icon: '/images/contents/xpromos/why_1.svg',
    },
    {
      title: t(`${prefixLocale}.title_2`),
      icon: '/images/contents/xpromos/why_2.svg',
    },
    {
      title: t(`${prefixLocale}.title_3`),
      icon: '/images/contents/xpromos/why_3.svg',
    },
    {
      title: t(`${prefixLocale}.title_4`),
      icon: '/images/contents/xpromos/why_4.svg',
    },
  ]

  return (
    <section className={`py-16 lg:py-24 bg-white`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t(`${prefixLocale}.title`)}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {datas.map((item, index) => (
            <BenefitCard key={index} title={item.title} icon={item.icon} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200">
            Liên hệ tư vấn
          </button>
        </div>
      </div>
    </section>
  )
}
