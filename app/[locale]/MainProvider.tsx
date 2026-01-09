'use client'

import { LANGUAGE } from '@/lib/constants/global'
import { LOCAL_STORAGE_KEY, localStorageUtil } from '@/lib/storage'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface MainContextValue {
  lang: LANGUAGE
  setLang: (lang: LANGUAGE) => void
}

const LanguageContext = createContext<MainContextValue | null>(null)

const MainProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<LANGUAGE>(LANGUAGE.VI)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorageUtil.get<LANGUAGE>(LOCAL_STORAGE_KEY.LANGUAGE)
    if (stored) setLangState(stored)
  }, [])

  const setLang = (next: LANGUAGE) => {
    setLangState(next)
    localStorageUtil.set(LOCAL_STORAGE_KEY.LANGUAGE, next)
  }

  if (!mounted) return null

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default MainProvider

export const useMainContext = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}
