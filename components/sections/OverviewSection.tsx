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
    <div className="flex flex-col gap-y-4 items-center">
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
  )
}

export default OverviewSection
