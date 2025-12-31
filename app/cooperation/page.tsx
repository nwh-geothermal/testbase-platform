import { CooperationForm } from '@/components/cooperation-form'
import { ImageStrip } from '@/components/image-strip'

export default function CooperationPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <CooperationForm />
      <ImageStrip
        images={['/meeting1.jpg', '/meeting2.jpg', '/chd.jpg']}
        className='pt-6 pb-16'
      />
    </div>
  )
}
