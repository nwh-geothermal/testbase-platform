'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  Globe,
  Calendar,
  Lock,
  Eye,
  EyeOff,
  CheckCircle
} from 'lucide-react'
import { useAuth } from '@/lib/auth-hooks'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from 'sonner'

interface CompanyFormData {
  companyName: string
  companyType: string
  establishedYear: string
  registeredCapital: string
  employees: string
  contactPerson: string
  position: string
  phone: string
  email: string
  password: string
  confirmPassword: string
  address: string
  website: string
  businessScope: string
  mainProducts: string
  technicalCapabilities: string
  cooperationInterests: string[]
  certifications: string
  annualRevenue: string
  previousProjects: string
  expectations: string
}

const companyTypes = [
  '国有企业',
  '民营企业',
  '外资企业',
  '合资企业',
  '科技企业',
  '高新技术企业',
  '上市公司',
  '集团公司',
  '其他'
]

const employeeRanges = [
  '1-50人',
  '51-200人',
  '201-500人',
  '501-1000人',
  '1000-5000人',
  '5000人以上'
]

const revenueRanges = [
  '1000万以下',
  '1000万-5000万',
  '5000万-1亿',
  '1亿-5亿',
  '5亿-10亿',
  '10亿以上'
]

const cooperationOptions = [
  '技术研发合作',
  '产品试制合作',
  '工艺改进合作',
  '人才培养合作',
  '标准制定合作',
  '检验检测服务',
  '投资评价咨询',
  '示范项目合作',
  '国际合作项目',
  '知识产权合作'
]

