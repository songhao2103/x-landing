'use client'

import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
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
          <Reveal
            motionConfig={{
              from: 'none', // không dịch chuyển
              opacity: 0, // opacity ban đầu
              duration: 1,
              ease: 'easeInOut',
            }}
            viewport={{
              amount: 0.3, // 30% element xuất hiện thì chạy
              once: true,
            }}
          >
            {logo && (
              <div className="relative h-16 w-auto sm:mb-2 md:mb-6">
                <Image
                  src={logo}
                  alt={title}
                  fill
                  className="object-contain object-left"
                  // sizes="(max-width: 768px) 150px, 200px"
                />
              </div>
            )}
          </Reveal>

          <Reveal
            motionConfig={{
              from: 'left',
              distance: 32,
              duration: 0.6,
              ease: 'easeInOut',
            }}
            viewport={{
              amount: 0.2,
              margin: '-10% 0px 0px  0px',
              once: true,
            }}
          >
            <h1 className="text-lg lg:text-3xl xl:text-4xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              {description}
            </p>
          </Reveal>

          <Reveal
            motionConfig={{
              from: 'bottom',
              distance: 32,
              duration: 0.6,
              ease: 'easeInOut',
            }}
            viewport={{
              amount: 0.2,
              margin: '-10% 0px 0px  0px',
              once: true,
            }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                router.push(ROUTES.CONTACT)
              }}
            >
              {t('xpromo.cta')}
            </Button>
          </Reveal>
        </div>

        <Reveal
          motionConfig={{
            from: 'right',
            distance: 32,
            duration: 0.6,
            ease: 'easeInOut',
          }}
          viewport={{
            amount: 0.2,
            margin: '-10% 0px 0px  0px',
            once: true,
          }}
        >
          <div className="">
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
