import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const FloatingActions = () => {
  const [percent, setPercent] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

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

  if (!mounted) return null

  return createPortal(
    <div className="fixed bottom-6 right-4 flex flex-col items-end gap-y-2 sm:gap-y-4 z-50">
      {percent > 5 && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          // style={bgStyle}
          className=" bg-primary-light relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"
        >
          <svg
            className="w-6 h-6 text-white rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}
    </div>,
    document.body
  )
}

export default FloatingActions
