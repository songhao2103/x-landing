import React from 'react'
import { Card } from '@/components/ui/Card'
import { vi } from '@/lib/locales/vi'

interface AchievementCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const AchievementCard: React.FC<AchievementCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-navy-light rounded-2xl p-6 lg:p-8 text-center hover:bg-navy transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex justify-center mb-4 lg:mb-6">
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
          {icon}
        </div>
      </div>
      <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">
        {title}
      </h3>
      <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      icon: (
        <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: vi.achievements.items.digitization.title,
      description: vi.achievements.items.digitization.description,
    },
    {
      icon: (
        <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: vi.achievements.items.automation.title,
      description: vi.achievements.items.automation.description,
    },
    {
      icon: (
        <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: vi.achievements.items.efficiency.title,
      description: vi.achievements.items.efficiency.description,
    },
    {
      icon: (
        <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: vi.achievements.items.loyalty.title,
      description: vi.achievements.items.loyalty.description,
    },
    {
      icon: (
        <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: vi.achievements.items.performance.title,
      description: vi.achievements.items.performance.description,
    },
    {
      icon: (
        <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: vi.achievements.items.cost.title,
      description: vi.achievements.items.cost.description,
    },
  ]
  
  return (
    <section className="py-16 lg:py-24 bg-navy">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12 lg:mb-16 uppercase tracking-wide">
          {vi.achievements.title}
        </h2>
        
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

