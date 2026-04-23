'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { miSansBold, miSansRegular } from '@/app/fonts'
import { getAssetPath } from '@/lib/utils'

type CooperationCategory = {
  title: string
  iconSrc: string
  institutions: string[]
}

type CooperationMode = {
  title: string
  description: string
  iconSrc: string
  featureNodeIds: string[]
  features: string[]
  cardNodeId: string
}

type CooperationStat = {
  value: string
  label: string
  iconSrc: string
  cardNodeId: string
  valueNodeId: string
  labelNodeId: string
  iconNodeId: string
}

const cooperationDescription =
  '加强与行业内外企业科研机构深度合作，构建开放共享创新生态系统'
const cooperationDescriptionEmphasis = '共同推动地热能产业科技创新和高质量发展'

const cooperationCategories: CooperationCategory[] = [
  {
    title: '科研院所',
    iconSrc: getAssetPath('/cooperation-category-research.svg'),
    institutions: [
      '中国科学院广州能源研究所',
      '中国地质科学院水文地质环境地质研究所',
      '中国科学院地质与地球物理研究所',
      '西北大学地质学系',
      '长安大学环境科学与工程学院'
    ]
  },
  {
    title: '高等院校',
    iconSrc: getAssetPath('/cooperation-category-university.svg'),
    institutions: [
      '西安交通大学',
      '哈尔滨工业大学',
      '北京工业大学',
      '长安大学',
      '西安建筑科技大学',
      '西安石油大学'
    ]
  },
  {
    title: '省属国企',
    iconSrc: getAssetPath('/cooperation-category-state-owned.svg'),
    institutions: ['陕西省地质调查院', '陕西工程勘察研究院有限公司']
  },
  {
    title: '央企合作',
    iconSrc: getAssetPath('/cooperation-category-central-enterprise.svg'),
    institutions: [
      '国家能源集团',
      '中国华能集团',
      '中国华电集团',
      '中国大唐集团',
      '中煤科工集团西安研究院有限公司',
      '中国石油集团宝石管业有限公司'
    ]
  }
]

const categoryArrowSrc = getAssetPath('/cooperation-category-active-arrow.svg')
const titleContentGapClass = 'mt-[50px]'

const cooperationModes: CooperationMode[] = [
  {
    title: '联合研发',
    description: '共同开展关键技术攻关，协同创新突破技术瓶颈',
    iconSrc: getAssetPath('/cooperation-mode-research.svg'),
    features: ['技术共享', '资源整合', '风险共担', '成果共享'],
    featureNodeIds: ['13:182', '13:198', '13:190', '13:206'],
    cardNodeId: '13:160'
  },
  {
    title: '人才交流',
    description: '建立人才培养和交流机制，提升行业整体技术水平',
    iconSrc: getAssetPath('/cooperation-mode-talent.svg'),
    features: ['访问学者', '联合培养', '技术培训', '学术交流'],
    featureNodeIds: ['13:186', '13:202', '13:194', '13:210'],
    cardNodeId: '13:162'
  },
  {
    title: '项目合作',
    description: '共同承担重大科研项目，推动产业化应用',
    iconSrc: getAssetPath('/cooperation-mode-project.svg'),
    features: ['项目申报', '工程示范', '市场推广', '标准制定'],
    featureNodeIds: ['13:184', '13:200', '13:192', '13:208'],
    cardNodeId: '13:161'
  },
  {
    title: '平台共建',
    description: '共建研发平台和基础设施，形成协同创新生态',
    iconSrc: getAssetPath('/cooperation-mode-platform.svg'),
    features: ['实验室共建', '设备共享', '数据共享', '标准制定'],
    featureNodeIds: ['13:188', '13:204', '13:196', '13:212'],
    cardNodeId: '13:163'
  }
]

