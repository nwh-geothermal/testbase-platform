import { LoginForm } from '@/components/login-form'
import { ImageStrip } from '@/components/image-strip'

export default function LoginPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <LoginForm />
      <ImageStrip
        images={['/bsg.jpg', '/meeting2.jpg', '/building1.jpg']}
        className='pt-10 pb-16'
      />
    </div>
  )
}
