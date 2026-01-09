'use client'

import { LANGUAGE } from '@/lib/constants/global'
import { LOCAL_STORAGE_KEY, localStorageUtil } from '@/lib/storage'
import { usePathname, useRouter } from 'next/navigation'
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
  const router = useRouter()
  const pathname = usePathname()

  const [lang, setLangState] = useState<LANGUAGE>(() => {
    if (typeof window === 'undefined') return LANGUAGE.VI
    return (
      localStorageUtil.get<LANGUAGE>(LOCAL_STORAGE_KEY.LANGUAGE) ?? LANGUAGE.VI
    )
  })

  useEffect(() => {
    const urlLang = pathname.startsWith('/en') ? LANGUAGE.EN : LANGUAGE.VI

    setLangState(urlLang)
    localStorageUtil.set(LOCAL_STORAGE_KEY.LANGUAGE, urlLang)
  }, [pathname])

  const setLang = (next: LANGUAGE) => {
    const nextPath = `/${next}${pathname.replace(/^\/(vi|en)/, '')}`
    router.replace(nextPath, { scroll: false })
  }

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
