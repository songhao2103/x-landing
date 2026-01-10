'use client'

import { Button } from '@/components/ui/Button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
//
export const HeroProductSection = () => {
  const t = useTranslations('products')
  const dataIntro = {
    logo: '/images/icons/xpromo_logo.svg',
    banner: '/images/backgrounds/xpromo/intro_banner.png',
    image: '/images/icons/xpromo/logo_saas.svg',
    title: 'In-SaaS Promotion Platform',
    description: t('xpromo.description'),
    cta: t('xpromo.cta'),
  }
  const router = useRouter()
  return (
    <section
      className={`relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden`}
      style={
        dataIntro.banner
          ? {
              backgroundImage: `url(${dataIntro.banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {
              background:
                'linear-gradient(90deg, rgba(0, 43, 95, 1) 0%, rgba(43, 120, 76, 1) 100%)',
            }
      }
    >
      {/* Content */}
      <div className="container flex flex-col lg:flex-row mt-32 lg:mt-0  items-start lg:items-center justify-between gap-10 mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {dataIntro.logo && (
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={dataIntro.logo}
                alt={dataIntro.title}
                width={120}
                height={60}
                className="max-h-20 object-contain"
              />
            </div>
          )}

          <h1 className="text-lg lg:text-3xl xl:text-4xl font-bold text-white mb-6 leading-tight">
            {dataIntro.title}
          </h1>

          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            {dataIntro.description}
          </p>

          {dataIntro.cta && (
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                router.push('/contact')
              }}
            >
              {dataIntro.cta}
            </Button>
          )}
        </div>
        <div className="">
          <Image
            src={dataIntro.image}
            alt={dataIntro.title}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
