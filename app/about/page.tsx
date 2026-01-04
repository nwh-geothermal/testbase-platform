import { AboutUs } from '@/components/about-us'
import { ImageStrip } from '@/components/image-strip'
import { getAssetPath } from '@/lib/utils'

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <AboutUs />
      <ImageStrip
        images={[
          getAssetPath('/overview.jpg'),
          getAssetPath('/proj1.jpg'),
          getAssetPath('/chd.jpg')
        ]}
        className='pt-8 pb-16'
      />
    </div>
  )
}
