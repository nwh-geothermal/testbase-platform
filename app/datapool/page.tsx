'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Database, ShoppingCart, ShieldCheck, Globe2 } from 'lucide-react'

const dataSets = [
  {
    title: '测井数据',
    desc: '地温梯度、岩性、含水层参数等原始/解释数据集',
    level: '收费',
    price: '¥9,800 起/套',
    highlights: ['深度分段', '高分辨率曲线', '随井编号追溯']
  },
  {
    title: '地热资源评价报告',
    desc: '不同盆地/断陷带的资源潜力、热储参数与勘探建议',
    level: '收费',
    price: '¥6,500 起/份',
    highlights: ['可视化图件', '可研建议', '更新频率：季度']
  },
  {
    title: '生产运行数据',
    desc: '地热井回灌/产出流量、井口温度、能效比等运行指标',
    level: '收费',
    price: '¥4,200 起/月',
    highlights: ['实时监测', '异常预警', 'API 调用']
  },
  {
    title: '行业标准与规范',
    desc: '国家/行业/地方标准全文与条款速查',
    level: '免费',
    price: '免费公开',
    highlights: ['全文检索', '条款对照', '更新同步']
  },
  {
    title: '示范项目案例',
    desc: '供暖、制冷、供电等典型应用案例及关键技术参数',
    level: '免费',
    price: '免费公开',
    highlights: ['方案结构', '设备选型', '性能指标']
  }
]

export default function DataPoolPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      <div className='relative py-20 bg-gradient-to-r from-geothermal-blue to-geothermal-green text-white overflow-hidden'>
        <div className='absolute inset-0 bg-black/25' />
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col items-center gap-3'
          >
            <div>
              <h1 className='text-4xl md:text-5xl font-bold mb-4'>数据共享</h1>
              <p className='text-white/85 text-base md:text-xl'>
                汇聚地热行业数据，支持分级开放与在线采购
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className='flex flex-wrap gap-3 justify-center'
          ></motion.div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className='shadow-2xl border-none min-h-[700px] flex flex-col'>
            <CardHeader className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-center gap-3'>
                <ShoppingCart className='w-5 h-5 text-geothermal-orange' />
                <CardTitle className='text-xl md:text-2xl'>数据产品</CardTitle>
              </div>
            </CardHeader>
            <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-6 flex-1'>
              {dataSets.map((set, idx) => (
                <motion.div
                  key={set.title}
                  className='p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col gap-3 h-full'
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className='flex items-center justify-between'>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {set.title}
                    </h3>
                    <Badge
                      variant='outline'
                      className={
                        set.level === '免费'
                          ? 'border-geothermal-green text-geothermal-green'
                          : 'border-geothermal-orange text-geothermal-orange'
                      }
                    >
                      {set.level}
                    </Badge>
                  </div>
                  <p className='text-sm text-gray-600'>{set.desc}</p>
                  <div className='flex flex-wrap gap-2'>
                    {set.highlights.map((h) => (
                      <Badge key={h} variant='secondary'>
                        {h}
                      </Badge>
                    ))}
                  </div>
                  <div className='flex-1' />
                  <div className='text-sm font-semibold text-geothermal-blue min-h-[20px]'>
                    {set.price !== '免费公开' ? set.price : '\u00A0'}
                  </div>
                  <Button variant={'outline'} className='w-full mt-1'>
                    {set.level === '免费' ? '立即下载' : '立即购买'}
                  </Button>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
