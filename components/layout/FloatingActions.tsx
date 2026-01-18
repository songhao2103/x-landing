'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { IoIosArrowUp } from 'react-icons/io'

const FloatingActions = () => {
  const [percent, setPercent] = useState(0)

  if (typeof window === 'undefined') return null

  // scroll %
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      setPercent(Math.round((scrollTop / docHeight) * 100 || 0))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bgStyle = {
    background: `conic-gradient(#3B82F6 ${percent}%, #0f313a ${percent}% 100%)`,
  }

  return createPortal(
    <div className="fixed bottom-6 right-4 flex flex-col items-end gap-y-2 sm:gap-y-4 z-50">
      {/* Scroll to top */}
      {percent > 5 && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={bgStyle}
          className="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform bg-white"
        >
          {percent === 100 ? (
            <IoIosArrowUp size={22} className="text-white" />
          ) : (
            <span className="z-10 text-xs md:text-sm font-semibold text-white">
              {percent}%
            </span>
          )}
        </div>
      )}
    </div>,
    document.body
  )
}

export default FloatingActions
