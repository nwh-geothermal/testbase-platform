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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { ImageStrip } from '@/components/image-strip'
import { Clock, CheckCircle, XCircle } from 'lucide-react'

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
  service_title?: string // Add service title field
}

export default function ServiceInquiriesAdmin() {
  const { user, loading } = useAuthContext()
  const [inquiries, setInquiries] = useState<ServiceInquiry[]>([])
  const [dataLoading, setDataLoading] = useState(true)
  const [selectedInquiry, setSelectedInquiry] = useState<ServiceInquiry | null>(
    null
  )
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null)

  // Check if user is admin
  const isAdmin =
    user?.user_metadata?.role === 'admin' ||
    user?.app_metadata?.role === 'admin'
  console.log('User is admin:', isAdmin)

  // Helper function to get service title
  const getServiceTitle = (serviceId: string): string => {
    return serviceMapping[serviceId] || serviceId
  }

  useEffect(() => {
    // If auth is still loading, do nothing
    if (loading) return

    // If user is not logged in or not admin, redirect to home
    if (!user || !isAdmin) {
      window.location.href = '/'
      return
    }

    // If user is admin, fetch inquiries
    fetchInquiries()
  }, [loading, user, isAdmin])

  const fetchInquiries = async () => {
    setDataLoading(true)
    try {
      const { data, error } = await supabase
        .from('service_inquiry')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching inquiries:', error)
        toast.error('获取服务申请失败')
      } else {
        setInquiries(data || [])
      }
    } catch (error) {
      console.error('Error fetching inquiries:', error)
      toast.error('获取服务申请失败')
    } finally {
      setDataLoading(false)
    }
  }

  const updateInquiryStatus = async (
    inquiryId: string,
    newStatus: 'reviewed' | 'responded' | 'closed'
  ) => {
    setUpdatingStatus(inquiryId)
    try {
      const { error } = await supabase
        .from('service_inquiry')
        .update({
          status: newStatus,
          responded_at: new Date().toISOString()
        })
        .eq('id', inquiryId)

      if (error) {
        console.error('Error updating inquiry status:', error)
        toast.error('更新状态失败')
      } else {
        const statusText =
          newStatus === 'responded'
            ? '已回复'
            : newStatus === 'closed'
            ? '已关闭'
            : '已审核'
        toast.success(`申请${statusText}`)
        // Update local state
        setInquiries((prev) =>
          prev.map((inquiry) =>
            inquiry.id === inquiryId
              ? { ...inquiry, status: newStatus }
              : inquiry
          )
        )
      }
    } catch (error) {
      console.error('Error updating inquiry status:', error)
      toast.error('更新状态失败')
    } finally {
      setUpdatingStatus(null)
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
            <XCircle className='w-3 h-3 mr-1' />
            已关闭
          </Badge>
        )
      default:
        return <Badge variant='outline'>{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return <Badge variant='destructive'>紧急</Badge>
      case 'high':
        return (
          <Badge variant='destructive' className='bg-orange-500'>
            高优先级
          </Badge>
        )
      case 'normal':
        return <Badge variant='secondary'>普通</Badge>
      case 'low':
        return <Badge variant='outline'>低优先级</Badge>
      default:
        return <Badge variant='outline'>{priority}</Badge>
    }
  }

  // Show loading screen while auth is loading or if redirecting
  if (loading || !user || !isAdmin) {
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
      <div className='pt-20 pb-16 px-3 sm:px-4 lg:px-6'>
        <div className='max-w-[90rem] mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='mb-8'
          >
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              服务申请管理
            </h1>
            <p className='text-lg text-gray-600'>管理和处理所有服务申请</p>
          </motion.div>

          <ImageStrip
            images={['/building1.jpg', '/meeting2.jpg', '/lab2.jpg']}
            className='pb-8'
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center justify-between'>
                  <div>服务申请列表</div>
                  <Badge variant='outline'>{inquiries.length} 个申请</Badge>
                </CardTitle>
                <CardDescription>查看和管理所有服务申请的状态</CardDescription>
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
                  </div>
                ) : (
                  <div className='overflow-x-auto'>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>申请时间</TableHead>
                          <TableHead>服务名称</TableHead>
                          <TableHead>企业名称</TableHead>
                          <TableHead>联系人</TableHead>
                          <TableHead>联系方式</TableHead>
                          <TableHead>状态</TableHead>
                          <TableHead>优先级</TableHead>
                          <TableHead>操作</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {inquiries.map((inquiry) => (
                          <TableRow key={inquiry.id}>
                            <TableCell className='text-sm'>
                              {new Date(inquiry.created_at).toLocaleString(
                                'zh-CN'
                              )}
                            </TableCell>
                            <TableCell className='font-medium'>
                              {getServiceTitle(inquiry.service_id)}
                            </TableCell>
                            <TableCell className='font-medium'>
                              {inquiry.company_name}
                            </TableCell>
                            <TableCell>{inquiry.contact_person}</TableCell>
                            <TableCell className='text-sm'>
                              <div>{inquiry.contact_email}</div>
                              <div className='text-gray-500'>
                                {inquiry.contact_phone}
                              </div>
                            </TableCell>
                            <TableCell>
                              {getStatusBadge(inquiry.status)}
                            </TableCell>
                            <TableCell>
                              {getPriorityBadge(inquiry.priority)}
                            </TableCell>
                            <TableCell>
                              <div className='flex items-center space-x-2'>
                                <Button
                                  size='sm'
                                  variant='outline'
                                  onClick={() => setSelectedInquiry(inquiry)}
                                  className='h-6 px-2 text-xs'
                                >
                                  详情
                                </Button>
                                {inquiry.status === 'pending' && (
                                  <>
                                    <Button
                                      size='sm'
                                      variant='outline'
                                      className='h-6 px-2 text-xs text-blue-600 hover:text-blue-700'
                                      onClick={() =>
                                        updateInquiryStatus(
                                          inquiry.id,
                                          'reviewed'
                                        )
                                      }
                                      disabled={updatingStatus === inquiry.id}
                                    >
                                      审核
                                    </Button>
                                    <Button
                                      size='sm'
                                      variant='outline'
                                      className='h-6 px-2 text-xs text-green-600 hover:text-green-700'
                                      onClick={() =>
                                        updateInquiryStatus(
                                          inquiry.id,
                                          'responded'
                                        )
                                      }
                                      disabled={updatingStatus === inquiry.id}
                                    >
                                      回复
                                    </Button>
                                    <Button
                                      size='sm'
                                      variant='outline'
                                      className='h-6 px-2 text-xs text-gray-600 hover:text-gray-700'
                                      onClick={() =>
                                        updateInquiryStatus(
                                          inquiry.id,
                                          'closed'
                                        )
                                      }
                                      disabled={updatingStatus === inquiry.id}
                                    >
                                      关闭
                                    </Button>
                                  </>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Inquiry Detail Modal */}
          {selectedInquiry && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'
              onClick={() => setSelectedInquiry(null)}
            >
              <Card
                className='max-w-2xl w-full max-h-[80vh] overflow-y-auto'
                onClick={(e) => e.stopPropagation()}
              >
                <CardHeader>
                  <CardTitle className='flex items-center justify-between'>
                    申请详情
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => setSelectedInquiry(null)}
                    >
                      关闭
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <strong>申请时间:</strong>
                      <p>
                        {new Date(selectedInquiry.created_at).toLocaleString(
                          'zh-CN'
                        )}
                      </p>
                    </div>
                    <div>
                      <strong>服务名称:</strong>
                      <p>{getServiceTitle(selectedInquiry.service_id)}</p>
                    </div>
                    <div>
                      <strong>企业名称:</strong>
                      <p>{selectedInquiry.company_name}</p>
                    </div>
                    <div>
                      <strong>联系人:</strong>
                      <p>{selectedInquiry.contact_person}</p>
                    </div>
                    <div>
                      <strong>邮箱:</strong>
                      <p>{selectedInquiry.contact_email}</p>
                    </div>
                    <div>
                      <strong>电话:</strong>
                      <p>{selectedInquiry.contact_phone}</p>
                    </div>
                    <div>
                      <strong>状态:</strong>
                      <p>{getStatusBadge(selectedInquiry.status)}</p>
                    </div>
                    <div>
                      <strong>优先级:</strong>
                      <p>{getPriorityBadge(selectedInquiry.priority)}</p>
                    </div>
                  </div>

                  <div>
                    <strong>项目描述:</strong>
                    <p className='mt-1 p-3 bg-gray-50 rounded-md whitespace-pre-wrap'>
                      {selectedInquiry.project_description}
                    </p>
                  </div>

                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <strong>预算范围:</strong>
                      <p>{selectedInquiry.budget_range}</p>
                    </div>
                    <div>
                      <strong>时间安排:</strong>
                      <p>{selectedInquiry.timeline}</p>
                    </div>
                  </div>

                  <div>
                    <strong>特殊要求:</strong>
                    <p className='mt-1 p-3 bg-gray-50 rounded-md whitespace-pre-wrap'>
                      {selectedInquiry.special_requirements}
                    </p>
                  </div>

                  {selectedInquiry.status === 'pending' && (
                    <div className='flex space-x-3 pt-4 border-t'>
                      <Button
                        size='sm'
                        variant='outline'
                        className='h-6 px-2 text-xs text-blue-600 hover:text-blue-700'
                        onClick={() =>
                          updateInquiryStatus(selectedInquiry.id, 'reviewed')
                        }
                        disabled={updatingStatus === selectedInquiry.id}
                      >
                        审核
                      </Button>
                      <Button
                        size='sm'
                        variant='outline'
                        className='h-6 px-2 text-xs text-green-600 hover:text-green-700'
                        onClick={() =>
                          updateInquiryStatus(selectedInquiry.id, 'responded')
                        }
                        disabled={updatingStatus === selectedInquiry.id}
                      >
                        回复
                      </Button>
                      <Button
                        size='sm'
                        variant='outline'
                        className='h-6 px-2 text-xs text-gray-600 hover:text-gray-700'
                        onClick={() =>
                          updateInquiryStatus(selectedInquiry.id, 'closed')
                        }
                        disabled={updatingStatus === selectedInquiry.id}
                      >
                        关闭
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
