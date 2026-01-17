'use client'

import { Reveal, RevealFrom } from '@/components/ui/Reveal'
import { TittleSection } from '@/components/ui/TittleSection'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

interface AchievementCardProps {
  icon: string
  title: string
  description: string
  from: { sm: string; md: string; lg: string }
}

const getRevealFrom = (from: AchievementCardProps['from']): string => {
  if (typeof window === 'undefined') return from.sm

  if (window.matchMedia('(min-width: 1024px)').matches) {
    return from.lg
  }

  if (window.matchMedia('(min-width: 768px)').matches) {
    return from.md
  }

  return from.sm
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  icon,
  title,
  description,
  from,
}) => {
  const revealFrom = getRevealFrom(from)

  return (
    <Reveal
      motionConfig={{
        from: revealFrom as RevealFrom,
        distance: 32,
        duration: 0.6,
        ease: 'easeInOut',
      }}
      viewport={{
        amount: 0.2,
        margin: '-30% 0px 0px 0px',
        once: true,
      }}
    >
      <div className="px-6 lg:px-8 text-center flex flex-col h-full">
        <div className="flex justify-center h-20 lg:h-24">
          <Image
            src={icon}
            alt={title}
            width={80}
            height={80}
            className="object-contain max-w-full max-h-full"
          />
        </div>

        <h3 className="text-lg lg:text-2xl font-bold text-white min-h-[3rem] lg:min-h-[3.5rem] flex items-center justify-center">
          {title}
        </h3>

        <p className="text-sm lg:text-base text-white leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </Reveal>
  )
}

export const AchievementsSection: React.FC = () => {
  const t = useTranslations('achievements')

  const achievements = [
    {
      icon: '/images/icons/icon_sohoa.svg',
      title: t('items.digitization.title'),
      description: t('items.digitization.description'),
      from: { sm: 'left', md: 'left', lg: 'left' },
    },
    {
      icon: '/images/icons/icon_tudonghoa.svg',
      title: t('items.automation.title'),
      description: t('items.automation.description'),
      from: { sm: 'right', md: 'right', lg: 'top' },
    },
    {
      icon: '/images/icons/icon_nangtamvithe.svg',
      title: t('items.efficiency.title'),
      description: t('items.efficiency.description'),
      from: { sm: 'left', md: 'left', lg: 'right' },
    },
    {
      icon: '/images/icons/icon_hangtrieutuongtac.svg',
      title: t('items.loyalty.title'),
      description: t('items.loyalty.description'),
      from: { sm: 'right', md: 'right', lg: 'left' },
    },
    {
      icon: '/images/icons/icon_tanghieusuat.svg',
      title: t('items.performance.title'),
      description: t('items.performance.description'),
      from: { sm: 'left', md: 'left', lg: 'bottom' },
    },
    {
      icon: '/images/icons/icon_giamchiphi.svg',
      title: t('items.cost.title'),
      description: t('items.cost.description'),
      from: { sm: 'right', md: 'right', lg: 'right' },
    },
  ]

  return (
    <section
      className="py-16  bg-navy"
      style={{
        backgroundImage: `url('/images/backgrounds/banner_thanhqua.png')`,
      }}
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <TittleSection title={t('title')} color="white" />

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  )
}
