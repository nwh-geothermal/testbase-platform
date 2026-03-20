'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { miSansRegular } from '@/app/fonts'

const newsItems = [
  {
    title: '中国电建两项绿色技术入选国家发改委绿色低碳转型产业指导目录',
    date: '2025-03-05',
    link: 'https://www.powerchina.cn/col/col7440/art/2025/art_23f6279f41c24108970ab375a7a547de.html'
  },
  {
    title: '中国电建西北院获批省级产业技术中试基地建设',
    date: '2025-02-26',
    link: 'https://mp.weixin.qq.com/s/HKcR-r8RtmOsPydXQd5EUQ'
  },
  {
    title: '西北院再获国资委“科改行动”考评“标杆”等级',
    date: '2025-01-17',
    link: 'https://mp.weixin.qq.com/s/Mr932dq2lnPIzqbuS79PtQ'
  },
  {
    title: '城建五载织经纬 奋楫笃行筑未来丨七五征程 · 同心筑梦',
    date: '2024-12-18',
    link: 'https://mp.weixin.qq.com/s/ca9lGgKzsiHn5LXQ4UUrdA'
  }
]

type NewsFloatProps = {
  inline?: boolean
  containerClassName?: string
}

export function NewsFloat({
  inline = false,
  containerClassName
}: NewsFloatProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<'up' | 'down'>('down')

  const goToPrevious = () => {
    setDirection('up')
    setActiveIndex((current) => (current === 0 ? current : current - 1))
  }

  const goToNext = () => {
    setDirection('down')
    setActiveIndex((current) =>
      current === newsItems.length - 1 ? current : current + 1
    )
  }

  const activeItem = newsItems[activeIndex]
  const isFirstItem = activeIndex === 0
  const isLastItem = activeIndex === newsItems.length - 1

  const containerClasses = inline
    ? containerClassName ?? 'w-full max-w-[1000px]'
    : 'hidden'

  const contentVariants = {
    enter: (currentDirection: 'up' | 'down') => ({
      opacity: 0,
      y: currentDirection === 'down' ? 12 : -12
    }),
    center: {
      opacity: 1,
      y: 0
    },
    exit: (currentDirection: 'up' | 'down') => ({
      opacity: 0,
      y: currentDirection === 'down' ? -12 : 12
    })
  }

  return (
    <aside className={containerClasses}>
      <div
        data-node-id='1:20'
        className={`${miSansRegular.className} w-full bg-white`}
      >
        <div className='flex h-[70px] items-center gap-4 px-[24px] sm:px-[30px]'>
          <div
            data-node-id='1:32'
            className='shrink-0 whitespace-nowrap text-[16px] leading-[normal] text-[#666666]'
          >
            最新资讯
          </div>

          <div className='min-w-0 flex-1 overflow-hidden'>
            <AnimatePresence custom={direction} initial={false} mode='wait'>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={contentVariants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className='flex items-center gap-4'
              >
                <Link
                  href={activeItem.link}
                  data-node-id='1:30'
                  className='min-w-0 flex-1 truncate whitespace-nowrap text-[16px] leading-[normal] text-[#282828] transition-opacity hover:opacity-75'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {activeItem.title}
                </Link>

                <div
                  data-node-id='1:31'
                  className='hidden shrink-0 whitespace-nowrap text-[16px] leading-[normal] text-[#999999] sm:block'
                >
                  {activeItem.date}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className='ml-auto flex shrink-0 flex-col items-center gap-[1px]'>
            <button
              type='button'
              onClick={goToPrevious}
              aria-label='Previous news item'
              disabled={isFirstItem}
              className={`flex h-[14px] w-[14px] items-center justify-center transition-opacity ${
                isFirstItem
                  ? 'cursor-not-allowed text-[#cfcfcf]'
                  : 'text-[#1A8E85] hover:opacity-70'
              }`}
            >
              <svg
                width='12'
                height='7'
                viewBox='0 0 12 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                data-node-id='1:89'
                aria-hidden='true'
                className='h-[7px] w-[12px]'
              >
                <path
                  d='M1 6L6 1L11 6'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <button
              type='button'
              onClick={goToNext}
              aria-label='Next news item'
              disabled={isLastItem}
              className={`flex h-[14px] w-[14px] items-center justify-center transition-opacity ${
                isLastItem
                  ? 'cursor-not-allowed text-[#9fd0cb]'
                  : 'text-[#1A8E85] hover:opacity-70'
              }`}
            >
              <svg
                width='12'
                height='7'
                viewBox='0 0 12 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                data-node-id='1:88'
                aria-hidden='true'
                className='h-[7px] w-[12px]'
              >
                <path
                  d='M1 1L6 6L11 1'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
