import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Cooperation } from '@/components/cooperation'
import { Achievements } from '@/components/achievements'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <Features />
      <Achievements />
      <Cooperation />
    </div>
  )
}
