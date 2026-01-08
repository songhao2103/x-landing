import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
  title: 'XFuture - Nâng tầm trí tuệ, Kiến tạo tương lai',
  description:
    'XFuture là đơn vị ai-ven & tiên phong chuyển đổi dữ liệu trên nền tảng AI, với đội ngũ chuyên gia thực chiến động hành cùng doanh nghiệp bứt ra thành công số qua toàn diện và năng lực bền vững.',
  keywords: [
    'AI',
    'Digital Transformation',
    'SaaS',
    'Marketing',
    'XFuture',
    'XPROMO',
    'XOMI',
    'XBIZ',
    'XTECH',
  ],
  authors: [{ name: 'XFuture' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1E40AF',
  openGraph: {
    title: 'XFuture - Nâng tầm trí tuệ, Kiến tạo tương lai',
    description:
      'XFuture là đơn vị ai-ven & tiên phong chuyển đổi dữ liệu trên nền tảng AI',
    type: 'website',
    locale: 'vi_VN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
