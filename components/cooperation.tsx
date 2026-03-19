'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'
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

const memberCompanies = [
  {
    name: '陕西省地质调查院',
    description:
      '于2010年组建的省政府直属正厅级事业单位，是陕西省唯一的公益性地质调查队伍，主要职责是统一部署和组织实施全省基础性、公益性、战略性地质调查工作。全院内设9个处室，下设8个直属单位，现有职工714人，其中，中国工程院院士1人，专业技术二级2人，专业技术3级7人；正高级工程师43名，占比6%，高级工程师195名，占比27%。外聘两院院士6名，国务院参事1名，中外知名专家20名。',
    image: getAssetPath('/company1.png')
  },
  {
    name: '中石化绿源地热能开发有限公司',
    description:
      '成立于2006年11月，是中国石化集团新星石油有限责任公司与冰岛极地绿色能源公司投资组建的以地热资源开发利用为主的中冰合资企业。',
    image: getAssetPath('/company2.png')
  },
  {
    name: '陕西省煤田地质集团有限公司',
    description:
      '成立于2008年12月，是按照全省地勘单位体制改革的总体部署， 由创立于1954年6月的陕西省煤田地质局成建制改制成立的国有独资地质勘查与开发一体化企业。',
    image: getAssetPath('/company3.jpg')
  },
  {
    name: '四联智能技术股份有限公司',
    description:
      '成立于1992年，总部位于西安市高新区，是国家级高新技术企业，2014年5月在新三板挂牌。经过近30年的发展，四联智能已成为集清洁能源供热（冷）系统、智慧“五恒”人居系统、机电工程施工总承包三类业务为一体的全寿命周期系统集成商。四联智能拥有西安市集中供热经营许可证、机电工程施工总承包一级等系列资质，是西安市市政供热企业、陕西省地热协会副会长单位、中国地热行业系统集成二十强企业、全国能源环保领军企业，成为国内智慧清洁能源供热（冷）专家，也是国内建筑智能与建筑节能行业的优秀集成商。',
    image: getAssetPath('/company4.png')
  },
  {
    name: '陕西延长石油国际勘探开发工程有限公司',
    description:
      '组建于2009年3月，注册资本10.3亿元，是延长石油集团公司所属的法人独资公司。公司致力于打造海外油气勘探开发和国内清洁能源创新发展，积极布局风能、太阳能、地热能等新能源业务。2020年延长石油集团投资4000万元建成中深层地热能地埋管换热技术试验示范工程，获得国家授权专利8项、发表中外论文10余篇。将数十年积累的油气田开发技术向地热能开发利用领域转换嫁接，形成核心技术和4大服务产品，为用户提供个性化用能解决方案。',
    image: getAssetPath('/company5.jpg')
  },
  {
    name: '陕西西咸新区沣西新城能源发展有限公司',
    description:
      '成立于2014年6月，注册资本金20亿元，是国家增量配电业务改革试点业主单位、国家高新技术企业、陕西省“十三五”节能减排工作先进企业。公司创新应用中深层地热能无干扰清洁供热技术，创新形成以中深层地热能开发利用为主的“地热+”多能互补综合供能模式。发展至今，公司累计推广应用清洁供能面积近3000万平方米，是全国最大的中深层地热地埋管供热技术应用企业。创新技术和“地热+”多能互补模式输出北京、河南等地，先后荣获“中国地热系统集成20强”“新能源科技创新企业50强”和陕西省唯一一家“零碳先锋”企业等荣誉。',
    image: getAssetPath('/company6.png')
  }
]

export function Cooperation() {
  return (
    <section id='cooperation' className='page-section bg-gray-50'>
      <div className='page-shell'>
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
                    <div className='text-gray-700'>{institution}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 成员单位 */}
        <h3 className='text-3xl font-bold text-geothermal-gray mb-8 text-center'>
          中试基地成员单位
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          {memberCompanies.map((company, index) => (
            <motion.div
              key={company.image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <div className='relative h-56 w-full bg-gray-50'>
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-5'>
                <h4 className='text-lg font-semibold text-geothermal-gray mb-2'>
                  {company.name}
                </h4>
                <p
                  className='text-sm text-gray-600 leading-relaxed'
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                  title={company.description}
                >
                  {company.description}
                </p>
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
                      <div className='text-sm text-gray-600'>{feature}</div>
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
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-4xl font-bold text-geothermal-orange mb-2'>
                80+
              </div>
              <div className='text-gray-600'>合作机构</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-geothermal-blue mb-2'>
                10+
              </div>
              <div className='text-gray-600'>合作项目</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-geothermal-green mb-2'>
                15+
              </div>
              <div className='text-gray-600'>联合论文</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-purple-600 mb-2'>20+</div>
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
                  <div>陕西省西安市长安区城南大道18号</div>
                </div>
                <div className='flex items-center space-x-3'>
                  <Phone className='w-5 h-5' />
                  <div>+86-18066967290</div>
                </div>
                <div className='flex items-center space-x-3'>
                  <Mail className='w-5 h-5' />
                  <div>geothermal@nwh.cn</div>
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
