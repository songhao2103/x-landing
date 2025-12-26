import { TittleSection } from '@/components/ui/TittleSection'
import { vi } from '@/lib/locales/vi'
import Image from 'next/image'
import React from 'react'

interface AchievementCardProps {
  icon: string
  title: string
  description: string
}

const AchievementCard: React.FC<AchievementCardProps> = ({ icon, title, description }) => {
  return (
    <div className="px-6 lg:px-8 text-center transition-all flex flex-col h-full">
      <div className="flex justify-center h-20 lg:h-24">
          <Image src={icon} alt={title} width={80} height={80} className="object-contain max-w-full max-h-full" />
      </div>
      <h3 className="text-lg lg:text-2xl font-bold text-white min-h-[3rem] lg:min-h-[3.5rem] flex items-center justify-center">
        {title}
      </h3>
      <p className="text-sm lg:text-base text-white leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  )
}

export const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      icon: '/images/icons/icon_sohoa.svg',
      title: vi.achievements.items.digitization.title,
      description: vi.achievements.items.digitization.description,
    },
    {
      icon: '/images/icons/icon_tudonghoa.svg',
      title: vi.achievements.items.automation.title,
      description: vi.achievements.items.automation.description,
    },
    {
      icon: '/images/icons/icon_nangtamvithe.svg',
      title: vi.achievements.items.efficiency.title,
      description: vi.achievements.items.efficiency.description,
    },
    {
      icon: '/images/icons/icon_hangtrieutuongtac.svg',
      title: vi.achievements.items.loyalty.title,
      description: vi.achievements.items.loyalty.description,
    },
    {
      icon: '/images/icons/icon_tanghieusuat.svg',
      title: vi.achievements.items.performance.title,
      description: vi.achievements.items.performance.description,
    },
    {
      icon: '/images/icons/icon_giamchiphi.svg',
      title: vi.achievements.items.cost.title,
      description: vi.achievements.items.cost.description,
    },
  ]
  
  return (
    <section className="py-16  bg-navy" style={{ backgroundImage: `url('/images/backgrounds/banner_thanhqua.png')` }}>
      <div className="container mx-auto">
        {/* Section Title */}
        <TittleSection title={vi.achievements.title} color="white" />
        
        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.title} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  )
}

