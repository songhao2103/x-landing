'use client'

import OverviewSectionItem from '@/components/sections/OverviewSectionItem'
import { Reveal, RevealItem } from '@/components/ui/Reveal'
import { TittleSection } from '@/components/ui/TittleSection'
import { useResponsive } from '@/lib/utils/hooks'
import Image from 'next/image'
import { CSSProperties, ReactNode, useEffect, useState } from 'react'

export interface OverviewSectionProps {
  title: string
  description: string
  items: OverviewItem[]
}

export interface OverviewItem {
  title: string
  image: string
  description: string
}

const OverviewSection: React.FC<OverviewSectionProps> = ({
  description,
  items,
  title,
}) => {
  const isLaptop = useResponsive('up', 'xl')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const renderOverList = () => {
    if (isLaptop)
      return (
        <div className="">
          <OverviewGrid length={items.length}>
            {items.map((i) => (
              <RevealItem>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">
                  {i.title}
                </h3>
              </RevealItem>
            ))}
          </OverviewGrid>
          <OverviewGrid length={items.length}>
            {items.map((i) => (
              <RevealItem>
                {i.image && (
                  <div className="mb-4 flex justify-center">
                    <Image
                      src={i.image}
                      alt={i.title}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                )}
              </RevealItem>
            ))}
          </OverviewGrid>

          <OverviewGrid length={items.length}>
            {items.map((i) => (
              <RevealItem>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  {i.description}
                </p>
              </RevealItem>
            ))}
          </OverviewGrid>
        </div>
      )

    return (
      <Reveal
        stagger={{ staggerChildren: 0.07 }}
        motionConfig={{
          from: 'top',
          duration: 0.6,
          ease: 'easeInOut',
          distance: 32,
        }}
      >
        <div
          className="
               grid 
               grid-cols-1 
               md:grid-cols-2 
               xl:grid-cols-[repeat(var(--cols),minmax(0,1fr))]
               gap-8 lg:gap-6
             "
          style={
            {
              '--cols': items.length,
            } as CSSProperties
          }
        >
          {items.map((item, index) => (
            <RevealItem>
              <OverviewSectionItem {...item} key={index} />
            </RevealItem>
          ))}
        </div>
      </Reveal>
    )
  }
  return (
    <section className={`py-12 lg:py-16 bg-[#F6F9FC]`}>
      <div className="container mx-auto px-4 lg:px-8 text-center space-y-6">
        <Reveal
          stagger={{ staggerChildren: 0.07 }}
          motionConfig={{
            from: 'top',
            duration: 0.6,
            ease: 'easeInOut',
            distance: 32,
          }}
        >
          <TittleSection title={title} noMargin />
          <h6 className="">{description}</h6>
        </Reveal>

        {renderOverList()}
      </div>
    </section>
  )
}

export default OverviewSection

const OverviewGrid = ({
  children,
  length,
}: {
  children: ReactNode
  length: number
}) => {
  return (
    <Reveal
      stagger={{ staggerChildren: 0.07 }}
      motionConfig={{
        from: 'bottom',
        duration: 0.6,
        ease: 'easeInOut',
        distance: 32,
      }}
    >
      <div
        className="
               grid 
               grid-cols-1 
               md:grid-cols-2 
               xl:grid-cols-[repeat(var(--cols),minmax(0,1fr))]
               gap-8 lg:gap-6
             "
        style={
          {
            '--cols': length,
          } as CSSProperties
        }
      >
        {children}
      </div>
    </Reveal>
  )
}
