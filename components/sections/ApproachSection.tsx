'use client'

import ImageLang from '@/components/ui/ImageLang'
import { Reveal } from '@/components/ui/Reveal'
import { TittleSection } from '@/components/ui/TittleSection'
import { useTranslations } from 'next-intl'

export const ApproachSection = () => {
  const t = useTranslations('products')
  const title = t('xpromo.approach.title')

  return (
    <section className="py-16 bg-white">
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
        <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-8">
          <TittleSection title={t('xpromo.approach.title')} />
          <ImageLang
            enSrc="/images/contents/homes/xpromo_flow_en.svg"
            viSrc="/images/contents/homes/xpromo_flow_vi.svg"
            width={900}
            height={800}
            className="object-contain w-[90%] h-full mt-6"
          />
        </div>
      </Reveal>
    </section>
  )
}
