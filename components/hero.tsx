'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Play, Zap, Globe, Target } from 'lucide-react'
import Link from 'next/link'

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
            <span className='block mt-2 text-geothermal-orange'>
              技术中试基地
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed'
          >
            <div className='flex items-center justify-center space-x-8 text-lg md:text-xl mb-6'>
              <span>可视化</span>
              <span>·</span>
              <span>实时化</span>
              <span>·</span>
              <span>示范化</span>
            </div>
            集技术研发、产品试制、工艺改进、智慧运维、投资评价和成果展示于一体的
            <br />
            <strong>国内首个地热能全产业链技术集成与推广基地</strong>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12'
          >
            <Link
              href='#technology'
              className='bg-white text-geothermal-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2 shadow-lg'
            >
              <span>探索技术体系</span>
              <ChevronRight className='w-5 h-5' />
            </Link>

            <button className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-geothermal-blue transition-colors duration-300 flex items-center space-x-2'>
              <Play className='w-5 h-5' />
              <span>观看介绍视频</span>
            </button>
          </motion.div>

          {/* 关键数据展示 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'
          >
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center'>
              <div className='w-12 h-12 bg-geothermal-orange rounded-xl flex items-center justify-center mx-auto mb-4'>
                <Zap className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>10+</h3>
              <p className='text-white/80'>核心技术专利</p>
            </div>

            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center'>
              <div className='w-12 h-12 bg-geothermal-green rounded-xl flex items-center justify-center mx-auto mb-4'>
                <Globe className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>20+</h3>
              <p className='text-white/80'>合作院校企业</p>
            </div>

            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center'>
              <div className='w-12 h-12 bg-geothermal-blue rounded-xl flex items-center justify-center mx-auto mb-4'>
                <Target className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>95%</h3>
              <p className='text-white/80'>能效转换率</p>
            </div>
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
