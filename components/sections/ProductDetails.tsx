import { ProductCard } from '@/components/ui/ProductCard'
import { vi } from '@/lib/locales/vi'
import React from 'react'

export const ProductDetails: React.FC = () => {
  const products = [
    {
      tag: 'PROMO',
      logo: '/images/icons/xpromo_logo.svg',
      flow:'images/backgrounds/xpromo_flow.svg',
      title: vi.products.xpromo.title,
      description: vi.products.xpromo.description,
      cta: vi.products.xpromo.cta,
      gradient: 'from-blue-600 to-purple-600',
      reverse: false,
    },
    {
      tag: 'OMI',
      logo: '/images/icons/xomi_logo.svg',
      flow:'images/backgrounds/xomi_flow.svg',
      title: vi.products.xomi.title,
      description: vi.products.xomi.description,
      cta: vi.products.xomi.cta,
      gradient: 'from-purple-600 to-pink-600',
      reverse: true,
    },
    {
      tag: 'BIZ',
      logo: '/images/icons/xbiz_logo.svg',
      flow:'images/backgrounds/xbiz_flow.svg',
      title: vi.products.xbiz.title,
      description: vi.products.xbiz.description,
      cta: vi.products.xbiz.cta,
      gradient: 'from-blue-500 to-cyan-500',
      reverse: false,
    },
    {
      tag: 'TECH',
      logo: '/images/icons/xtech_logo.svg',
      flow:'images/backgrounds/xtech_flow.svg',
      title: vi.products.xtech.title,
      description: vi.products.xtech.description,
      cta: vi.products.xtech.cta,
      gradient: 'from-indigo-600 to-purple-600',
      reverse: true,
    },
  ]
  
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-20 lg:space-y-32">
          {products.map((product) => (
            <ProductCard key={product.tag} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

