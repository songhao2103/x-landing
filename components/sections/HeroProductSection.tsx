'use client'

import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/lib/constants/routes'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface HeroProductSectionProps {
  logo: string
  image: string
  title: string
  description: string
}

export const HeroProductSection: React.FC<HeroProductSectionProps> = ({
  description,
  image,
  logo,
  title,
}) => {
  const t = useTranslations('products')
  const banner = '/images/backgrounds/xpromo/intro_banner.png'
  const router = useRouter()

  return (
    <section
      className={`relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden`}
      style={
        banner
          ? {
              backgroundImage: `url(${banner})`,
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
          {logo && (
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={logo}
                alt={title}
                width={120}
                height={60}
                className="max-h-20 object-contain"
              />
            </div>
          )}

          <h1 className="text-lg lg:text-3xl xl:text-4xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            {description}
          </p>

          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              router.push(ROUTES.CONTACT)
            }}
          >
            {t('xpromo.cta')}
          </Button>
        </div>
        <div className="">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
