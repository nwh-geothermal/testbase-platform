import { AchievementShowcase } from '@/components/achievement-showcase'
import { ImageStrip } from '@/components/image-strip'

export default function AchievementsPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <AchievementShowcase />
      <ImageStrip
        images={['/sim2.png', '/lab2.jpg', '/model1.png']}
        className='pt-4 pb-4'
      />
      <ImageStrip
        images={['/fig1.jpg', '/tube2.jpg', '/web1.png']}
        className='pt-4 pb-16'
      />
    </div>
  )
}
