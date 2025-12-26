import { TittleSection } from '@/components/ui/TittleSection'
import { vi } from '@/lib/locales/vi'
import Image from 'next/image'
import React from 'react'

export const ClientsSection: React.FC = () => {
  // Client logos would be actual images in production
  const clients = [
    { name: 'OMICALL', logo: '/images/icons/logo_omicall.svg' },
    { name: 'TNEX', logo: '/images/icons/logo_tnex.svg' },
    { name: 'AKABIZ', logo: '/images/icons/logo_akabiz.svg' },
    { name: 'HT FINANCE', logo: '/images/icons/logo_fitnance.svg' },
  ]
  
  return (
    <section className=" bg-white">
      <div className="container mx-auto px-4 lg:px-8 pb-8">
        {/* Section Title */}
        <TittleSection title={vi.clients.title} />
        
        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center justify-between  ">
          {clients.map((client) => (
            <div
              key={client.name}
              className="w-full flex items-center justify-center transition-all duration-300"
            >
              {/* Replace with actual logo images */}
              <div className="text-center">
                <Image src={client.logo} alt={client.name} width={200} height={100} className="object-contain max-w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

