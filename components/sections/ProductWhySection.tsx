import { BenefitCard } from '@/components/ui/BenefitCard'
import { Button } from '@/components/ui/Button'
import { Reveal, RevealItem } from '@/components/ui/Reveal'
import { useTranslations } from 'next-intl'
import { CSSProperties } from 'react'

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
    <section className={`py-10 lg:py-16 bg-white`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t(`products.xpromo.why.title`)}
          </h2>
        </div>

        {/* Benefits Grid */}
        <Reveal
          stagger={{ staggerChildren: 0.07 }}
          motionConfig={{
            from: 'bottom',
            duration: 0.6,
            ease: 'easeInOut',
            distance: 32,
          }}
        >
          <div
            className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            xl:grid-cols-[repeat(var(--cols),minmax(0,1fr))]
            gap-8 lg:gap-6
          "
            style={
              {
                '--cols': items.length,
              } as CSSProperties
            }
          >
            {items.map((item, index) => (
              <RevealItem>
                <BenefitCard
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  desc={item.desc}
                />
              </RevealItem>
            ))}
          </div>
        </Reveal>

        {/* CTA Button */}
        <Reveal
          stagger={{ staggerChildren: 0.07 }}
          motionConfig={{
            from: 'bottom',
            duration: 0.6,
            ease: 'easeInOut',
            distance: 32,
          }}
        >
          <div className="flex justify-center mt-12">
            <Button>{t('contact.title')}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
