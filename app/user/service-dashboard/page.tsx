'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuthContext } from '@/components/auth-provider'
import { supabase } from '@/lib/supabase'
import { toast } from 'sonner'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import {
  Calendar,
  FileText,
  CheckCircle,
  Clock,
  Download,
  AlertTriangle,
  Settings
} from 'lucide-react'

// Service mapping from services-list.tsx
const serviceMapping: Record<string, string> = {
  'geological-exploration': '地热能地质勘探',
  'drilling-process': '地热能钻井工艺流程',
  'numerical-simulation': '地下高效取换热数值模拟',
  'multi-energy-system': '地热能多能互补及储换热系统',
  'intelligent-control': '地热能运维智能化调控',
  'rock-soil-testing': '地下岩土物性参数测试实验',
  'thermal-mapping': '地热资源分布制图',
  'system-performance': '地热系统性能监测'
}

interface ServiceInquiry {
  id: string
  created_at: string
  service_id: string
  user_id: string
  company_name: string
  contact_person: string
  contact_email: string
  contact_phone: string
  project_description: string
  budget_range: string
  timeline: string
  special_requirements: string
  status: 'pending' | 'reviewed' | 'responded' | 'closed'
  priority: 'low' | 'normal' | 'high' | 'urgent'
  responded_at?: string
}

interface ExperimentInfo {
  startDate?: string
  preparation: string[]
  status: 'not_started' | 'preparing' | 'in_progress' | 'completed' | 'on_hold'
  results?: string
  dataFiles?: string[]
}

// Mock experiment data - in real app this would come from database
const mockExperimentData: Record<string, ExperimentInfo> = {
  'geological-exploration': {
    startDate: '2024-01-15',
    preparation: [
      '地质钻探设备',
      '现场勘测工具',
      '安全防护装备',
      '地质样本容器'
    ],
    status: 'completed',
    results: '地热资源丰富，温度梯度良好，建议进行深度开发',
    dataFiles: ['地质勘探报告.pdf', '温度测试数据.xlsx', '地层分析图.png']
  },
  'drilling-process': {
    startDate: '2024-02-01',
    preparation: ['钻井机械', '钻头工具', '泥浆材料', '套管材料'],
    status: 'in_progress',
    results: '进行中...',
    dataFiles: ['钻井日志.pdf', '进度报告.docx']
  },
  'numerical-simulation': {
    preparation: ['项目数据资料', '地质参数', '边界条件设定', '计算资源分配'],
    status: 'preparing'
  }
}

