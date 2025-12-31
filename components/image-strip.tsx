import Image from 'next/image'

type ImageStripProps = {
  images: string[]
  className?: string
}

export function ImageStrip({ images, className }: ImageStripProps) {
  return (
    <div
      className={`max-w-[90rem] mx-auto px-3 sm:px-4 lg:px-6 ${
        className ?? ''
      }`}
    >
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {images.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className='relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]'
          >
            <Image
              src={src}
              alt={`页面图片 ${index + 1}`}
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-white/10' />
          </div>
        ))}
      </div>
    </div>
  )
}
