'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Hammer,
  Thermometer,
  Zap,
  Settings,
  FlaskConical,
  MapPin,
  Layers,
  BarChart3,
  Cpu,
  Gauge,
  TestTube
} from 'lucide-react'

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  category: string
}

const services: Service[] = [
  {
    id: 'geological-exploration',
    title: '地热能地质勘探',
    description:
      '为地热资源开发提供全面的地质勘探和评估服务，确保项目的可行性和安全性。',
    features: [
      '地质构造分析',
      '地热梯度测量',
      '地下水文地质调查',
      '热储层评价',
      '资源量评估',
      '风险评估报告'
    ],
    icon: <Search className='w-8 h-8' />,
    category: '勘探评估'
  },
  {
    id: 'drilling-process',
    title: '地热能钻井工艺流程',
    description:
      '提供专业的地热钻井技术服务，包括钻井设计、施工监督和质量控制。',
    features: [
      '钻井方案设计',
      '钻井施工管理',
      '套管下入工艺',
      '完井技术服务',
      '钻井液配制',
      '井身质量检测'
    ],
    icon: <Hammer className='w-8 h-8' />,
    category: '钻井技术'
  },
  {
    id: 'numerical-simulation',
    title: '地热能地下高效取换热数值模拟',
    description: '运用先进的数值模拟技术，优化地热系统的取热和换热效率。',
    features: [
      '地下温度场模拟',
      '流体流动分析',
      '热交换效率计算',
      '系统优化建议',
      '长期性能预测',
      '参数敏感性分析'
    ],
    icon: <BarChart3 className='w-8 h-8' />,
    category: '数值模拟'
  },
  {
    id: 'multi-energy-system',
    title: '地热能多能互补及储换热系统',
    description: '设计和集成多种能源互补的地热系统，提高能源利用效率。',
    features: [
      '多能源系统设计',
      '储热技术应用',
      '热泵系统集成',
      '能量管理策略',
      '系统性能优化',
      '经济性分析'
    ],
    icon: <Zap className='w-8 h-8' />,
    category: '系统集成'
  },
  {
    id: 'intelligent-control',
    title: '地热能运维智能化调控',
    description: '提供智能化的地热系统运行维护和自动调控解决方案。',
    features: [
      '智能监控系统',
      '自动化控制',
      '故障诊断预警',
      '运行参数优化',
      '远程监控管理',
      '维护计划制定'
    ],
    icon: <Cpu className='w-8 h-8' />,
    category: '智能运维'
  },
  {
    id: 'rock-soil-testing',
    title: '地下岩土物性参数测试实验',
    description: '专业的岩土物理性质测试服务，为地热工程提供准确的基础数据。',
    features: [
      '岩石热导率测试',
      '土壤导热系数',
      '渗透率测量',
      '孔隙度分析',
      '热容量检测',
      '物性参数报告'
    ],
    icon: <TestTube className='w-8 h-8' />,
    category: '实验测试'
  },
  {
    id: 'thermal-mapping',
    title: '地热资源分布制图',
    description: '制作详细的地热资源分布图，为区域开发规划提供科学依据。',
    features: [
      '地热资源制图',
      'GIS空间分析',
      '温度等值线图',
      '资源分级评价',
      '开发适宜性分析',
      '规划建议报告'
    ],
    icon: <MapPin className='w-8 h-8' />,
    category: '资源评价'
  },
  {
    id: 'system-performance',
    title: '地热系统性能监测',
    description: '全面的地热系统性能监测和评估服务，确保系统高效运行。',
    features: [
      '性能实时监测',
      '能效比分析',
      '热平衡计算',
      '系统诊断评估',
      '改进方案建议',
      '年度性能报告'
    ],
    icon: <Gauge className='w-8 h-8' />,
    category: '性能监测'
  }
]

const categories = [
  '勘探评估',
  '钻井技术',
  '数值模拟',
  '系统集成',
  '智能运维',
  '实验测试',
  '资源评价',
  '性能监测'
]

export function ServicesList() {
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
            服务清单
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            专业的地热能技术服务，覆盖从勘探评估到运维管理的全产业链
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        {/* Category Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='mb-16'
        >
          <div className='bg-white rounded-2xl shadow-xl p-8'>
            <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
              服务体系
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {categories.map((category, index) => (
                <div
                  key={category}
                  className='text-center p-4 bg-gradient-to-br from-geothermal-blue/10 to-geothermal-green/10 rounded-lg border border-gray-200'
                >
                  <div className='text-lg font-semibold text-gray-800 mb-1'>
                    {category}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {services.filter((s) => s.category === category).length}{' '}
                    项服务
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full'
            >
              <div className='p-8 h-full flex flex-col'>
                {/* Service Header */}
                <div className='flex items-start space-x-4 mb-6'>
                  <div className='w-16 h-16 bg-gradient-to-br from-white via-emerald-50 to-gray-100 rounded-lg flex items-center justify-center text-emerald-700 shadow-md group-hover:scale-110 transition-transform duration-300 border border-gray-200'>
                    {service.icon}
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm text-geothermal-orange font-medium mb-1'>
                      {service.category}
                    </div>
                    <h3 className='text-xl font-bold text-gray-900 leading-tight'>
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Service Description */}
                <p className='text-gray-600 mb-6 leading-relaxed'>
                  {service.description}
                </p>

                {/* Service Features */}
                <div className='space-y-3 flex-1'>
                  <h4 className='text-sm font-semibold text-gray-900 mb-3'>
                    服务内容：
                  </h4>
                  <div className='space-y-2'>
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className='flex items-center space-x-2'
                      >
                        <div className='w-2 h-2 bg-geothermal-green rounded-full flex-shrink-0'></div>
                        <span className='text-sm text-gray-700'>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className='mt-6 pt-6 border-t border-gray-100'>
                  <button className='w-full py-3 px-4 bg-gradient-to-r from-geothermal-blue to-geothermal-green text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5'>
                    了解详情
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className='mt-16 bg-gradient-to-r from-geothermal-blue/10 to-geothermal-green/10 rounded-2xl p-12 text-center'
        >
          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            专业技术咨询
          </h2>
          <p className='text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed'>
            我们的专家团队随时为您提供专业的技术咨询和定制化解决方案。
            无论您处于项目的哪个阶段，我们都能为您提供最适合的技术支持。
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='px-8 py-4 bg-geothermal-orange text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5'>
              在线咨询
            </button>
            <button className='px-8 py-4 border-2 border-geothermal-blue text-geothermal-blue rounded-lg font-semibold hover:bg-geothermal-blue hover:text-white transition-all duration-200'>
              预约考察
            </button>
          </div>
        </motion.div>

        {/* Service Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className='mt-16'
        >
          <div className='bg-white rounded-2xl shadow-xl p-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
              服务统计
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-geothermal-orange mb-2'>
                  200+
                </div>
                <div className='text-gray-600'>完成项目</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-geothermal-blue mb-2'>
                  95%
                </div>
                <div className='text-gray-600'>客户满意度</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-geothermal-green mb-2'>
                  50+
                </div>
                <div className='text-gray-600'>专业技术人员</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-purple-600 mb-2'>
                  24/7
                </div>
                <div className='text-gray-600'>技术支持</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
