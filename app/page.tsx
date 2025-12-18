import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { TechnologyChain } from '@/components/technology-chain'
import { DataDashboard } from '@/components/data-dashboard'
import { Cooperation } from '@/components/cooperation'
import { Achievements } from '@/components/achievements'
import { NewsFloat } from '@/components/news-float'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <NewsFloat />
      <Hero />
      <Features />
      <TechnologyChain />
      <DataDashboard />
      <Achievements />
      <Cooperation />
    </div>
  )
}
