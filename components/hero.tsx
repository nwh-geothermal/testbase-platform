'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Play, Zap, Globe, Target } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function Hero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* 背景渐变 */}
      <div className='absolute inset-0 geothermal-gradient opacity-90' />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
            陕西省地热能开发利用
            <br />
            <div className='block mt-2 text-geothermal-orange'>
              技术中试基地
            </div>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed'
          >
            <div className='flex items-center justify-center space-x-8 text-lg md:text-xl mb-6'>
              <div>可视化</div>
              <div>·</div>
              <div>实时化</div>
              <div>·</div>
              <div>示范化</div>
            </div>
            集技术研发、产品试制、工艺改进、智慧运维、投资评价和成果展示于一体的
            <br />
            <strong>国内首个地热能全产业链技术集成与推广基地</strong>
            <div className='mt-4 text-white/80'>陕西省地热协会成员单位</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12'
          >
            <Button
              size='lg'
              asChild
              className='bg-white text-geothermal-blue hover:bg-gray-100 rounded-full px-8 py-6 text-lg shadow-lg'
            >
              <Link href='#technology' className='flex items-center space-x-2'>
                <div>探索技术体系</div>
                <ChevronRight className='w-5 h-5' />
              </Link>
            </Button>

            <Button
              variant='outline'
              size='lg'
              className='border-2 border-white text-white hover:bg-white hover:text-geothermal-blue rounded-full px-8 py-6 text-lg bg-transparent'
            >
              <Play className='w-5 h-5 mr-2' />
              <div>观看介绍视频</div>
            </Button>
          </motion.div>

          {/* 关键数据展示 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'
          >
            <Card className='bg-white/10 backdrop-blur-sm border-none'>
              <CardContent className='p-6 text-center'>
                <div className='w-12 h-12 bg-geothermal-orange rounded-xl flex items-center justify-center mx-auto mb-4'>
                  <Zap className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-2'>10+</h3>
                <p className='text-white/80'>核心技术专利</p>
              </CardContent>
            </Card>

            <Card className='bg-white/10 backdrop-blur-sm border-none'>
              <CardContent className='p-6 text-center'>
                <div className='w-12 h-12 bg-geothermal-green rounded-xl flex items-center justify-center mx-auto mb-4'>
                  <Globe className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-2'>20+</h3>
                <p className='text-white/80'>合作院校企业</p>
              </CardContent>
            </Card>

            <Card className='bg-white/10 backdrop-blur-sm border-none'>
              <CardContent className='p-6 text-center'>
                <div className='w-12 h-12 bg-geothermal-blue rounded-xl flex items-center justify-center mx-auto mb-4'>
                  <Target className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-2'>95%</h3>
                <p className='text-white/80'>能效转换率</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* 滚动指示器 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce' />
        </div>
      </motion.div>
    </section>
  )
}