const cooperationStats: CooperationStat[] = [
  {
    value: '80+',
    label: '成果展示',
    iconSrc: getAssetPath('/cooperation-stat-results.svg'),
    cardNodeId: '13:58',
    valueNodeId: '13:92',
    labelNodeId: '13:88',
    iconNodeId: '13:292'
  },
  {
    value: '10+',
    label: '合作项目',
    iconSrc: getAssetPath('/cooperation-stat-projects.svg'),
    cardNodeId: '13:60',
    valueNodeId: '13:94',
    labelNodeId: '13:90',
    iconNodeId: '13:294'
  },
  {
    value: '15+',
    label: '联合论文',
    iconSrc: getAssetPath('/cooperation-stat-papers.svg'),
    cardNodeId: '13:59',
    valueNodeId: '13:93',
    labelNodeId: '13:89',
    iconNodeId: '13:308'
  },
  {
    value: '20+',
    label: '共同专利',
    iconSrc: getAssetPath('/cooperation-stat-patents.svg'),
    cardNodeId: '13:61',
    valueNodeId: '13:95',
    labelNodeId: '13:91',
    iconNodeId: '13:304'
  }
]

function InstitutionCard({ name }: { name: string }) {
  return (
    <div className='flex h-20 items-center justify-center rounded-[8px] bg-white px-5 shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)]'>
      <p
        className={`${miSansRegular.className} text-center text-[20px] leading-normal text-[#282828]`}
      >
        {name}
      </p>
    </div>
  )
}

