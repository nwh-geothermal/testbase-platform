'use client'

import { motion } from 'framer-motion'
import {
  Award,
  FileText,
  Users,
  Lightbulb,
  TrendingUp,
  Shield
} from 'lucide-react'

const achievements = [
  {
    icon: Award,
    title: '核心专利技术',
    count: '10+',
    description: '获得发明专利和实用新型专利',
    items: [
      '地热能高效换热技术专利',
      '数字孪生系统控制专利',
      '智能运维算法专利',
      '新材料应用技术专利'
    ],
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  {
    icon: FileText,
    title: '学术论文发表',
    count: '20+',
    description: '在国内外期刊发表高质量论文',
    items: [
      'SCI期刊论文 5 篇',
      'EI期刊论文 3 篇',
      '国际会议论文 2 篇',
      '专著出版 3 部'
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: Users,
    title: '人才培养',
    count: '100+',
    description: '培养地热能领域专业人才',
    items: ['博士研究生 5 人', '硕士研究生 30 余人', '工程技术人员 150 余人'],
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    icon: Lightbulb,
    title: '技术创新',
    count: '50+',
    description: '突破关键技术瓶颈',
    items: [
      '地热能开发利用效率提升30%',
      '设备运行稳定性提升40%',
      '维护成本降低25%',
      '环境影响减少50%'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  }
]

const projectShowcase = [
  {
    title: '西北水电及新能源科技产业中心',
    description: '总供暖面积14万平方米，服务6000余名职工',
    status: '运行中',
    efficiency: '95%',
    savings: '30%',
    image: '/api/placeholder/400/250'
  },
  {
    title: '西安高新区中央创新区6号能源站项目',
    description: '商业建筑群智慧能源解决方案',
    status: '运行中',
    efficiency: '93%',
    savings: '35%',
    image: '/api/placeholder/400/250'
  },
  {
    title: '西安市儿童医院天然气能源管理项目',
    description: '2.5MW地热发电站，年发电量1800万度',
    status: '运行中',
    efficiency: '90%',
    savings: '40%',
    image: '/api/placeholder/400/250'
  }
]

const awards = [
  {
    year: '2024',
    title: '国家科技进步二等奖',
    description: '地热能多能协同数字孪生技术'
  },
  {
    year: '2023',
    title: '陕西省科技进步一等奖',
    description: '地热能高效开发利用关键技术'
  },
  {
    year: '2022',
    title: '中国地热能产业创新奖',
    description: '地热能智慧运维系统'
  },
  {
    year: '2021',
    title: '清洁能源技术突破奖',
    description: '地热能新材料技术应用'
  }
]

export function Achievements() {
  return (
    <section id='achievements' className='section-padding bg-white'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-geothermal-gray mb-6'>
            科研成果展示
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            通过持续创新和技术攻关，在地热能开发利用领域取得了一系列重要突破，
            为行业发展提供了强有力的技术支撑
          </p>
        </motion.div>

        {/* 成果统计 */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300'
            >
              <div
                className={`w-16 h-16 ${achievement.bgColor} rounded-2xl flex items-center justify-center mb-6`}
              >
                <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
              </div>

              <h3 className='text-3xl font-bold text-geothermal-gray mb-2'>
                {achievement.count}
              </h3>
              <h4 className='text-xl font-semibold text-geothermal-gray mb-3'>
                {achievement.title}
              </h4>
              <p className='text-gray-600 mb-4'>{achievement.description}</p>

              <div className='space-y-2'>
                {achievement.items.map((item, idx) => (
                  <div key={idx} className='flex items-center space-x-2'>
                    <div className='w-1.5 h-1.5 bg-geothermal-orange rounded-full' />
                    <span className='text-sm text-gray-600'>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 示范项目展示 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h3 className='text-3xl font-bold text-geothermal-gray mb-8 text-center'>
            示范项目展示
          </h3>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {projectShowcase.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
              >
                <div className='aspect-video bg-gradient-to-br from-geothermal-blue to-geothermal-green flex items-center justify-center'>
                  <span className='text-white text-lg font-semibold'>
                    项目展示图
                  </span>
                </div>

                <div className='p-6'>
                  <div className='flex items-center justify-between mb-3'>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === '运行中'
                          ? 'bg-green-100 text-green-800'
                          : project.status === '建设中'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h4 className='text-xl font-bold text-geothermal-gray mb-3'>
                    {project.title}
                  </h4>
                  <p className='text-gray-600 mb-4 leading-relaxed'>
                    {project.description}
                  </p>

                  <div className='grid grid-cols-2 gap-4'>
                    <div className='text-center'>
                      <div className='text-2xl font-bold text-geothermal-orange mb-1'>
                        {project.efficiency}
                      </div>
                      <div className='text-sm text-gray-600'>系统效率</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-2xl font-bold text-geothermal-green mb-1'>
                        {project.savings}
                      </div>
                      <div className='text-sm text-gray-600'>成本节约</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 获奖荣誉 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-gradient-to-r from-geothermal-orange to-geothermal-blue rounded-3xl p-8 text-white'
        >
          <h3 className='text-3xl font-bold mb-8 text-center'>获奖荣誉</h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white/20 backdrop-blur-sm rounded-xl p-6'
              >
                <div className='flex items-center space-x-4'>
                  <div className='w-16 h-16 bg-white/30 rounded-full flex items-center justify-center'>
                    <Award className='w-8 h-8' />
                  </div>
                  <div className='flex-1'>
                    <div className='text-lg font-bold mb-1'>{award.title}</div>
                    <div className='text-sm opacity-80 mb-2'>
                      {award.description}
                    </div>
                    <div className='text-xs opacity-60'>{award.year}年</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
