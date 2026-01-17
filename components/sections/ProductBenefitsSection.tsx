'use client'

import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
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
        <Reveal
          motionConfig={{
            from: 'top',
            distance: 32,
            duration: 0.6,
            ease: 'easeInOut',
          }}
          viewport={{
            amount: 0.2,
            margin: '-20% 0px 0px  0px',
            once: true,
          }}
        >
          <div className="text-center mb-12 lg:mb-16">
            <TittleSection title={title} color="white" noMargin={true} />
            <p className="text-lg text-white/80 mt-4">{subtitle}</p>
          </div>
        </Reveal>

        <div>
          <TabsSection tabs={tabs} defaultActive={defaultActive} />
        </div>

        <Reveal
          motionConfig={{
            from: 'bottom',
            distance: 32,
            duration: 0.6,
            ease: 'easeInOut',
          }}
          viewport={{
            amount: 0.2,
            margin: '-20% 0px 0px  0px',
            once: true,
          }}
        >
          <div className="flex justify-start mt-12">
            <Button>{t('contact.title')}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
