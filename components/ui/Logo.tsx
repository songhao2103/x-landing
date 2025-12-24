import React from 'react'
import Image from 'next/image'

export interface LogoProps {
  variant?: 'default' | 'footer'
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  const sizeClass = variant === 'footer' ? 'h-8' : 'h-8 md:h-10'
  
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/images/icons/logo.png"
        alt="XFUTURE Logo"
        width={variant === 'footer' ? 120 : 140}
        height={variant === 'footer' ? 32 : 40}
        className={`${sizeClass} w-auto object-contain`}
        priority
      />
    </div>
  )
}

