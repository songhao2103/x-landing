'use client'

import { useCallback, useEffect, useState } from 'react'
import tailwindConfig from 'tailwindcss/defaultConfig'

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

export type TResponsiveBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number
export type TResponsiveQuery = 'up' | 'down' | 'between'
const breakpoints: TResponsiveBreakpoint[] = ['sm', 'md', 'lg', 'xl', '2xl']

export const getMatches = (query: string): boolean => {
  // Prevents SSR issues
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches
  }
  return false
}

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(getMatches(query))

  useEffect(() => {
    function handleChange() {
      setMatches(getMatches(query))
    }

    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}

export const useResponsive = (
  query: TResponsiveQuery,
  key?: TResponsiveBreakpoint,
  start?: TResponsiveBreakpoint,
  end?: TResponsiveBreakpoint
) => {
  const screens = tailwindConfig?.theme?.screens as Record<
    string,
    TResponsiveBreakpoint
  >

  if (query === 'up' && key) {
    key = breakpoints.includes(key) && screens ? screens[key] : key

    return useMediaQuery(`(min-width: ${key})`)
  }

  if (query === 'down' && key) {
    key = breakpoints.includes(key) && screens ? screens[key] : key

    return useMediaQuery(`(max-width: ${key})`)
  }

  if (query === 'between' && start && end) {
    start = breakpoints.includes(start) && screens ? screens[start] : start
    end = breakpoints.includes(end) && screens ? screens[end] : end

    return useMediaQuery(`(min-width: ${start}) and (max-width: ${end})`)
  }
}

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    // Cleanup khi component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}
