'use client'

import React, { useState, useEffect } from 'react'
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
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/lib/auth-hooks'
import { supabase } from '@/lib/supabase'
import { toast } from 'sonner'

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
    title: '地下高效取换热数值模拟',
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
  const { user } = useAuth()
  const [loadingService, setLoadingService] = useState<string | null>(null)
  const [serviceInquiries, setServiceInquiries] = useState<
    Record<string, string>
  >({})
  const [loadingServiceInquiries, setLoadingServiceInquiries] = useState(false)

  // Fetch user's service inquiries with status when component mounts or user changes
  useEffect(() => {
    const fetchServiceInquiries = async () => {
      if (!user) {
        setServiceInquiries({})
        return
      }

      setLoadingServiceInquiries(true)
      try {
        const { data: inquiries, error } = await supabase
          .from('service_inquiry')
          .select('service_id, status')
          .eq('user_id', user.id)

        if (error) {
          console.error('Error fetching service inquiries:', error)
        } else {
          // Create a record mapping service_id to status
          const inquiryMap: Record<string, string> = {}
          inquiries?.forEach((inquiry) => {
            inquiryMap[inquiry.service_id] = inquiry.status
          })
          setServiceInquiries(inquiryMap)
        }
      } catch (error) {
        console.error('Error fetching service inquiries:', error)
      } finally {
        setLoadingServiceInquiries(false)
      }
    }

    fetchServiceInquiries()
  }, [user])

  const handleServiceApplication = async (service: Service) => {
    if (!user) {
      toast.error('请先登录后再申请服务')
      return
    }

    // Check if service has already been applied for
    if (serviceInquiries[service.id]) {
      toast.info('您已经申请过此服务，请勿重复申请')
      return
    }

    setLoadingService(service.id)
    try {
      // First, fetch the user's company information
      const { data: companyData, error: companyError } = await supabase
        .from('company')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (companyError) {
        console.error('Error fetching company data:', companyError)
        toast.error('无法获取企业信息，请确保您已完成企业注册')
        setLoadingService(null)
        return
      }

      if (!companyData) {
        toast.error('未找到企业信息，请先完成企业注册')
        setLoadingService(null)
        return
      }

      // Prepare inquiry data with company information
      const inquiryData = {
        service_id: service.id,
        user_id: user.id,
        company_id: companyData.id, // Include company_id
        company_name: companyData.company_name,
        contact_person: companyData.contact_person,
        contact_email: user.email || companyData.email,
        contact_phone: companyData.phone,
        project_description: `申请服务：${service.title}\n\n企业类型：${
          companyData.company_type
        }\n业务范围：${companyData.business_scope}\n主要产品：${
          companyData.main_products || '暂无'
        }\n技术能力：${companyData.technical_capabilities || '暂无'}`,
        budget_range: '待商议',
        timeline: '待确认',
        special_requirements: `合作意向：${
          companyData.cooperation_interests?.join(', ') || '暂无'
        }\n期望：${companyData.expectations || '暂无'}`,
        status: 'pending',
        priority: 'normal'
      }

      // Submit service inquiry via API
      const response = await fetch('/api/service-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: service.id,
          user_id: user.id,
          inquiry_data: inquiryData
        })
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Error submitting service inquiry:', errorText)
        toast.error('申请提交失败，请稍后重试')
      } else {
        toast.success(
          '申请提交成功！我们会尽快与您联系。您可以稍后在服务清单中查看申请状态。'
        )
        // Add the service to inquiry map with pending status
        setServiceInquiries((prev) => ({ ...prev, [service.id]: 'pending' }))
      }
    } catch (error) {
      console.error('Error submitting service application:', error)
      toast.error('申请提交失败，请稍后重试')
    } finally {
      setLoadingService(null)
    }
  }
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

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        {/* Category Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='mb-16'
        >
          <Card>
            <CardHeader>
              <CardTitle className='text-3xl text-center'>服务体系</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {categories.map((category) => (
                  <Card
                    key={category}
                    className='text-center bg-gradient-to-br from-geothermal-blue/10 to-geothermal-green/10 border-gray-200'
                  >
                    <CardContent className='p-4'>
                      <div className='text-lg font-semibold text-gray-800 mb-1'>
                        {category}
                      </div>
                      <div className='text-sm text-gray-600'>
                        {services.filter((s) => s.category === category).length}{' '}
                        项服务
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <Card className='h-full hover:shadow-xl transition-all duration-300 group'>
                <CardHeader>
                  <div className='flex items-start space-x-4'>
                    <div className='w-16 h-16 bg-gradient-to-br from-white via-emerald-50 to-gray-100 rounded-lg flex items-center justify-center text-emerald-700 shadow-md group-hover:scale-110 transition-transform duration-300 border border-gray-200'>
                      {service.icon}
                    </div>
                    <div className='flex-1'>
                      <Badge
                        variant='secondary'
                        className='mb-2 bg-geothermal-orange/10 text-geothermal-orange hover:bg-geothermal-orange/20'
                      >
                        {service.category}
                      </Badge>
                      <CardTitle className='text-xl leading-tight'>
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className='flex-1 flex flex-col'>
                  <CardDescription className='text-gray-600 mb-6 leading-relaxed'>
                    {service.description}
                  </CardDescription>

                  <div className='space-y-3 flex-1'>
                    <h4 className='text-sm font-semibold text-gray-900'>
                      服务内容：
                    </h4>
                    <div className='space-y-2'>
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className='flex items-center space-x-2'
                        >
                          <div className='w-2 h-2 bg-geothermal-green rounded-full flex-shrink-0'></div>
                          <div className='text-sm text-gray-700'>{feature}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='mt-6 pt-6 border-t'>
                    {(() => {
                      const inquiryStatus = serviceInquiries[service.id]
                      const isLoading = loadingService === service.id
                      const hasInquiry = !!inquiryStatus
                      const isDisabled =
                        hasInquiry || isLoading || loadingServiceInquiries

                      // Determine button text and style based on status
                      let buttonText = '申请'
                      let buttonClass =
                        'bg-gradient-to-r from-geothermal-blue to-geothermal-green hover:shadow-lg'

                      if (isLoading) {
                        buttonText = '提交中...'
                      } else if (
                        inquiryStatus === 'reviewed' ||
                        inquiryStatus === 'responded'
                      ) {
                        buttonText = '已获批'
                        buttonClass =
                          'bg-geothermal-green hover:bg-geothermal-green cursor-not-allowed'
                      } else if (hasInquiry) {
                        buttonText = '已申请'
                        buttonClass =
                          'bg-gray-400 hover:bg-gray-400 cursor-not-allowed'
                      }

                      return (
                        <Button
                          onClick={() => handleServiceApplication(service)}
                          disabled={isDisabled}
                          className={`w-full transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 ${buttonClass}`}
                        >
                          {buttonText}
                        </Button>
                      )
                    })()}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className='mt-16'
        >
          <Card className='bg-gradient-to-r from-geothermal-blue/10 to-geothermal-green/10 border-none'>
            <CardContent className='p-12 text-center'>
              <CardTitle className='text-3xl mb-6'>专业技术咨询</CardTitle>
              <CardDescription className='text-lg max-w-3xl mx-auto mb-8 leading-relaxed text-gray-700'>
                我们的专家团队随时为您提供专业的技术咨询和定制化解决方案。
                无论您处于项目的哪个阶段，我们都能为您提供最适合的技术支持。
              </CardDescription>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  size='lg'
                  className='bg-geothermal-orange hover:bg-geothermal-orange/90 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5'
                >
                  在线咨询
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-2 border-geothermal-blue text-geothermal-blue hover:bg-geothermal-blue hover:text-white transition-all duration-200'
                >
                  预约考察
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
