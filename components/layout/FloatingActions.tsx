import FloatingItem from '@/components/layout/FloatingItem'
import { PHONE_NUMBER } from '@/lib/constants/global'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FiPhone, FiPlus } from 'react-icons/fi'
import { IoIosArrowUp, IoMdClose } from 'react-icons/io'
import { SiZalo } from 'react-icons/si'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: { opacity: 0, transition: { when: 'afterChildren' } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300 },
  },
  exit: { opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.2 } },
}

const FloatingActions = () => {
  const [percent, setPercent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
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

  // detect mobile
  useEffect(() => {
    const cb = () => setIsMobile(window.innerWidth <= 768)
    cb()
    window.addEventListener('resize', cb)
    return () => window.removeEventListener('resize', cb)
  }, [])

  if (!mounted) return null

  const actions = [
    { icon: FiPhone, url: `tel:${PHONE_NUMBER}` },
    // {
    //   icon: BsMessenger,
    //   url: LINK_MESSENGER,
    // },
    { icon: SiZalo, url: `https://zalo.me/${PHONE_NUMBER}` },
  ]

  const bgStyle = {
    background: `conic-gradient(#A855F7 ${percent}%, #0A1F5C ${percent}% 100%)`,
  }

  return createPortal(
    <div className="fixed bottom-6 right-4 flex flex-col items-end gap-y-2 sm:gap-y-4 z-50">
      {/* Animated container */}
      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`flex flex-col items-end ${
              isMobile ? 'gap-y-2' : 'gap-y-4'
            }`}
          >
            {actions.map((act, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <FloatingItem icon={act.icon} url={act.url} />
              </motion.div>
            ))}
            {/* <FloatingItem icon={PiQuestionMarkBold} /> */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      {isMobile && (
        <motion.div variants={itemVariants} onClick={() => setIsOpen(!isOpen)}>
          <FloatingItem
            icon={isOpen ? IoMdClose : FiPlus}
            url=""
            active={isOpen}
          />
        </motion.div>
      )}

      {/* Scroll to top */}
      {percent > 5 && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={bgStyle}
          className="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform bg-white"
        >
          {percent === 100 ? (
            <IoIosArrowUp size={isMobile ? 20 : 24} className="text-white" />
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
