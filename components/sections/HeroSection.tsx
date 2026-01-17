import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Reveal, RevealItem } from '@/components/ui/Reveal'
import { useTranslations } from 'next-intl'
import React from 'react'

export const HeroSection: React.FC = () => {
  const t = useTranslations('hero')

  const features = [
    {
      title: t('features.growth.title'),
      description: t('features.growth.description'),
    },
    {
      title: t('features.boost.title'),
      description: t('features.boost.description'),
    },
    {
      title: t('features.enhance.title'),
      description: t('features.enhance.description'),
    },
    {
      title: t('features.improve.title'),
      description: t('features.improve.description'),
    },
  ]

  return (
    <section className="relative min-h-[80vh] overflow-visible pb-12 lg:pb-40">
      {/* Banner Background */}
      <div className="absolute inset-0">
        <img
          src="/images/backgrounds/banner.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0a1628]/20"></div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-12 lg:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 lg:space-y-8">
            <Reveal
              motionConfig={{
                from: 'left',
                distance: 32,
                duration: 0.6,
                ease: 'easeInOut',
              }}
              viewport={{
                amount: 0.2,
                margin: '-10% 0px 0px  0px',
                once: true,
              }}
            >
              <h1 className="text-hero-mobile lg:text-hero font-bold leading-tight mb-3 lg:mb-6">
                {t('title')
                  .split('\n')
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index === 0 && <br />}
                    </React.Fragment>
                  ))}
              </h1>

              <p className="text-base lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                {t('description')}
              </p>
            </Reveal>

            <Reveal
              motionConfig={{
                from: 'bottom',
                distance: 32,
                duration: 0.6,
                ease: 'easeInOut',
              }}
              viewport={{ amount: 0.2, margin: '0px 0px -15% 0px', once: true }}
            >
              <div className="pt-4">
                <Button variant="primary" size="lg">
                  {t('cta')}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Feature Cards - Relative on mobile, absolute on desktop */}
      <div className="relative lg:absolute bottom-0 left-0 right-0 z-30 mt-8 lg:mt-0">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal
            stagger={{ staggerChildren: 0.07, delayChildren: 0.07 }}
            motionConfig={{
              from: 'bottom',
              duration: 0.6,
              ease: 'easeInOut',
              distance: 32,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 lg:transform lg:translate-y-1/2">
              {features.map((feature) => (
                <RevealItem className="h-full">
                  <Card key={feature.title} variant="feature" hover>
                    <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-3 uppercase tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </RevealItem>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
