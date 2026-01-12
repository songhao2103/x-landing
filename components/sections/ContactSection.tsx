'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { useTranslations } from 'use-intl'

export const ContactSection: React.FC = () => {
  const t = useTranslations('contact')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section
      style={{
        background:
          'url(/images/backgrounds/contact_banner.png) no-repeat center center',
        backgroundSize: 'cover',
      }}
      className="py-16 lg:py-24  relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Panel - Contact Information */}
          <div className="bg-[#E6F3FF] rounded-2xl p-8 lg:p-10 text-black self-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              {t('title')}
            </h2>

            <p className="text-base lg:text-md text-gray-600 leading-relaxed mb-8">
              {t('description')}
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src="/images/icons/icon_phone.svg"
                    alt="Phone"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-base lg:text-md font-semibold text-gray-800">
                  {t('phone')}
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src="/images/icons/icon_email.svg"
                    alt="Email"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-base lg:text-md font-semibold text-gray-800">
                  {t('email')}
                </p>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src="/images/icons/icon_location.svg"
                    alt="Location"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-base lg:text-md font-semibold text-gray-800">
                  {t('address')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  {t('form.fullName')}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t('form.placeholder_fullName')}
                />
              </div>

              {/* Email and Phone - Side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    {t('form.email')}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('form.placeholder_email')}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    {t('form.phone')}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('form.placeholder_phone')}
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  {t('form.company')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t('form.placeholder_company')}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder={t('form.placeholder_message')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
              >
                {t('form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
