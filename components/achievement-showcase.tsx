'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { getAssetPath } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  ChevronLeft,
  ChevronRight,
  Award,
  TrendingUp,
  Lightbulb,
  Building,
  Globe,
  Calendar,
  CheckCircle
} from 'lucide-react'

interface Achievement {
  id: string
  title: string
  category: string
  description: string
  image: string
  date: string
  highlights: Array<string | { title: string; detail: string }>
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: '三维热储模型',
    category: '技术创新',
    description:
      '集成深部地震反射、广域电磁及地温测井等多源异构数据，研发震、电交叉约束与协同反演技术，构建六千米级深度与米级空间分辨率的三维热储模型，为钻井设计提供技术支撑。',
    image: getAssetPath('/sim6.png'),
    date: '2024年1月',
    highlights: [
      '获得发明专利',
      '效率提升15%',
      '3个示范项目应用',
      '技术达到国际先进水平'
    ]
  },
  {
    id: '2',
    title: '自洁式原生污水冷热双供集成能源机组',
    category: '设备制造',
    description:
      '该机组的研制成功填补了国内自洁式原生污水余热利用装备技术空白。具备深度自洁、高度集成、高效节能、智能调控等特点，适用于高污染•高热量场景，可实现“热回收-智能调控•碳管理"全过程管控。',
    image: getAssetPath('/prod1.jpg'),
    date: '2024年12月',
    highlights: ['深度自洁', '高效节能', '智能调控', '全流程管控']
  },
  {
    id: '4',
    title: '高分子复合隔热中心管',
    category: '材料研发',
    description:
      '自研一种适用于中深层地热井下换热系统的新型高分子复合隔热中心管。该中心管以PERT-II材料为基材，隔热凝胶、玻璃纤维为中间体材料，使其具备管材“两高两低”特性，即耐高温（105°C+）、高强度、低成本、低导热',
    image: getAssetPath('/tube1.jpg'),
    date: '2024年10月',
    highlights: [
      '复合隔热中心管',
      '实验平台支撑',
      '现场试验验证',
      '多类仪器设备'
    ]
  },
  {
    id: '4-2',
    title: '高导热率固井材料',
    category: '材料研发',
    description:
      '高导热率固井材料以石墨烯、纳米AI203、纳米SiO2导热填料体系为核心，具备高导热（导热率为2.0W/（m•°C）特性。该材料适用地热井下高压高温环境，能够为地热储层封固提供“零渗漏、长寿命“保障。',
    image: getAssetPath('/expt1.jpg'),
    date: '2024年9月',
    highlights: [
      '导热率≈2.0W/(m·°C)',
      '高温高压适用',
      '稠化时间110min',
      '零渗漏、长寿命'
    ]
  },
  {
    id: '5',
    title: '绿色低碳示范项目',
    category: '示范应用',
    description:
      '成功实施了多个绿色低碳示范项目，累计减少碳排放10万吨，为实现碳达峰碳中和目标贡献了重要力量，获得了政府和社会的高度认可。',
    image: getAssetPath('/engine1.jpg'),
    date: '2024年8月',
    highlights: [
      '示范项目12个',
      '减少碳排放10万吨',
      '节约能源成本30%',
      '获得政府表彰'
    ]
  },
  {
    id: '6',
    title: '地热多能互补智慧管控平台',
    category: '数字平台',
    description:
      '具备实时监测、智能调控、分析决策等能力，实现能源高效调度，故障预判与快速诊断，精细化能耗管理，实现地热系统智能管控，降低运行成本。',
    image: getAssetPath('/twin1.png'),
    date: '2024年6月',
    highlights: [
      { title: '实时监控', detail: '24/7全天候系统状态监控' },
      { title: '预测维护', detail: 'AI驱动的设备健康预测' },
      { title: '优化调度', detail: '智能能源调度与分配' },
      { title: '决策支持', detail: '数据驱动的运营决策' }
    ]
  },
  {
    id: '6-2',
    title: '地热能耦合协同功能规划设计平台',
    category: '数字平台',
    description:
      '实现区域“地热能+”系统规划，“一园一策”的精细化设计，多维量化供能系统科学评估。',
    image: getAssetPath('/platform3.png'),
    date: '2024年5月',
    highlights: [
      '数据治理标准化',
      '多源数据融合',
      '共享服务能力',
      '全生命周期支撑'
    ]
  }
]

const categories = ['材料研发', '技术创新', '设备制造', '数字平台', '示范应用']

const categoryIcons = {
  技术创新: Lightbulb,
  设备制造: TrendingUp,
  材料研发: Award,
  示范应用: Building,
  数字平台: Globe
}

