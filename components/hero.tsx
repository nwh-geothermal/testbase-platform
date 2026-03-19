'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getAssetPath } from '@/lib/utils'
import { useState } from 'react'
import { miSansBold, miSansRegular } from '@/app/fonts'
import { Button } from '@/components/ui/button'
import { NewsFloat } from '@/components/news-float'

export function Hero() {
  const carouselImages = [
    { src: getAssetPath('/overview.jpg'), alt: 'Demo 2.5-D' },
    { src: getAssetPath('/meeting1.jpg'), alt: 'Meeting with experts' },
    { src: getAssetPath('/lab1.jpg'), alt: 'Testbase lab' }
  ]
  const [currentSlide, setCurrentSlide] = useState(0)

  const mediaWidthClass =
    'w-full max-w-[clamp(14rem,70vw,20rem)] sm:max-w-[clamp(18rem,70vw,26rem)] md:max-w-[clamp(22rem,64vw,32rem)] lg:max-w-[clamp(22rem,36vw,32rem)] xl:max-w-[clamp(26rem,34vw,36rem)] 2xl:max-w-none mx-auto lg:mx-0 xl:ml-auto'

  return (
    <section className='relative min-h-[100svh] flex items-center justify-center overflow-hidden py-4 sm:py-6 lg:py-10'>
      {/* 背景渐变 */}
      <div className='absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_20%_25%,rgba(255,255,255,0.35),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,182,116,0.35),transparent_28%),linear-gradient(135deg,#f8fafc,#e0f2fe_45%,#fde68a)]' />
      <div className='absolute inset-0 bg-[linear-gradient(112deg,rgba(7,33,47,0.7)_0%,rgba(18,63,88,0.54)_28%,rgba(35,92,122,0.18)_54%,rgba(255,255,255,0)_76%)]' />
      <div className='page-shell relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='flex flex-col gap-[clamp(1.25rem,3.2vw,2.5rem)] lg:flex-row lg:items-center lg:justify-start lg:gap-6 xl:gap-10 2xl:gap-14'>
            <div className='flex w-full flex-col justify-center text-center lg:w-[54%] xl:w-[52%] 2xl:w-[50%] lg:text-left'>
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
                  className={`${miSansRegular.className} h-[50px] w-[160px] rounded-[100px] border border-white/90 bg-transparent px-0 text-[16px] font-normal leading-normal text-white shadow-none hover:bg-transparent hover:text-white`}
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
                      width='7'
                      height='12'
                      viewBox='0 0 7 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='shrink-0'
                      aria-hidden='true'
                    >
                      <path
                        d='M0.266725 11.7493C0.102935 11.5887 0.0109232 11.3709 0.0109232 11.1438C0.0109232 10.9167 0.102935 10.6989 0.266725 10.5383L4.89112 6.00535L0.266725 1.47241C0.18328 1.39341 0.11672 1.29891 0.0709316 1.19442C0.0251428 1.08994 0.00104109 0.977559 3.29895e-05 0.863846C-0.000975113 0.750134 0.0211306 0.637363 0.06506 0.532114C0.108989 0.426865 0.173863 0.331245 0.255896 0.250835C0.337928 0.170425 0.435476 0.106834 0.542848 0.0637735C0.650221 0.0207127 0.765267 -0.000955832 0.881273 3.23373e-05C0.99728 0.00102051 1.11192 0.0246456 1.21852 0.069529C1.32511 0.114412 1.42152 0.179655 1.50211 0.261451L6.7442 5.39988C6.90799 5.56047 7 5.77827 7 6.00535C7 6.23244 6.90799 6.45023 6.7442 6.61083L1.50211 11.7493C1.33827 11.9098 1.11609 12 0.884417 12C0.652748 12 0.430565 11.9098 0.266725 11.7493Z'
                        fill='white'
                      />
                    </svg>
                  </Link>
                </Button>

                <Button
                  variant='ghost'
                  size='lg'
                  data-node-id='1:355'
                  className={`${miSansRegular.className} h-[50px] w-[160px] rounded-[100px] border border-white/90 bg-transparent px-0 text-[16px] font-normal leading-normal text-white shadow-none hover:bg-transparent hover:text-white`}
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

              <div className='text-sm text-gray-300 lg:text-base lg:text-gray-300/95'>
                承办单位 -{' '}
                <Link
                  href='https://www.nwh.cn/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-gray-300/95 hover:text-gray-200'
                >
                  中国电建集团西北勘测设计研究院
                </Link>
              </div>
            </div>

            <div className='w-full lg:w-[48%] xl:w-[50%] 2xl:w-[52%]'>
              <div className='mb-[clamp(2rem,4vw,3.5rem)] lg:mb-[clamp(1.5rem,3vh,2.5rem)]'>
                <div
                  className={`relative ${mediaWidthClass} aspect-[16/10] sm:aspect-[16/9] xl:aspect-[3/2] overflow-hidden rounded-2xl  bg-white/40 shadow-2xl backdrop-blur`}
                >
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className='absolute inset-0'
                    >
                      <Image
                        src={carouselImages[currentSlide].src}
                        alt={carouselImages[currentSlide].alt}
                        fill
                        priority
                        sizes='(max-width: 640px) 86vw, (max-width: 768px) 78vw, (max-width: 1024px) 78vw, (max-width: 1440px) 820px, 980px'
                        className='object-cover'
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent' />
                  <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur'>
                    {carouselImages.map((_, index) => (
                      <button
                        key={carouselImages[index].src}
                        type='button'
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2.5 w-2.5 rounded-full transition ${
                          index === currentSlide
                            ? 'bg-white'
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <NewsFloat inline containerClassName={mediaWidthClass} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 滚动指示器 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce' />
        </div>
      </motion.div>
    </section>
  )
}
