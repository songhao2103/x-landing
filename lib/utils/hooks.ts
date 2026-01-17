'use client'

import { useCallback, useEffect, useState } from 'react'

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current) return
      if (ref.current.contains(event.target as Node)) return
      handler()
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export const useGetElementSize = <T extends HTMLElement>() => {
  const [node, setNode] = useState<T | null>(null)
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })

  const ref = useCallback((el: T | null) => {
    setNode(el)
  }, [])

  useEffect(() => {
    if (!node) return

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (entry) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        })
      }
    })

    observer.observe(node)

    setSize({
      width: node.getBoundingClientRect().width,
      height: node.getBoundingClientRect().height,
    })

    return () => observer.disconnect()
  }, [node])

  return { ref, size }
}
