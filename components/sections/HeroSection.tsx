import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { vi } from '@/lib/locales/vi'
import React from 'react'

export const HeroSection: React.FC = () => {
  const features = [
    {
      title: vi.hero.features.growth.title,
      description: vi.hero.features.growth.description,
    },
    {
      title: vi.hero.features.boost.title,
      description: vi.hero.features.boost.description,
    },
    {
      title: vi.hero.features.enhance.title,
      description: vi.hero.features.enhance.description,
    },
    {
      title: vi.hero.features.improve.title,
      description: vi.hero.features.improve.description,
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
            <h1 className="text-hero-mobile lg:text-hero font-bold leading-tight">
              {vi.hero.title.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </h1>
            
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl">
              {vi.hero.description}
            </p>
            
            <div className="pt-4">
              <Button variant="primary" size="lg">
                {vi.hero.cta}
              </Button>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Feature Cards - Relative on mobile, absolute on desktop */}
      <div className="relative lg:absolute bottom-0 left-0 right-0 z-30 mt-8 lg:mt-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 lg:transform lg:translate-y-1/2">
            {features.map((feature) => (
              <Card key={feature.title} variant="feature" hover>
                <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

