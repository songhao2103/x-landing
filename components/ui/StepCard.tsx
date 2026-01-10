import Image from 'next/image'
import React from 'react'

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
    <div
      className={`flex flex-col items-center text-center justify-between gap-4 ${className}`}
    >
      <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
        Bước {step}
        <br />
        {title}
      </h3>
      {icon ? (
        <div className="mb-6 relative">
          <div className="w-[120px] h-[120px]">
            <Image
              src={icon}
              alt={`Bước ${step}`}
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <div className="absolute top-1/2 -translate-y-2  -right-[140px] 2xl:block hidden">
            <Image
              src={'/images/contents/xpromos/icon_next.svg'}
              alt=""
              width={120}
              height={120}
            />
          </div>
        </div>
      ) : (
        <div className="mb-6 relative">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold text-white">{step}</span>
          </div>
        </div>
      )}

      <p className="text-base lg:text-lg text-gray-600 leading-relaxed h-full">
        {description}
      </p>
    </div>
  )
}
