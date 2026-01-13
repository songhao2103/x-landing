import { BenefitCard } from '@/components/ui/BenefitCard'
import { Button } from '@/components/ui/Button'
import { useTranslations } from 'next-intl'

export interface WhyItem {
  title: string
  desc?: string
  icon?: string
}

interface ProductWhySectionProps {
  items: WhyItem[]
}

export const ProductWhySection: React.FC<ProductWhySectionProps> = ({
  items,
}) => {
  const t = useTranslations()

  return (
    <section className={`py-16 lg:py-24 bg-white`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t(`products.xpromo.why.title`)}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <BenefitCard
              key={index}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button>{t('contact.title')}</Button>
        </div>
      </div>
    </section>
  )
}
