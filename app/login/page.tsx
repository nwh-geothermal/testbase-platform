import { LoginForm } from '@/components/login-form'
import { ImageStrip } from '@/components/image-strip'
import { getAssetPath } from '@/lib/utils'

export default function LoginPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <LoginForm />
      <ImageStrip
        images={[
          getAssetPath('/bsg.jpg'),
          getAssetPath('/meeting2.jpg'),
          getAssetPath('/building1.jpg')
        ]}
        className='pt-10 pb-16'
      />
    </div>
  )
}
