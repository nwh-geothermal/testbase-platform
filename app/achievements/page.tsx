import { AchievementShowcase } from '@/components/achievement-showcase'
import { ImageStrip } from '@/components/image-strip'
import { getAssetPath } from '@/lib/utils'

export default function AchievementsPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <AchievementShowcase />
      <ImageStrip
        images={[
          getAssetPath('/sim2.png'),
          getAssetPath('/lab2.jpg'),
          getAssetPath('/model1.png')
        ]}
        className='pt-4 pb-4'
      />
      <ImageStrip
        images={[
          getAssetPath('/fig1.jpg'),
          getAssetPath('/tube2.jpg'),
          getAssetPath('/web1.png')
        ]}
        className='pt-4 pb-16'
      />
    </div>
  )
}
