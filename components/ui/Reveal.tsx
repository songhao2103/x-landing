'use client'

import {
  motion,
  type MotionProps,
  type Transition,
  useReducedMotion,
  type Variants,
} from 'framer-motion'
import React, { forwardRef, useMemo } from 'react'

export type RevealFrom = 'none' | 'left' | 'right' | 'top' | 'bottom' | 'scale'

export type ViewportConfig = {
  once?: boolean
  amount?: number | 'some' | 'all'
  margin?: string
}

export type RevealMotionConfig = {
  from?: RevealFrom
  distance?: number
  opacity?: number
  blur?: number
  scale?: number
  duration?: number
  delay?: number
  ease?: Transition['ease']
  spring?: boolean
  stiffness?: number
  damping?: number
  mass?: number
}

export type StaggerConfig = {
  staggerChildren?: number
  delayChildren?: number
}

export type RevealProps<T extends React.ElementType = 'div'> = {
  as?: T
  className?: string
  style?: React.CSSProperties
  viewport?: ViewportConfig
  motionConfig?: RevealMotionConfig
  stagger?: StaggerConfig
  onEnter?: () => void
  onLeave?: () => void
  disabled?: boolean
  freezeOnceVisible?: boolean
  children?: React.ReactNode
} & Omit<
  MotionProps,
  'initial' | 'animate' | 'whileInView' | 'viewport' | 'variants' | 'transition'
>

export type RevealItemProps<T extends React.ElementType = 'div'> = {
  as?: T
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
} & Omit<MotionProps, 'variants'>

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

function computeShown(blur: number) {
  const shown: any = { opacity: 1, x: 0, y: 0, scale: 1 }
  if (blur > 0) shown.filter = 'blur(0px)'
  return shown
}

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

  if (disabled || reducedMotion) {
    const StaticTag: any = as ?? 'div'
    return (
      <StaticTag ref={ref as any} className={className} style={style}>
        {children}
      </StaticTag>
    )
  }

  // Tạo wrapper div để chặn overflow
  const WrapperTag: any = as ?? 'div'

  return (
    <WrapperTag
      ref={ref as any}
      className={className}
      style={{
        ...style,
        overflow: 'hidden',
      }}
    >
      <Component
        variants={variants}
        initial="hidden"
        whileInView="shown"
        viewport={v}
        onViewportEnter={onEnter}
        onViewportLeave={onLeave}
        {...rest}
      >
        {children}
      </Component>
    </WrapperTag>
  )
}) as <T extends React.ElementType = 'div'>(
  p: RevealProps<T> & { ref?: React.Ref<Element> }
) => JSX.Element

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
