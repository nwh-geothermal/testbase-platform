'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { getAssetPath } from '@/lib/utils'

export default function OverviewPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      {/* Hero Section */}
      <div className='relative py-20 bg-gradient-to-r from-geothermal-blue to-geothermal-green'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-4xl md:text-6xl font-bold text-white mb-6'
          >
            基地概览
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 max-w-3xl mx-auto'
          >
            陕西省地热能开发利用技术中试基地全景展示
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Base Image Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb-16'
        >
          <div className='relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100'>
            <div className='relative w-full h-[600px] rounded-xl overflow-hidden bg-gray-100'>
              <Image
                src={getAssetPath('/testbase.jpg')}
                alt='陕西省地热能开发利用技术中试基地全景'
                fill
                className='object-cover'
                priority
              />
            </div>
            <div className='text-center mt-6'>
              <p className='text-lg font-medium text-gray-700'>
                陕西省地热能开发利用技术中试基地实景图
              </p>
              <p className='text-sm text-gray-500 mt-2'>
                Shaanxi Province Geothermal Energy Development and Utilization
                Technology Pilot Base
              </p>
            </div>
          </div>
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-12'
        >
          {/* Left Column - Overview */}
          <div className='flex flex-col space-y-8'>
            <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-100'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-1 h-8 bg-geothermal-orange mr-4'></div>
                基地简介
              </h2>
              <div className='space-y-4 text-gray-600 leading-relaxed'>
                <p>
                  陕西省地热能开发利用技术中试基地是陕西省重点建设的新能源技术创新平台，致力于地热能技术的研发、试验、示范和产业化应用。基地位于陕西省西安市，占地面积约200亩，总投资超过5亿元人民币。
                </p>
                <p>
                  基地集成了国内外先进的地热能开发利用技术，建设有完整的技术研发体系、中试验证平台和示范应用系统，为地热能产业的技术创新和成果转化提供了重要支撑。
                </p>
              </div>
            </div>

            <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-100 flex-1 flex flex-col'>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>核心功能</h3>
              <div className='grid grid-cols-2 gap-4 flex-1'>
                {[
                  '技术研发',
                  '产品试制',
                  '工艺改进',
                  '检验检测',
                  '标准制定',
                  '人才培养',
                  '成果转化',
                  '产业孵化'
                ].map((func, index) => (
                  <div key={index} className='flex items-center space-x-2'>
                    <div className='w-2 h-2 bg-geothermal-green rounded-full'></div>
                    <span className='text-gray-700 font-medium'>{func}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Technical Details */}
          <div className='flex flex-col space-y-8'>
            <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-100'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-1 h-8 bg-geothermal-blue mr-4'></div>
                技术特色
              </h2>
              <div className='space-y-6'>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    先进装备配置
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    配备国际先进的地热钻探设备、热泵系统测试平台、地热流体分析仪器等专业设备，具备完整的技术验证能力。
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    创新技术体系
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    形成了涵盖地热资源勘探、开发、利用全产业链的技术体系，在中深层地热开发、热泵技术等领域达到国际先进水平。
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    智能化管理
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    建立了智能化的基地管理系统，实现设备运行监控、数据采集分析、安全预警等功能的一体化管理。
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-100'>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>发展成果</h3>
              <div className='grid grid-cols-2 gap-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-geothermal-orange mb-2'>
                    100+
                  </div>
                  <div className='text-sm text-gray-600'>技术专利</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-geothermal-blue mb-2'>
                    50+
                  </div>
                  <div className='text-sm text-gray-600'>合作伙伴</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-geothermal-green mb-2'>
                    95%
                  </div>
                  <div className='text-sm text-gray-600'>能效比</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-orange-500 mb-2'>
                    30+
                  </div>
                  <div className='text-sm text-gray-600'>示范项目</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='mt-16 bg-gradient-to-r from-geothermal-blue/10 to-geothermal-green/10 rounded-2xl p-12 text-center'
        >
          <h2 className='text-3xl font-bold text-gray-900 mb-6'>发展愿景</h2>
          <p className='text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed'>
            致力于建设成为国内领先、国际先进的地热能技术创新中心，推动地热能产业高质量发展，
            为实现碳达峰、碳中和目标贡献力量，成为陕西省乃至全国地热能技术创新的重要引擎。
          </p>
        </motion.div>
      </div>
    </div>
  )
}
