import Image from 'next/image'

interface OverviewSectionItemProps {
  title: string
  image: string
  description: string
}

const OverviewSectionItem: React.FC<OverviewSectionItemProps> = ({
  description,
  image,
  title,
}) => {
  return (
    <div
      className={`bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center`}
    >
      <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">
        {title}
      </h3>

      {image && (
        <div className="mb-4 flex justify-center">
          <Image
            src={image}
            alt={title}
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
      )}

      <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default OverviewSectionItem
