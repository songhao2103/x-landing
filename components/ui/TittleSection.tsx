import React from 'react'

export const TittleSection: React.FC<{ title: string, color?: 'navy' | 'white', noMargin?: boolean }> = ({
  title,
  color = 'navy',
  noMargin = false,
}) => {
  return (
    <h2 className={`text-3xl lg:text-4xl font-bold text-center ${color === 'navy' ? 'text-navy' : 'text-white'} uppercase tracking-wide ${noMargin ? 'mb-0' : 'mb-5 lg:mb-10'} `}>
      {title}
    </h2>
  )
}