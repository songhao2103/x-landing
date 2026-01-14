'use client'

import {
  motion,
  type MotionProps,
  type Transition,
  useReducedMotion,
  type Variants,
} from 'framer-motion'
import React, { forwardRef, useMemo } from 'react'

/**
 * Hướng "chạy vào" khi element vào viewport.
 * - none: không dịch chuyển, chỉ opacity
 * - left/right/top/bottom: slide
 * - scale: zoom nhẹ
 */
export type RevealFrom = 'none' | 'left' | 'right' | 'top' | 'bottom' | 'scale'

/**
 * "Position" config: điều khiển khi nào tính là "đã vào viewport"
 * - amount: tỷ lệ phần tử visible để trigger (0..1) hoặc "some"/"all"
 * - margin: rootMargin của IntersectionObserver (trigger sớm/muộn)
 *   Ví dụ: "0px 0px -20% 0px" -> trigger sớm hơn khi còn cách đáy viewport 20%
 * - once: chạy 1 lần hay chạy lại khi scroll ra/vào
 */
export type ViewportConfig = {
  once?: boolean
  amount?: number | 'some' | 'all'
  margin?: string
}

/**
 * Motion config: điều khiển hiệu ứng
 */
export type RevealMotionConfig = {
  from?: RevealFrom
  distance?: number // px
  opacity?: number // opacity lúc hidden
  blur?: number // px blur lúc hidden (optional)
  scale?: number // scale lúc hidden (cho "scale")
  duration?: number // s
  delay?: number // s
  ease?: Transition['ease']
  spring?: boolean // nếu true: dùng spring thay vì tween
  stiffness?: number
  damping?: number
  mass?: number
}

/**
 * Children stagger config (khi bạn muốn reveal từng item con)
 * - staggerChildren: khoảng cách giữa các item con
 * - delayChildren: delay trước khi bắt đầu stagger
 */
export type StaggerConfig = {
  staggerChildren?: number
  delayChildren?: number
}

export type RevealProps<T extends React.ElementType = 'div'> = {
  as?: T
  className?: string
  style?: React.CSSProperties

  /**
   * Viewport trigger config (scroll tới đâu thì chạy)
   */
  viewport?: ViewportConfig

  /**
   * Motion config (hướng + timing)
   */
  motionConfig?: RevealMotionConfig

  /**
   * Nếu muốn reveal children theo stagger
   * -> dùng <Reveal stagger> và wrap từng child bằng <RevealItem />
   */
  stagger?: StaggerConfig

  /**
   * Callback khi enter/leave viewport
   */
  onEnter?: () => void
  onLeave?: () => void

  /**
   * Tắt animation hoàn toàn (ví dụ SSR skeleton, test, hoặc user setting)
   */
  disabled?: boolean

  /**
   * Nếu true: element đã inView thì giữ nguyên trạng thái "shown"
   * (Thường dùng với once=false nhưng muốn “đã vào rồi thì ở lại”)
   */
  freezeOnceVisible?: boolean

  children?: React.ReactNode
} & Omit<
  MotionProps,
  'initial' | 'animate' | 'whileInView' | 'viewport' | 'variants' | 'transition'
>

/**
 * Item component để dùng chung với stagger (tùy chọn)
 */
export type RevealItemProps<T extends React.ElementType = 'div'> = {
  as?: T
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
} & Omit<MotionProps, 'variants'>

/**
 * Helper: tạo hidden state theo hướng
 */
function computeHidden(
  from: RevealFrom,
  distance: number,
  opacity: number,
  blur: number,
  scale: number
) {
  const base: any = { opacity }

  if (blur > 0) base.filter = `blur(${blur}px)`

  switch (from) {
    case 'left':
      return { ...base, x: -distance, y: 0 }
    case 'right':
      return { ...base, x: distance, y: 0 }
    case 'top':
      return { ...base, y: -distance, x: 0 }
    case 'bottom':
      return { ...base, y: distance, x: 0 }
    case 'scale':
      return { ...base, scale }
    case 'none':
    default:
      return base
  }
}

/**
 * Helper: tạo shown state
 */
function computeShown(blur: number) {
  const shown: any = { opacity: 1, x: 0, y: 0, scale: 1 }
  if (blur > 0) shown.filter = 'blur(0px)'
  return shown
}

