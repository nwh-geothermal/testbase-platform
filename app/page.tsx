import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Cooperation } from '@/components/cooperation'
import { Achievements } from '@/components/achievements'
import { ImageStrip } from '@/components/image-strip'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <ImageStrip
        images={['/sim1.jpg', '/process1.jpg', '/method1.png']}
        className='py-12'
      />
      <Features />
      <Achievements />
      <Cooperation />
    </div>
  )
}
