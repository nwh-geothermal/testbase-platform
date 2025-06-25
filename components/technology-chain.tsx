'use client'

import { motion } from 'framer-motion'
import { ArrowRight, FlaskConical, Cpu, Wrench, Rocket } from 'lucide-react'

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

export function TechnologyChain() {
  return (
    <section className='section-padding bg-white'>
      <div className='max-w-7xl mx-auto'>
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

        {/* 技术链条流程图 */}
        <div className='relative'>
          <div className='hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-geothermal-blue via-geothermal-green to-geothermal-orange transform -translate-y-1/2' />

          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {technologyStages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='relative'
              >
                <div className='bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-geothermal-orange transition-colors duration-300 relative z-10'>
                  {/* 步骤编号 */}
                  <div className='absolute -top-4 left-8 bg-geothermal-gradient text-white w-8 h-8 rounded-full flex items-center justify-center font-bold'>
                    {index + 1}
                  </div>

                  {/* 图标 */}
                  <div
                    className={`w-16 h-16 ${stage.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  >
                    <stage.icon className='w-8 h-8 text-white' />
                  </div>

                  {/* 标题和描述 */}
                  <h3 className='text-2xl font-bold text-geothermal-gray mb-4 text-center'>
                    {stage.title}
                  </h3>
                  <p className='text-gray-600 mb-6 text-center leading-relaxed'>
                    {stage.description}
                  </p>

                  {/* 成果列表 */}
                  <div className='space-y-2'>
                    {stage.achievements.map((achievement, idx) => (
                      <div key={idx} className='flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-geothermal-orange rounded-full' />
                        <span className='text-sm text-gray-600'>
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 箭头指示器 */}
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

        {/* 数字孪生技术展示 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className='mt-20 bg-gradient-to-r from-geothermal-blue to-geothermal-green rounded-3xl p-8 text-white'
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
              <div className='aspect-video bg-white/20 rounded-xl flex items-center justify-center'>
                <span className='text-2xl font-bold opacity-60'>
                  数字孪生系统演示
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
