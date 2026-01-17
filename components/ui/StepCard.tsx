'use client'

import { Reveal } from '@/components/ui/Reveal'
import Image from 'next/image'

export interface StepCardProps {
  step: number
  title: string
  description: string[]
  isLi?: boolean
  icon?: string
  isLast?: boolean
}
export const StepCard = ({
  step,
  title,
  description,
  icon,
  isLi,
  isLast,
}: StepCardProps) => {
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
        h-full
        grid
        grid-rows-[auto_160px_1fr]
        text-center
        gap-4
        px-4
      "
      >
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold leading-snug">
          Step {step}
          <br />
          {title}
        </h3>

        {/* ICON ZONE */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-24 h-24 lg:w-[120px] lg:h-[120px]">
            <Image fill src={icon!} alt="" className="object-contain" />
          </div>

          {!isLast && (
            <div className="hidden xl:block absolute right-[-140px] top-1/2 -translate-y-1/2">
              <Image
                src="/images/contents/xpromos/icon_next.svg"
                width={120}
                height={120}
                alt=""
              />
            </div>
          )}
        </div>

        {/* DESCRIPTION */}
        <div className="flex items-start justify-center">
          {!isLi ? (
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {description[0]}
            </p>
          ) : (
            <ul className="text-left space-y-1">
              {description.map((d, i) => (
                <li
                  key={i}
                  className="text-sm md:text-base text-gray-600 flex gap-x-2"
                >
                  <div>•</div> <div>{d}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Reveal>
  )
}
