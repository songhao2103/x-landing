import React from 'react'
import Image from 'next/image'

export interface FeatureCardProps {
  title: string
  description: string
  icon?: string
  gradient?: string
  className?: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  gradient = 'from-blue-500 to-purple-600',
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      {icon && (
        <div className="mb-4">
          <Image 
            src={icon} 
            alt={title} 
            width={64} 
            height={64} 
            className="object-contain"
          />
        </div>
      )}
      
      <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">
        {title}
      </h3>
      
      <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

