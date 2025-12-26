import React from 'react'
import Image from 'next/image'

export interface StepCardProps {
  step: number
  title: string
  description: string
  icon?: string
  className?: string
}

export const StepCard: React.FC<StepCardProps> = ({
  step,
  title,
  description,
  icon,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {icon ? (
        <div className="mb-6 relative">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <Image 
              src={icon} 
              alt={`Bước ${step}`} 
              width={64} 
              height={64} 
              className="object-contain"
            />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {step}
          </div>
        </div>
      ) : (
        <div className="mb-6 relative">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold text-white">{step}</span>
          </div>
        </div>
      )}
      
      <div className="space-y-4 max-w-xs">
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
          Bước {step}
          <br />
          {title}
        </h3>
        
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

