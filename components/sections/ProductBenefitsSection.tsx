'use client'

import TabsSection from '@/components/ui/TabSection'
import { TittleSection } from '@/components/ui/TittleSection'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import React from 'react'

export interface Benefit {
  title: string
  description: string
  icon?: string
}

export interface ProductBenefitsSectionProps {
  title?: string
  subtitle?: string
  benefits: Benefit[]
  className?: string
}

export const ProductBenefitsSection: React.FC<ProductBenefitsSectionProps> = ({
  title = 'Lợi ích mang lại',
  subtitle = 'Kết nối nhu cầu - Gia tăng giá trị',
  benefits,
  className = '',
}) => {
  const t = useTranslations('products.xpromo')
  const router = useRouter()

  return (
    <section
      style={{
        backgroundImage:
          'url(/images/backgrounds/xpromo/benefits_background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={`py-16 lg:py-24 relative overflow-hidden ${className}`}
    >
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <TittleSection
            title={t('benefits.title')}
            color="white"
            noMargin={true}
          />
          <p className="text-lg text-white/80 mt-4">{t('benefits.subtitle')}</p>
        </div>
        <div>
          <TabsSection
            tabs={[
              {
                key: 'business',
                label: 'Đối với Doanh nghiệp',
                content: <BusinessContent />,
                image: '/images/icons/xpromo/image_doanhnghiep.svg',
              },
              {
                key: 'saas',
                label: 'Đối với Đơn vị SaaS',
                content: <SaasContent />,
                image: '/images/icons/xpromo/image_saas.svg',
              },
              {
                key: 'user',
                label: 'Đối với Người dùng',
                content: <UserContent />,
                image: '/images/icons/xpromo/image_credit.svg',
              },
            ]}
          />
        </div>
        <div className="flex justify-start mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200">
            Liên hệ tư vấn
          </button>
        </div>
      </div>
    </section>
  )
}

export function BusinessContent() {
  return (
    <ul className="space-y-3">
      <li>• Tiếp cận cộng đồng người dùng chất lượng</li>
      <li>• +~15% tỷ lệ duyệt hồ sơ</li>
      <li>• Chi phí theo kết quả (CPDeal)</li>
    </ul>
  )
}

export function SaasContent() {
  return (
    <ul className="space-y-3">
      <li>• Kết nối hệ sinh thái SaaS</li>
      <li>• Tích hợp API nhanh</li>
      <li>• Gia tăng conversion</li>
    </ul>
  )
}

export function UserContent() {
  return (
    <ul className="space-y-3">
      <li>• Trải nghiệm minh bạch</li>
      <li>• Không spam</li>
      <li>• Dữ liệu được xác thực</li>
    </ul>
  )
}
