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
  Home
} from 'lucide-react'
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
            <div className='bg-white rounded-2xl shadow-xl p-8'>
              <h2 className='text-3xl font-bold text-gray-900 mb-8'>
                合作优势
              </h2>

              <div className='space-y-6'>
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
              </div>

              <div className='mt-8 p-6 bg-gradient-to-br from-geothermal-blue to-geothermal-green rounded-xl text-white'>
                <div className='grid grid-cols-2 gap-4'>
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
              </div>

              {/* Partner Organizations */}
              <div className='mt-8'>
                <h3 className='text-xl font-bold text-gray-900 text-center mb-6'>
                  合作伙伴
                </h3>

                {/* Universities Section */}
                <div className='mb-6'>
                  <h4 className='text-lg font-semibold text-gray-800 mb-4 flex items-center'>
                    <Building className='w-5 h-5 mr-2 text-geothermal-blue' />
                    合作院校
                  </h4>
                  <div className='grid grid-cols-3 gap-x-3 gap-y-8'>
                    <div className='flex flex-col items-center h-full'>
                      <div className='w-30 h-30 flex items-center justify-center mb-3'>
                        <img
                          src={getAssetPath('/xjtu.svg')}
                          alt='西安交通大学'
                          width={120}
                          height={120}
                          className='object-contain'
                        />
                      </div>
                      <span className='text-sm text-gray-500 text-center font-medium mt-auto'>
                        西安交通大学
                      </span>
                    </div>

                    <div className='flex flex-col items-center h-full'>
                      <div className='w-30 h-30 rounded-lg flex items-center justify-center overflow-hidden mb-3'>
                        <img
                          src={getAssetPath('/hit.svg')}
                          alt='哈尔滨工业大学'
                          width={120}
                          height={120}
                          className='object-cover rounded-lg'
                        />
                      </div>
                      <span className='text-sm text-gray-500 text-center font-medium mt-auto'>
                        哈尔滨工业大学
                      </span>
                    </div>

                    <div className='flex flex-col items-center h-full'>
                      <div className='w-30 h-30 rounded-lg flex items-center justify-center overflow-hidden mb-3'>
                        <img
                          src={getAssetPath('/bjut.svg')}
                          alt='北京工业大学'
                          width={120}
                          height={120}
                          className='object-cover rounded-lg'
                        />
                      </div>
                      <span className='text-sm text-gray-500 text-center font-medium mt-auto'>
                        北京工业大学
                      </span>
                    </div>

                    <div className='flex flex-col items-center h-full'>
                      <div className='w-30 h-30 rounded-lg flex items-center justify-center mb-3'>
                        <img
                          src={getAssetPath('/chd.jpg')}
                          alt='长安大学'
                          width={120}
                          height={120}
                          className='object-contain'
                        />
                      </div>
                      <span className='text-sm text-gray-500 text-center font-medium mt-auto'>
                        长安大学
                      </span>
                    </div>

                    <div className='flex flex-col items-center h-full'>
                      <div className='w-30 h-30 rounded-lg flex items-center justify-center mb-3'>
                        <img
                          src={getAssetPath('/xauat.jpeg')}
                          alt='西安建筑科技大学'
                          width={120}
                          height={120}
                          className='object-contain'
                        />
                      </div>
                      <span className='text-sm text-gray-500 text-center font-medium mt-auto'>
                        西安建筑科技大学
                      </span>
                    </div>

                    <div className='flex flex-col items-center h-full'>
                      <div className='w-30 h-30 rounded-lg flex items-center justify-center mb-3'>
                        <img
                          src={getAssetPath('/xsyu.jpg')}
                          alt='西安石油大学'
                          width={120}
                          height={120}
                          className='object-contain'
                        />
                      </div>
                      <span className='text-sm text-gray-500 text-center font-medium mt-auto'>
                        西安石油大学
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies Section */}
                <div>
                  <h4 className='text-lg font-semibold text-gray-800 mb-4 flex items-center'>
                    <Home className='w-5 h-5 mr-2 text-geothermal-orange' />
                    合作企业
                  </h4>
                  {/* First Row Grid */}
                  <div className='grid grid-cols-3 gap-x-3 gap-y-8'>
                    <div className='flex flex-col items-center h-full'>
                      <div className='w-30 h-30 rounded-lg flex items-center justify-center mb-3'>
                        <img
                          src={getAssetPath('/chd.svg')}
                          alt='华电集团'
                          width={120}
                          height={120}
                          className='object-contain'
                        />
                      </div>
                      <span className='text-sm text-gray-500 text-center font-medium mt-auto'>
                        华电集团
                      </span>
                    </div>

                    <div className='flex flex-col items-center h-full'>
                      <div className='w-30 h-30 rounded-lg flex items-center justify-center mb-3'>
                        <img
                          src={getAssetPath('/chn.svg')}
                          alt='国家能源集团'
                          width={120}
                          height={120}
                          className='object-contain'
                        />
                      </div>
                      <span className='text-sm text-gray-500 text-center font-medium mt-auto'>
                        国家能源集团
                      </span>
                    </div>

                    <div className='flex flex-col items-center h-full'>
                      <div className='w-30 h-30 rounded-lg flex items-center justify-center mb-3'>
                        <img
                          src={getAssetPath('/cdt.svg')}
                          alt='大唐集团'
                          width={120}
                          height={120}
                          className='object-contain'
                        />
                      </div>
                      <span className='text-sm text-gray-500 text-center font-medium mt-auto'>
                        大唐集团
                      </span>
                    </div>
                  </div>

                  {/* Second Row Grid */}
                  <div className='grid grid-cols-2 gap-x-6 gap-y-8 mt-8'>
                    <div className='flex flex-col items-center h-full'>
                      <div className='w-60 h-32 rounded-lg flex items-center justify-center mb-3'>
                        <img
                          src={getAssetPath('/chng.png')}
                          alt='华能集团'
                          width={240}
                          height={120}
                          className='object-cover'
                        />
                      </div>
                      <span className='text-sm text-gray-500 text-center font-medium mt-auto'>
                        华能集团
                      </span>
                    </div>

                    <div className='flex flex-col items-center h-full'>
                      <div className='w-60 h-32 rounded-lg flex items-center justify-center mb-3'>
                        <img
                          src={getAssetPath('/ccteg.png')}
                          alt='中煤科工西安研究院'
                          width={240}
                          height={120}
                          className='object-cover'
                        />
                      </div>
                      <span className='text-sm text-gray-500 text-center font-medium mt-auto'>
                        中煤科工西安研究院
                      </span>
                    </div>
                  </div>

                  {/* Third Row Grid */}
                  <div className='grid grid-cols-2 gap-x-6 gap-y-8 mt-8'>
                    <div className='flex flex-col items-center h-full'>
                      <div className='w-60 h-32 rounded-lg flex items-center justify-center mb-3'>
                        <img
                          src={getAssetPath('/sxsgs.png')}
                          alt='陕西省地质调查院'
                          width={240}
                          height={120}
                          className='object-cover'
                        />
                      </div>
                      <span className='text-sm text-gray-500 text-center font-medium mt-auto'>
                        陕西省地质调查院
                      </span>
                    </div>

                    <div className='flex flex-col items-center h-full'>
                      <div className='w-60 h-32 rounded-lg flex items-center justify-center mb-3'>
                        <img
                          src={getAssetPath('/sxgky.png')}
                          alt='陕西工程勘察研究院'
                          width={240}
                          height={120}
                          className='object-cover'
                        />
                      </div>
                      <span className='text-sm text-gray-500 text-center font-medium mt-auto'>
                        陕西工程勘察研究院
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className='bg-white rounded-2xl shadow-xl p-8'>
              <h2 className='text-3xl font-bold text-gray-900 mb-8'>
                意向交流
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='text-center py-12'
                >
                  <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Send className='w-8 h-8 text-green-600' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    提交成功！
                  </h3>
                  <p className='text-gray-600'>我们将在24小时内与您取得联系</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Name */}
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        <User className='w-4 h-4 inline mr-2' />
                        姓名 *
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-colors'
                        placeholder='请输入您的姓名'
                      />
                    </div>

                    {/* Title */}
                    <div>
                      <label
                        htmlFor='title'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        <Briefcase className='w-4 h-4 inline mr-2' />
                        职务
                      </label>
                      <input
                        type='text'
                        id='title'
                        name='title'
                        value={formData.title}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-colors'
                        placeholder='请输入您的职务'
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor='company'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      <Building className='w-4 h-4 inline mr-2' />
                      公司/机构名称 *
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-colors'
                      placeholder='请输入公司或机构名称'
                    />
                  </div>

                  {/* Department */}
                  <div>
                    <label
                      htmlFor='department'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      <Users className='w-4 h-4 inline mr-2' />
                      部门
                    </label>
                    <input
                      type='text'
                      id='department'
                      name='department'
                      value={formData.department}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-colors'
                      placeholder='请输入所在部门'
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        <Phone className='w-4 h-4 inline mr-2' />
                        联系电话
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-colors'
                        placeholder='请输入联系电话'
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        <Mail className='w-4 h-4 inline mr-2' />
                        邮箱 *
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-colors'
                        placeholder='请输入邮箱地址'
                      />
                    </div>
                  </div>

                  {/* Cooperation Interest */}
                  <div>
                    <label
                      htmlFor='cooperationInterest'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      <MessageSquare className='w-4 h-4 inline mr-2' />
                      合作意向 *
                    </label>
                    <select
                      id='cooperationInterest'
                      name='cooperationInterest'
                      value={formData.cooperationInterest}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-colors'
                    >
                      <option value=''>请选择合作意向</option>
                      {cooperationOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      <MessageSquare className='w-4 h-4 inline mr-2' />
                      详细信息
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none transition-colors resize-none'
                      placeholder='请详细描述您的合作需求和期望...'
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type='submit'
                    disabled={!isFormValid || isSubmitting}
                    whileHover={{ scale: isFormValid ? 1.02 : 1 }}
                    whileTap={{ scale: isFormValid ? 0.98 : 1 }}
                    className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isFormValid && !isSubmitting
                        ? 'bg-geothermal-orange text-white hover:bg-geothermal-orange/90 shadow-lg hover:shadow-xl'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                        <span>提交中...</span>
                      </>
                    ) : (
                      <>
                        <Send className='w-5 h-5' />
                        <span>提交</span>
                      </>
                    )}
                  </motion.button>

                  <p className='text-sm text-gray-500 text-center'>
                    提交后我们将在24小时内与您联系
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
