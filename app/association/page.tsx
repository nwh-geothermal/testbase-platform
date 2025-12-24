'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Building2,
  Globe2,
  Handshake,
  Megaphone,
  ShieldCheck,
  Users
} from 'lucide-react'

const functions = [
  {
    title: '行业协调',
    desc: '促进会员单位协同发展，搭建政产学研用交流机制。',
    icon: Handshake
  },
  {
    title: '标准与规范',
    desc: '推动行业标准化建设，促进技术规范与评价体系落地。',
    icon: ShieldCheck
  },
  {
    title: '政策服务',
    desc: '对接政策与项目资源，助力行业高质量发展。',
    icon: Megaphone
  },
  {
    title: '人才与培训',
    desc: '开展专业培训与交流活动，建设人才成长通道。',
    icon: Users
  }
]

const services = [
  {
    label: '技术交流与沙龙',
    detail: '主题论坛、产业对接会、项目路演与成果发布。'
  },
  {
    label: '会员服务支持',
    detail: '政策解读、市场信息、专家咨询与资源对接。'
  },
  {
    label: '品牌与传播',
    detail: '行业案例传播与协会媒体矩阵宣传。'
  }
]

const initiatives = [
  '地热能示范项目与应用场景推广',
  '地热能装备与材料技术评价',
  '行业数据平台与资源共享',
  '产学研联合创新与成果转化'
]

export default function AssociationPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-amber-50'>
      <div className='relative py-20 overflow-hidden'>
        <div
          className='absolute inset-0 opacity-90'
          style={{
            background:
              'radial-gradient(circle at 15% 25%, rgba(255, 255, 255, 0.35), transparent 32%), radial-gradient(circle at 80% 10%, rgba(255, 182, 116, 0.35), transparent 28%), linear-gradient(135deg, #f8fafc, #fff7ed 45%, #fde68a)'
          }}
        ></div>
        <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'
          >
            地热协会
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'
          >
            陕西省地热协会聚焦地热能产业协同发展，推动技术创新、标准建设与行业服务。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'
          >
            <Button
              asChild
              className='bg-geothermal-blue hover:bg-geothermal-blue/90'
            >
              <Link
                href='http://www.sxsdrxh.com/'
                target='_blank'
                rel='noreferrer'
              >
                访问官方网站
              </Link>
            </Button>
            <Button variant='outline' asChild>
              <Link href='#contact'>联系协会</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='grid grid-cols-1 lg:grid-cols-3 gap-6'
        >
          <Card className='shadow-lg border-0'>
            <CardHeader className='flex flex-row items-center gap-3'>
              <div className='w-10 h-10 rounded-2xl bg-geothermal-orange/10 flex items-center justify-center'>
                <Building2 className='w-5 h-5 text-geothermal-orange' />
              </div>
              <CardTitle className='text-xl'>协会定位</CardTitle>
            </CardHeader>
            <CardContent className='text-gray-600 leading-relaxed'>
              聚焦陕西省地热能产业链，链接政企学研资源，构建区域协同发展的行业服务枢纽。
            </CardContent>
          </Card>
          <Card className='shadow-lg border-0'>
            <CardHeader className='flex flex-row items-center gap-3'>
              <div className='w-10 h-10 rounded-2xl bg-geothermal-blue/10 flex items-center justify-center'>
                <Globe2 className='w-5 h-5 text-geothermal-blue' />
              </div>
              <CardTitle className='text-xl'>发展愿景</CardTitle>
            </CardHeader>
            <CardContent className='text-gray-600 leading-relaxed'>
              打造全国领先的地热能行业组织，推动清洁能源产业持续创新与规模化应用。
            </CardContent>
          </Card>
          <Card className='shadow-lg border-0'>
            <CardHeader className='flex flex-row items-center gap-3'>
              <div className='w-10 h-10 rounded-2xl bg-geothermal-green/10 flex items-center justify-center'>
                <Users className='w-5 h-5 text-geothermal-green' />
              </div>
              <CardTitle className='text-xl'>会员生态</CardTitle>
            </CardHeader>
            <CardContent className='text-gray-600 leading-relaxed'>
              汇聚科研机构、能源企业、服务机构与装备厂商，共建开放协作的行业共同体。
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className='text-center mb-10'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
              核心职能
            </h2>
            <p className='text-gray-600 mt-3'>
              围绕技术、资源与产业生态，提供系统性行业服务。
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {functions.map((item) => (
              <Card key={item.title} className='border-0 shadow-xl'>
                <CardContent className='p-6 flex flex-col gap-4'>
                  <div className='w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center'>
                    <item.icon className='w-6 h-6 text-geothermal-orange' />
                  </div>
                  <div className='text-lg font-semibold text-gray-900'>
                    {item.title}
                  </div>
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-8'
        >
          <Card className='border-0 shadow-2xl'>
            <CardHeader>
              <CardTitle className='text-2xl'>会员服务</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              {services.map((service) => (
                <div key={service.label} className='space-y-2'>
                  <div className='font-semibold text-gray-900'>
                    {service.label}
                  </div>
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    {service.detail}
                  </p>
                  <Separator />
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className='border-0 shadow-2xl bg-gradient-to-br from-white to-orange-50'>
            <CardHeader>
              <CardTitle className='text-2xl'>重点工作</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              {initiatives.map((item) => (
                <div key={item} className='flex items-start gap-3'>
                  <div className='w-2 h-2 mt-2 rounded-full bg-geothermal-orange' />
                  <p className='text-sm text-gray-700 leading-relaxed'>
                    {item}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          id='contact'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className='border-0 shadow-lg'>
            <CardHeader>
              <CardTitle className='text-2xl'>联系我们</CardTitle>
            </CardHeader>
            <CardContent className='space-y-3 text-gray-600'>
              <div>陕西省地热协会</div>
              <div>地址：陕西省西安市（以官网信息为准）</div>
              <div>邮箱：geothermal-base@nwh.cn</div>
              <div>官网：www.sxsdrxh.com</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
