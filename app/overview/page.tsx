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
import { LeafletMap } from '@/components/leaflet-map'
import {
  MapPin,
  Building2,
  Zap,
  ArrowRight,
  FlaskConical,
  Cpu,
  Wrench,
  Rocket,
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

  const technologyStages = [
    {
      icon: FlaskConical,
      title: '基础研究',
      description: '地热能理论研究，关键问题探索',
      achievements: ['热传导机理研究', '地质结构分析', '能量转换理论'],
      color: 'bg-blue-500'
    },
    {
      icon: Cpu,
      title: '技术攻关',
      description: '关键技术突破，核心算法开发',
      achievements: ['数字孪生技术', '高效换热技术', '智能控制算法'],
      color: 'bg-purple-500'
    },
    {
      icon: Wrench,
      title: '技术熟化',
      description: '技术工程化验证，系统集成优化',
      achievements: ['工艺流程优化', '设备性能测试', '系统集成验证'],
      color: 'bg-green-500'
    },
    {
      icon: Rocket,
      title: '成果应用',
      description: '产业化推广，市场化应用',
      achievements: ['示范项目建设', '技术标准制定', '产业化推广'],
      color: 'bg-orange-500'
    }
  ]

  const mapMarker: [number, number] = [34.135451, 108.917928]

  const talentStats = [
    { label: '博士研究生', value: '12', detail: '地热工程、地质资源方向' },
    { label: '硕士研究生', value: '38', detail: '热能工程、资源勘查等' },
    { label: '本科生', value: '65', detail: '能源科学、机电工程等' },
    { label: '企业导师', value: '20', detail: '一线研发与运维专家' }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      {/* Hero Section */}
      <div className='relative py-20 overflow-hidden'>
        <div
          className='absolute inset-0 opacity-90'
          style={{
            background:
              'radial-gradient(circle at 20% 25%, rgba(255, 255, 255, 0.35), transparent 32%), radial-gradient(circle at 80% 10%, rgba(255, 182, 116, 0.35), transparent 28%), linear-gradient(135deg, #f8fafc, #e0f2fe 45%, #fde68a)'
          }}
        ></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'
          >
            基地概览
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
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
                <LeafletMap
                  center={mapMarker}
                  marker={mapMarker}
                  markerLabel='陕西省地热能开发利用技术中试基地'
                  className='h-full w-full'
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technology Chain Section */}
        <div className='mt-16 mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-geothermal-gray mb-6'>
              技术创新链条
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              构建"基础研究—技术攻关—技术熟化—成果应用"全链条技术创新体系，
              实现从科学发现到产业应用的无缝衔接
            </p>
          </motion.div>

          <div className='relative'>
            <div className='hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-geothermal-blue via-geothermal-green to-geothermal-orange transform -translate-y-1/2' />

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch'>
              {technologyStages.map((stage, index) => (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className='relative h-full'
                >
                  <div className='bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-geothermal-orange transition-colors duration-300 relative z-10 h-full flex flex-col'>
                    <div className='absolute -top-4 left-8 bg-geothermal-gradient text-white w-8 h-8 rounded-full flex items-center justify-center font-bold'>
                      {index + 1}
                    </div>

                    <div
                      className={`w-16 h-16 ${stage.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                    >
                      <stage.icon className='w-8 h-8 text-white' />
                    </div>

                    <h3 className='text-2xl font-bold text-geothermal-gray mb-4 text-center'>
                      {stage.title}
                    </h3>
                    <p className='text-gray-600 mb-6 text-center leading-relaxed'>
                      {stage.description}
                    </p>

                    <div className='space-y-2'>
                      {stage.achievements.map((achievement, idx) => (
                        <div key={idx} className='flex items-center space-x-2'>
                          <div className='w-2 h-2 bg-geothermal-orange rounded-full' />
                          <div className='text-sm text-gray-600'>
                            {achievement}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='mt-auto' />
                  </div>

                  {index < technologyStages.length - 1 && (
                    <div className='hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20'>
                      <div className='bg-white rounded-full p-2 shadow-lg border border-gray-200'>
                        <ArrowRight className='w-6 h-6 text-geothermal-orange' />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

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

        {/* Digital Twin Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-16 bg-gradient-to-r from-geothermal-blue to-geothermal-green rounded-3xl p-8 text-white shadow-2xl'
        >
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 className='text-3xl font-bold mb-6'>多能协同数字孪生技术</h3>
              <p className='text-lg mb-6 leading-relaxed opacity-90'>
                构建地热能开发利用全流程数字孪生模型，实现物理世界与数字世界的实时交互，
                通过数据驱动的智能决策，优化系统运行效率。
              </p>
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white/20 rounded-xl p-4'>
                  <h4 className='font-semibold mb-2'>实时监控</h4>
                  <p className='text-sm opacity-80'>24/7全天候系统状态监控</p>
                </div>
                <div className='bg-white/20 rounded-xl p-4'>
                  <h4 className='font-semibold mb-2'>预测维护</h4>
                  <p className='text-sm opacity-80'>AI驱动的设备健康预测</p>
                </div>
                <div className='bg-white/20 rounded-xl p-4'>
                  <h4 className='font-semibold mb-2'>优化调度</h4>
                  <p className='text-sm opacity-80'>智能能源调度与分配</p>
                </div>
                <div className='bg-white/20 rounded-xl p-4'>
                  <h4 className='font-semibold mb-2'>决策支持</h4>
                  <p className='text-sm opacity-80'>数据驱动的运营决策</p>
                </div>
              </div>
            </div>
            <div className='bg-white/10 rounded-2xl p-6 backdrop-blur-sm'>
              <div className='relative aspect-video overflow-hidden rounded-xl bg-white/20'>
                <Image
                  src={getAssetPath('/twin1.png')}
                  alt='数字孪生系统演示'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
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
