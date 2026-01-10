'use client'

import ImageLang from '@/components/ui/ImageLang'
import { TittleSection } from '@/components/ui/TittleSection'
import { useTranslations } from 'next-intl'

export const ApproachSection = () => {
  const t = useTranslations('products')
  const title = t('xpromo.approach.title')

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-8">
        <TittleSection title={t('xpromo.approach.title')} />
        <ImageLang
          enSrc="/images/contents/homes/xpromo_flow_vi.svg"
          viSrc="/images/contents/homes/xpromo_flow_en.svg"
          width={900}
          height={800}
          className="object-contain w-[90%] h-full"
        />
      </div>
    </section>
  )
}
