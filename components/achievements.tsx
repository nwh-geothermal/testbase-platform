'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { miSansBold, miSansRegular } from '@/app/fonts'
import { getAssetPath } from '@/lib/utils'

type ResearchCard = {
  iconSrc: string
  iconAlt: string
  count: string
  title: string
  description: string
  items: string[]
  variant: 'featured' | 'default'
}

type DemoProjectMetric = {
  value: string
  label: string
  valueClassName: string
}

type DemoProject = {
  id: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  metrics?: DemoProjectMetric[]
}

type MemberUnit = {
  title: string
  description: string
  imageSrc: string
}

const researchCards: ResearchCard[] = [
  {
    iconSrc: getAssetPath('/research-icon-patent.svg'),
    iconAlt: '核心专利技术图标',
    count: '10+',
    title: '核心专利技术',
    description: '获得发明专利和实用新型专利',
    items: [
      '地热能高效换热技术专利',
      '数字孪生系统控制专利',
      '智能运维算法专利',
      '一种地热储量的动态计算方法'
    ],
    variant: 'featured'
  },
  {
    iconSrc: getAssetPath('/research-icon-paper.svg'),
    iconAlt: '学术论文发表图标',
    count: '20+',
    title: '学术论文发表',
    description: '在国内外期刊发表高质量论文',
    items: [
      'SCI期刊论文5篇',
      'EI期刊论文3篇',
      '国际会议论文2篇',
      '专著出版3部'
    ],
    variant: 'default'
  },
  {
    iconSrc: getAssetPath('/research-icon-talent.svg'),
    iconAlt: '人才培养图标',
    count: '100+',
    title: '人才培养',
    description: '培养地热能领域专业人才',
    items: ['博士研究生5人', '硕士研究生20余人', '工程技术人员80余人'],
    variant: 'default'
  },
  {
    iconSrc: getAssetPath('/research-icon-innovation.svg'),
    iconAlt: '技术创新图标',
    count: '50+',
    title: '技术创新',
    description: '突破关键技术瓶颈',
    items: [
      '地热能开发利用效率提升30%',
      '设备运行稳定性提升40%',
      '维护成本降低25%',
      '环境影响减少50%'
    ],
    variant: 'default'
  }
]

const demoProjects: DemoProject[] = [
  {
    id: 'northwest-center',
    title: '西北水电及新能源科技产业中心',
    description: '总供能面积14万平方米，服务6000余名职工',
    imageSrc: getAssetPath('/proj1.jpg'),
    imageAlt: '西北水电及新能源科技产业中心示范项目实景',
    metrics: [
      {
        value: '93%',
        label: '系统效率',
        valueClassName: 'text-[32px] text-[#EF693A]'
      },
      {
        value: '35%',
        label: '成本节约',
        valueClassName: 'text-[32px] text-[#308AFF]'
      },
      {
        value: '运行中',
        label: '项目状态',
        valueClassName: 'text-[26px] text-[#1A8E85]'
      }
    ]
  },
  {
    id: 'innovation-zone',
    title: '西安高新区中央创新区6号能源站项目',
    description: '住宅及商业建筑群综合能源项目',
    imageSrc: getAssetPath('/proj2.jpg'),
    imageAlt: '西安高新区中央创新区6号能源站项目效果图',
    metrics: [
      {
        value: '93%',
        label: '系统效率',
        valueClassName: 'text-[32px] text-[#EF693A]'
      },
      {
        value: '35%',
        label: '成本节约',
        valueClassName: 'text-[32px] text-[#308AFF]'
      },
      {
        value: '运行中',
        label: '项目状态',
        valueClassName: 'text-[26px] text-[#1A8E85]'
      }
    ]
  },
  {
    id: 'childrens-hospital',
    title: '西安市儿童医院天然气能源管理项目',
    description: '以三联供为基础的供冷、供热、蒸汽及生活热水综合能源项目',
    imageSrc: getAssetPath('/proj3.jpg'),
    imageAlt: '西安市儿童医院天然气能源管理项目效果图',
    metrics: [
      {
        value: '93%',
        label: '系统效率',
        valueClassName: 'text-[32px] text-[#EF693A]'
      },
      {
        value: '35%',
        label: '成本节约',
        valueClassName: 'text-[32px] text-[#308AFF]'
      },
      {
        value: '运行中',
        label: '项目状态',
        valueClassName: 'text-[26px] text-[#1A8E85]'
      }
    ]
  },
  {
    id: 'changsha-airport',
    title: '长沙机场绿色能源项目',
    description: '机场类“地热+”的综合能源类项目',
    imageSrc: getAssetPath('/proj4.png'),
    imageAlt: '长沙机场绿色能源项目效果图'
  }
]

