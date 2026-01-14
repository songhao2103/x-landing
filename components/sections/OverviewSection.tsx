import OverviewSectionItem from '@/components/sections/OverviewSectionItem'
import { TittleSection } from '@/components/ui/TittleSection'
import { CSSProperties } from 'react'

export interface OverviewSectionProps {
  title: string
  description: string
  items: OverviewItem[]
}

export interface OverviewItem {
  title: string
  image: string
  description: string
}

const OverviewSection: React.FC<OverviewSectionProps> = ({
  description,
  items,
  title,
}) => {
  return (
    <section className={`py-16 lg:py-24 bg-[#F6F9FC]`}>
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <TittleSection title={title} noMargin />
        <h6>{description}</h6>
        <div
          className="
               grid 
               grid-cols-1 
               md:grid-cols-2 
               xl:grid-cols-[repeat(var(--cols),minmax(0,1fr))]
               gap-8 lg:gap-6
             "
          style={
            {
              '--cols': items.length,
            } as CSSProperties
          }
        >
          {items.map((item, index) => (
            <OverviewSectionItem {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OverviewSection
