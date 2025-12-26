'use client'

import { TittleSection } from '@/components/ui/TittleSection'
import Image from 'next/image'
import React from 'react'

export interface ApproachSectionProps {
  title: string
  image: string
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({
  title,
  image,
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-8">
        <TittleSection title={title} />
        <Image src={image} alt={title} width={900} height={800} className="object-contain w-[90%] h-full" />
      </div>
    </section>
  )
}