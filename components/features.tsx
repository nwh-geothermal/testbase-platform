'use client'

import { motion } from 'framer-motion'
import { Award, Monitor, Users, Database, Lightbulb } from 'lucide-react'

const features = [
  {
    icon: Monitor,
    title: '基地概览',
    description: '园区布局、设施能力与资源配置一览，快速了解基地全貌',
    color: 'text-fuchsia-600',
    bgColor: 'bg-fuchsia-600/10'
  },
  {
    icon: Award,
    title: '成果展示',
    description: '集中呈现创新成果与应用案例，推动技术示范与推广',
    color: 'text-rose-600',
    bgColor: 'bg-rose-600/10'
  },
  {
    icon: Users,
    title: '产学研合作',
    description: '加强与行业内外企业和科研机构合作，共推产业创新',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-600/10'
  },
  {
    icon: Database,
    title: '服务清单',
    description: '整合关键资源与能力服务目录，提供一站式服务导航',
    color: 'text-amber-600',
    bgColor: 'bg-amber-600/10'
  },
  {
    icon: Lightbulb,
    title: '数据共享',
    description: '建立标准化数据共享机制，促进多方协同与价值释放',
    color: 'text-teal-600',
    bgColor: 'bg-teal-600/10'
  },
  {
    icon: Users,
    title: '地热协会',
    description: '链接行业资源与政策信息，促进交流合作与标准共建',
    color: 'text-sky-600',
    bgColor: 'bg-sky-600/10'
  }
]

export function Features() {
  return (
    <section id='technology' className='section-padding bg-gray-50'>
      <div className='max-w-[90rem] mx-auto'>
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
            围绕地热能开发利用的全生命周期，打造集材料、技术、设备于一体的国内领先地热能综合创新平台
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg card-hover'
            >
              <div className='relative z-10'>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
