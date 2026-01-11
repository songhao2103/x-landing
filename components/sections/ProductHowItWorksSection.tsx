import { StepCard } from '@/components/ui/StepCard'
import { useTranslations } from 'next-intl'

export interface Step {
  step: number
  title: string
  description: string[]
  isLi?: boolean
  icon?: string
}

interface ProductHowItWorksSectionProps {
  steps: Step[]
}

export const ProductHowItWorksSection: React.FC<
  ProductHowItWorksSectionProps
> = ({ steps }) => {
  const t = useTranslations('products.xpromo.howItWorks')

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
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6"
          style={{
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          }}
        >
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step.step}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLi={step.isLi}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
