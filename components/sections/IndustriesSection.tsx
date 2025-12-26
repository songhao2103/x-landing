import { TittleSection } from '@/components/ui/TittleSection'
import { vi } from '@/lib/locales/vi'
import Image from 'next/image'
import React from 'react'

interface IndustryCardProps {
  icon: string
  label: string
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-4  transition-all duration-300 hover:-translate-y-1">
      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
      <Image src={icon} alt={label} width={100} height={100} className="object-contain max-w-full max-h-full" />
      </div>
      <p className="text-base lg:text-lg font-semibold text-center text-gray-800 leading-snug whitespace-pre-line">
        {label}
      </p>
    </div>
  )
}

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      icon: '/images/icons/icon_taichinhnganhang.svg',
      label: vi.industries.items.finance,
    },
    {
      icon: '/images/icons/icon_banle.svg',
      label: vi.industries.items.ecommerce,
    },
    {
      icon: '/images/icons/icon_suckhoebaohiem.svg',
      label: vi.industries.items.insurance,
    },
    {
      icon: '/images/icons/icon_bds.svg',
      label: vi.industries.items.realestate,
    },
    {
      icon: '/images/icons/icon_sukien.svg',
      label: vi.industries.items.telecom,
    },
    {
      icon: '/images/icons/icon_daotao.svg',
      label: vi.industries.items.education,
    },
    {
      icon: '/images/icons/icon_khachsan.svg',
      label: vi.industries.items.healthcare,
    },
  ]
  
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <TittleSection title={vi.industries.title} />
        
        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 lg:gap-6">
          {industries.map((industry) => (
            <IndustryCard key={industry.label} {...industry} />
          ))}
        </div>
      </div>
    </section>
  )
}

