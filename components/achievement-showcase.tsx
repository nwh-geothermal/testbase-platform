'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Award,
  TrendingUp,
  Users,
  Lightbulb,
  Building,
  Globe
} from 'lucide-react'

interface Achievement {
  id: string
  title: string
  category: string
  description: string
  image: string
  date: string
  highlights: string[]
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: '地热能高效开发关键技术突破',
    category: '技术创新',
    description:
      '成功研发出地热能高效开发关键技术，实现了地热能利用效率提升35%，为行业发展奠定了重要基础。该技术已获得国家发明专利，并在多个示范项目中得到成功应用。',
    image: '/api/placeholder/800/600',
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
    category: '智慧运维',
    description:
      '建成了集实时监测、智能分析、预警预报于一体的智能化地热监测系统，实现了地热资源的精准管理和优化配置，大幅提升了运维效率。',
    image: '/api/placeholder/800/600',
    date: '2023年12月',
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
    category: '合作创新',
    description:
      '与国内外20余家高等院校和科研院所建立了深度合作关系，形成了产学研一体化的协同创新体系，推动了地热能技术的产业化发展。',
    image: '/api/placeholder/800/600',
    date: '2023年11月',
    highlights: [
      '合作院校20+家',
      '联合研发项目15个',
      '培养专业人才200+人',
      '技术转化率90%'
    ]
  },
  {
    id: '4',
    title: '地热能标准化体系建设',
    category: '标准制定',
    description:
      '主导制定了地热能开发利用行业标准5项，参与国家标准制定3项，为行业规范化发展提供了重要支撑，推动了地热能产业的健康发展。',
    image: '/api/placeholder/800/600',
    date: '2023年10月',
    highlights: [
      '行业标准5项',
      '国家标准3项',
      '标准应用覆盖率85%',
      '行业影响力显著'
    ]
  },
  {
    id: '5',
    title: '国际合作项目成果',
    category: '国际合作',
    description:
      '与德国、冰岛等地热能发达国家开展深度合作，引进先进技术和管理经验，提升了我国地热能技术的国际竞争力和影响力。',
    image: '/api/placeholder/800/600',
    date: '2023年9月',
    highlights: [
      '国际合作项目8个',
      '技术引进5项',
      '专家交流50+人次',
      '国际标准参与制定2项'
    ]
  },
  {
    id: '6',
    title: '绿色低碳示范项目',
    category: '示范应用',
    description:
      '成功实施了多个绿色低碳示范项目，累计减少碳排放10万吨，为实现碳达峰碳中和目标贡献了重要力量，获得了政府和社会的高度认可。',
    image: '/api/placeholder/800/600',
    date: '2023年8月',
    highlights: [
      '示范项目12个',
      '减少碳排放10万吨',
      '节约能源成本30%',
      '获得政府表彰'
    ]
  }
]

const categories = [
  '全部',
  '技术创新',
  '智慧运维',
  '合作创新',
  '标准制定',
  '国际合作',
  '示范应用'
]

const categoryIcons = {
  技术创新: Lightbulb,
  智慧运维: TrendingUp,
  合作创新: Users,
  标准制定: Award,
  国际合作: Globe,
  示范应用: Building
}

export function AchievementShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const filteredAchievements =
    selectedCategory === '全部'
      ? achievements
      : achievements.filter(
          (achievement) => achievement.category === selectedCategory
        )

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredAchievements.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
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
            className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'
          >
            成果展示
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            展示地热能开发利用技术中试基地在技术创新、产学研合作、标准制定等方面取得的重要成果
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className='pb-8 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-wrap justify-center gap-4'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentIndex(0)
                }}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category
                    ? 'bg-geothermal-orange text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-geothermal-orange hover:text-white shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Carousel */}
      <section className='pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          {filteredAchievements.length > 0 && (
            <div className='relative'>
              {/* Carousel Container */}
              <div className='relative overflow-hidden rounded-2xl bg-white shadow-2xl'>
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
                            <p className='text-sm opacity-50 mt-2'>
                              {currentAchievement.category}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className='md:w-1/2 p-8 md:p-12 flex flex-col justify-center'>
                        <div className='mb-4'>
                          <span className='inline-block px-3 py-1 bg-geothermal-orange text-white text-sm rounded-full font-medium'>
                            {currentAchievement.category}
                          </span>
                          <span className='ml-3 text-gray-500 text-sm'>
                            {currentAchievement.date}
                          </span>
                        </div>

                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                          {currentAchievement.title}
                        </h2>

                        <p className='text-gray-600 text-lg leading-relaxed mb-8'>
                          {currentAchievement.description}
                        </p>

                        {/* Highlights */}
                        <div className='space-y-3'>
                          <h4 className='font-semibold text-gray-900 mb-4'>
                            核心亮点：
                          </h4>
                          {currentAchievement.highlights.map(
                            (highlight, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className='flex items-center space-x-3'
                              >
                                <div className='w-2 h-2 bg-geothermal-orange rounded-full'></div>
                                <span className='text-gray-700'>
                                  {highlight}
                                </span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110'
                >
                  <ChevronLeft className='w-6 h-6' />
                </button>
                <button
                  onClick={nextSlide}
                  className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110'
                >
                  <ChevronRight className='w-6 h-6' />
                </button>

                {/* Dots Indicator */}
                <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                  {filteredAchievements.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-geothermal-orange scale-125'
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Achievement Grid */}
      <section className='pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
            全部成果一览
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  index === currentIndex ? 'ring-2 ring-geothermal-orange' : ''
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className='h-48 bg-gradient-to-br from-geothermal-blue to-geothermal-green flex items-center justify-center'>
                  {categoryIcons[
                    achievement.category as keyof typeof categoryIcons
                  ] &&
                    React.createElement(
                      categoryIcons[
                        achievement.category as keyof typeof categoryIcons
                      ],
                      {
                        className: 'w-16 h-16 text-white opacity-75'
                      }
                    )}
                </div>

                <div className='p-6'>
                  <div className='flex items-center justify-between mb-3'>
                    <span className='inline-block px-2 py-1 bg-geothermal-orange/10 text-geothermal-orange text-xs rounded-full font-medium'>
                      {achievement.category}
                    </span>
                    <span className='text-gray-500 text-xs'>
                      {achievement.date}
                    </span>
                  </div>

                  <h3 className='font-semibold text-gray-900 mb-3 line-clamp-2'>
                    {achievement.title}
                  </h3>

                  <p className='text-gray-600 text-sm line-clamp-3'>
                    {achievement.description}
                  </p>

                  <div className='mt-4 pt-4 border-t border-gray-100'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-gray-500'>
                        {achievement.highlights.length} 个亮点
                      </span>
                      <span className='text-geothermal-orange text-sm font-medium'>
                        查看详情 →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
