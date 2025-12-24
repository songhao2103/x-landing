import React from 'react'
import { vi } from '@/lib/locales/vi'

export const ClientsSection: React.FC = () => {
  // Client logos would be actual images in production
  const clients = [
    { name: 'OMICALL', logo: 'OMICALL' },
    { name: 'TNEX', logo: 'TNEX' },
    { name: 'AKABIZ', logo: 'AKABIZ' },
    { name: 'HT FINANCE', logo: 'HT FINANCE' },
  ]
  
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-navy mb-12 lg:mb-16 uppercase tracking-wide">
          {vi.clients.title}
        </h2>
        
        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center max-w-5xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.name}
              className="w-full aspect-[3/2] flex items-center justify-center p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Replace with actual logo images */}
              <div className="text-center">
                <span className="text-lg lg:text-xl font-bold text-gray-800">
                  {client.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group cursor-pointer">
            <span className="text-base lg:text-lg">Xem tất cả đối tác</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

