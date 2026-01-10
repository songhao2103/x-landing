import ImageLang from '@/components/ui/ImageLang'
import { TittleSection } from '@/components/ui/TittleSection'
import { vi } from '@/lib/locales/vi'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export const PlatformOverview: React.FC = () => {
  const t = useTranslations('platform')
  const services = [
    {
      tag: t('services.xpromo.tag'),
      title: t('services.xpromo.title'),
      position: 'top-left',
      logo: '/images/icons/xpromo_white.png',
    },
    {
      tag: t('services.xai.tag'),
      title: t('services.xai.title'),
      position: 'top-right',
      logo: '/images/icons/xomi_white.png',
    },
    {
      tag: t('services.xbiz.tag'),
      title: t('services.xbiz.title'),
      position: 'bottom-left',
      logo: '/images/icons/xbiz_white.png',
    },
    {
      tag: t('services.xtech.tag'),
      title: t('services.xtech.title'),
      position: 'bottom-right',
      logo: '/images/icons/xtech_white.png',
    },
  ]

  const roundedClasses = {
    'top-left':
      'rounded-tr-[25px] rounded-bl-[25px] lg:rounded-tr-[50px] lg:rounded-bl-[50px]',
    'top-right':
      'rounded-tl-[25px] rounded-br-[25px] lg:rounded-tl-[50px] lg:rounded-br-[50px]',
    'bottom-left':
      'rounded-tl-[25px] rounded-br-[25px] lg:rounded-tl-[50px] lg:rounded-br-[50px]',
    'bottom-right':
      'rounded-tr-[25px] rounded-bl-[25px] lg:rounded-tr-[50px] lg:rounded-bl-[50px]',
  }

  return (
    <section className="relative bg-white py-6 lg:pt-40">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center justify-center">
        <TittleSection title={t('title')} />

        <ImageLang
          enSrc="/images/contents/homes/service_banner_en.svg"
          viSrc="/images/contents/homes/service_banner_vi.svg"
          enAlt="Service Banner"
          width={260}
          height={260}
          className="w-[90%] h-full object-contain"
          priority
        />
      </div>
    </section>
  )

  return (
    <section className="relative bg-white pt-6 lg:pt-40">
      <div className="container mx-auto px-4">
        <h2 className="text-hero-mobile lg:text-hero font-bold leading-tight text-center text-navy ">
          {vi.platform.title}
        </h2>

        {/* Responsive Container - Scales proportionally */}
        <div className="relative max-w-6xl mx-auto aspect-[4/2] w-full">
          {/* Center Logo - Scales with container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10  w-[18%] aspect-square">
            <Image
              src="/images/icons/icon_x_center.png"
              alt="XFUTURE"
              width={260}
              height={260}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Service Pills - Positioned relative to center with percentage */}
          <div className="absolute inset-0">
            {services.map((service) => {
              const positionStyles = {
                'top-left': {
                  top: '15%',
                  left: '15%',
                  transform: 'translate(-10%, 10%)',
                },
                'top-right': {
                  top: '15%',
                  right: '15%',
                  transform: 'translate(10%, 10%)',
                },
                'bottom-left': {
                  bottom: '15%',
                  left: '15%',
                  transform: 'translate(-10%, -10%)',
                },
                'bottom-right': {
                  bottom: '15%',
                  right: '15%',
                  transform: 'translate(10%, -10%)',
                },
              }

              const style =
                positionStyles[service.position as keyof typeof positionStyles]

              return (
                <div
                  key={service.tag}
                  className={`
                    ${
                      roundedClasses[
                        service.position as keyof typeof roundedClasses
                      ]
                    }
                    bg-gradient-to-r from-[#1EA7FF] to-[#8B5CF6]
                    shadow-xl
                    flex flex-col gap-1 md:gap-2 lg:gap-4
                    text-white
                    absolute
                    w-[32%]
                    h-[25%] sm:h-[20%] md:h-[22%] lg:h-[100px]
                    md:py-3 md:px-4
                    px-2 py-1
                  `}
                  style={style}
                >
                  <div className="flex justify-start items-center w-full">
                    <Image
                      src={service.logo}
                      alt={service.tag}
                      width={20}
                      height={20}
                      className="h-3 md:h-4 lg:h-5 w-auto object-contain flex-shrink-0"
                    />
                  </div>
                  <p className="text-[7px] sm:text-xs lg:text-sm xl:text-base font-medium line-clamp-2 px-2">
                    {service.title}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
