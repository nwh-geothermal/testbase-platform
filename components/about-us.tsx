'use client'

import React from 'react'
import { motion } from 'framer-motion'
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
            关于我们
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
            className='bg-white rounded-3xl shadow-2xl overflow-hidden'
          >
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              {/* Image Section */}
              <div className='h-64 lg:h-auto bg-gradient-to-br from-geothermal-blue to-geothermal-green flex items-center justify-center'>
                <div className='text-center text-white p-8'>
                  <Building className='w-24 h-24 mb-4 mx-auto opacity-75' />
                  <h3 className='text-2xl font-bold mb-2'>
                    陕西省地热能开发利用技术中试基地
                  </h3>
                  <p className='text-lg opacity-90'>Technology Pilot Base</p>
                </div>
              </div>

              {/* Content Section */}
              <div className='p-8 lg:p-12'>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                  陕西省地热能开发利用技术中试基地
                </h2>

                <p className='text-gray-600 text-lg leading-relaxed mb-8'>
                  陕西省地热能开发利用技术中试基地是国内首个集技术研发、产品试制、工艺改进、智慧运维、投资评价和成果展示于一体的地热能全产业链技术集成与推广基地。基地依托先进的技术平台和专业团队，致力于推动地热能技术的创新发展和产业化应用。
                </p>

                <div className='grid grid-cols-2 gap-6 mb-8'>
                  <div className='flex items-center space-x-3'>
                    <MapPin className='w-6 h-6 text-geothermal-orange' />
                    <div>
                      <div className='font-semibold text-gray-900'>
                        地理位置
                      </div>
                      <div className='text-gray-600'>陕西省西安市</div>
                    </div>
                  </div>

                  <div className='flex items-center space-x-3'>
                    <Calendar className='w-6 h-6 text-geothermal-blue' />
                    <div>
                      <div className='font-semibold text-gray-900'>
                        成立时间
                      </div>
                      <div className='text-gray-600'>2023年</div>
                    </div>
                  </div>

                  <div className='flex items-center space-x-3'>
                    <Users className='w-6 h-6 text-geothermal-green' />
                    <div>
                      <div className='font-semibold text-gray-900'>
                        专业团队
                      </div>
                      <div className='text-gray-600'>50+ 专家学者</div>
                    </div>
                  </div>

                  <div className='flex items-center space-x-3'>
                    <Award className='w-6 h-6 text-geothermal-orange' />
                    <div>
                      <div className='font-semibold text-gray-900'>
                        技术专利
                      </div>
                      <div className='text-gray-600'>100+ 项</div>
                    </div>
                  </div>
                </div>

                <div className='bg-gradient-to-r from-geothermal-orange/10 to-geothermal-blue/10 rounded-xl p-6'>
                  <h4 className='font-semibold text-gray-900 mb-3'>核心使命</h4>
                  <p className='text-gray-700'>
                    构建地热能技术创新生态系统，推动产学研深度融合，加速地热能技术成果转化，为实现碳达峰碳中和目标贡献力量。
                  </p>
                </div>
              </div>
            </div>
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
            className='bg-white rounded-3xl shadow-2xl overflow-hidden'
          >
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              {/* Content Section */}
              <div className='p-8 lg:p-12 order-2 lg:order-1'>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                  中国电建西北勘测设计研究院有限公司
                </h2>

                <p className='text-gray-600 text-lg leading-relaxed mb-8'>
                  中国电建西北勘测设计研究院有限公司是中国电力建设集团有限公司的全资子公司，成立于1950年，是国内最早从事水利水电工程勘测设计的专业机构之一。公司具有工程勘察综合甲级、工程设计综合甲级、工程咨询甲级、工程监理甲级等资质。
                </p>

                <div className='space-y-6 mb-8'>
                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-geothermal-blue rounded-lg flex items-center justify-center flex-shrink-0'>
                      <Target className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-2'>
                        专业领域
                      </h4>
                      <p className='text-gray-600'>
                        水利水电、新能源、地热能开发、工程咨询、环境保护等多个领域
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-geothermal-green rounded-lg flex items-center justify-center flex-shrink-0'>
                      <Lightbulb className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-2'>
                        技术实力
                      </h4>
                      <p className='text-gray-600'>
                        拥有国家级技术中心、博士后科研工作站，技术实力雄厚
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-geothermal-orange rounded-lg flex items-center justify-center flex-shrink-0'>
                      <Globe className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-2'>
                        国际业务
                      </h4>
                      <p className='text-gray-600'>
                        业务遍及亚洲、非洲、南美洲等多个国家和地区
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-gradient-to-r from-geothermal-blue/10 to-geothermal-green/10 rounded-xl p-6'>
                  <h4 className='font-semibold text-gray-900 mb-3'>企业愿景</h4>
                  <p className='text-gray-700'>
                    成为国际一流的工程技术服务商，为全球客户提供优质的工程技术解决方案。
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className='h-64 lg:h-auto bg-gradient-to-br from-geothermal-orange to-geothermal-blue flex items-center justify-center order-1 lg:order-2'>
                <div className='text-center text-white p-8'>
                  <Shield className='w-24 h-24 mb-4 mx-auto opacity-75' />
                  <h3 className='text-xl font-bold mb-2'>中国电建西北院</h3>
                  <p className='text-lg opacity-90'>PowerChina Northwest</p>
                  <p className='text-sm opacity-75 mt-2'>成立于1950年</p>
                </div>
              </div>
            </div>
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
            <motion.div
              variants={fadeInUp}
              className='bg-white rounded-2xl shadow-xl p-8 text-center'
            >
              <div className='w-16 h-16 bg-geothermal-orange rounded-full flex items-center justify-center mx-auto mb-4'>
                <Calendar className='w-8 h-8 text-white' />
              </div>
              <div className='text-3xl font-bold text-gray-900 mb-2'>70+</div>
              <div className='text-gray-600'>年发展历程</div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className='bg-white rounded-2xl shadow-xl p-8 text-center'
            >
              <div className='w-16 h-16 bg-geothermal-blue rounded-full flex items-center justify-center mx-auto mb-4'>
                <Users className='w-8 h-8 text-white' />
              </div>
              <div className='text-3xl font-bold text-gray-900 mb-2'>3000+</div>
              <div className='text-gray-600'>专业人才</div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className='bg-white rounded-2xl shadow-xl p-8 text-center'
            >
              <div className='w-16 h-16 bg-geothermal-green rounded-full flex items-center justify-center mx-auto mb-4'>
                <TrendingUp className='w-8 h-8 text-white' />
              </div>
              <div className='text-3xl font-bold text-gray-900 mb-2'>1000+</div>
              <div className='text-gray-600'>完成项目</div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className='bg-white rounded-2xl shadow-xl p-8 text-center'
            >
              <div className='w-16 h-16 bg-gradient-to-r from-geothermal-orange to-geothermal-blue rounded-full flex items-center justify-center mx-auto mb-4'>
                <Star className='w-8 h-8 text-white' />
              </div>
              <div className='text-3xl font-bold text-gray-900 mb-2'>AAA</div>
              <div className='text-gray-600'>信用等级</div>
            </motion.div>
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
            className='bg-gradient-to-br from-geothermal-blue to-geothermal-green rounded-3xl p-12 text-white text-center'
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-8'>核心价值观</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='space-y-4'>
                <Zap className='w-12 h-12 mx-auto opacity-90' />
                <h3 className='text-xl font-semibold'>创新驱动</h3>
                <p className='opacity-90'>持续技术创新，引领行业发展</p>
              </div>

              <div className='space-y-4'>
                <Shield className='w-12 h-12 mx-auto opacity-90' />
                <h3 className='text-xl font-semibold'>品质至上</h3>
                <p className='opacity-90'>严格质量标准，追求卓越品质</p>
              </div>

              <div className='space-y-4'>
                <Globe className='w-12 h-12 mx-auto opacity-90' />
                <h3 className='text-xl font-semibold'>绿色发展</h3>
                <p className='opacity-90'>推动绿色能源，建设美好未来</p>
              </div>
            </div>
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
            className='bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-center'
          >
            <h2 className='text-3xl font-bold text-gray-900 text-center mb-8'>
              联系我们
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='mr-12'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                  陕西省地热能开发利用技术中试基地
                </h3>
                <div className='space-y-3 text-gray-600'>
                  <div className='flex items-center space-x-3'>
                    <MapPin className='w-5 h-5 text-geothermal-orange' />
                    <span>陕西省西安市</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Building className='w-5 h-5 text-geothermal-blue' />
                    <span>地热能技术中试基地</span>
                  </div>
                </div>
              </div>

              <div className='ml-12'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                  中国电建西北勘测设计研究院有限公司
                </h3>
                <div className='space-y-3 text-gray-600'>
                  <div className='flex items-center space-x-3'>
                    <MapPin className='w-5 h-5 text-geothermal-orange' />
                    <span>陕西省西安市</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Globe className='w-5 h-5 text-geothermal-green' />
                    <span>www.nwh.com.cn</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
