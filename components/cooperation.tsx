'use client'

import { motion } from 'framer-motion'
import {
  Building,
  GraduationCap,
  Factory,
  Globe,
  Mail,
  Phone,
  MapPin,
  Users,
  Lightbulb
} from 'lucide-react'

const partners = [
  {
    category: '科研院所',
    icon: GraduationCap,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    institutions: [
      '中国科学院广州能源研究所',
      '中国地质科学院水文地质环境地质研究所',
      '中国科学院地质与地球物理研究所',
      '西北大学地质学系',
      '长安大学环境科学与工程学院'
    ]
  },
  {
    category: '高等院校',
    icon: Building,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    institutions: [
      '西安交通大学',
      '哈尔滨工业大学',
      '北京工业大学',
      '长安大学',
      '西安建筑科技大学',
      '西安石油大学'
    ]
  },
  {
    category: '省属国企',
    icon: Factory,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    institutions: ['陕西省地质调查院', '陕西工程勘察研究院有限公司']
  },
  {
    category: '央企合作',
    icon: Globe,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    institutions: [
      '国家能源集团',
      '中国华能集团有限公司',
      '中国大唐集团有限公司',
      '中国华电集团有限公司',
      '中煤科工集团西安研究院有限公司',
      '中国石油集团宝石管业有限公司'
    ]
  }
]

const cooperationModes = [
  {
    title: '联合研发',
    description: '共同开展关键技术攻关，协同创新突破技术瓶颈',
    features: ['技术共享', '资源整合', '风险共担', '成果共享'],
    icon: Lightbulb,
    color: 'bg-blue-500'
  },
  {
    title: '人才交流',
    description: '建立人才培养和交流机制，提升行业整体技术水平',
    features: ['访问学者', '联合培养', '技术培训', '学术交流'],
    icon: Users,
    color: 'bg-green-500'
  },
  {
    title: '项目合作',
    description: '共同承担重大科研项目，推动产业化应用',
    features: ['项目申报', '工程示范', '市场推广', '标准制定'],
    icon: Building,
    color: 'bg-orange-500'
  },
  {
    title: '平台共建',
    description: '共建研发平台和基础设施，形成协同创新生态',
    features: ['实验室共建', '设备共享', '数据共享', '标准制定'],
    icon: Factory,
    color: 'bg-purple-500'
  }
]

export function Cooperation() {
  return (
    <section id='cooperation' className='section-padding bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-geothermal-gray mb-6'>
            产学研合作
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            加强与行业内外企业和科研机构的深度合作，构建开放共享的创新生态系统，
            共同推动地热能产业科技创新和高质量发展
          </p>
        </motion.div>

        {/* 合作伙伴展示 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
          {partners.map((partner, index) => (
            <motion.div
              key={partner.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-white rounded-2xl p-8 shadow-lg'
            >
              <div className='flex items-center space-x-4 mb-6'>
                <div
                  className={`w-16 h-16 ${partner.bgColor} rounded-2xl flex items-center justify-center`}
                >
                  <partner.icon className={`w-8 h-8 ${partner.color}`} />
                </div>
                <h3 className='text-2xl font-bold text-geothermal-gray'>
                  {partner.category}
                </h3>
              </div>

              <div className='space-y-3'>
                {partner.institutions.map((institution, idx) => (
                  <div
                    key={idx}
                    className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200'
                  >
                    <div className='w-2 h-2 bg-geothermal-orange rounded-full' />
                    <span className='text-gray-700'>{institution}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 合作模式 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h3 className='text-3xl font-bold text-geothermal-gray mb-8 text-center'>
            合作模式
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {cooperationModes.map((mode, index) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'
              >
                <div
                  className={`w-16 h-16 ${mode.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <mode.icon className='w-8 h-8 text-white' />
                </div>

                <h4 className='text-xl font-bold text-geothermal-gray mb-3'>
                  {mode.title}
                </h4>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  {mode.description}
                </p>

                <div className='space-y-2'>
                  {mode.features.map((feature, idx) => (
                    <div key={idx} className='flex items-center space-x-2'>
                      <div className='w-1.5 h-1.5 bg-geothermal-orange rounded-full' />
                      <span className='text-sm text-gray-600'>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 合作成果 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-white rounded-3xl p-8 shadow-xl mb-16'
        >
          <h3 className='text-3xl font-bold text-geothermal-gray mb-8 text-center'>
            合作成果统计
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-4xl font-bold text-geothermal-orange mb-2'>
                50+
              </div>
              <div className='text-gray-600'>合作机构</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-geothermal-blue mb-2'>
                20+
              </div>
              <div className='text-gray-600'>合作项目</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-geothermal-green mb-2'>
                30+
              </div>
              <div className='text-gray-600'>联合论文</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-purple-600 mb-2'>50+</div>
              <div className='text-gray-600'>共同专利</div>
            </div>
          </div>
        </motion.div>

        {/* 合作联系 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-gradient-to-r from-geothermal-blue to-geothermal-green rounded-3xl p-8 text-white'
        >
          <h3 className='text-3xl font-bold mb-8 text-center'>合作联系</h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h4 className='text-xl font-semibold mb-2'>
                陕西省地热能开发利用技术中试基地
              </h4>
              <h4 className='text-xl font-semibold mb-4'>
                城市清洁供能创新工作室
              </h4>
              <div className='space-y-3'>
                <div className='flex items-center space-x-3'>
                  <MapPin className='w-5 h-5' />
                  <span>陕西省西安市雁塔区丈八东路18号</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <Phone className='w-5 h-5' />
                  <span>+86-29-8828-0434</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <Mail className='w-5 h-5' />
                  <span>geothermal@nwh.cn</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className='text-xl font-semibold mb-4'>合作方向</h4>
              <div className='grid grid-cols-1 gap-2'>
                <div className='bg-white/20 rounded-lg p-3'>技术研发合作</div>
                <div className='bg-white/20 rounded-lg p-3'>人才培养交流</div>
                <div className='bg-white/20 rounded-lg p-3'>项目联合申报</div>
                <div className='bg-white/20 rounded-lg p-3'>产业化推广</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
