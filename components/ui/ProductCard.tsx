import ImageLang from '@/components/ui/ImageLang'
import { Reveal } from '@/components/ui/Reveal'
import Image from 'next/image'

interface ProductCardProps {
  tag: string
  title: string
  description: string
  cta: string
  reverse?: boolean
  gradient: string
  logo: string
  flow?: string
  flowEn?: string
  flowVi?: string
}
export const ProductCard: React.FC<ProductCardProps> = ({
  tag,
  title,
  description,
  cta,
  reverse = false,
  gradient,
  logo,
  flow,
  flowEn,
  flowVi,
}) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${reverse ? 'lg:grid-flow-dense' : ''}`}
    >
      <Reveal
        motionConfig={{
          from: reverse ? 'right' : 'left',
          distance: 32,
          duration: 0.6,
          ease: 'easeInOut',
        }}
        viewport={{
          amount: 0.2,
          margin: '-30% 0px 0px  0px',
          once: true,
        }}
        className={`space-y-6 ${reverse ? 'lg:col-start-2' : ''}`}
      >
        {/* Content */}
        <div>
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt={tag}
              width={200}
              height={100}
              className="max-h-20 object-contain"
            />
          </div>

          <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
            {description}
            <a
              href="#"
              className={`inline-flex items-center gap-2  lg:text-lg   italic hover:gap-3 transition-all group pl-1`}
            >
              <span className="relative inline-block">
                <span
                  style={{
                    background: 'linear-gradient(to right, #0170C0, #BB45FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  className="px-1"
                >
                  {cta}
                </span>
                <span
                  className="absolute bottom-[4px] left-[3px] right-[3px] h-[1px]"
                  style={{
                    background: 'linear-gradient(to right, #0170C0, #BB45FF)',
                  }}
                />
              </span>
            </a>
          </p>
        </div>
      </Reveal>

      {/* Illustration */}
      <Reveal
        motionConfig={{
          from: reverse ? 'left' : 'right',
          distance: 32,
          duration: 0.6,
          ease: 'easeInOut',
        }}
        viewport={{
          amount: 0.2,
          margin: '-30% 0px 0px  0px',
          once: true,
        }}
        className={`relative ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}
      >
        <div>
          {flow && (
            <Image
              src={flow}
              alt={tag}
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          )}

          {flowEn && flowVi && (
            <ImageLang
              // src={flow}
              enSrc={flowEn}
              viSrc={flowVi}
              // alt={tag}
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </Reveal>
    </div>
  )
}
