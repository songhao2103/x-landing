import React from 'react'
import Image from 'next/image'

export interface BenefitCardProps {
  title: string
  icon?: string
  className?: string
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  icon,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center text-center space-y-4 ${className}`}>
      {icon && (
        <div className="w-40 h-40 flex items-center justify-center mb-4">
          <Image 
            src={icon} 
            alt={title} 
            width={160} 
            height={160} 
            className="object-contain"
          />
        </div>
      )}
      
      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 text-center">
        {title}
      </h3>
    </div>
  )
}