const memberUnits: MemberUnit[] = [
  {
    title: '陕西省地质调查院',
    description:
      '组建于2010年的省政府直属正厅级事业单位，是陕西省唯一的公益性地质调查队伍，主要职责是统一部署和组织实施全省基础性、公益性、战略性地质调查工作。全院内设9个处室，下设8个直属单位，现有职工714人，其中，中国工程院院士1人，专业技术二级2人，专业技术3级7人；正高级工程师43名，占比6%，高级工程师195名，占比27%。外聘两院院士6名，国务院参事1名，中外知名专家20名。',
    imageSrc: getAssetPath('/company1.png')
  },
  {
    title: '中石化绿源地热能开发有限公司',
    description:
      '成立于2006年11月，是中国石化集团新星石油有限责任公司与冰岛极地绿色能源公司投资组建的以地热资源开发利用为主的中冰合资企业。',
    imageSrc: getAssetPath('/company2.png')
  },
  {
    title: '陕西省煤田地质集团有限公司',
    description:
      '成立于2008年12月，是按照全省地勘单位体制改革的总体部署，由创立于1954年6月的陕西省煤田地质局成建制改制成立的国有独资地质勘查与开发一体化企业。',
    imageSrc: getAssetPath('/company3.jpg')
  },
  {
    title: '四联智能技术股份有限公司',
    description:
      '成立于1992年，总部位于西安市高新区，是国家级高新技术企业，2014年5月在新三板挂牌。经过近30年的发展，四联智能已成为集清洁能源供热（冷）系统、智慧“五恒”人居系统、机电工程施工总承包三类业务为一体的全寿命周期系统集成商。',
    imageSrc: getAssetPath('/company4.png')
  },
  {
    title: '陕西延长石油国际勘探开发工程有限公司',
    description:
      '组建于2009年3月，注册资本10.3亿元，是延长石油集团公司所属的法人独资公司。公司积极布局风能、太阳能、地热能等新能源业务，形成核心技术和4大服务产品，为用户提供个性化用能解决方案。',
    imageSrc: getAssetPath('/company5.jpg')
  },
  {
    title: '陕西西咸新区沣西新城能源发展有限公司',
    description:
      '成立于2014年6月，注册资本金20亿元，创新形成以中深层地热能开发利用为主的“地热+”多能互补综合供能模式，是全国最大的中深层地热地埋管供热技术应用企业之一。',
    imageSrc: getAssetPath('/company6.png')
  }
]