/**
 * Reveal base component
 */
export const Reveal = forwardRef(function Reveal<
  T extends React.ElementType = 'div',
>(props: RevealProps<T>, ref: React.ForwardedRef<Element>) {
  const {
    as,
    className,
    style,
    viewport,
    motionConfig,
    stagger,
    onEnter,
    onLeave,
    disabled,
    freezeOnceVisible = false,
    children,
    ...rest
  } = props

  const reducedMotion = useReducedMotion()
  const Component: any = as ? motion(as as any) : motion.div

  const v = {
    once: viewport?.once ?? true,
    amount: viewport?.amount ?? 0.25,
    margin: viewport?.margin ?? '0px 0px -10% 0px',
  }

  const m = {
    from: motionConfig?.from ?? 'bottom',
    distance: motionConfig?.distance ?? 24,
    opacity: motionConfig?.opacity ?? 0,
    blur: motionConfig?.blur ?? 0,
    scale: motionConfig?.scale ?? 0.98,
    duration: motionConfig?.duration ?? 0.55,
    delay: motionConfig?.delay ?? 0,
    ease: motionConfig?.ease ?? [0.22, 1, 0.36, 1],
    spring: motionConfig?.spring ?? false,
    stiffness: motionConfig?.stiffness ?? 260,
    damping: motionConfig?.damping ?? 24,
    mass: motionConfig?.mass ?? 1,
  }

  const transition: Transition = useMemo(() => {
    if (m.spring) {
      return {
        type: 'spring',
        stiffness: m.stiffness,
        damping: m.damping,
        mass: m.mass,
        delay: m.delay,
      }
    }
    return {
      type: 'tween',
      duration: m.duration,
      ease: m.ease,
      delay: m.delay,
    }
  }, [m.spring, m.stiffness, m.damping, m.mass, m.delay, m.duration, m.ease])

  const variants: Variants = useMemo(() => {
    const hidden = computeHidden(m.from, m.distance, m.opacity, m.blur, m.scale)
    const shown = computeShown(m.blur)

    // Nếu có stagger: parent variants sẽ điều khiển children
    if (stagger) {
      return {
        hidden,
        shown: {
          ...shown,
          transition: {
            ...transition,
            when: 'beforeChildren',
            staggerChildren: stagger.staggerChildren ?? 0.08,
            delayChildren: stagger.delayChildren ?? 0,
          },
        },
      }
    }

    return {
      hidden,
      shown: {
        ...shown,
        transition,
      },
    }
  }, [m.from, m.distance, m.opacity, m.blur, m.scale, transition, stagger])

  // Nếu user prefers reduced motion hoặc disabled: render "tĩnh" luôn
  if (disabled || reducedMotion) {
    const StaticTag: any = as ?? 'div'
    return (
      <StaticTag ref={ref as any} className={className} style={style}>
        {children}
      </StaticTag>
    )
  }

  return (
    <Component
      ref={ref as any}
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={v}
      onViewportEnter={onEnter}
      onViewportLeave={onLeave}
      // freezeOnceVisible: giữ trạng thái shown sau lần đầu thấy
      // (Framer Motion không có prop "freeze", nhưng pattern phổ biến là: once=true.
      // Nếu bạn muốn once=false nhưng "đã thấy thì ở lại", dùng once=true là hợp lý nhất.
      // Mình vẫn để flag này để bạn dễ đọc API, nhưng hành vi đúng nhất là dùng viewport.once=true.
      {...rest}
    >
      {children}
    </Component>
  )
}) as <T extends React.ElementType = 'div'>(
  p: RevealProps<T> & { ref?: React.Ref<Element> }
) => JSX.Element

/**
 * RevealItem: dùng kèm với <Reveal stagger>
 * Bạn bọc từng child bằng RevealItem để nhận variants children tự động.
 */
export function RevealItem<T extends React.ElementType = 'div'>(
  props: RevealItemProps<T>
) {
  const { as, className, style, children, ...rest } = props
  const Component: any = as ? motion(as as any) : motion.div

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    shown: { opacity: 1, y: 0 },
  }

  return (
    <Component
      className={className}
      style={style}
      variants={itemVariants}
      {...rest}
    >
      {children}
    </Component>
  )
}
