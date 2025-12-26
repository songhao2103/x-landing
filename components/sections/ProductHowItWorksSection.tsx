import React from 'react'
import { StepCard } from '@/components/ui/StepCard'

export interface Step {
  step: number
  title: string
  description: string
  icon?: string
}

export interface ProductHowItWorksSectionProps {
  title?: string
  steps: Step[]
  className?: string
}

export const ProductHowItWorksSection: React.FC<ProductHowItWorksSectionProps> = ({
  title = 'Phương thức hoạt động',
  steps,
  className = '',
}) => {
  return (
    <section className={`py-16 lg:py-24 bg-[#F6F9FC] ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
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

