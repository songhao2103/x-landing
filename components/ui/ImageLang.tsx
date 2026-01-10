'use client'

import { LANGUAGE } from '@/lib/constants/global'
import { useLocale } from 'next-intl'
import Image, { ImageProps as NextImageProps } from 'next/image'

interface ImageLangProps extends Omit<NextImageProps, 'src' | 'alt'> {
  enSrc: string
  enAlt?: string
  viSrc: string
  viAlt?: string
}

const ImageLang = ({
  enSrc,
  viSrc,
  enAlt = '',
  viAlt = '',
  ...rest
}: ImageLangProps) => {
  const locale = useLocale()
  const isEN = locale === LANGUAGE.EN

  return (
    <Image src={isEN ? enSrc : viSrc} alt={isEN ? enAlt : viAlt} {...rest} />
  )
}

export default ImageLang
