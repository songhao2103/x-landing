'use client'

import { Logo } from '@/components/ui/Logo'
import { LANGUAGE } from '@/lib/constants/global'
import { ROUTES } from '@/lib/constants/routes'
import { useClickOutside } from '@/lib/utils/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

export const Header: React.FC = () => {
  const t = useTranslations()

  // ===== STATE =====
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  // ===== DATA =====
  const products = [
    { label: 'XPromo', href: ROUTES.PRODUCT_XPROMO },
    { label: 'XOMI', href: ROUTES.PRODUCT_XOMI },
    { label: 'AI CALL AGENT', href: ROUTES.PRODUC_XAI_CALL_AGENT },
    { label: 'AI SUPPERVISOR', href: ROUTES.PRODUCT_AI_SUPPERVISOR },
  ]

  const navItems = [
    { label: t('nav.products'), hasDropdown: true },
    { label: t('nav.solutions'), href: '#solutions' },
    { label: t('nav.industries'), href: '#industries' },
    { label: t('nav.resources'), href: '#resources' },
    { label: t('nav.company'), href: '#company' },
  ]

  // ===== HANDLERS =====
  const toggleMobileMenu = () => {
    setMobileMenuOpen((v) => !v)
    setMobileProductsOpen(false)
  }

  const closeAllMobile = () => {
    setMobileMenuOpen(false)
    setMobileProductsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/80 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/50 via-[#0d1d3a]/50 to-[#162548]/50 pointer-events-none" />

      <nav className="container mx-auto px-4 sm:px-8 relative">
        {/* ===== TOP BAR ===== */}
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* ===== DESKTOP NAV ===== */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDesktopProductsOpen(true)}
                  onMouseLeave={() => setDesktopProductsOpen(false)}
                >
                  <div className="flex items-center gap-1 text-[15px] font-medium text-white hover:text-cyan-400 cursor-pointer">
                    {item.label}
                    <svg
                      className="w-4 h-4"
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

                  <AnimatePresence>
                    {desktopProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-4 z-[9999]"
                      >
                        <div className="w-48 bg-white rounded-lg shadow-2xl py-2 border border-gray-100">
                          {products.map((product) => (
                            <Link
                              key={product.label}
                              href={product.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-cyan-600"
                              onClick={() => setDesktopProductsOpen(false)}
                            >
                              {product.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[15px] font-medium text-white hover:text-cyan-400"
                >
                  {item.label}
                </a>
              )
            )}

            <LanguageSwitcher />

            <Link
              href={ROUTES.CONTACT}
              className="px-6 py-2.5 text-[15px] font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-lg"
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* ===== MOBILE TOGGLE ===== */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button onClick={toggleMobileMenu} className="p-2 text-white">
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-white/10 py-4"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.label}>
                      <button
                        className="w-full flex justify-between items-center text-sm font-medium text-white py-2"
                        onClick={() => setMobileProductsOpen((v) => !v)}
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: mobileProductsOpen ? 180 : 0 }}
                        >
                          <svg
                            className="w-4 h-4"
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
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 flex flex-col gap-2"
                          >
                            {products.map((product) => (
                              <Link
                                key={product.label}
                                href={product.href}
                                className="text-sm text-white/80 hover:text-cyan-400"
                                onClick={closeAllMobile}
                              >
                                {product.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-sm font-medium text-white py-2"
                      onClick={closeAllMobile}
                    >
                      {item.label}
                    </a>
                  )
                )}

                <Link
                  href={ROUTES.CONTACT}
                  onClick={closeAllMobile}
                  className="mt-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-center"
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* <FloatingActions /> */}
    </header>
  )
}

// =======================================================
// ================= LANGUAGE SWITCHER ===================
// =======================================================

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations()

  useClickOutside(ref, () => setOpen(false))

  const changeLang = (lang: LANGUAGE) => {
    const nextPath = `/${lang}${pathname.replace(/^\/(vi|en)/, '')}`
    setOpen(false)
    router.replace(nextPath, { scroll: false })
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-white"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
          />
        </svg>
        {locale.toUpperCase()}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="absolute right-0 mt-2 bg-white rounded-md shadow-md p-2 w-[120px]"
          >
            <button
              onClick={() => changeLang(LANGUAGE.EN)}
              className="block w-full text-left hover:text-cyan-600"
            >
              {t('language.english')}
            </button>
            <button
              onClick={() => changeLang(LANGUAGE.VI)}
              className="block w-full text-left hover:text-cyan-600"
            >
              {t('language.vietnamese')}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
