'use client'

import Image from 'next/image'
import { useState } from 'react'
import TextGradient from './TextGradient'

type TabItem = {
  key: string
  label: string
  features: string[]
  image?: string
}

interface Props {
  tabs: TabItem[]
  defaultActive?: string
}

export default function TabsSection({ tabs, defaultActive }: Props) {
  const [active, setActive] = useState(defaultActive ?? tabs[0].key)

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-between">
      <div className=" max-w-5xl w-full overflow-hidden bg-[#071a33] text-white">
        {tabs.map((tab, index) => {
          const isActive = active === tab.key

          return (
            <div
              key={tab.key}
              className="relative bg-gradient-to-r from-[#123A7A]/50 via-[#0F2F66]/20 to-transparent backdrop-blur-lg"
            >
              {/* ACTIVE LEFT BORDER */}
              {isActive && (
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#BB45FF]  to-[#02ABFF]" />
              )}

              {/* TAB HEADER */}
              <button
                onClick={() => setActive(tab.key)}
                className={`
                relative w-full text-left px-6 py-5 text-xl font-semibold
                transition-colors
                ${isActive ? '' : 'text-blue-300 hover:text-white'}
              `}
              >
                {isActive ? (
                  <TextGradient className="text-xl font-semibold">
                    {tab.label}
                  </TextGradient>
                ) : (
                  tab.label
                )}
              </button>

              {/* TAB CONTENT */}
              {isActive && (
                <div className="relative px-6 pb-6 text-blue-100">
                  {/* RIGHT → LEFT BLUR GRADIENT OVERLAY */}

                  <div className="pointer-events-none absolute inset-0" />

                  <div className="relative">
                    <TabContent features={tab.features} />
                  </div>
                </div>
              )}

              {/* DIVIDER */}
              {index < tabs.length - 1 && (
                <div className="h-[1px] bg-gradient-to-r from-[#123A7A]/40 via-[#0F2F66]/25  to-transparent backdrop-blur-lg mx-6 " />
              )}
            </div>
          )
        })}
        <div
          className="
      pointer-events-none
      absolute inset-y-0 right-0 w-[45%]
      bg-gradient-to-r
      from-transparent
      to-[#071A38]
    "
        />
      </div>
      <div className="relative h-[450px] w-full">
        <Image
          src={tabs.find((tab) => tab.key === active)?.image || ''}
          alt={tabs.find((tab) => tab.key === active)?.label || ''}
          fill
          className="object-contain h-full w-full"
        />
      </div>
    </div>
  )
}

const TabContent = ({ features }: { features: string[] }) => {
  return (
    <ul className="space-y-3">
      {features.map((f) => {
        const [des, subdes] = f.split(':')

        return (
          <li key={f}>
            • {subdes && <span className="font-bold text-white">{des}:</span>}{' '}
            <span className="font-light">{subdes || des}</span>
          </li>
        )
      })}
    </ul>
  )
}
