'use client'

import { motion } from 'framer-motion'
import {
  Beaker,
  Cog,
  TrendingUp,
  Users,
  Award,
  Monitor,
  Database,
  Lightbulb
} from 'lucide-react'

const features = [
  {
    icon: Beaker,
    title: '技术研发',
    description: '地热能地下高效稳定取换热技术开发，多能协同"数字孪生"系统研发',
    color: 'text-geothermal-orange',
    bgColor: 'bg-geothermal-orange/10'
  },
  {
    icon: Cog,
    title: '产品试制',
    description: '新装备及新材料关键技术开发，从实验室到产业化的桥梁',
    color: 'text-geothermal-blue',
    bgColor: 'bg-geothermal-blue/10'
  },
  {
    icon: TrendingUp,
    title: '工艺改进',
    description: '持续优化生产工艺，提升能效转换率和系统稳定性',
    color: 'text-geothermal-green',
    bgColor: 'bg-geothermal-green/10'
  },
  {
    icon: Monitor,
    title: '智慧运维',
    description: '基于物联网和AI的智能监控系统，实现设备预测性维护',
    color: 'text-purple-600',
    bgColor: 'bg-purple-600/10'
  },
  {
    icon: Database,
    title: '投资评价',
    description: '专业的经济评价模型，为投资决策提供科学依据',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-600/10'
  },
  {
    icon: Award,
    title: '成果展示',
    description: '技术成果转化展示平台，推动科研成果产业化应用',
    color: 'text-amber-600',
    bgColor: 'bg-amber-600/10'
  },
  {
    icon: Users,
    title: '产学研合作',
    description: '加强与行业内外企业和科研机构合作，共推产业创新',
    color: 'text-rose-600',
    bgColor: 'bg-rose-600/10'
  },
  {
    icon: Lightbulb,
    title: '技术创新',
    description: '基础研究到成果应用全链条创新，打造原创技术策源地',
    color: 'text-teal-600',
    bgColor: 'bg-teal-600/10'
  }
]

export function Features() {
  return (
    <section id='technology' className='section-padding bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-geothermal-gray mb-6'>
            核心功能体系
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4'>
            平台围绕地热能开发利用的全生命周期，通过数字孪生、智能运维等前沿技术，
            打造集研发、试制、工艺、运维、投资、展示于一体的国内领先地热能综合创新平台。
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-white rounded-2xl p-6 shadow-lg card-hover'
            >
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}
              >
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              <h3 className='text-xl font-bold text-geothermal-gray mb-3'>
                {feature.title}
              </h3>

              <p className='text-gray-600 leading-relaxed'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
