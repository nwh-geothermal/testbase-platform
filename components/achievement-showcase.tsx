'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { getAssetPath } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  ChevronLeft,
  ChevronRight,
  Award,
  TrendingUp,
  Users,
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
    title: '地热能高效开发关键技术突破',
    category: '技术创新',
    description:
      '成功研发出地热能高效开发关键技术，实现了地热能利用效率提升35%，为行业发展奠定了重要基础。该技术已获得国家发明专利，并在多个示范项目中得到成功应用。',
    image: getAssetPath('/sim1.jpg'),
    date: '2024年1月',
    highlights: [
      '获得国家发明专利',
      '效率提升35%',
      '5个示范项目应用',
      '技术达到国际先进水平'
    ]
  },
  {
    id: '2',
    title: '智能化地热监测系统建设',
    category: '智能监测',
    description:
      '建成了集实时监测、智能分析、预警预报于一体的智能化地热监测系统，实现了地热资源的精准管理和优化配置，大幅提升了运维效率。',
    image: getAssetPath('/model1.png'),
    date: '2024年12月',
    highlights: [
      '24小时实时监测',
      '智能预警系统',
      '运维效率提升50%',
      '覆盖10个监测点'
    ]
  },
  {
    id: '3',
    title: '产学研合作平台建设',
    category: '合作转化',
    description:
      '与国内外20余家高等院校和科研院所建立了深度合作关系，形成了产学研一体化的协同创新体系，推动了地热能技术的产业化发展。',
    image: getAssetPath('/meeting2.jpg'),
    date: '2024年11月',
    highlights: [
      '合作院校20+家',
      '联合研发项目15个',
      '培养专业人才200+人',
      '技术转化率90%'
    ]
  },
  {
    id: '4',
    title: '地热高效利用新材料研发',
    category: '材料研发',
    description:
      '围绕地热开发关键部件与耐高温材料开展研发，依托开放式实验平台与现场试验井，完成复合隔热中心管等新材料设计验证；配套多类仪器设备与数值模拟，形成从实验室测试到工程示范的全链条材料研发能力。',
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
    title: '多能协同数字孪生技术',
    category: '数字孪生',
    description:
      '构建地热能开发利用全流程数字孪生模型，实现物理世界与数字世界的实时交互，通过数据驱动的智能决策，优化系统运行效率。',
    image: getAssetPath('/twin1.png'),
    date: '2024年6月',
    highlights: [
      { title: '实时监控', detail: '24/7全天候系统状态监控' },
      { title: '预测维护', detail: 'AI驱动的设备健康预测' },
      { title: '优化调度', detail: '智能能源调度与分配' },
      { title: '决策支持', detail: '数据驱动的运营决策' }
    ]
  }
]

const categories = [
  '技术创新',
  '智能监测',
  '合作转化',
  '材料研发',
  '示范应用',
  '数字孪生'
]

const categoryIcons = {
  技术创新: Lightbulb,
  智能监测: TrendingUp,
  合作转化: Users,
  材料研发: Award,
  示范应用: Building,
  数字孪生: Globe
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

  const moveCategory = (direction: 'next' | 'prev') => {
    setSelectedCategory((prevCategory) => {
      const currentIdx = categories.indexOf(prevCategory)
      const safeIdx = currentIdx === -1 ? 0 : currentIdx
      const nextIdx =
        direction === 'next'
          ? (safeIdx + 1) % categories.length
          : (safeIdx - 1 + categories.length) % categories.length
      return categories[nextIdx]
    })
    setCurrentIndex(0)
  }

  const nextSlide = () => {
    if (filteredAchievements.length <= 1) {
      moveCategory('next')
      return
    }

    setCurrentIndex((prevIndex) =>
      prevIndex === filteredAchievements.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    if (filteredAchievements.length <= 1) {
      moveCategory('prev')
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

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'>
      {/* Header */}
      <section className='pt-20 pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center'>
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
            展示技术创新、标准制定等方面取得的重要成果
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className='pb-8 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
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
      <section className='pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
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
                          className='object-cover'
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
