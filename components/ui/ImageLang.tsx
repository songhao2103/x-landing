'use client'

import { useMainContext } from '@/app/[locale]/MainProvider'
import { LANGUAGE } from '@/lib/constants/global'
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
  const { lang } = useMainContext()
  const isEN = lang === LANGUAGE.EN

  return (
    <Image src={isEN ? enSrc : viSrc} alt={isEN ? enAlt : viAlt} {...rest} />
  )
}

export default ImageLang