function ResearchList({ items, dark }: { items: string[]; dark: boolean }) {
  return (
    <div className='space-y-0.5'>
      {items.map((item) => (
        <div key={item} className='flex items-start gap-2.5'>
          <span
            className={`mt-[17px] block h-[6px] w-[6px] shrink-0 rounded-full ${
              dark ? 'bg-white' : 'bg-[#1A8E85]'
            }`}
          />
          <p
            className={`${miSansRegular.className} text-base leading-10 ${
              dark ? 'text-white' : 'text-[#282828]'
            }`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  )
}

function FeaturedResearchCard({ card }: { card: ResearchCard }) {
  const countValue = card.count.replace('+', '')

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className='relative min-h-[500px] overflow-hidden rounded-[8px] md:col-span-2 xl:col-span-1'
    >
      <Image
        src={getAssetPath('/research-achievements-certificates.png')}
        alt='科研成果证书展示'
        fill
        sizes='(min-width: 1024px) 500px, 100vw'
        className='object-cover object-right'
      />
      <div className='absolute inset-0 bg-[linear-gradient(90deg,#1A8E85_0%,rgba(26,142,133,0.94)_38%,rgba(26,142,133,0.48)_72%,rgba(26,142,133,0.08)_100%)]' />

      <div className='relative z-10 flex h-full flex-col p-[30px]'>
        <div className='flex items-start'>
          <div className='relative flex h-10 w-8 shrink-0 items-center justify-center'>
            <Image
              src={card.iconSrc}
              alt={card.iconAlt}
              fill
              unoptimized
              sizes='32px'
              className='object-contain brightness-0 invert'
            />
          </div>

          <div
            className={`${miSansBold.className} ml-4 leading-none text-white`}
          >
            <span className='text-[40px]'>{countValue}</span>
            <span className='text-2xl'>+</span>
          </div>
        </div>

        <div className='mt-8 max-w-[230px]'>
          <h3
            className={`${miSansBold.className} text-2xl leading-none text-white`}
          >
            {card.title}
          </h3>

          <p
            className={`${miSansRegular.className} mt-3 text-base leading-normal text-white`}
          >
            {card.description}
          </p>

          <div className='mt-8'>
            <ResearchList items={card.items} dark />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function ResearchStatCard({
  card,
  index
}: {
  card: ResearchCard
  index: number
}) {
  const countValue = card.count.replace('+', '')

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.06 * (index + 1) }}
      viewport={{ once: true, amount: 0.2 }}
      className='min-h-[500px] overflow-hidden rounded-[8px] bg-[rgba(255,255,255,0.4)] p-[30px] backdrop-blur-[12.5px]'
    >
      <div className='flex items-start justify-between gap-4'>
        <div className={`${miSansBold.className} leading-none text-white`}>
          <span className='text-[40px]'>{countValue}</span>
          <span className='text-2xl'>+</span>
        </div>

        <div className='relative h-11 w-11 shrink-0'>
          <Image
            src={card.iconSrc}
            alt={card.iconAlt}
            fill
            unoptimized
            sizes='44px'
            className='object-contain'
          />
        </div>
      </div>

      <div className='mt-8'>
        <h3
          className={`${miSansBold.className} text-2xl leading-none text-white`}
        >
          {card.title}
        </h3>

        <p
          className={`${miSansRegular.className} mt-3 text-base leading-normal text-white/90`}
        >
          {card.description}
        </p>

        <div className='mt-8'>
          <ResearchList items={card.items} dark />
        </div>
      </div>
    </motion.article>
  )
}

function DemoProjectCard({
  project,
  decorative = false
}: {
  project: DemoProject
  decorative?: boolean
}) {
  return (
    <article
      aria-hidden={decorative}
      className='h-full rounded-[8px] bg-white p-[30px] shadow-[0_20px_60px_rgba(58,86,120,0.08)]'
    >
      <div className='flex h-full flex-col'>
        <div>
          <h3
            className={`${miSansBold.className} text-2xl leading-none text-[#282828]`}
          >
            {project.title}
          </h3>
          <p
            className={`${miSansRegular.className} mt-[10px] text-base leading-normal text-[#666666] lg:line-clamp-1`}
          >
            {project.description}
          </p>
        </div>

        <div className='relative mt-[30px] h-[290px] overflow-hidden rounded-[8px]'>
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            sizes='(min-width: 1280px) 540px, 100vw'
            className='object-cover'
          />
        </div>

        {project.metrics?.length ? (
          <div className='mt-[30px] grid grid-cols-3 gap-4'>
            {project.metrics.map((metric) => (
              <div
                key={`${project.id}-${metric.label}`}
                className='flex min-w-0 flex-col items-center text-center'
              >
                <p
                  className={`${miSansBold.className} flex min-h-[40px] items-end leading-none ${metric.valueClassName}`}
                >
                  {metric.value}
                </p>
                <p
                  className={`${miSansRegular.className} mt-[10px] text-base leading-none text-[#282828]`}
                >
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}

function CarouselArrow({
  direction,
  onClick,
  label,
  disabled = false
}: {
  direction: 'previous' | 'next'
  onClick: () => void
  label: string
  disabled?: boolean
}) {
  const isNext = direction === 'next'

  return (
    <button
      type='button'
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
      className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-[#1A8E85] shadow-[0_16px_40px_rgba(45,84,122,0.12)] transition-all duration-300 enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40'
    >
      <svg
        width='10'
        height='18'
        viewBox='0 0 10 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        className={isNext ? '' : 'rotate-180'}
      >
        <path
          d='M1.5 2L8 9L1.5 16'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  )
}

const demoCarouselVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 96 : -96,
    scale: 0.985
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -96 : 96,
    scale: 0.985
  })
}

const DEMO_CAROUSEL_CARD_WIDTH = 540
const DEMO_CAROUSEL_CARD_GAP = 30
const DEMO_CAROUSEL_VISIBLE_COUNT = 3
const DEMO_CAROUSEL_MIN_WIDTH =
  DEMO_CAROUSEL_CARD_WIDTH * DEMO_CAROUSEL_VISIBLE_COUNT +
  DEMO_CAROUSEL_CARD_GAP * (DEMO_CAROUSEL_VISIBLE_COUNT - 1)

const MEMBER_UNIT_CARD_WIDTH = 480
const MEMBER_UNIT_CARD_HEIGHT = 510
const MEMBER_UNIT_CARD_IMAGE_HEIGHT = 360
const MEMBER_UNIT_CARD_PANEL_HEIGHT =
  MEMBER_UNIT_CARD_HEIGHT - MEMBER_UNIT_CARD_IMAGE_HEIGHT
const MEMBER_UNIT_MIN_GAP = DEMO_CAROUSEL_CARD_GAP

function DemoProjectsSection() {
  const projectCount = demoProjects.length
  const desktopBaseIndex = projectCount
  const desktopViewportRef = useRef<HTMLDivElement | null>(null)
  const [carouselIndex, setCarouselIndex] = useState(desktopBaseIndex)
  const [carouselDirection, setCarouselDirection] = useState<
    'previous' | 'next'
  >('next')
  const [isDesktopAnimating, setIsDesktopAnimating] = useState(false)
  const [isDesktopResetting, setIsDesktopResetting] = useState(false)
  const [desktopViewportWidth, setDesktopViewportWidth] = useState(
    DEMO_CAROUSEL_MIN_WIDTH
  )

  const directionValue = carouselDirection === 'next' ? 1 : -1
  const activeProjectIndex =
    ((carouselIndex % projectCount) + projectCount) % projectCount
  const desktopGap = Math.max(
    DEMO_CAROUSEL_CARD_GAP,
    (desktopViewportWidth -
      DEMO_CAROUSEL_CARD_WIDTH * DEMO_CAROUSEL_VISIBLE_COUNT) /
      (DEMO_CAROUSEL_VISIBLE_COUNT - 1)
  )
  const desktopStep = DEMO_CAROUSEL_CARD_WIDTH + desktopGap

  useEffect(() => {
    const viewport = desktopViewportRef.current

    if (!viewport || typeof ResizeObserver === 'undefined') {
      return
    }

    const updateViewportWidth = () => {
      setDesktopViewportWidth(viewport.clientWidth)
    }

    updateViewportWidth()

    const resizeObserver = new ResizeObserver(() => {
      updateViewportWidth()
    })

    resizeObserver.observe(viewport)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  const getProjectAtOffset = (offset: number) =>
    demoProjects[(activeProjectIndex + offset + projectCount) % projectCount]

  const handlePrevious = () => {
    if (isDesktopAnimating) {
      return
    }

    setCarouselDirection('previous')
    setIsDesktopAnimating(true)
    setCarouselIndex((currentIndex) => currentIndex - 1)
  }

  const handleNext = () => {
    if (isDesktopAnimating) {
      return
    }

    setCarouselDirection('next')
    setIsDesktopAnimating(true)
    setCarouselIndex((currentIndex) => currentIndex + 1)
  }

  const handleDesktopAnimationComplete = () => {
    if (isDesktopResetting) {
      setIsDesktopResetting(false)
      setIsDesktopAnimating(false)
      return
    }

    if (carouselIndex <= 0 || carouselIndex >= projectCount * 2) {
      setIsDesktopResetting(true)
      setCarouselIndex(desktopBaseIndex + activeProjectIndex)
      return
    }

    setIsDesktopAnimating(false)
  }

  const visibleProjects = [
    getProjectAtOffset(0),
    getProjectAtOffset(1),
    getProjectAtOffset(2)
  ]
  const firstVisible = visibleProjects[0]
  const desktopProjects = [...demoProjects, ...demoProjects, ...demoProjects]

  return (
    <section
      id='demo-projects'
      className='relative overflow-hidden bg-[#F5F7F9]'
    >
      <Image
        src={getAssetPath('/rectangle.png')}
        alt=''
        fill
        sizes='100vw'
        className='object-cover'
      />

      <div className='page-shell relative z-10 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-[100px] lg:pt-[100px] xl:pb-0'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2
              className={`${miSansBold.className} text-[2.25rem] leading-none text-[#282828] sm:text-[2.5rem]`}
            >
              示范项目
            </h2>
            <p
              className={`${miSansRegular.className} mt-4 text-base leading-8 text-[#666666] sm:text-lg sm:leading-9`}
            >
              通过项目建设与运营，验证关键技术路线与系统方案，形成可复制推广的应用案例
            </p>
          </motion.div>

          <div className='flex items-center gap-4 self-start lg:pt-1'>
            <CarouselArrow
              direction='previous'
              onClick={handlePrevious}
              label='查看上一个示范项目'
            />
            <CarouselArrow
              direction='next'
              onClick={handleNext}
              label='查看下一个示范项目'
            />
          </div>
        </div>

        <div className='mt-12 xl:hidden'>
          <AnimatePresence initial={false} mode='wait' custom={directionValue}>
            <motion.div
              key={`mobile-${firstVisible.id}`}
              custom={directionValue}
              variants={demoCarouselVariants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <DemoProjectCard project={firstVisible} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.2 }}
        className='page-shell relative z-10 mt-12 hidden pb-[100px] xl:block'
      >
        <div ref={desktopViewportRef} className='w-full overflow-hidden'>
          <motion.div
            initial={false}
            animate={{ x: -carouselIndex * desktopStep }}
            transition={
              isDesktopResetting
                ? { duration: 0 }
                : { duration: 0.52, ease: [0.22, 1, 0.36, 1] }
            }
            onAnimationComplete={handleDesktopAnimationComplete}
            className='flex w-max items-stretch'
            style={{ gap: `${desktopGap}px` }}
          >
            {desktopProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className='w-[540px] shrink-0'
              >
                <DemoProjectCard
                  project={project}
                  decorative={
                    index < carouselIndex ||
                    index >= carouselIndex + DEMO_CAROUSEL_VISIBLE_COUNT
                  }
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function MemberUnitCard({
  unit,
  decorative = false
}: {
  unit: MemberUnit
  decorative?: boolean
}) {
  return (
    <article
      aria-hidden={decorative}
      className='overflow-hidden rounded-[8px] bg-white'
      style={{ height: `${MEMBER_UNIT_CARD_HEIGHT}px` }}
    >
      <div
        className='relative overflow-hidden rounded-t-[8px]'
        style={{ height: `${MEMBER_UNIT_CARD_IMAGE_HEIGHT}px` }}
      >
        <Image
          src={unit.imageSrc}
          alt={unit.title}
          fill
          sizes='(min-width: 1720px) 480px, (min-width: 1024px) 50vw, 100vw'
          className='object-cover'
        />
      </div>

      <div
        className='rounded-b-[8px] bg-[#F6F6F6] px-[20px] pb-[22px] pt-[20px]'
        style={{ height: `${MEMBER_UNIT_CARD_PANEL_HEIGHT}px` }}
      >
        <h3
          className={`${miSansBold.className} max-w-[280px] truncate whitespace-nowrap text-[20px] leading-normal text-[#282828]`}
        >
          {unit.title}
        </h3>
        <p
          className={`${miSansRegular.className} mt-[15px] max-w-[440px] line-clamp-3 text-[14px] leading-[22px] text-[#666666]`}
          title={unit.description}
        >
          {unit.description}
        </p>
      </div>
    </article>
  )
}

function MemberUnitsSection() {
  const memberViewportRef = useRef<HTMLDivElement | null>(null)
  const memberCount = memberUnits.length
  const memberDesktopBaseIndex = memberCount
  const [memberCarouselIndex, setMemberCarouselIndex] = useState(
    memberDesktopBaseIndex
  )
  const [memberViewportWidth, setMemberViewportWidth] = useState(0)
  const [isMemberAnimating, setIsMemberAnimating] = useState(false)
  const [isMemberResetting, setIsMemberResetting] = useState(false)
  const memberCardWidth =
    memberViewportWidth > 0
      ? Math.min(MEMBER_UNIT_CARD_WIDTH, memberViewportWidth)
      : MEMBER_UNIT_CARD_WIDTH
  const visibleMemberCount =
    memberViewportWidth >= MEMBER_UNIT_CARD_WIDTH * 3 + MEMBER_UNIT_MIN_GAP * 2
      ? 3
      : memberViewportWidth >= MEMBER_UNIT_CARD_WIDTH * 2 + MEMBER_UNIT_MIN_GAP
        ? 2
        : 1
  const memberGap = visibleMemberCount > 1 ? MEMBER_UNIT_MIN_GAP : 0
  const memberStep = memberCardWidth + memberGap
  const activeMemberIndex =
    ((memberCarouselIndex % memberCount) + memberCount) % memberCount
  const desktopMemberUnits = [...memberUnits, ...memberUnits, ...memberUnits]
  const memberControlsDisabled = memberCount <= visibleMemberCount

  useEffect(() => {
    const viewport = memberViewportRef.current

    if (!viewport || typeof ResizeObserver === 'undefined') {
      return
    }

    const updateViewportWidth = () => {
      setMemberViewportWidth(viewport.clientWidth)
    }

    updateViewportWidth()

    const resizeObserver = new ResizeObserver(() => {
      updateViewportWidth()
    })

    resizeObserver.observe(viewport)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  const handleMemberPrevious = () => {
    if (memberControlsDisabled || isMemberAnimating) {
      return
    }

    setIsMemberAnimating(true)
    setMemberCarouselIndex((currentIndex) => currentIndex - 1)
  }

  const handleMemberNext = () => {
    if (memberControlsDisabled || isMemberAnimating) {
      return
    }

    setIsMemberAnimating(true)
    setMemberCarouselIndex((currentIndex) => currentIndex + 1)
  }

  const handleMemberAnimationComplete = () => {
    if (isMemberResetting) {
      setIsMemberResetting(false)
      setIsMemberAnimating(false)
      return
    }

    if (memberCarouselIndex <= 0 || memberCarouselIndex >= memberCount * 2) {
      setIsMemberResetting(true)
      setMemberCarouselIndex(memberDesktopBaseIndex + activeMemberIndex)
      return
    }

    setIsMemberAnimating(false)
  }

  return (
    <section id='member-units' className='bg-white'>
      <div className='page-shell pb-[100px] pt-[100px]'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2
              className={`${miSansBold.className} text-[2.25rem] leading-none text-[#282828] sm:text-[2.5rem]`}
            >
              中试基地成员单位
            </h2>
          </motion.div>

          <div className='flex items-center gap-4 self-start lg:pt-1'>
            <CarouselArrow
              direction='previous'
              onClick={handleMemberPrevious}
              label='查看上一个成员单位'
              disabled={memberControlsDisabled}
            />
            <CarouselArrow
              direction='next'
              onClick={handleMemberNext}
              label='查看下一个成员单位'
              disabled={memberControlsDisabled}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.2 }}
          className='mt-[50px]'
        >
          <div ref={memberViewportRef} className='w-full overflow-hidden'>
            <motion.div
              initial={false}
              animate={{ x: -memberCarouselIndex * memberStep }}
              transition={
                isMemberResetting
                  ? { duration: 0 }
                  : { duration: 0.52, ease: [0.22, 1, 0.36, 1] }
              }
              onAnimationComplete={handleMemberAnimationComplete}
              className='flex w-max items-stretch'
              style={{ gap: `${memberGap}px` }}
            >
              {desktopMemberUnits.map((unit, index) => (
                <div
                  key={`${unit.title}-${index}`}
                  className='shrink-0'
                  style={{ width: `${memberCardWidth}px` }}
                >
                  <MemberUnitCard
                    unit={unit}
                    decorative={
                      index < memberCarouselIndex ||
                      index >= memberCarouselIndex + visibleMemberCount
                    }
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Achievements() {
  const featuredCard = researchCards[0]
  const secondaryCards = researchCards.slice(1)

  return (
    <>
      <section
        id='achievements'
        className='relative overflow-hidden bg-[#F5F7F9] bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${getAssetPath('/features-bg.png')})`
        }}
      >
        <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(9,38,35,0.44)_0%,rgba(9,38,35,0.36)_52%,rgba(9,38,35,0.44)_100%)]' />
        <div className='relative z-10 page-shell flex min-h-[850px] items-center'>
          <div className='w-full'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              className='mb-12'
            >
              <h2
                className={`${miSansBold.className} text-[2.25rem] leading-none text-white sm:text-[2.5rem]`}
              >
                科研成果
              </h2>
              <p
                className={`${miSansRegular.className} mt-4 text-base leading-8 text-white sm:text-lg sm:leading-9`}
              >
                通过持续创新和技术攻关，在地热能开发利用领域取得了一系列重要突破，为行业发展提供了强有力的技术支撑
              </p>
            </motion.div>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-[minmax(0,1.65fr)_repeat(3,minmax(0,1fr))]'>
              <FeaturedResearchCard card={featuredCard} />
              {secondaryCards.map((card, index) => (
                <ResearchStatCard key={card.title} card={card} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <DemoProjectsSection />
      <MemberUnitsSection />
    </>
  )
}
