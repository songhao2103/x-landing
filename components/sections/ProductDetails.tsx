import { vi } from '@/lib/locales/vi'
import React from 'react'

interface ProductCardProps {
  tag: string
  title: string
  description: string
  cta: string
  reverse?: boolean
  gradient: string
}

const ProductCard: React.FC<ProductCardProps> = ({ tag, title, description, cta, reverse = false, gradient }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
      {/* Content */}
      <div className={`space-y-6 ${reverse ? 'lg:col-start-2' : ''}`}>
        <div className="flex items-center gap-4">
          <span className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            X
          </span>
          <h3 className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent uppercase`}>
            {tag}
          </h3>
        </div>
        
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
        
        <div>
          <a href="#" className={`inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group`}>
            {cta}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Illustration */}
      <div className={`relative ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <div className={`relative aspect-square w-full max-w-md mx-auto bg-gradient-to-br ${gradient} opacity-10 rounded-3xl`}>
          {/* Placeholder for product illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-400">
              {/* Product illustration would go here */}
              <svg className="w-32 h-32 lg:w-48 lg:h-48 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ProductDetails: React.FC = () => {
  const products = [
    {
      tag: 'PROMO',
      title: vi.products.xpromo.title,
      description: vi.products.xpromo.description,
      cta: vi.products.xpromo.cta,
      gradient: 'from-blue-600 to-purple-600',
      reverse: false,
    },
    {
      tag: 'OMI',
      title: vi.products.xomi.title,
      description: vi.products.xomi.description,
      cta: vi.products.xomi.cta,
      gradient: 'from-purple-600 to-pink-600',
      reverse: true,
    },
    {
      tag: 'BIZ',
      title: vi.products.xbiz.title,
      description: vi.products.xbiz.description,
      cta: vi.products.xbiz.cta,
      gradient: 'from-blue-500 to-cyan-500',
      reverse: false,
    },
    {
      tag: 'TECH',
      title: vi.products.xtech.title,
      description: vi.products.xtech.description,
      cta: vi.products.xtech.cta,
      gradient: 'from-indigo-600 to-purple-600',
      reverse: true,
    },
  ]
  
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
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

