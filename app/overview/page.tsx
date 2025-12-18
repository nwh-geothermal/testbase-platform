'use client'

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
import { Separator } from '@/components/ui/separator'
import { AboutUs } from '@/components/about-us'
import {
  MapPin,
  Building2,
  Zap,
  Users,
  Target,
  Award,
  GraduationCap,
  Handshake
} from 'lucide-react'

export default function OverviewPage() {
  const coreFeatures = [
    '技术研发',
    '产品试制',
    '工艺改进',
    '检验检测',
    '标准制定',
    '人才培养',
    '成果转化',
    '产业孵化'
  ]

  const achievements = [
    {
      value: '100+',
      label: '技术专利',
      icon: Award,
      color: 'text-geothermal-orange'
    },
    {
      value: '50+',
      label: '合作伙伴',
      icon: Users,
      color: 'text-geothermal-blue'
    },
    {
      value: '95%',
      label: '能效比',
      icon: Zap,
      color: 'text-geothermal-green'
    },
    {
      value: '30+',
      label: '示范项目',
      icon: Building2,
      color: 'text-orange-500'
    }
  ]

  const talentStats = [
    { label: '博士研究生', value: '12', detail: '地热工程、地质资源方向' },
    { label: '硕士研究生', value: '38', detail: '热能工程、资源勘查等' },
    { label: '本科生', value: '65', detail: '能源科学、机电工程等' },
    { label: '企业导师', value: '20', detail: '一线研发与运维专家' }
  ]

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
            className='text-4xl md:text-5xl font-bold text-white mb-6'
          >
            基地概览
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl text-white/90 max-w-3xl mx-auto'
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
          <Card className='overflow-hidden border-0 shadow-2xl'>
            <CardContent className='p-8'>
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
                <CardTitle className='text-lg text-gray-700 mb-2'>
                  陕西省地热能开发利用技术中试基地实景图
                </CardTitle>
                <CardDescription className='text-sm'>
                  Shaanxi Province Geothermal Energy Development and Utilization
                  Technology Pilot Base
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Location Map Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='mb-16'
        >
          <Card className='border-0 shadow-2xl'>
            <CardHeader className='text-center'>
              <CardTitle className='text-2xl font-bold flex items-center justify-center gap-4'>
                <MapPin className='w-6 h-6 text-geothermal-orange' />
                基地位置
              </CardTitle>
              <CardDescription className='text-base'>
                陕西省西安市长安区城南大道18号
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Map Container */}
              <div className='relative w-full h-[400px] rounded-xl overflow-hidden border border-gray-200'>
                {/* Interactive Map - OpenStreetMap embed */}
                <div className='w-full h-full relative'>
                  <iframe
                    width='100%'
                    height='100%'
                    style={{ border: 0 }}
                    src='https://www.openstreetmap.org/export/embed.html?bbox=108.912414%2C34.124466%2C108.932414%2C34.144466&layer=mapnik&marker=34.134466%2C108.922414'
                    title='OpenStreetMap - 陕西省地热能开发利用技术中试基地'
                    allowFullScreen
                    loading='lazy'
                    tabIndex={-1}
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>
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
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='flex items-center gap-3'>
                  <div className='w-1 h-8 bg-geothermal-orange rounded-full'></div>
                  基地简介
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4 text-gray-600 leading-relaxed'>
                  <p>
                    陕西省地热能开发利用技术中试基地是陕西省重点建设的新能源技术创新平台，致力于地热能技术的研发、试验、示范和产业化应用。基地位于陕西省西安市，占地面积约200亩，总投资超过5亿元人民币。
                  </p>
                  <p>
                    基地集成了国内外先进的地热能开发利用技术，建设有完整的技术研发体系、中试验证平台和示范应用系统，为地热能产业的技术创新和成果转化提供了重要支撑。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-lg flex-1'>
              <CardHeader>
                <CardTitle className='text-xl'>核心功能</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-2 gap-4'>
                  {coreFeatures.map((func, index) => (
                    <div key={index} className='flex items-center space-x-2'>
                      <div className='w-2 h-2 bg-geothermal-green rounded-full'></div>
                      <Badge
                        variant='secondary'
                        className='text-gray-700 font-medium'
                      >
                        {func}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Technical Details */}
          <div className='flex flex-col space-y-8'>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='flex items-center gap-3'>
                  <div className='w-1 h-8 bg-geothermal-blue rounded-full'></div>
                  技术特色
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-6'>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2 flex items-center gap-2'>
                      <Target className='w-4 h-4 text-geothermal-orange' />
                      先进装备配置
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      配备国际先进的地热钻探设备、热泵系统测试平台、地热流体分析仪器等专业设备，具备完整的技术验证能力。
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2 flex items-center gap-2'>
                      <Zap className='w-4 h-4 text-geothermal-green' />
                      创新技术体系
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      形成了涵盖地热资源勘探、开发、利用全产业链的技术体系，在中深层地热开发、热泵技术等领域达到国际先进水平。
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2 flex items-center gap-2'>
                      <Building2 className='w-4 h-4 text-geothermal-blue' />
                      智能化管理
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      建立了智能化的基地管理系统，实现设备运行监控、数据采集分析、安全预警等功能的一体化管理。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-xl'>发展成果</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-2 gap-6'>
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon
                    return (
                      <div key={index} className='text-center'>
                        <div
                          className={`text-3xl font-bold mb-2 flex items-center justify-center gap-2 ${achievement.color}`}
                        >
                          <IconComponent className='w-6 h-6' />
                          {achievement.value}
                        </div>
                        <Badge variant='outline' className='text-sm'>
                          {achievement.label}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Talent Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className='mt-16'
        >
          <Card className='border-0 shadow-2xl'>
            <CardContent className='p-10 space-y-8'>
              <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-2xl bg-geothermal-orange/10 flex items-center justify-center'>
                    <GraduationCap className='w-6 h-6 text-geothermal-orange' />
                  </div>
                  <div>
                    <CardTitle className='text-2xl'>人才培养</CardTitle>
                    <CardDescription className='text-base'>
                      校企联合培养，建设地热能专业复合型人才梯队
                    </CardDescription>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Badge
                    variant='secondary'
                    className='bg-geothermal-orange/10 text-geothermal-orange'
                  >
                    校企联合培养模式
                  </Badge>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {talentStats.map((item) => (
                  <div
                    key={item.label}
                    className='p-6 rounded-xl bg-slate-50 border border-gray-100 shadow-sm flex flex-col gap-2'
                  >
                    <div className='text-sm text-gray-500'>{item.label}</div>
                    <div className='text-3xl font-bold text-geothermal-blue'>
                      {item.value}
                    </div>
                    <div className='text-sm text-gray-600'>{item.detail}</div>
                  </div>
                ))}
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='p-6 rounded-xl bg-white border border-gray-100 shadow-sm'>
                  <div className='flex items-center gap-2 mb-3'>
                    <Handshake className='w-5 h-5 text-geothermal-green' />
                    <div className='font-semibold text-gray-900'>联合培养</div>
                  </div>
                  <p className='text-gray-600 leading-relaxed text-sm'>
                    基地与高校共建课程、共享实验平台，联合制定培养方案，让学生在真实的地热能项目中完成实操训练，毕业即可上岗。
                  </p>
                </div>
                <div className='p-6 rounded-xl bg-white border border-gray-100 shadow-sm'>
                  <div className='flex items-center gap-2 mb-3'>
                    <Building2 className='w-5 h-5 text-geothermal-blue' />
                    <div className='font-semibold text-gray-900'>实践基地</div>
                  </div>
                  <p className='text-gray-600 leading-relaxed text-sm'>
                    中国地质大学、西安石油大学设立校外实践基地，学生在导师与企业双导师指导下，参与地热钻探、设备调试、数据分析等全链条实践。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='mt-16'
        >
          <Card className='border-0 bg-gradient-to-r from-geothermal-blue/10 to-geothermal-green/10'>
            <CardContent className='p-12 text-center'>
              <CardTitle className='text-3xl font-bold text-gray-900 mb-6'>
                发展愿景
              </CardTitle>
              <CardDescription className='text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed'>
                致力于建设成为国内领先、国际先进的地热能技术创新中心，推动地热能产业高质量发展，
                为实现碳达峰、碳中和目标贡献力量，成为陕西省乃至全国地热能技术创新的重要引擎。
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        {/* About Section */}
        <div className='mt-16'>
          <AboutUs compact />
        </div>
      </div>
    </div>
  )
}
