import React from 'react'

export interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'feature' | 'service' | 'achievement'
  className?: string
  hover?: boolean
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'default', 
  className = '',
  hover = false 
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300'
  
  const variantStyles = {
    default: 'bg-white shadow-card',
    feature: 'bg-white shadow-lg p-6',
    service: 'bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white',
    achievement: 'bg-navy-light p-8 text-center',
  }
  
  const hoverStyles = hover ? 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer' : ''
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`.trim()
  
  return (
    <div className={combinedClassName}>
      {children}
    </div>
  )
}

