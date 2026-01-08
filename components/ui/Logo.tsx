import { ROUTES } from '@/lib/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface LogoProps {
  variant?: 'default' | 'footer'
  className?: string
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  className = '',
}) => {
  const sizeClass = 'h-8 md:h-10'

  return (
    <Link className={`flex items-center ${className}`} href={ROUTES.HOME}>
      <Image
        src="/images/icons/logo.png"
        alt="XFUTURE Logo"
        width={140}
        height={40}
        className={`${sizeClass} w-auto object-contain`}
        priority
      />
    </Link>
  )
}
