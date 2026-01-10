import { ProductCard } from '@/components/ui/ProductCard'
import { useTranslations } from 'next-intl'
import React from 'react'

export const ProductDetails: React.FC = () => {
  const t = useTranslations('products')
  const products = [
    {
      tag: 'PROMO',
      logo: '/images/icons/xpromo_logo.svg',
      flowVi: '/images/contents/homes/xpromo_flow_vi.svg',
      flowEn: '/images/contents/homes/xpromo_flow_en.svg',
      title: t('xpromo.title'),
      description: t('xpromo.description'),
      cta: t('xpromo.cta'),
      gradient: 'from-blue-600 to-purple-600',
      reverse: false,
    },
    {
      tag: 'OMI',
      logo: '/images/icons/xomi_logo.svg',
      flowVi: '/images/contents/homes/xomi_flow_vi.svg',
      flowEn: '/images/contents/homes/xomi_flow_en.svg',
      title: t('xomi.title'),
      description: t('xomi.description'),
      cta: t('xomi.cta'),
      gradient: 'from-purple-600 to-pink-600',
      reverse: true,
    },
    {
      tag: 'BIZ',
      logo: '/images/icons/xbiz_logo.svg',
      flow: 'images/backgrounds/xbiz_flow.svg',
      title: t('xbiz.title'),
      description: t('xbiz.description'),
      cta: t('xbiz.cta'),
      gradient: 'from-blue-500 to-cyan-500',
      reverse: false,
    },
    {
      tag: 'TECH',
      logo: '/images/icons/xtech_logo.svg',
      flow: 'images/backgrounds/xtech_flow.svg',
      title: t('xtech.title'),
      description: t('xtech.description'),
      cta: t('xtech.cta'),
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