export function AchievementShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const filteredAchievements =
    selectedCategory === '全部'
      ? achievements
      : achievements.filter(
          (achievement) => achievement.category === selectedCategory
        )

  const nextSlide = () => {
    if (filteredAchievements.length <= 1) {
      return
    }

    setCurrentIndex((prevIndex) =>
      prevIndex === filteredAchievements.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    if (filteredAchievements.length <= 1) {
      return
    }

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredAchievements.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentAchievement = filteredAchievements[currentIndex]
  const isCoupledPlatform =
    currentAchievement?.title === '地热能耦合协同功能规划设计平台'

  return (
    <div className='bg-gradient-to-br from-gray-50 to-blue-50'>
      {/* Header */}
      <div className='relative py-20 overflow-hidden mb-12'>
        <div
          className='absolute inset-0 opacity-90'
          style={{
            background:
              'radial-gradient(circle at 20% 25%, rgba(255, 255, 255, 0.35), transparent 32%), radial-gradient(circle at 80% 10%, rgba(255, 182, 116, 0.35), transparent 28%), linear-gradient(135deg, #f8fafc, #e0f2fe 45%, #fde68a)'
          }}
        ></div>
        <div className='relative z-10 max-w-[90rem] mx-auto px-3 sm:px-4 lg:px-6 text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'
          >
            成果展示
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            展示材料、技术、设备、平台建设等方面的重要成果
          </motion.p>
        </div>
      </div>

      {/* Category Filter */}
      <section className='pb-8 px-3 sm:px-4 lg:px-6'>
        <div className='max-w-[90rem] mx-auto'>
          <div className='flex flex-wrap justify-center gap-3'>
            {categories.map((category) => (
              <Button
                key={category}
                size='lg'
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentIndex(0)
                }}
                className={`rounded-full text-md ${
                  selectedCategory === category
                    ? 'bg-geothermal-orange hover:bg-geothermal-orange/90 border-geothermal-orange'
                    : 'hover:bg-geothermal-orange hover:text-white hover:border-geothermal-orange'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Carousel */}
      <section className='pb-16 px-3 sm:px-4 lg:px-6'>
        <div className='max-w-[90rem] mx-auto'>
          {filteredAchievements.length > 0 && (
            <Card className='overflow-hidden border-0 shadow-2xl'>
              <div className='relative h-[600px] md:h-[500px]'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={currentAchievement.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className='absolute inset-0 flex flex-col md:flex-row'
                  >
                    {/* Image Section */}
                    <div className='md:w-1/2 h-64 md:h-full relative overflow-hidden'>
                      {currentAchievement.image ? (
                        <Image
                          src={currentAchievement.image}
                          alt={currentAchievement.title}
                          fill
                          sizes='(max-width: 768px) 100vw, 50vw'
                          priority={currentIndex === 0}
                          loading={currentIndex === 0 ? 'eager' : 'lazy'}
                          className={`object-cover ${
                            isCoupledPlatform ? 'object-[0%_center]' : ''
                          }`}
                        />
                      ) : (
                        <div className='w-full h-full bg-gradient-to-br from-geothermal-blue to-geothermal-green flex items-center justify-center'>
                          <div className='text-center text-white'>
                            {categoryIcons[
                              currentAchievement.category as keyof typeof categoryIcons
                            ] &&
                              React.createElement(
                                categoryIcons[
                                  currentAchievement.category as keyof typeof categoryIcons
                                ],
                                {
                                  className: 'w-24 h-24 mb-4 mx-auto opacity-50'
                                }
                              )}
                            <p className='text-lg opacity-75'>成果展示图片</p>
                            <Badge
                              variant='secondary'
                              className='mt-2 bg-white/20 text-white border-white/30'
                            >
                              {currentAchievement.category}
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className='md:w-1/2 p-8 md:p-12 flex flex-col justify-center'>
                      <div className='mb-4 flex items-center gap-3'>
                        <Badge
                          variant='default'
                          className='bg-geothermal-orange hover:bg-geothermal-orange'
                        >
                          {currentAchievement.category}
                        </Badge>
                        <div className='flex items-center gap-2 text-gray-500 text-sm'>
                          <Calendar className='w-4 h-4' />
                          {currentAchievement.date}
                        </div>
                      </div>

                      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                        {currentAchievement.title}
                      </h2>

                      <p className='text-gray-600 text-lg leading-relaxed mb-8'>
                        {currentAchievement.description}
                      </p>

                      <Separator className='mb-6' />

                      {/* Highlights */}
                      <div className='space-y-4'>
                        <h4 className='font-semibold text-gray-900 flex items-center gap-2'>
                          <CheckCircle className='w-5 h-5 text-geothermal-green' />
                          核心亮点：
                        </h4>
                        <div className='space-y-3'>
                          {currentAchievement.highlights.map(
                            (highlight, index) => {
                              const highlightData =
                                typeof highlight === 'string'
                                  ? { title: highlight, detail: '' }
                                  : highlight

                              return (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className='flex items-center space-x-3'
                                >
                                  <div className='w-2 h-2 bg-geothermal-orange rounded-full'></div>
                                  <Badge variant='outline' className='text-sm'>
                                    {highlightData.title}
                                  </Badge>
                                  {highlightData.detail ? (
                                    <span className='text-sm text-gray-600'>
                                      {highlightData.detail}
                                    </span>
                                  ) : null}
                                </motion.div>
                              )
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={prevSlide}
                  className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg hover:scale-110 transition-all duration-300'
                >
                  <ChevronLeft className='w-6 h-6' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={nextSlide}
                  className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg hover:scale-110 transition-all duration-300'
                >
                  <ChevronRight className='w-6 h-6' />
                </Button>

                {/* Dots Indicator */}
                <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                  {filteredAchievements.map((_, index) => (
                    <Button
                      key={index}
                      variant='ghost'
                      size='sm'
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 p-0 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-geothermal-orange hover:bg-geothermal-orange scale-125'
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>
    </div>
  )
}