export default function ServiceDashboard() {
  const { user, loading } = useAuthContext()
  const [inquiries, setInquiries] = useState<ServiceInquiry[]>([])
  const [dataLoading, setDataLoading] = useState(true)
  const [selectedInquiry, setSelectedInquiry] = useState<ServiceInquiry | null>(
    null
  )

  // Check if user is admin (should redirect admins away from this page)
  const isAdmin =
    user?.user_metadata?.role === 'admin' ||
    user?.app_metadata?.role === 'admin'

  // Helper function to get service title
  const getServiceTitle = (serviceId: string): string => {
    return serviceMapping[serviceId] || serviceId
  }

  useEffect(() => {
    // If auth is still loading, do nothing
    if (loading) return

    // If user is not logged in, redirect to home
    if (!user) {
      window.location.href = '/'
      return
    }

    // If user is admin, redirect to admin panel
    if (isAdmin) {
      window.location.href = '/admin/service-inquiries'
      return
    }

    // If user is regular user, fetch their inquiries
    fetchUserInquiries()
  }, [loading, user, isAdmin])

  const fetchUserInquiries = async () => {
    if (!user) return

    setDataLoading(true)
    try {
      const { data, error } = await supabase
        .from('service_inquiry')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching user inquiries:', error)
        toast.error('获取服务申请失败')
      } else {
        setInquiries(data || [])
      }
    } catch (error) {
      console.error('Error fetching user inquiries:', error)
      toast.error('获取服务申请失败')
    } finally {
      setDataLoading(false)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <Badge
            variant='outline'
            className='text-yellow-600 border-yellow-600'
          >
            <Clock className='w-3 h-3 mr-1' />
            待审核
          </Badge>
        )
      case 'reviewed':
        return (
          <Badge variant='outline' className='text-blue-600 border-blue-600'>
            <CheckCircle className='w-3 h-3 mr-1' />
            已审核
          </Badge>
        )
      case 'responded':
        return (
          <Badge variant='outline' className='text-green-600 border-green-600'>
            <CheckCircle className='w-3 h-3 mr-1' />
            已回复
          </Badge>
        )
      case 'closed':
        return (
          <Badge variant='outline' className='text-gray-600 border-gray-600'>
            <CheckCircle className='w-3 h-3 mr-1' />
            已完成
          </Badge>
        )
      default:
        return <Badge variant='outline'>{status}</Badge>
    }
  }

  const getExperimentStatusBadge = (status: string) => {
    switch (status) {
      case 'not_started':
        return (
          <Badge variant='outline' className='text-gray-600 border-gray-600'>
            未开始
          </Badge>
        )
      case 'preparing':
        return (
          <Badge
            variant='outline'
            className='text-orange-600 border-orange-600'
          >
            准备中
          </Badge>
        )
      case 'in_progress':
        return (
          <Badge variant='outline' className='text-blue-600 border-blue-600'>
            进行中
          </Badge>
        )
      case 'completed':
        return (
          <Badge variant='outline' className='text-green-600 border-green-600'>
            已完成
          </Badge>
        )
      case 'on_hold':
        return (
          <Badge variant='outline' className='text-red-600 border-red-600'>
            暂停
          </Badge>
        )
      default:
        return <Badge variant='outline'>{status}</Badge>
    }
  }

  // Show loading screen while auth is loading or if redirecting
  if (loading || !user || isAdmin) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4'></div>
          <p className='text-gray-600'>加载中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='pt-20 pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='mb-8'
          >
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              服务工作台
            </h1>
            <p className='text-lg text-gray-600'>
              跟踪您的服务申请状态和试验进度
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center justify-between'>
                  <span>我的服务申请</span>
                  <Badge variant='outline'>{inquiries.length} 个申请</Badge>
                </CardTitle>
                <CardDescription>
                  查看您的服务申请状态和试验进度详情
                </CardDescription>
              </CardHeader>
              <CardContent>
                {dataLoading ? (
                  <div className='text-center py-8'>
                    <div className='animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4'></div>
                    <p>加载中...</p>
                  </div>
                ) : inquiries.length === 0 ? (
                  <div className='text-center py-8'>
                    <p className='text-gray-500'>暂无服务申请</p>
                    <p className='text-gray-400 text-sm mt-2'>
                      前往
                      <a
                        href='/services'
                        className='text-geothermal-blue hover:underline'
                      >
                        服务清单
                      </a>
                      申请服务
                    </p>
                  </div>
                ) : (
                  <div className='space-y-4'>
                    {inquiries.map((inquiry) => {
                      const experimentInfo =
                        mockExperimentData[inquiry.service_id]
                      return (
                        <Card
                          key={inquiry.id}
                          className='border border-gray-200'
                        >
                          <CardHeader className='pb-3'>
                            <div className='flex items-start justify-between'>
                              <div>
                                <CardTitle className='text-lg'>
                                  {getServiceTitle(inquiry.service_id)}
                                </CardTitle>
                                <p className='text-sm text-gray-500 mt-1'>
                                  申请时间：
                                  {new Date(
                                    inquiry.created_at
                                  ).toLocaleDateString('zh-CN')}
                                </p>
                              </div>
                              <div className='flex items-center space-x-2'>
                                {getStatusBadge(inquiry.status)}
                                {experimentInfo &&
                                  getExperimentStatusBadge(
                                    experimentInfo.status
                                  )}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <Accordion
                              type='single'
                              collapsible
                              className='w-full'
                            >
                              <AccordionItem value='basic-info'>
                                <AccordionTrigger className='text-sm'>
                                  基本信息
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className='grid grid-cols-2 gap-4 text-sm'>
                                    <div>
                                      <span className='font-medium'>
                                        预算范围：
                                      </span>
                                      <span className='text-gray-600'>
                                        {inquiry.budget_range}
                                      </span>
                                    </div>
                                    <div>
                                      <span className='font-medium'>
                                        时间安排：
                                      </span>
                                      <span className='text-gray-600'>
                                        {inquiry.timeline}
                                      </span>
                                    </div>
                                  </div>
                                  {inquiry.project_description && (
                                    <div className='mt-3'>
                                      <span className='font-medium block mb-1'>
                                        项目描述：
                                      </span>
                                      <p className='text-gray-600 text-sm bg-gray-50 p-2 rounded'>
                                        {inquiry.project_description}
                                      </p>
                                    </div>
                                  )}
                                </AccordionContent>
                              </AccordionItem>

                              {experimentInfo && (
                                <AccordionItem value='experiment-info'>
                                  <AccordionTrigger className='text-sm'>
                                    <div className='flex items-center'>
                                      <Settings className='w-4 h-4 mr-2' />
                                      试验服务详情
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <div className='space-y-4'>
                                      {/* 开始时间 */}
                                      <div className='flex items-center space-x-3'>
                                        <Calendar className='w-4 h-4 text-geothermal-blue' />
                                        <div>
                                          <span className='font-medium'>
                                            开始时间：
                                          </span>
                                          <span className='text-gray-600'>
                                            {experimentInfo.startDate
                                              ? new Date(
                                                  experimentInfo.startDate
                                                ).toLocaleDateString('zh-CN')
                                              : '待安排'}
                                          </span>
                                        </div>
                                      </div>

                                      {/* 需要准备的材料 */}
                                      <div>
                                        <div className='flex items-center space-x-2 mb-2'>
                                          <AlertTriangle className='w-4 h-4 text-orange-500' />
                                          <span className='font-medium'>
                                            需要准备：
                                          </span>
                                        </div>
                                        <div className='grid grid-cols-2 gap-2'>
                                          {experimentInfo.preparation.map(
                                            (item, index) => (
                                              <div
                                                key={index}
                                                className='flex items-center space-x-2 text-sm'
                                              >
                                                <div className='w-2 h-2 bg-geothermal-orange rounded-full'></div>
                                                <span className='text-gray-600'>
                                                  {item}
                                                </span>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>

                                      {/* 试验结果 */}
                                      {experimentInfo.results && (
                                        <div>
                                          <div className='flex items-center space-x-2 mb-2'>
                                            <CheckCircle className='w-4 h-4 text-green-600' />
                                            <span className='font-medium'>
                                              试验结果：
                                            </span>
                                          </div>
                                          <p className='text-gray-600 text-sm bg-green-50 p-3 rounded'>
                                            {experimentInfo.results}
                                          </p>
                                        </div>
                                      )}

                                      {/* 数据申请 */}
                                      {experimentInfo.dataFiles &&
                                        experimentInfo.dataFiles.length > 0 && (
                                          <div>
                                            <div className='flex items-center space-x-2 mb-2'>
                                              <FileText className='w-4 h-4 text-geothermal-blue' />
                                              <span className='font-medium'>
                                                试验数据：
                                              </span>
                                            </div>
                                            <div className='space-y-2'>
                                              {experimentInfo.dataFiles.map(
                                                (file, index) => (
                                                  <div
                                                    key={index}
                                                    className='flex items-center justify-between bg-gray-50 p-2 rounded'
                                                  >
                                                    <span className='text-sm text-gray-700'>
                                                      {file}
                                                    </span>
                                                    <Button
                                                      size='sm'
                                                      variant='outline'
                                                      className='h-6 px-2 text-xs'
                                                    >
                                                      <Download className='w-3 h-3 mr-1' />
                                                      下载
                                                    </Button>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        )}
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              )}
                            </Accordion>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
