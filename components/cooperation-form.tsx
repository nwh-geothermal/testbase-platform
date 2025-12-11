'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Building,
  Briefcase,
  Users,
  Home,
  Phone,
  Mail,
  MapPin,
  User
} from 'lucide-react'
import { getAssetPath } from '@/lib/utils'
import { supabase } from '@/lib/supabase'

type CompanyProfile = {
  id?: string
  company_name?: string
  company_type?: string
  contact_person?: string
  phone?: string
  email?: string
  business_scope?: string
  main_products?: string
  address?: string
  technical_capabilities?: string
  expectations?: string
  publicity_assets?: MediaAsset[]
}

type MediaAsset = {
  name?: string
  url?: string
  type?: string
  uploaded_at?: string
}

const WHITELIST_NAMES = [
  '陕西中禾技术有限公司',
  '西北水利水电工程有限责任公司',
  '深圳市华聚科学仪器有限公司',
  '北京热热文化科技有限公司',
  '四川集思数源信息技术有限公司',
  '西安恒歌数码科技有限责任公司',
  '中服软件（西安）有限公司',
  '广东元能星泰孪生科技创新有限公司',
  '陕西华辉科技有限公司',
  '西安拉贝得信息科技有限公司',
  '西安数驱智信息科技有限公司',
  '五环绿能（北京）工程科技有限公司',
  '浪潮云洲工业互联网有限公司',
  '中国电建集团西北勘测设计研究院有限公司'
]

const isWhitelisted = (name?: string) => {
  if (!name) return false
  return WHITELIST_NAMES.includes(name.trim())
}

