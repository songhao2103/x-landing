import { ReactNode } from 'react'

interface TextGradientProps {
  children: ReactNode
  from?: string
  to?: string
  className?: string
}

export default function TextGradient({
  children,
  from = '#02ABFF',
  to = '#BB45FF',
  className = '',
}: TextGradientProps) {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        background: `linear-gradient(to right, ${from}, ${to})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </span>
  )
}

