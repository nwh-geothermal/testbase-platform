'use client'

import React from 'react'
import { motion } from 'framer-motion'
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

export function AboutUs() {
  const statisticsData = [
    {
      icon: Calendar,
      value: '70+',
      label: '年发展历程',
      color: 'bg-geothermal-orange'
    },
    {
      icon: Users,
      value: '3000+',
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
      value: 'AAA',
      label: '信用等级',
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
    { icon: Calendar, label: '成立时间', value: '2023年' },
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
      {/* Header */}
      <section className='pt-20 pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'
          >
            关于基地
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            致力于地热能技术创新与产业化发展，构建绿色低碳能源未来
          </motion.p>
        </div>
      </section>

      {/* Pilot Base Introduction */}
      <section className='pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className='overflow-hidden border-0 shadow-2xl'>
              <div className='grid grid-cols-1 lg:grid-cols-2'>
                {/* Image Section */}
                <div className='h-64 lg:h-auto bg-gradient-to-br from-geothermal-blue to-geothermal-green flex items-center justify-center'>
                  <div className='text-center text-white p-8'>
                    <Building className='w-24 h-24 mb-4 mx-auto opacity-75' />
                    <h3 className='text-2xl font-bold mb-2'>
                      陕西省地热能开发利用技术中试基地
                    </h3>
                    <Badge
                      variant='secondary'
                      className='text-lg bg-white/20 text-white border-white/30'
                    >
                      Technology Pilot Base
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className='p-8 lg:p-12'>
                  <CardTitle className='text-3xl font-bold mb-6'>
                    陕西省地热能开发利用技术中试基地
                  </CardTitle>

                  <CardDescription className='text-lg leading-relaxed mb-8 text-gray-600'>
                    陕西省地热能开发利用技术中试基地是国内首个集技术研发、产品试制、工艺改进、智慧运维、投资评价和成果展示于一体的地热能全产业链技术集成与推广基地。基地依托先进的技术平台和专业团队，致力于推动地热能技术的创新发展和产业化应用。
                  </CardDescription>

                  <div className='grid grid-cols-2 gap-6 mb-8'>
                    {baseInfo.map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <div
                          key={index}
                          className='flex items-center space-x-3'
                        >
                          <div className='w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center'>
                            <IconComponent className='w-5 h-5 text-geothermal-orange' />
                          </div>
                          <div>
                            <div className='font-semibold text-gray-900 text-sm'>
                              {item.label}
                            </div>
                            <Badge variant='outline' className='text-xs'>
                              {item.value}
                            </Badge>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <Card className='bg-gradient-to-r from-geothermal-orange/10 to-geothermal-blue/10 border-0'>
                    <CardContent className='p-6'>
                      <CardTitle className='text-lg mb-3'>核心使命</CardTitle>
                      <CardDescription>
                        构建地热能技术创新生态系统，推动产学研深度融合，加速地热能技术成果转化，为实现碳达峰碳中和目标贡献力量。
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className='pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
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
                <div className='h-64 lg:h-auto bg-gradient-to-br from-geothermal-orange to-geothermal-blue flex items-center justify-center order-1 lg:order-2'>
                  <div className='text-center text-white p-8'>
                    <Shield className='w-24 h-24 mb-4 mx-auto opacity-75' />
                    <h3 className='text-xl font-bold mb-2'>中国电建西北院</h3>
                    <Badge
                      variant='secondary'
                      className='bg-white/20 text-white border-white/30 mb-2'
                    >
                      PowerChina Northwest
                    </Badge>
                    <p className='text-sm opacity-75'>成立于1950年</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className='pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
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

      {/* Core Values */}
      <section className='pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className='border-0 bg-gradient-to-br from-geothermal-blue to-geothermal-green text-white'>
              <CardContent className='p-12 text-center'>
                <CardTitle className='text-3xl md:text-4xl font-bold mb-8'>
                  核心价值观
                </CardTitle>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  {coreValues.map((value, index) => {
                    const IconComponent = value.icon
                    return (
                      <div key={index} className='space-y-4'>
                        <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto'>
                          <IconComponent className='w-8 h-8 opacity-90' />
                        </div>
                        <h3 className='text-xl font-semibold'>{value.title}</h3>
                        <p className='opacity-90'>{value.description}</p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className='pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
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
                          <Badge variant='outline'>www.nwh.com.cn</Badge>
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
