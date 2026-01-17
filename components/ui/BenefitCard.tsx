import Image from 'next/image'
import React from 'react'

export interface BenefitCardProps {
  title: string
  icon?: string
  className?: string
  desc?: string
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  icon,
  className = '',
  desc,
}) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {icon && (
        <div className="w-40 h-40 flex items-center justify-center mb-8">
          <Image
            src={icon}
            alt={title}
            width={160}
            height={160}
            className="object-contain"
          />
        </div>
      )}

      <h3 className="text-xl lg:text-xl font-bold text-gray-900 text-center mb-2">
        {title}
      </h3>
      <p>{desc}</p>
    </div>
  )
}