export function JoinForm() {
  const { signUp } = useAuth()

  const [formData, setFormData] = useState<CompanyFormData>({
    companyName: '',
    companyType: '',
    establishedYear: '',
    registeredCapital: '',
    employees: '',
    contactPerson: '',
    position: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    website: '',
    businessScope: '',
    mainProducts: '',
    technicalCapabilities: '',
    cooperationInterests: [],
    certifications: '',
    annualRevenue: '',
    previousProjects: '',
    expectations: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (field: keyof CompanyFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCheckboxChange = (option: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      cooperationInterests: checked
        ? [...prev.cooperationInterests, option]
        : prev.cooperationInterests.filter((item) => item !== option)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError('密码不匹配，请重新输入')
      setIsSubmitting(false)
      return
    }

    // Validate password strength
    if (formData.password.length < 6) {
      setError('密码至少需要6位字符')
      setIsSubmitting(false)
      return
    }

    try {
      // Register user with Supabase Auth
      const { data: authData, error: authError } = await signUp(
        formData.email,
        formData.password,
        {
          companyName: formData.companyName,
          contactPerson: formData.contactPerson,
          phone: formData.phone,
          companyType: formData.companyType,
          businessScope: formData.businessScope
        }
      )

      if (authError) {
        setError(authError.message)
        setIsSubmitting(false)
        return
      }

      // If signup successful, save company data directly to database
      if (authData.user) {
        try {
          // Use a service role approach or direct insert with user context
          const { error: dbError } = await supabase.from('company').insert({
            user_id: authData.user.id,
            company_name: formData.companyName,
            company_type: formData.companyType,
            established_year: formData.establishedYear,
            registered_capital: formData.registeredCapital,
            employees: formData.employees,
            contact_person: formData.contactPerson,
            position: formData.position,
            phone: formData.phone,
            email: formData.email,
            address: formData.address,
            website: formData.website,
            business_scope: formData.businessScope,
            main_products: formData.mainProducts,
            technical_capabilities: formData.technicalCapabilities,
            cooperation_interests: formData.cooperationInterests,
            certifications: formData.certifications,
            annual_revenue: formData.annualRevenue,
            previous_projects: formData.previousProjects,
            expectations: formData.expectations,
            status: 'pending'
          })

          if (dbError) {
            console.error('Error saving company data:', dbError)
            // Show a toast instead of setting form error for better UX
            toast.error(
              '用户注册成功！企业信息保存失败，请登录后在个人中心完善企业信息。'
            )
            setIsSubmitting(false)
            return
          }
        } catch (insertError) {
          console.error('Error during company data insertion:', insertError)
          toast.error(
            '用户注册成功！企业信息保存失败，请登录后在个人中心完善企业信息。'
          )
          setIsSubmitting(false)
          return
        }
      }

      // Show success toast and message
      toast.success('注册成功！欢迎加入地热能技术中试基地！')
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          companyName: '',
          companyType: '',
          establishedYear: '',
          registeredCapital: '',
          employees: '',
          contactPerson: '',
          position: '',
          phone: '',
          email: '',
          password: '',
          confirmPassword: '',
          address: '',
          website: '',
          businessScope: '',
          mainProducts: '',
          technicalCapabilities: '',
          cooperationInterests: [],
          certifications: '',
          annualRevenue: '',
          previousProjects: '',
          expectations: ''
        })
      }, 3000)
    } catch (err) {
      toast.error('注册失败，请稍后重试')
      setIsSubmitting(false)
    }
  }

  const isFormValid =
    formData.companyName &&
    formData.companyType &&
    formData.contactPerson &&
    formData.email &&
    formData.password &&
    formData.confirmPassword &&
    formData.phone &&
    formData.businessScope

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'>
      {/* Header */}
      <div className='relative py-20 overflow-hidden mb-12'>
        <div
          className='absolute inset-0 opacity-90'
          style={{
            background:
              'radial-gradient(circle at 20% 25%, rgba(255, 255, 255, 0.35), transparent 32%), radial-gradient(circle at 80% 10%, rgba(255, 182, 116, 0.35), transparent 28%), linear-gradient(135deg, #f8fafc, #e0f2fe 45%, #fde68a)'
          }}
        ></div>
        <div className='relative z-10 max-w-[90rem] mx-auto px-3 sm:px-4 lg:px-6 text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'
          >
            加入平台
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            欢迎优秀企业加入陕西省地热能开发利用技术中试基地平台，共同推动地热能产业发展
          </motion.p>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 pb-20'>
        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className='text-3xl'>企业注册</CardTitle>
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
                    注册成功！
                  </h3>
                  <p className='text-gray-600'>
                    您的账户已成功创建，我们将在3个工作日内审核您的企业信息并与您联系，请保持电话畅通。
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-8'>
                  {/* Basic Company Information */}
                  <div className='space-y-6'>
                    <h3 className='text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2'>
                      基本信息
                    </h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <Label htmlFor='companyName'>企业名称 *</Label>
                        <div className='relative'>
                          <Building className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
                          <Input
                            id='companyName'
                            value={formData.companyName}
                            onChange={(e) =>
                              handleInputChange('companyName', e.target.value)
                            }
                            className='pl-10'
                            placeholder='请输入企业全称'
                            required
                          />
                        </div>
                      </div>

                      <div className='space-y-2'>
                        <Label htmlFor='companyType'>企业类型 *</Label>
                        <Select
                          value={formData.companyType}
                          onValueChange={(value) =>
                            handleInputChange('companyType', value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder='请选择企业类型' />
                          </SelectTrigger>
                          <SelectContent>
                            {companyTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                      <div className='space-y-2'>
                        <Label htmlFor='establishedYear'>成立年份</Label>
                        <div className='relative'>
                          <Calendar className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
                          <Input
                            id='establishedYear'
                            value={formData.establishedYear}
                            onChange={(e) =>
                              handleInputChange(
                                'establishedYear',
                                e.target.value
                              )
                            }
                            className='pl-10'
                            placeholder='如：2010'
                          />
                        </div>
                      </div>

                      <div className='space-y-2'>
                        <Label htmlFor='registeredCapital'>
                          注册资本(万元)
                        </Label>
                        <Input
                          id='registeredCapital'
                          value={formData.registeredCapital}
                          onChange={(e) =>
                            handleInputChange(
                              'registeredCapital',
                              e.target.value
                            )
                          }
                          placeholder='如：1000'
                        />
                      </div>

                      <div className='space-y-2'>
                        <Label htmlFor='employees'>员工规模</Label>
                        <Select
                          value={formData.employees}
                          onValueChange={(value) =>
                            handleInputChange('employees', value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder='请选择' />
                          </SelectTrigger>
                          <SelectContent>
                            {employeeRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className='space-y-6'>
                    <h3 className='text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2'>
                      联系信息
                    </h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <Label htmlFor='contactPerson'>联系人姓名 *</Label>
                        <div className='relative'>
                          <User className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
                          <Input
                            id='contactPerson'
                            value={formData.contactPerson}
                            onChange={(e) =>
                              handleInputChange('contactPerson', e.target.value)
                            }
                            className='pl-10'
                            placeholder='请输入联系人姓名'
                            required
                          />
                        </div>
                      </div>

                      <div className='space-y-2'>
                        <Label htmlFor='position'>职务</Label>
                        <Input
                          id='position'
                          value={formData.position}
                          onChange={(e) =>
                            handleInputChange('position', e.target.value)
                          }
                          placeholder='如：总经理、技术总监'
                        />
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <Label htmlFor='phone'>联系电话 *</Label>
                        <div className='relative'>
                          <Phone className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
                          <Input
                            id='phone'
                            type='tel'
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange('phone', e.target.value)
                            }
                            className='pl-10'
                            placeholder='请输入手机号码'
                            required
                          />
                        </div>
                      </div>

                      <div className='space-y-2'>
                        <Label htmlFor='email'>邮箱地址 *</Label>
                        <div className='relative'>
                          <Mail className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
                          <Input
                            id='email'
                            type='email'
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange('email', e.target.value)
                            }
                            className='pl-10'
                            placeholder='请输入邮箱地址'
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Password Fields */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <Label htmlFor='password'>密码 *</Label>
                        <div className='relative'>
                          <Lock className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
                          <Input
                            id='password'
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={(e) =>
                              handleInputChange('password', e.target.value)
                            }
                            className='pl-10 pr-10'
                            placeholder='请输入密码（至少6位）'
                            required
                          />
                          <Button
                            type='button'
                            variant='ghost'
                            size='sm'
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-1 top-1 h-8 w-8 p-0'
                          >
                            {showPassword ? (
                              <EyeOff className='w-4 h-4' />
                            ) : (
                              <Eye className='w-4 h-4' />
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className='space-y-2'>
                        <Label htmlFor='confirmPassword'>确认密码 *</Label>
                        <div className='relative'>
                          <Lock className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
                          <Input
                            id='confirmPassword'
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={formData.confirmPassword}
                            onChange={(e) =>
                              handleInputChange(
                                'confirmPassword',
                                e.target.value
                              )
                            }
                            className='pl-10 pr-10'
                            placeholder='请再次输入密码'
                            required
                          />
                          <Button
                            type='button'
                            variant='ghost'
                            size='sm'
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            className='absolute right-1 top-1 h-8 w-8 p-0'
                          >
                            {showConfirmPassword ? (
                              <EyeOff className='w-4 h-4' />
                            ) : (
                              <Eye className='w-4 h-4' />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className='space-y-6'>
                      <div className='space-y-2'>
                        <Label htmlFor='address'>企业地址</Label>
                        <div className='relative'>
                          <MapPin className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
                          <Input
                            id='address'
                            value={formData.address}
                            onChange={(e) =>
                              handleInputChange('address', e.target.value)
                            }
                            className='pl-10'
                            placeholder='请输入详细地址'
                          />
                        </div>
                      </div>

                      <div className='space-y-2'>
                        <Label htmlFor='website'>企业网站</Label>
                        <div className='relative'>
                          <Globe className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
                          <Input
                            id='website'
                            type='url'
                            value={formData.website}
                            onChange={(e) =>
                              handleInputChange('website', e.target.value)
                            }
                            className='pl-10'
                            placeholder='如：https://www.example.com'
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Business Information */}
                  <div className='space-y-6'>
                    <h3 className='text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2'>
                      业务信息
                    </h3>

                    <div className='space-y-2'>
                      <Label htmlFor='businessScope'>经营范围 *</Label>
                      <Textarea
                        id='businessScope'
                        value={formData.businessScope}
                        onChange={(e) =>
                          handleInputChange('businessScope', e.target.value)
                        }
                        rows={3}
                        placeholder='请简述企业主要经营范围'
                        required
                      />
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='mainProducts'>主要产品/服务</Label>
                      <Textarea
                        id='mainProducts'
                        value={formData.mainProducts}
                        onChange={(e) =>
                          handleInputChange('mainProducts', e.target.value)
                        }
                        rows={3}
                        placeholder='请描述企业主要产品或服务'
                      />
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='technicalCapabilities'>技术能力</Label>
                      <Textarea
                        id='technicalCapabilities'
                        value={formData.technicalCapabilities}
                        onChange={(e) =>
                          handleInputChange(
                            'technicalCapabilities',
                            e.target.value
                          )
                        }
                        rows={3}
                        placeholder='请描述企业核心技术能力和优势'
                      />
                    </div>

                    <div className='space-y-3'>
                      <Label>合作意向 (可多选)</Label>
                      <div className='grid grid-cols-2 gap-4'>
                        {cooperationOptions.map((option) => (
                          <div
                            key={option}
                            className='flex items-center space-x-2'
                          >
                            <Checkbox
                              id={option}
                              checked={formData.cooperationInterests.includes(
                                option
                              )}
                              onCheckedChange={(checked) =>
                                handleCheckboxChange(option, checked as boolean)
                              }
                            />
                            <Label
                              htmlFor={option}
                              className='text-sm font-normal'
                            >
                              {option}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <Label htmlFor='annualRevenue'>年营业额</Label>
                        <Select
                          value={formData.annualRevenue}
                          onValueChange={(value) =>
                            handleInputChange('annualRevenue', value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder='请选择' />
                          </SelectTrigger>
                          <SelectContent>
                            {revenueRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className='space-y-2'>
                        <Label htmlFor='certifications'>相关认证</Label>
                        <Input
                          id='certifications'
                          value={formData.certifications}
                          onChange={(e) =>
                            handleInputChange('certifications', e.target.value)
                          }
                          placeholder='如：ISO9001、高新技术企业等'
                        />
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='previousProjects'>以往项目经验</Label>
                      <Textarea
                        id='previousProjects'
                        value={formData.previousProjects}
                        onChange={(e) =>
                          handleInputChange('previousProjects', e.target.value)
                        }
                        rows={3}
                        placeholder='请简述在地热能或相关领域的项目经验'
                      />
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='expectations'>合作期望</Label>
                      <Textarea
                        id='expectations'
                        value={formData.expectations}
                        onChange={(e) =>
                          handleInputChange('expectations', e.target.value)
                        }
                        rows={3}
                        placeholder='请描述您对平台合作的具体期望和目标'
                      />
                    </div>
                  </div>

                  {/* Error Display */}
                  {error && (
                    <Alert variant='destructive'>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type='submit'
                    disabled={!isFormValid || isSubmitting}
                    className='w-full py-6 text-lg'
                  >
                    {isSubmitting ? (
                      <>
                        <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2' />
                        <div>提交中...</div>
                      </>
                    ) : (
                      <>
                        <Send className='w-5 h-5 mr-2' />
                        <div>提交申请</div>
                      </>
                    )}
                  </Button>

                  <p className='text-sm text-gray-500 text-center'>
                    提交申请后，我们将在3个工作日内审核并与您联系
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
