import { useWindowWidth } from '@/lib/utils/hooks'
import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'

interface IFloatingItemProps {
  url?: string
  icon: IconType | string
  tooltip?: string
  top?: number
  left?: number
  right?: number
  bottom?: number
  onClick?: () => void
  active?: boolean
}

const FloatingItem: React.FC<IFloatingItemProps> = ({
  url,
  icon,
  tooltip,
  active = false,
  onClick,
}) => {
  const Icon = icon
  const windowWidth = useWindowWidth()

  return (
    <div className="relative group">
      {/* Tooltip */}
      {tooltip && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap z-50">
          {tooltip}
          <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
        </div>
      )}

      <motion.div
        className={`flex items-center justify-center rounded-full shadow-lg cursor-pointer w-10 h-10 md:w-14 lg:h-14 ${
          active ? 'bg-dark text-light' : 'bg-secondary text-white '
        }`}
        initial={{ scale: 1, rotate: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
        whileHover={{
          scale: 1.2,
          rotate: [0, 10, -10, 0],
          boxShadow: '0px 0px 12px rgba(0,0,0,0.4)',
        }}
        whileTap={{ scale: 0.9, rotate: 0 }}
        onClick={() => {
          if (url) window.open(url, '_blank')

          if (onClick) {
            onClick()
          }
        }}
      >
        {typeof Icon === 'string' ? (
          Icon
        ) : (
          <Icon size={windowWidth > 720 ? 24 : 20} className="text-white" />
        )}
      </motion.div>
    </div>
  )
}

export default FloatingItem
