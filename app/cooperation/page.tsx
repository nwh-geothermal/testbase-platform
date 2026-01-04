import { CooperationForm } from '@/components/cooperation-form'
import { ImageStrip } from '@/components/image-strip'
import { getAssetPath } from '@/lib/utils'

export default function CooperationPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <CooperationForm />
      <ImageStrip
        images={[
          getAssetPath('/meeting1.jpg'),
          getAssetPath('/meeting2.jpg'),
          getAssetPath('/chd.jpg')
        ]}
        className='pt-6 pb-16'
      />
    </div>
  )
}
