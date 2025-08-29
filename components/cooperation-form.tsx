'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Building,
  User,
  Phone,
  Mail,
  MessageSquare,
  Briefcase,
  Users,
  Home,
  CheckCircle
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { getAssetPath } from '@/lib/utils'

interface FormData {
  name: string
  company: string
  department: string
  title: string
  phone: string
  email: string
  cooperationInterest: string
  message: string
}

const cooperationOptions = [
  '技术研发合作',
  '产品试制合作',
  '工艺改进合作',
  '人才培养合作',
  '标准制定合作',
  '国际合作项目',
  '示范项目合作',
  '投资评价合作',
  '其他合作'
]

export function CooperationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    department: '',
    title: '',
    phone: '',
    email: '',
    cooperationInterest: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          company: '',
          department: '',
          title: '',
          phone: '',
          email: '',
          cooperationInterest: '',
          message: ''
        })
      }, 3000)
    }, 2000)
  }

  const isFormValid =
    formData.name &&
    formData.company &&
    formData.email &&
    formData.cooperationInterest

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
            产学研合作
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            携手共建地热能技术创新生态，推动产业化发展与技术转化
          </motion.p>
        </div>
      </section>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Column - Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">合作优势</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-geothermal-orange rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Building className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      技术平台
                    </h3>
                    <p className='text-gray-600'>
                      拥有完整的地热能技术研发平台，从基础研究到产业化应用的全链条技术支撑
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-geothermal-blue rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Users className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      专家团队
                    </h3>
                    <p className='text-gray-600'>
                      汇聚国内外顶尖地热能专家，提供专业的技术指导和咨询服务
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-geothermal-green rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Briefcase className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      产业化经验
                    </h3>
                    <p className='text-gray-600'>
                      丰富的产业化实践经验，助力技术成果快速转化为市场竞争力
                    </p>
                  </div>
                </div>

                <Card className='bg-gradient-to-br from-geothermal-blue to-geothermal-green border-none'>
                  <CardContent className='p-6'>
                    <div className='grid grid-cols-2 gap-4 text-white'>
                      <div className='text-center'>
                        <div className='text-2xl font-bold'>20+</div>
                        <div className='text-sm opacity-90'>合作院校</div>
                      </div>
                      <div className='text-center'>
                        <div className='text-2xl font-bold'>50+</div>
                        <div className='text-sm opacity-90'>合作企业</div>
                      </div>
                      <div className='text-center'>
                        <div className='text-2xl font-bold'>100+</div>
                        <div className='text-sm opacity-90'>专利成果</div>
                      </div>
                      <div className='text-center'>
                        <div className='text-2xl font-bold'>200+</div>
                        <div className='text-sm opacity-90'>培养人才</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">意向交流</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='text-center py-12'
                  >
                    <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <CheckCircle className='w-8 h-8 text-green-600' />
                    </div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      提交成功！
                    </h3>
                    <p className='text-gray-600'>我们将在24小时内与您取得联系</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className="space-y-2">
                        <Label htmlFor='name'>
                          <User className='w-4 h-4 inline mr-2' />
                          姓名 *
                        </Label>
                        <Input
                          id='name'
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder='请输入您的姓名'
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor='title'>
                          <Briefcase className='w-4 h-4 inline mr-2' />
                          职务
                        </Label>
                        <Input
                          id='title'
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          placeholder='请输入您的职务'
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor='company'>
                        <Building className='w-4 h-4 inline mr-2' />
                        公司/机构名称 *
                      </Label>
                      <Input
                        id='company'
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder='请输入公司或机构名称'
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor='department'>
                        <Users className='w-4 h-4 inline mr-2' />
                        部门
                      </Label>
                      <Input
                        id='department'
                        value={formData.department}
                        onChange={(e) => handleInputChange('department', e.target.value)}
                        placeholder='请输入所在部门'
                      />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className="space-y-2">
                        <Label htmlFor='phone'>
                          <Phone className='w-4 h-4 inline mr-2' />
                          联系电话
                        </Label>
                        <Input
                          id='phone'
                          type='tel'
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder='请输入联系电话'
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor='email'>
                          <Mail className='w-4 h-4 inline mr-2' />
                          邮箱 *
                        </Label>
                        <Input
                          id='email'
                          type='email'
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder='请输入邮箱地址'
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor='cooperationInterest'>
                        <MessageSquare className='w-4 h-4 inline mr-2' />
                        合作意向 *
                      </Label>
                      <Select value={formData.cooperationInterest} onValueChange={(value) => handleInputChange('cooperationInterest', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="请选择合作意向" />
                        </SelectTrigger>
                        <SelectContent>
                          {cooperationOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor='message'>
                        <MessageSquare className='w-4 h-4 inline mr-2' />
                        详细信息
                      </Label>
                      <Textarea
                        id='message'
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={4}
                        placeholder='请详细描述您的合作需求和期望...'
                      />
                    </div>

                    <Button
                      type='submit'
                      disabled={!isFormValid || isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2' />
                          <span>提交中...</span>
                        </>
                      ) : (
                        <>
                          <Send className='w-5 h-5 mr-2' />
                          <span>提交</span>
                        </>
                      )}
                    </Button>

                    <p className='text-sm text-gray-500 text-center'>
                      提交后我们将在24小时内与您联系
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}