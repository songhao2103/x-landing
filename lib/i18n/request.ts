import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? 'vi'

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  }
})
