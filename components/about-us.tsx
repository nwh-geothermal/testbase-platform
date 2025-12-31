'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getAssetPath } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  MapPin,
  Calendar,
  Users,
  Award,
  Target,
  Lightbulb,
  Building,
  Globe,
  TrendingUp,
  Zap,
  Shield,
  Star
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

type AboutUsProps = {
  /** Compact mode removes internal padding/max-width so the parent container controls width. */
  compact?: boolean
}

export function AboutUs({ compact = false }: AboutUsProps) {
  const sectionPadding = compact ? '' : 'px-3 sm:px-4 lg:px-6'
  const sectionContainer = compact ? 'w-full' : 'max-w-[90rem] mx-auto'

  const statisticsData = [
    {
      icon: Calendar,
      value: '70+',
      label: '年发展历程',
      color: 'bg-geothermal-orange'
    },
    {
      icon: Users,
      value: '6000+',
      label: '专业人才',
      color: 'bg-geothermal-blue'
    },
    {
      icon: TrendingUp,
      value: '1000+',
      label: '完成项目',
      color: 'bg-geothermal-green'
    },
    {
      icon: Star,
      value: '4',
      label: '综合甲级资质',
      color: 'bg-gradient-to-r from-geothermal-orange to-geothermal-blue'
    }
  ]

  const coreValues = [
    { icon: Zap, title: '创新驱动', description: '持续技术创新，引领行业发展' },
    {
      icon: Shield,
      title: '品质至上',
      description: '严格质量标准，追求卓越品质'
    },
    {
      icon: Globe,
      title: '绿色发展',
      description: '推动绿色能源，建设美好未来'
    }
  ]

  const baseInfo = [
    { icon: MapPin, label: '地理位置', value: '陕西省西安市' },
    { icon: Calendar, label: '成立时间', value: '2024年' },
    { icon: Users, label: '专业团队', value: '50+ 专家学者' },
    { icon: Award, label: '技术专利', value: '100+ 项' }
  ]

  const companyFeatures = [
    {
      icon: Target,
      title: '专业领域',
      description: '水利水电、新能源、地热能开发、工程咨询、环境保护等多个领域',
      color: 'bg-geothermal-blue'
    },
    {
      icon: Lightbulb,
      title: '技术实力',
      description: '拥有国家级技术中心、博士后科研工作站，技术实力雄厚',
      color: 'bg-geothermal-green'
    },
    {
      icon: Globe,
      title: '国际业务',
      description: '业务遍及亚洲、非洲、南美洲等多个国家和地区',
      color: 'bg-geothermal-orange'
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'>
      {/* Company Introduction */}
      <section className={`pb-16 ${sectionPadding}`}>
        <div className={sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className='overflow-hidden border-0 shadow-2xl'>
              <div className='grid grid-cols-1 lg:grid-cols-2'>
                {/* Content Section */}
                <CardContent className='p-8 lg:p-12 order-2 lg:order-1'>
                  <CardTitle className='text-3xl font-bold mb-6'>
                    中国电建西北勘测设计研究院有限公司
                  </CardTitle>

                  <CardDescription className='text-lg leading-relaxed mb-8'>
                    中国电建西北勘测设计研究院有限公司是中国电力建设集团有限公司的全资子公司，成立于1950年，是国内最早从事水利水电工程勘测设计的专业机构之一。公司具有工程勘察综合甲级、工程设计综合甲级、工程咨询甲级、工程监理甲级等资质。
                  </CardDescription>

                  <div className='space-y-6 mb-8'>
                    {companyFeatures.map((feature, index) => {
                      const IconComponent = feature.icon
                      return (
                        <div key={index} className='flex items-start space-x-4'>
                          <div
                            className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                          >
                            <IconComponent className='w-6 h-6 text-white' />
                          </div>
                          <div>
                            <h4 className='font-semibold text-gray-900 mb-2'>
                              {feature.title}
                            </h4>
                            <p className='text-gray-600'>
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <Card className='bg-gradient-to-r from-geothermal-blue/10 to-geothermal-green/10 border-0'>
                    <CardContent className='p-6'>
                      <CardTitle className='text-lg mb-3'>企业愿景</CardTitle>
                      <CardDescription>
                        成为国际一流的工程技术服务商，为全球客户提供优质的工程技术解决方案。
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CardContent>

                {/* Image Section */}
                <div className='relative h-64 lg:h-auto order-1 lg:order-2'>
                  <Image
                    src={getAssetPath('/building1.jpg')}
                    alt='中国电建西北院'
                    fill
                    className='object-cover object-[0%_10%]'
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className={`pb-16 ${sectionPadding}`}>
        <div className={sectionContainer}>
          <motion.div
            variants={staggerContainer}
            initial='initial'
            animate='animate'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
          >
            {statisticsData.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className='border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                    <CardContent className='p-8 text-center'>
                      <div
                        className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <IconComponent className='w-8 h-8 text-white' />
                      </div>
                      <div className='text-3xl font-bold text-gray-900 mb-2'>
                        {stat.value}
                      </div>
                      <Badge variant='outline'>{stat.label}</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className={sectionPadding}>
        <div className={sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className='border-0 shadow-xl'>
              <CardHeader className='text-center'>
                <CardTitle className='text-3xl font-bold mt-2'>
                  联系我们
                </CardTitle>
              </CardHeader>
              <CardContent className='p-8 md:p-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                  <Card className='border border-gray-200'>
                    <CardHeader>
                      <CardTitle className='text-xl flex items-center gap-3'>
                        <Building className='w-6 h-6 text-geothermal-orange' />
                        陕西省地热能开发利用技术中试基地
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-4'>
                        <div className='flex items-center space-x-3'>
                          <MapPin className='w-5 h-5 text-geothermal-orange' />
                          <Badge variant='outline'>陕西省西安市</Badge>
                        </div>
                        <div className='flex items-center space-x-3'>
                          <Target className='w-5 h-5 text-geothermal-blue' />
                          <Badge variant='outline'>地热能技术中试基地</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className='border border-gray-200'>
                    <CardHeader>
                      <CardTitle className='text-xl flex items-center gap-3'>
                        <Shield className='w-6 h-6 text-geothermal-blue' />
                        中国电建西北勘测设计研究院有限公司
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-4'>
                        <div className='flex items-center space-x-3'>
                          <MapPin className='w-5 h-5 text-geothermal-orange' />
                          <Badge variant='outline'>陕西省西安市</Badge>
                        </div>
                        <div className='flex items-center space-x-3'>
                          <Globe className='w-5 h-5 text-geothermal-green' />
                          <Badge variant='outline'>nwh.cn</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