function CooperationModeCard({
  mode,
  index
}: {
  mode: CooperationMode
  index: number
}) {
  return (
    <motion.article
      data-node-id={mode.cardNodeId}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      viewport={{ once: true, amount: 0.25 }}
      className='rounded-[8px] bg-white/40 px-[30px] pb-6 pt-[30px] text-center shadow-[0px_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-[12.5px]'
    >
      <div className='relative mx-auto h-[50px] w-[50px]'>
        <Image src={mode.iconSrc} alt='' fill sizes='50px' aria-hidden='true' />
      </div>

      <h3
        className={`${miSansBold.className} mt-2.5 text-[20px] leading-normal text-white`}
      >
        {mode.title}
      </h3>

      <p
        className={`${miSansRegular.className} mt-1.5 min-h-[38px] text-[14px] leading-[19px] text-white/90`}
      >
        {mode.description}
      </p>

      <div className='mt-5 grid grid-cols-2 gap-5'>
        {mode.features.map((feature, featureIndex) => (
          <div
            key={feature}
            data-node-id={mode.featureNodeIds[featureIndex]}
            className='flex h-10 items-center justify-center rounded-[8px] bg-[#F6F6F6] px-3'
          >
            <span
              className={`${miSansRegular.className} text-center text-[14px] leading-normal text-[#666666]`}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>
    </motion.article>
  )
}

function CooperationStatCard({
  stat,
  index
}: {
  stat: CooperationStat
  index: number
}) {
  return (
    <motion.article
      data-node-id={stat.cardNodeId}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.3 }}
      className='flex h-[120px] items-center justify-between border border-white/30 px-10'
    >
      <div>
        <p
          data-node-id={stat.valueNodeId}
          className={`${miSansBold.className} text-[30px] leading-none text-white sm:text-[32px]`}
        >
          {stat.value}
        </p>
        <p
          data-node-id={stat.labelNodeId}
          className={`${miSansRegular.className} mt-2 text-base leading-normal text-white`}
        >
          {stat.label}
        </p>
      </div>

      <div
        data-node-id={stat.iconNodeId}
        className='relative h-11 w-11 shrink-0'
      >
        <Image src={stat.iconSrc} alt='' fill sizes='44px' aria-hidden='true' />
      </div>
    </motion.article>
  )
}

function CooperationModesSection() {
  return (
    <section
      className='relative overflow-hidden bg-[#003D39]'
      aria-labelledby='cooperation-modes-heading'
    >
      <Image
        src={getAssetPath('/cooperation-modes-background.png')}
        alt=''
        fill
        sizes='100vw'
        className='object-cover'
        aria-hidden='true'
      />
      <div
        className='absolute inset-0 bg-[linear-gradient(180deg,rgba(0,61,57,0.52)_0%,rgba(0,38,35,0.72)_100%)]'
        aria-hidden='true'
      />

      <div className='page-shell relative z-10 pt-16 md:pt-20 lg:pt-[100px]'>
        <motion.h2
          id='cooperation-modes-heading'
          data-node-id='13:77'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, amount: 0.35 }}
          className={`${miSansBold.className} text-[2.25rem] leading-none text-white sm:text-[2.5rem]`}
        >
          合作模式
        </motion.h2>

        <div
          className={`${titleContentGapClass} grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-4`}
        >
          {cooperationModes.map((mode, index) => (
            <CooperationModeCard key={mode.title} mode={mode} index={index} />
          ))}
        </div>

        <div className='mt-[86px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
          {cooperationStats.map((stat, index) => (
            <CooperationStatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Cooperation() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const activeCategory = cooperationCategories[activeCategoryIndex]
  const sectionHorizontalPadding =
    'px-3 sm:px-4 lg:px-8 xl:px-24 2xl:px-40 min-[1920px]:px-[400px]'
  const leftPanelPadding =
    'pl-3 pr-6 sm:pl-4 sm:pr-8 lg:pl-8 lg:pr-16 xl:pl-24 xl:pr-24 2xl:pl-40 2xl:pr-28 min-[1920px]:pl-[400px] min-[1920px]:pr-[120px]'

  return (
    <>
      <section id='cooperation' className='overflow-hidden'>
        <div className='grid min-h-[720px] w-full grid-cols-1 lg:grid-cols-[760px_minmax(0,1fr)]'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`bg-[#1A8E85] pb-16 pt-16 md:pb-20 md:pt-[100px] ${leftPanelPadding}`}
          >
            <h2
              className={`${miSansBold.className} whitespace-nowrap text-[2.25rem] leading-none text-white sm:text-[2.5rem]`}
            >
              产学研合作
            </h2>

            <div
              className={`${titleContentGapClass} flex w-full flex-col gap-[30px] md:w-[260px]`}
            >
              {cooperationCategories.map((category, index) => {
                const isActive = index === activeCategoryIndex

                return (
                  <motion.button
                    key={category.title}
                    type='button'
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true, amount: 0.2 }}
                    aria-pressed={isActive}
                    onClick={() => setActiveCategoryIndex(index)}
                    className={`flex h-20 w-full items-center rounded-[8px] px-5 text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      isActive ? 'bg-white' : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <span
                      className={`h-11 w-11 shrink-0 ${
                        isActive ? 'bg-[#1A8E85]' : 'bg-white'
                      }`}
                      style={{
                        WebkitMask: `url(${category.iconSrc}) center / contain no-repeat`,
                        mask: `url(${category.iconSrc}) center / contain no-repeat`
                      }}
                      aria-hidden='true'
                    />

                    <span
                      className={`${miSansRegular.className} ml-5 text-[24px] leading-none ${
                        isActive ? 'text-[#1A8E85]' : 'text-white'
                      }`}
                    >
                      {category.title}
                    </span>

                    <span
                      className={`ml-auto h-4 w-2 ${
                        isActive ? 'bg-[#1A8E85]' : 'bg-white'
                      }`}
                      style={{
                        WebkitMask: `url(${categoryArrowSrc}) center / contain no-repeat`,
                        mask: `url(${categoryArrowSrc}) center / contain no-repeat`
                      }}
                      aria-hidden='true'
                    />
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          <div className='relative bg-white'>
            <Image
              src={getAssetPath('/cooperation-partnerships-bg.png')}
              alt='产学研合作背景'
              fill
              sizes='(min-width: 1024px) calc(100vw - 760px), 100vw'
              className='object-cover object-center'
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative z-10 pb-16 pt-16 md:pb-20 md:pt-[100px] ${sectionHorizontalPadding}`}
            >
              <p
                className={`${miSansRegular.className} mx-auto text-center text-base leading-8 text-[#666666] sm:text-lg sm:leading-9`}
              >
                {cooperationDescription}
                <span className='block'>{cooperationDescriptionEmphasis}</span>
              </p>

              <div
                key={activeCategory.title}
                className='mt-[50px] grid grid-cols-1 gap-5 xl:grid-cols-[457px_457px] xl:gap-x-[50px] xl:gap-y-[30px]'
              >
                {activeCategory.institutions.map((institution) => (
                  <InstitutionCard key={institution} name={institution} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CooperationModesSection />
    </>
  )
}
