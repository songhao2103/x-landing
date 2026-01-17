'use client'

import { Reveal } from '@/components/ui/Reveal'
import { AnimatePresence, motion } from 'framer-motion'
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
  const [active, setActive] = useState<string | null>(
    defaultActive ?? tabs[0].key
  )

  const toggle = (key: string) => {
    setActive(key)
  }

  const activeTab = tabs.find((t) => t.key === active)

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-between">
      {/* LEFT */}
      <Reveal
        motionConfig={{
          from: 'left',
          distance: 32,
          duration: 0.6,
          ease: 'easeInOut',
        }}
        viewport={{
          amount: 0.2,
          margin: '-20% 0px 0px  0px',
          once: true,
        }}
        className="w-full"
      >
        <div className="relative max-w-5xl w-full overflow-hidden bg-[#071a33] text-white">
          {tabs.map((tab, index) => {
            const isActive = active === tab.key

            return (
              <div
                key={tab.key}
                className="relative bg-gradient-to-r from-[#123A7A]/50 via-[#0F2F66]/20 to-transparent backdrop-blur-lg"
              >
                {/* ACTIVE LEFT BORDER */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      exit={{ scaleY: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 top-0 h-full w-1.5 origin-top bg-gradient-to-b from-[#BB45FF] to-[#02ABFF]"
                    />
                  )}
                </AnimatePresence>

                {/* TAB HEADER */}
                <button
                  onClick={() => toggle(tab.key)}
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

                {/* TAB CONTENT (ACCORDION) */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: 'easeInOut' },
                        opacity: { duration: 0.25 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-blue-100">
                        <TabContent features={tab.features} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* DIVIDER */}
                {index < tabs.length - 1 && (
                  <div className="h-[1px] bg-gradient-to-r from-[#123A7A]/40 via-[#0F2F66]/25 to-transparent mx-6" />
                )}
              </div>
            )
          })}

          {/* RIGHT BLUR OVERLAY */}
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
      </Reveal>

      {/* RIGHT IMAGE */}
      <div className="relative h-[450px] w-full">
        <AnimatePresence mode="wait">
          {activeTab?.image && (
            <motion.div
              key={activeTab.key}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={activeTab.image}
                alt={activeTab.label}
                fill
                className="object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

const TabContent = ({ features }: { features: string[] }) => {
  return (
    <ul className="space-y-3">
      {features.map((f) => {
        const [title, desc] = f.split(':')

        return (
          <li key={f} className="flex gap-x-2">
            <div>•</div>
            <div>
              {desc && <span className="font-bold text-white">{title}:</span>}{' '}
              <span className="font-light">{desc || title}</span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
