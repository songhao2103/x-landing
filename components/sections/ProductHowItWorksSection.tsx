'use client'

import { Reveal, RevealItem } from '@/components/ui/Reveal'
import { StepCard } from '@/components/ui/StepCard'
import { useResponsive } from '@/lib/utils/hooks'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

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
  const isLaptop = useResponsive('up', 'xl')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="h-[500px]"></div>

  const renderStepList = () => {
    if (!isLaptop) {
      return (
        <StepsGrid cols={steps.length}>
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </StepsGrid>
      )
    }

    return (
      <div className="space-y-8">
        <StepsGrid cols={steps.length}>
          <StepTitles steps={steps} />
        </StepsGrid>

        <StepsGrid cols={steps.length}>
          <StepIcons steps={steps} />
        </StepsGrid>

        <StepsGrid cols={steps.length}>
          <StepDescriptions steps={steps} />
        </StepsGrid>
      </div>
    )
  }

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#F6F9FC]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            {t('title')}
          </h2>
        </div>

        {renderStepList()}
      </div>
    </section>
  )
}

const StepsGrid: React.FC<{
  children: React.ReactNode
  cols: number
}> = ({ children, cols }) => (
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
      sm:grid-cols-2
      xl:grid-cols-[repeat(var(--cols),minmax(0,1fr))]
      gap-8 md:gap-6
      auto-rows-fr
    "
      style={{ '--cols': cols } as React.CSSProperties}
    >
      {children}
    </div>
  </Reveal>
)

const StepTitles = ({ steps }: { steps: Step[] }) => (
  <>
    {steps.map((step) => (
      <RevealItem>
        <h3
          key={step.step}
          className="text-lg text-center md:text-xl font-bold leading-snug"
        >
          Step {step.step}
          <br />
          {step.title}
        </h3>
      </RevealItem>
    ))}
  </>
)

const StepIcons = ({ steps }: { steps: Step[] }) => (
  <>
    {steps.map((step, index) => (
      <RevealItem>
        <div
          key={step.step}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-24 h-24 lg:w-[120px] lg:h-[120px]">
            <Image fill src={step.icon!} alt="" className="object-contain" />
          </div>

          {index !== steps.length - 1 && (
            <div className="hidden xl:block absolute right-[-80px] top-1/2 -translate-y-1/2">
              <Image
                src="/images/contents/xpromos/icon_next.svg"
                width={120}
                height={120}
                alt=""
              />
            </div>
          )}
        </div>
      </RevealItem>
    ))}
  </>
)

const StepDescriptions = ({ steps }: { steps: Step[] }) => (
  <>
    {steps.map((step) => (
      <Reveal>
        <div key={step.step} className="flex items-start justify-center">
          {!step.isLi ? (
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
              {step.description[0]}
            </p>
          ) : (
            <ul className="text-left space-y-1">
              {step.description.map((d, i) => (
                <li
                  key={i}
                  className="text-sm md:text-base text-gray-600 flex gap-x-2"
                >
                  <div>•</div> <div>{d}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Reveal>
    ))}
  </>
)
