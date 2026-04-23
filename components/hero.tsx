'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getAssetPath } from '@/lib/utils'
import { useState } from 'react'
import { miSansBold, miSansRegular } from '@/app/fonts'
import { Button } from '@/components/ui/button'
import { NewsFloat } from '@/components/news-float'

export function Hero() {
  const carouselImages: Array<{
    src: string
    alt: string
    imageClassName?: string
  }> = [
    { src: getAssetPath('/lab1.jpg'), alt: 'Testbase lab' },
    { src: getAssetPath('/meeting1.jpg'), alt: 'Meeting with experts' },
    { src: getAssetPath('/overview.png'), alt: 'Demo 2.5-D' }
  ]
  const carouselHandleNodeIds = ['1:42', '1:43', '1:44']
  const [currentSlide, setCurrentSlide] = useState(0)

  const newsWidthClass =
    'w-full md:max-w-[min(1000px,calc(100vw-1rem))] lg:max-w-[1000px]'

  return (
    <section className='relative min-h-[100svh] flex items-center justify-center overflow-hidden py-4 sm:py-6 lg:py-10'>
      <div className='absolute inset-0 bg-[#0b3734]' />
      <AnimatePresence initial={false} mode='sync'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className='absolute inset-0'
        >
          <Image
            src={carouselImages[currentSlide].src}
            alt={carouselImages[currentSlide].alt}
            fill
            priority
            sizes='100vw'
            className={`object-cover ${carouselImages[currentSlide].imageClassName ?? ''}`}
          />
        </motion.div>
      </AnimatePresence>
      <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(26,142,133,0.84)_0%,rgba(26,142,133,0.72)_22%,rgba(26,142,133,0.48)_46%,rgba(26,142,133,0.2)_72%,rgba(26,142,133,0)_100%)]' />
      <div className='absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.24),transparent_30%),radial-gradient(circle_at_82%_14%,rgba(251,191,36,0.18),transparent_22%),linear-gradient(180deg,rgba(3,11,19,0.12),rgba(3,11,19,0.46))]' />
      <div className='page-shell relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='flex min-h-[calc(100svh-8rem)] items-center'>
            <div className='flex w-full max-w-[46rem] flex-col justify-center text-center lg:text-left'>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12 }}
                data-node-id='1:23'
                className={`${miSansBold.className} -mt-4 mb-[clamp(1.25rem,2.4vw,2rem)] whitespace-nowrap text-[clamp(2.2rem,4.8vw,3.5rem)] leading-normal tracking-normal text-white`}
              >
                陕西省地热能开发利用技术中试基地
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                data-node-id='1:25'
                className={`${miSansRegular.className} mb-[clamp(1.4rem,2.5vw,2.25rem)] max-w-[42rem] text-[1rem] leading-[1.85] text-white sm:text-[1.1rem] md:text-[1.25rem] md:leading-[2rem] lg:mb-[clamp(1.75rem,3.5vh,2.75rem)] lg:max-w-[41.5rem]`}
              >
                集技术研发、产品试制、工艺改进、投资评价于一体的地热能全产业链技术集成与推广基地
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='mb-[clamp(2rem,4vw,3rem)] flex flex-col items-center gap-4 sm:flex-row sm:gap-5 lg:mb-[clamp(2rem,4vh,3.25rem)] lg:justify-start'
              >
                <Button
                  variant='ghost'
                  size='lg'
                  asChild
                  className={`${miSansRegular.className} h-[50px] w-[160px] rounded-[100px] border border-white/90 bg-transparent px-0 text-[16px] font-normal leading-normal text-white shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/12 hover:text-white`}
                >
                  <Link
                    href='#technology'
                    data-node-id='1:90'
                    className='inline-flex items-center justify-center gap-[5px] leading-none'
                  >
                    <span
                      data-node-id='1:91'
                      className='inline-flex items-center'
                    >
                      探索技术体系
                    </span>
                    <svg
                      width='5'
                      height='7'
                      viewBox='0 0 5 7'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='shrink-0'
                      aria-hidden='true'
                    >
                      <path
                        d='M1 1L4 3.5L1 6'
                        stroke='white'
                        strokeWidth='1'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Link>
                </Button>

                <Button
                  variant='ghost'
                  size='lg'
                  data-node-id='1:355'
                  className={`${miSansRegular.className} h-[50px] w-[160px] rounded-[100px] border border-white/90 bg-transparent px-0 text-[16px] font-normal leading-normal text-white shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/12 hover:text-white`}
                >
                  <div data-node-id='1:356'>观看介绍视频</div>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      d='M7 0C10.8608 0 14 3.13921 14 7C14 10.8608 10.8608 14 7 14C3.13923 14 6.64652e-06 10.8608 0 7C0 3.13922 3.13922 6.82874e-06 7 0ZM7 1.06543C3.72766 1.06544 1.06543 3.72766 1.06543 7C1.06544 10.2723 3.72766 12.9346 7 12.9346C10.2723 12.9346 12.9346 10.2723 12.9346 7C12.9346 3.72765 10.2723 1.06543 7 1.06543ZM5.76758 4.56641C6.11367 4.38283 6.53169 4.40699 6.85645 4.62793L8.93262 6.13184C9.21752 6.32887 9.38867 6.65386 9.38867 7C9.38867 7.3488 9.21503 7.67602 8.9248 7.87305L6.86719 9.36426C6.67814 9.49206 6.46718 9.55566 6.25684 9.55566C6.08929 9.55561 5.92184 9.51599 5.76758 9.43359C5.59778 9.34388 5.45545 9.20946 5.35645 9.04492C5.25743 8.8802 5.20466 8.69121 5.20508 8.49902V5.50098C5.20508 5.10957 5.42144 4.75013 5.76758 4.56641ZM6.26758 8.49902L8.3125 7.00293L8.30762 6.99707H8.3125L6.24121 5.49805L6.26758 8.49902Z'
                      fill='white'
                    />
                  </svg>
                </Button>
              </motion.div>

              <div
                className={`${miSansRegular.className} flex items-center justify-center gap-3 text-sm text-gray-300 lg:justify-start lg:text-base lg:text-gray-300/95`}
              >
                <span>承办单位</span>
                <span
                  aria-hidden='true'
                  className='h-4 w-px bg-white/35 lg:h-[18px]'
                />
                <Link
                  href='https://www.nwh.cn/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`${miSansRegular.className} inline-flex items-center gap-1.5 text-gray-300/95 hover:text-gray-200`}
                >
                  <span>中国电建集团西北勘测设计研究院</span>
                  <ExternalLink className='h-3.5 w-3.5 shrink-0' />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className='absolute bottom-0 left-0 right-0 z-10 flex justify-end'
      >
        <NewsFloat inline containerClassName={newsWidthClass} />
      </motion.div>

      <div className='page-shell pointer-events-none absolute bottom-5 left-0 right-0 z-10 lg:bottom-6'>
        <div className='flex'>
          <div className='flex w-full max-w-[46rem] items-center gap-3 sm:gap-4'>
            {carouselImages.map((image, index) => (
              <button
                key={image.src}
                type='button'
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                data-node-id={carouselHandleNodeIds[index]}
                className='pointer-events-auto group flex h-6 items-center'
              >
                <span
                  className={`block h-[2px] w-[78px] transition-opacity duration-300 ${
                    index === currentSlide
                      ? 'bg-white opacity-100'
                      : 'bg-white opacity-40 group-hover:opacity-70'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 滚动指示器 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className='absolute bottom-24 left-1/2 transform -translate-x-1/2 md:bottom-8'
      >
        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce' />
        </div>
      </motion.div>
    </section>
  )
}
