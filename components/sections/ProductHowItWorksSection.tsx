import { StepCard } from '@/components/ui/StepCard'
import { useTranslations } from 'next-intl'

export interface Step {
  step: number
  title: string
  description: string
  icon?: string
}

export const ProductHowItWorksSection = () => {
  const t = useTranslations('products.xpromo.howItWorks')
  const steps: Step[] = [
    {
      description: t('step_1.description'),
      step: 1,
      title: t('step_1.title'),
      icon: '/images/contents/xpromos/step_1.svg',
    },
    {
      description: t('step_2.description'),
      step: 2,
      title: t('step_2.title'),
      icon: '/images/contents/xpromos/step_2.svg',
    },
    {
      description: t('step_3.description'),
      step: 3,
      title: t('step_3.title'),
      icon: '/images/contents/xpromos/step_3.svg',
    },
    {
      description: t('step_4.description'),
      step: 4,
      title: t('step_4.title'),
      icon: '/images/contents/xpromos/step_4.svg',
    },
    {
      description: t('step_5.description'),
      step: 5,
      title: t('step_5.title'),
      icon: '/images/contents/xpromos/step_5.svg',
    },
  ]
  return (
    <section className={`py-16 lg:py-24 bg-[#F6F9FC]`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step.step}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
