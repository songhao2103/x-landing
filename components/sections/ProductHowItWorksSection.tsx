'use client'

import { StepCard } from '@/components/ui/StepCard'
import { useTranslations } from 'next-intl'
import React from 'react'

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
    <section className="py-12 md:py-16 lg:py-24 bg-[#F6F9FC]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            {t('title')}
          </h2>
        </div>

        {/* Steps Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-[repeat(var(--cols),minmax(0,1fr))]
            gap-8 md:gap-6
            auto-rows-fr
          "
          style={{ '--cols': steps.length } as React.CSSProperties}
        >
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}
