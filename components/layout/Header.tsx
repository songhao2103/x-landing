'use client'

import FloatingActions from '@/components/layout/FloatingActions'
import { Logo } from '@/components/ui/Logo'
import { LANGUAGE } from '@/lib/constants/global'
import { ROUTES } from '@/lib/constants/routes'
import { useClickOutside } from '@/lib/utils/hooks'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsMenuOpen, setProductsMenuOpen] = useState(false)

  const t = useTranslations()

  const products = [
    { label: 'XPromo', href: ROUTES.PRODUCT_XPROMO },
    { label: 'XOMI', href: ROUTES.PRODUCT_XOMI },
    { label: 'AI CALL AGENT', href: ROUTES.PRODUC_XAI_CALL_AGENT },
    { label: 'AI SUPPERVISOR', href: ROUTES.PRODUCT_AI_SUPPERVISOR },
  ]

  const navItems = [
    {
      label: t('nav.products'),
      // href: ROUTES.PRODUCT_XPROMO,
      hasDropdown: true,
    },
    { label: t('nav.solutions'), href: '#solutions' },
    { label: t('nav.industries'), href: '#industries' },
    { label: t('nav.resources'), href: '#resources' },
    { label: t('nav.company'), href: '#company' },
  ]

  const languageItems = [
    { label: t('language.english'), value: LANGUAGE.EN },
    {
      label: t('language.vietnamese'),
      value: LANGUAGE.VI,
    },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/80 backdrop-blur-sm"
      style={{ zIndex: 1000 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/50 via-[#0d1d3a]/50 to-[#162548]/50 pointer-events-none" />
      <nav className="container mx-auto px-4 sm:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setProductsMenuOpen(true)}
                  onMouseLeave={() => setProductsMenuOpen(false)}
                >
                  <div className="text-[15px] font-medium text-white hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer">
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

                  {/* Dropdown Menu */}
                  {productsMenuOpen && (
                    <>
                      {/* Bridge để giữ menu mở khi di chuyển chuột */}
                      <div className="absolute top-full left-0 w-full h-2" />
                      <div
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-2xl py-2 border border-gray-100"
                        style={{ zIndex: 9999 }}
                        onMouseEnter={() => setProductsMenuOpen(true)}
                        onMouseLeave={() => setProductsMenuOpen(false)}
                      >
                        {products.map((product) => (
                          <Link
                            key={product.label}
                            href={product.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-cyan-600 transition-colors cursor-pointer"
                            onClick={() => setProductsMenuOpen(false)}
                          >
                            {product.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[15px] font-medium text-white hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </a>
              )
            )}

            {/* Language Selector */}
            <LanguageSwitcher />

            {/* CTA Button */}
            <Link
              href={ROUTES.CONTACT}
              className="px-6 py-2.5 text-[15px] font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all shadow-lg shadow-cyan-500/30"
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex gap-x-2 items-center">
            <LanguageSwitcher />
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label} className="flex flex-col gap-2">
                    <div
                      className="text-sm font-medium text-white hover:text-cyan-400 transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </div>
                    <div className="pl-4 flex flex-col gap-2">
                      {products.map((product) => (
                        <Link
                          key={product.label}
                          href={product.href}
                          className="text-sm text-white/80 hover:text-cyan-400 transition-colors py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {product.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-white hover:text-cyan-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
              <Link
                href={ROUTES.CONTACT}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all shadow-lg shadow-cyan-500/30 mt-2 inline-block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </nav>
      <FloatingActions />
    </header>
  )
}

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations()

  useClickOutside(wrapperRef, () => setOpen(false))

  const handleChange = (nextLocale: LANGUAGE) => {
    const nextPath = `/${nextLocale}${pathname.replace(/^\/(vi|en)/, '')}`
    setOpen(false)
    router.replace(nextPath, { scroll: false })
  }

  const currentLang = locale === LANGUAGE.EN ? 'EN' : 'VI'

  return (
    <div ref={wrapperRef} className="relative">
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative flex items-center gap-1.5 text-[15px] font-medium text-white hover:text-cyan-400 transition-colors"
      >
        {/* Globe icon */}
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

        {currentLang}

        {/* Chevron icon */}
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-7 right-0 flex flex-col gap-y-1 px-3 py-2 rounded-md shadow-md w-[120px] bg-white z-50">
          <button
            className="text-left text-dark-hover hover:text-cyan-600 transition-colors"
            onClick={() => handleChange(LANGUAGE.EN)}
          >
            {t('language.english')}
          </button>
          <button
            className="text-left text-dark-hover hover:text-cyan-600 transition-colors"
            onClick={() => handleChange(LANGUAGE.VI)}
          >
            {t('language.vietnamese')}
          </button>
        </div>
      )}
    </div>
  )
}
