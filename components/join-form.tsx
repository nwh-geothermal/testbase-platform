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
  Calendar
} from 'lucide-react'

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      cooperationInterests: prev.cooperationInterests.includes(option)
        ? prev.cooperationInterests.filter((item) => item !== option)
        : [...prev.cooperationInterests, option]
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
          companyName: '',
          companyType: '',
          establishedYear: '',
          registeredCapital: '',
          employees: '',
          contactPerson: '',
          position: '',
          phone: '',
          email: '',
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
    }, 2000)
  }

  const isFormValid =
    formData.companyName &&
    formData.companyType &&
    formData.contactPerson &&
    formData.email &&
    formData.phone &&
    formData.businessScope

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
      </section>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className='bg-white rounded-2xl shadow-xl px-4 sm:px-8 lg:px-16 xl:px-24 py-8'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-8 mt-8'>
                企业注册
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='text-center py-12'
                >
                  <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-green-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    申请已提交
                  </h3>
                  <p className='text-gray-600'>
                    我们将在3个工作日内与您联系，请保持电话畅通。
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  {/* Basic Company Information */}
                  <div className='space-y-4'>
                    <h3 className='text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2'>
                      基本信息
                    </h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          企业名称 *
                        </label>
                        <div className='relative'>
                          <Building className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                          <input
                            type='text'
                            name='companyName'
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                            placeholder='请输入企业全称'
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          企业类型 *
                        </label>
                        <select
                          name='companyType'
                          value={formData.companyType}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                          required
                        >
                          <option value=''>请选择企业类型</option>
                          {companyTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          成立年份
                        </label>
                        <div className='relative'>
                          <Calendar className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                          <input
                            type='text'
                            name='establishedYear'
                            value={formData.establishedYear}
                            onChange={handleInputChange}
                            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                            placeholder='如：2010'
                          />
                        </div>
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          注册资本(万元)
                        </label>
                        <input
                          type='text'
                          name='registeredCapital'
                          value={formData.registeredCapital}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                          placeholder='如：1000'
                        />
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          员工规模
                        </label>
                        <select
                          name='employees'
                          value={formData.employees}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                        >
                          <option value=''>请选择</option>
                          {employeeRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className='space-y-4'>
                    <h3 className='text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2'>
                      联系信息
                    </h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          联系人姓名 *
                        </label>
                        <div className='relative'>
                          <User className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                          <input
                            type='text'
                            name='contactPerson'
                            value={formData.contactPerson}
                            onChange={handleInputChange}
                            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                            placeholder='请输入联系人姓名'
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          职务
                        </label>
                        <input
                          type='text'
                          name='position'
                          value={formData.position}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                          placeholder='如：总经理、技术总监'
                        />
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          联系电话 *
                        </label>
                        <div className='relative'>
                          <Phone className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                          <input
                            type='tel'
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                            placeholder='请输入手机号码'
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          邮箱地址 *
                        </label>
                        <div className='relative'>
                          <Mail className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                          <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                            placeholder='请输入邮箱地址'
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className='space-y-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          企业地址
                        </label>
                        <div className='relative'>
                          <MapPin className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                          <input
                            type='text'
                            name='address'
                            value={formData.address}
                            onChange={handleInputChange}
                            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                            placeholder='请输入详细地址'
                          />
                        </div>
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          企业网站
                        </label>
                        <div className='relative'>
                          <Globe className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                          <input
                            type='url'
                            name='website'
                            value={formData.website}
                            onChange={handleInputChange}
                            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                            placeholder='如：https://www.example.com'
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Business Information */}
                  <div className='space-y-4'>
                    <h3 className='text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2'>
                      业务信息
                    </h3>

                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>
                        经营范围 *
                      </label>
                      <textarea
                        name='businessScope'
                        value={formData.businessScope}
                        onChange={handleInputChange}
                        rows={3}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                        placeholder='请简述企业主要经营范围'
                        required
                      />
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>
                        主要产品/服务
                      </label>
                      <textarea
                        name='mainProducts'
                        value={formData.mainProducts}
                        onChange={handleInputChange}
                        rows={3}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                        placeholder='请描述企业主要产品或服务'
                      />
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>
                        技术能力
                      </label>
                      <textarea
                        name='technicalCapabilities'
                        value={formData.technicalCapabilities}
                        onChange={handleInputChange}
                        rows={3}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                        placeholder='请描述企业核心技术能力和优势'
                      />
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>
                        合作意向 (可多选)
                      </label>
                      <div className='grid grid-cols-2 gap-2'>
                        {cooperationOptions.map((option) => (
                          <label
                            key={option}
                            className='flex items-center space-x-2 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer'
                          >
                            <input
                              type='checkbox'
                              checked={formData.cooperationInterests.includes(
                                option
                              )}
                              onChange={() => handleCheckboxChange(option)}
                              className='w-4 h-4 text-geothermal-orange focus:ring-geothermal-orange border-gray-300 rounded'
                            />
                            <span className='text-sm text-gray-700'>
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          年营业额
                        </label>
                        <select
                          name='annualRevenue'
                          value={formData.annualRevenue}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                        >
                          <option value=''>请选择</option>
                          {revenueRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          相关认证
                        </label>
                        <input
                          type='text'
                          name='certifications'
                          value={formData.certifications}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                          placeholder='如：ISO9001、高新技术企业等'
                        />
                      </div>
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>
                        以往项目经验
                      </label>
                      <textarea
                        name='previousProjects'
                        value={formData.previousProjects}
                        onChange={handleInputChange}
                        rows={3}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                        placeholder='请简述在地热能或相关领域的项目经验'
                      />
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>
                        合作期望
                      </label>
                      <textarea
                        name='expectations'
                        value={formData.expectations}
                        onChange={handleInputChange}
                        rows={3}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geothermal-orange focus:border-transparent'
                        placeholder='请描述您对平台合作的具体期望和目标'
                      />
                    </div>
                  </div>

                  <motion.button
                    type='submit'
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center space-x-2 ${
                      isFormValid && !isSubmitting
                        ? 'bg-gradient-to-r from-geothermal-orange to-geothermal-blue hover:shadow-lg transform hover:-translate-y-0.5'
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                    whileHover={
                      isFormValid && !isSubmitting ? { scale: 1.02 } : {}
                    }
                    whileTap={
                      isFormValid && !isSubmitting ? { scale: 0.98 } : {}
                    }
                  >
                    {isSubmitting ? (
                      <>
                        <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                        <span>提交中...</span>
                      </>
                    ) : (
                      <>
                        <Send className='w-5 h-5' />
                        <span>提交申请</span>
                      </>
                    )}
                  </motion.button>

                  <p className='text-sm text-gray-500 text-center'>
                    提交申请后，我们将在3个工作日内审核并与您联系
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
