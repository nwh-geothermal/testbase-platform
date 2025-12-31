import { AboutUs } from '@/components/about-us'
import { ImageStrip } from '@/components/image-strip'

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <AboutUs />
      <ImageStrip
        images={['/overview.jpg', '/proj1.jpg', '/chd.jpg']}
        className='pt-8 pb-16'
      />
    </div>
  )
}