export function CooperationForm() {
  const [companyProfiles, setCompanyProfiles] = useState<CompanyProfile[]>([])
  const [loadingCompany, setLoadingCompany] = useState(false)
  const [activeCompany, setActiveCompany] = useState<CompanyProfile | null>(
    null
  )
  const [dialogImageIndex, setDialogImageIndex] = useState(0)

  const extractSupplierList = (payload: any) => {
    if (!payload) return []
    if (Array.isArray(payload)) return payload
    if (Array.isArray(payload?.data?.list)) return payload.data.list
    if (Array.isArray(payload?.data?.records)) return payload.data.records
    if (Array.isArray(payload?.data?.items)) return payload.data.items
    if (Array.isArray(payload?.data?.content)) return payload.data.content
    if (Array.isArray(payload?.data)) return payload.data
    if (Array.isArray(payload?.records)) return payload.records
    if (Array.isArray(payload?.list)) return payload.list
    return []
  }

  const normalizeSupplier = (item: any, idx: number): CompanyProfile => {
    const logoCandidate =
      item?.logo ||
      item?.avatar ||
      item?.image ||
      item?.cover ||
      item?.logoUrl ||
      ''

    const address =
      item?.address ||
      item?.address_detail ||
      item?.detailAddress ||
      item?.addressDetail ||
      [item?.province, item?.city, item?.district || item?.area, item?.street]
        .filter(Boolean)
        .join(' ')

    const productText = [
      item?.main_products,
      item?.mainProducts,
      item?.products,
      item?.product,
      Array.isArray(item?.productList)
        ? item.productList.filter(Boolean).join('、')
        : '',
      Array.isArray(item?.coreCompetence)
        ? item.coreCompetence.filter(Boolean).join('、')
        : ''
    ]
      .filter(Boolean)
      .join('、')

    const businessScope = [
      item?.business_scope,
      item?.businessScope,
      item?.scope,
      Array.isArray(item?.scopeList)
        ? item.scopeList.filter(Boolean).join('、')
        : '',
      Array.isArray(item?.tags) ? item.tags.filter(Boolean).join('、') : '',
      Array.isArray(item?.coreCompetence)
        ? item.coreCompetence.filter(Boolean).join('、')
        : ''
    ]
      .filter(Boolean)
      .join('、')

    const expectations =
      item?.expectations ||
      item?.cooperationIntention ||
      item?.intentions ||
      item?.intention ||
      item?.status ||
      ''

    const technicalCapabilities =
      item?.technical_capabilities ||
      item?.capabilities ||
      item?.abilities ||
      (Array.isArray(item?.skills)
        ? item.skills.filter(Boolean).join('、')
        : '')

    return {
      id: String(
        item?.id ?? item?.supplierId ?? item?.companyId ?? item?.code ?? idx
      ),
      company_name:
        item?.company_name ||
        item?.companyName ||
        item?.supplierName ||
        item?.name ||
        item?.organizeName ||
        '未命名企业',
      company_type:
        item?.company_type ||
        item?.companyType ||
        item?.type ||
        item?.category ||
        (Array.isArray(item?.categoryList)
          ? item.categoryList.filter(Boolean).join('、')
          : '') ||
        '',
      contact_person:
        item?.contact_person ||
        item?.contactPerson ||
        item?.contact ||
        item?.linkMan ||
        item?.connector ||
        '',
      phone:
        item?.phone ||
        item?.telephone ||
        item?.tel ||
        item?.mobile ||
        item?.contactPhone ||
        '',
      email: item?.email || item?.contactEmail || item?.mail || '',
      address,
      business_scope: businessScope,
      main_products: productText,
      technical_capabilities: technicalCapabilities,
      expectations,
      publicity_assets:
        item?.publicity_assets ||
        (logoCandidate &&
          isWhitelisted(item?.organizeName || item?.companyName || item?.name))
          ? [
              {
                url: logoCandidate,
                name: item?.companyName || item?.name || '企业logo',
                type: 'image'
              }
            ]
          : []
    }
  }

  useEffect(() => {
    const fetchCompanyProfiles = async () => {
      setLoadingCompany(true)
      const getKey = (item: CompanyProfile) =>
        item.id || item.company_name || ''
      const mergeById = (
        primary: CompanyProfile[],
        secondary: CompanyProfile[]
      ) => {
        const seen = new Set(
          primary.map((item) => getKey(item)).filter(Boolean)
        )
        const merged = [...primary]
        secondary.forEach((item) => {
          const key = getKey(item)
          if (key && !seen.has(key)) {
            seen.add(key)
            merged.push(item)
          }
        })
        return merged
      }

      try {
        const { data: localData, error: localError } = await supabase
          .from('company')
          .select(
            'id, company_name, company_type, contact_person, phone, email, address, business_scope, main_products, technical_capabilities, expectations, publicity_assets'
          )
          .order('updated_at', { ascending: false })

        const localProfiles =
          !localError && Array.isArray(localData) ? localData : []

        let mergedProfiles = [...localProfiles]

        try {
          const response = await fetch(
            'https://equipms.inspuriip.com/gateway/service/hall/service/supplier',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body: JSON.stringify({
                pageNo: 1,
                pageSize: 60,
                organizeIds: [],
                status: '',
                tenantId: '',
                domainList: [],
                industryList: [],
                keyWord: '',
                supplierCategoryIds: [],
                areaList: [],
                publishDateOrder: 'desc'
              })
            }
          )

          if (!response.ok) {
            throw new Error(`Supplier API error: ${response.status}`)
          }

          const payload = await response.json()
          const supplierList = extractSupplierList(payload)

          if (Array.isArray(supplierList) && supplierList.length) {
            const normalized = supplierList.map((item, idx) =>
              normalizeSupplier(item, idx)
            )
            mergedProfiles = mergeById(localProfiles, normalized)
          }
        } catch (error) {
          console.error('Failed to fetch supplier data', error)
        }

        const localKeys = new Set(
          localProfiles.map((item) => getKey(item)).filter(Boolean)
        )
        const remoteProfiles = mergedProfiles.filter(
          (item) => !localKeys.has(getKey(item))
        )
        const sortedRemote = [...remoteProfiles].sort((a, b) => {
          const aWhiteListed = isWhitelisted(a.company_name)
          const bWhiteListed = isWhitelisted(b.company_name)
          if (aWhiteListed === bWhiteListed) return 0
          return aWhiteListed ? -1 : 1
        })

        setCompanyProfiles([...localProfiles, ...sortedRemote])
      } catch (error) {
        console.error('Failed to load local companies', error)
        setCompanyProfiles([])
      } finally {
        setLoadingCompany(false)
      }
    }

    fetchCompanyProfiles()
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'>
      {/* Header */}
      <section className='pt-20 pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
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
        <div className='grid grid-cols-1 gap-12'>
          {/* Left Column - Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className='space-y-10'>
              <section className='bg-white rounded-2xl border border-gray-100 shadow-md p-8'>
                <div className='mb-4'>
                  <p className='text-xs uppercase tracking-[0.2em] text-geothermal-orange'>
                    Company Hub
                  </p>
                  <h2 className='text-2xl font-bold text-gray-900 mt-2'>
                    企业用户
                  </h2>
                </div>
                {loadingCompany ? (
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse'>
                    {Array.from({ length: 6 }).map((_, idx) => (
                      <div key={idx} className='h-48 rounded-xl bg-gray-100' />
                    ))}
                  </div>
                ) : companyProfiles.length ? (
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {companyProfiles.map((profile) => {
                      const heroAsset = (profile.publicity_assets || []).find(
                        (asset) =>
                          asset.type === 'image' ||
                          asset.type === undefined ||
                          asset.type === null
                      )
                      const tagClassName =
                        'inline-flex items-center px-3 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 mr-2'
                      const businessScopeTags = (profile.business_scope || '')
                        .split(/[,，、/;；\n]+/)
                        .map((item) => item.trim())
                        .filter(Boolean)
                      const technicalTags = (
                        profile.technical_capabilities || ''
                      )
                        .split(/[,，、/;；\n]+/)
                        .map((item) => item.trim())
                        .filter(Boolean)
                      return (
                        <div key={profile.id || profile.company_name}>
                          <div className='rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50'>
                            {heroAsset?.url ? (
                              <img
                                src={heroAsset.url}
                                alt={heroAsset.name || '企业宣传图'}
                                className='w-full h-48 object-cover'
                              />
                            ) : (
                              <div className='w-full h-48 bg-gradient-to-br from-geothermal-blue/20 via-white to-geothermal-orange/20 flex items-center justify-center text-sm text-gray-500'>
                                暂无宣传图片
                              </div>
                            )}
                            <div className='p-3 bg-white'>
                              <div className='flex items-center justify-between'>
                                <div className='text-xl font-bold text-gray-900'>
                                  {profile.company_name || '未命名企业'}
                                </div>
                                <button
                                  type='button'
                                  onClick={() => {
                                    setActiveCompany(profile)
                                    setDialogImageIndex(0)
                                  }}
                                  className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition'
                                  aria-label='查看企业详情'
                                >
                                  <ArrowRight className='w-4 h-4 text-gray-600' />
                                </button>
                              </div>
                              {profile.address && (
                                <p className='text-xs text-gray-500 mt-1 line-clamp-1'>
                                  {profile.address}
                                </p>
                              )}
                              <div className='flex flex-row flex-wrap text-sm text-gray-700 mt-5'>
                                <div className='flex flex-wrap gap-0'>
                                  {businessScopeTags.length ? (
                                    businessScopeTags.map((tag, idx) => (
                                      <span
                                        className={tagClassName}
                                        key={`${tag}-scope-${idx}`}
                                      >
                                        {tag}
                                      </span>
                                    ))
                                  ) : (
                                    <span className='text-xs text-gray-500'>
                                      暂无企业简介，完善资料便于合作方了解企业。
                                    </span>
                                  )}
                                </div>
                                <div className='flex flex-wrap'>
                                  {technicalTags.length
                                    ? technicalTags.map((tag, idx) => (
                                        <div
                                          className={tagClassName}
                                          key={`${tag}-tech-${idx}`}
                                        >
                                          {tag}
                                        </div>
                                      ))
                                    : null}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <p className='text-sm text-gray-500'>
                    暂无企业资料，请邀请企业注册后查看。
                  </p>
                )}
              </section>

              <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6'>
                <div className='mb-4'>
                  <p className='text-xs uppercase tracking-[0.2em] text-geothermal-blue'>
                    Academic Partners
                  </p>
                  <h2 className='text-2xl font-bold text-gray-900 mt-2 flex items-center'>
                    <Building className='w-5 h-5 mr-2 text-geothermal-blue' />
                    合作院校
                  </h2>
                </div>
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

              <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6'>
                <div className='mb-4'>
                  <p className='text-xs uppercase tracking-[0.2em] text-geothermal-orange'>
                    Business Partners
                  </p>
                  <h2 className='text-2xl font-bold text-gray-900 mt-2 flex items-center'>
                    <Home className='w-5 h-5 mr-2 text-geothermal-orange' />
                    合作企业
                  </h2>
                </div>
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

              <section className='bg-white rounded-2xl border border-gray-100 shadow-md p-8'>
                <div className='mb-6'>
                  <p className='text-xs uppercase tracking-[0.2em] text-geothermal-blue'>
                    Collaboration Edge
                  </p>
                  <h2 className='text-2xl font-bold text-gray-900 mt-2'>
                    合作优势
                  </h2>
                </div>

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
              </section>
            </div>
          </motion.div>
        </div>
      </div>

      {activeCompany &&
        (() => {
          const dialogAssets = (activeCompany.publicity_assets || []).filter(
            (asset) =>
              asset.type === 'image' ||
              asset.type === undefined ||
              asset.type === null
          )
          const safeIndex =
            dialogAssets.length > 0 ? dialogImageIndex % dialogAssets.length : 0
          const dialogAsset = dialogAssets[safeIndex]

          return (
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4'>
              <div className='bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
                <div className='flex items-start justify-between border-b border-gray-200 p-4'>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900'>
                      {activeCompany.company_name || '未命名企业'}
                    </h3>
                    {activeCompany.company_type && (
                      <p className='text-sm text-gray-500 mt-1'>
                        {activeCompany.company_type}
                      </p>
                    )}
                  </div>
                  <button
                    type='button'
                    onClick={() => setActiveCompany(null)}
                    className='text-gray-500 hover:text-gray-700'
                    aria-label='关闭'
                  >
                    ×
                  </button>
                </div>
                <div className='p-4 md:p-6 space-y-6 text-sm text-gray-700'>
                  <div className='relative'>
                    {dialogAsset?.url ? (
                      <img
                        src={dialogAsset.url}
                        alt={dialogAsset.name || '企业宣传图'}
                        className='w-full h-64 object-cover rounded-lg'
                      />
                    ) : (
                      <div className='w-full h-64 bg-gradient-to-br from-geothermal-blue/20 via-white to-geothermal-orange/20 flex items-center justify-center text-sm text-gray-500 rounded-lg'>
                        暂无宣传图片
                      </div>
                    )}
                    {dialogAssets.length > 1 && (
                      <div className='absolute inset-0 flex items-center justify-between px-3'>
                        <button
                          type='button'
                          onClick={() =>
                            setDialogImageIndex(
                              (prev) =>
                                (prev - 1 + dialogAssets.length) %
                                dialogAssets.length
                            )
                          }
                          className='w-9 h-9 rounded-full bg-white/80 text-gray-700 shadow hover:bg-white transition'
                          aria-label='上一张'
                        >
                          {'<'}
                        </button>
                        <button
                          type='button'
                          onClick={() =>
                            setDialogImageIndex(
                              (prev) => (prev + 1) % dialogAssets.length
                            )
                          }
                          className='w-9 h-9 rounded-full bg-white/80 text-gray-700 shadow hover:bg-white transition'
                          aria-label='下一张'
                        >
                          {'>'}
                        </button>
                      </div>
                    )}
                  </div>
                  <div className='rounded-xl border border-gray-100 bg-gray-50 p-4'>
                    <div className='grid grid-cols-1 xl:grid-cols-4 gap-3'>
                      {[
                        {
                          label: '联系人',
                          value: activeCompany.contact_person || '-',
                          icon: User
                        },
                        {
                          label: '电话',
                          value: activeCompany.phone || '-',
                          icon: Phone
                        },
                        {
                          label: '邮箱',
                          value: activeCompany.email || '-',
                          icon: Mail
                        },
                        {
                          label: '地址',
                          value: activeCompany.address || '-',
                          icon: MapPin
                        }
                      ].map(({ label, value, icon: Icon }) => (
                        <div
                          key={label}
                          className='flex items-start space-x-3 rounded-lg bg-white/60 p-3 shadow-sm border border-white'
                        >
                          <div className='w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-geothermal-blue'>
                            <Icon className='w-4 h-4' />
                          </div>
                          <div className='flex-1 min-w-0'>
                            <p className='text-sm uppercase tracking-wide text-gray-600'>
                              {label}
                            </p>
                            <p className='font-medium text-gray-900 truncate'>
                              {value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='mt-6 rounded-xl border border-gray-200 bg-white shadow-sm p-5'>
                    <div className='grid grid-cols-1 xl:grid-cols-4 gap-6'>
                      <div className='space-y-3'>
                        <div className='flex items-center justify-start gap-2'>
                          <span className='text-sm uppercase tracking-wide text-gray-600'>
                            业务范围
                          </span>
                        </div>
                        <div className='flex flex-wrap gap-1'>
                          {(activeCompany.business_scope || '')
                            .split(/[,，、/;；\n]+/)
                            .map((item) => item.trim())
                            .filter(Boolean)
                            .map((tag, idx) => (
                              <span
                                className='inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-geothermal-blue/10 text-geothermal-blue border border-geothermal-blue/20'
                                key={`${tag}-scope-${idx}`}
                              >
                                {tag}
                              </span>
                            ))}
                          {!(activeCompany.business_scope || '').trim() && (
                            <span className='text-xs text-gray-500'>
                              暂无资料
                            </span>
                          )}
                        </div>
                      </div>

                      <div className='space-y-3'>
                        <div className='flex items-center justify-start gap-2'>
                          <span className='text-sm uppercase tracking-wide text-gray-600'>
                            技术能力
                          </span>
                        </div>
                        <div className='flex flex-wrap gap-1'>
                          {(activeCompany.technical_capabilities || '')
                            .split(/[,，、/;；\n]+/)
                            .map((item) => item.trim())
                            .filter(Boolean)
                            .map((tag, idx) => (
                              <span
                                className='inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-geothermal-green/10 text-geothermal-green border border-geothermal-green/20'
                                key={`${tag}-tech-${idx}`}
                              >
                                {tag}
                              </span>
                            ))}
                          {!(
                            activeCompany.technical_capabilities || ''
                          ).trim() && (
                            <div className='leading-relaxed text-gray-900 text-sm font-medium'>
                              <span className='text-xs text-gray-500'>
                                暂无资料
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className='space-y-3'>
                        <div className='flex items-center justify-start gap-2'>
                          <span className='text-sm uppercase tracking-wide text-gray-600'>
                            主要产品
                          </span>
                        </div>
                        <div className='leading-relaxed text-gray-900 text-sm font-medium'>
                          {activeCompany.main_products || (
                            <span className='text-xs text-gray-500'>
                              暂无资料
                            </span>
                          )}
                        </div>
                      </div>

                      <div className='space-y-3'>
                        <div className='flex items-center justify-start gap-2'>
                          <span className='text-sm uppercase tracking-wide text-gray-600'>
                            合作意向
                          </span>
                        </div>
                        <div className='leading-relaxed text-gray-900 text-sm font-medium'>
                          {activeCompany.expectations || (
                            <span className='text-xs text-gray-500'>
                              暂无资料
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })()}
    </div>
  )
}
