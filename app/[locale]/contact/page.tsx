import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ContactSection } from '@/components/sections/ContactSection'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactSection />
      <Footer />
    </main>
  )
}
