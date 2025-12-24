'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getAssetPath } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { NewsFloat } from '@/components/news-float'

export function Hero() {
  const carouselImages = [
    { src: getAssetPath('/overview.jpg'), alt: 'Demo 2.5-D' },
    { src: getAssetPath('/meeting1.jpg'), alt: 'Meeting with experts' },
    { src: getAssetPath('/lab1.jpg'), alt: 'Testbase lab' }
  ]
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [carouselImages.length])

  const mediaWidthClass =
    'w-full max-w-[clamp(14rem,70vw,20rem)] sm:max-w-[clamp(18rem,70vw,26rem)] md:max-w-[clamp(22rem,64vw,32rem)] lg:max-w-[clamp(22rem,36vw,32rem)] xl:max-w-[clamp(26rem,34vw,36rem)] 2xl:max-w-none mx-auto lg:mx-0 xl:ml-auto'

  return (
    <section className='relative min-h-[100svh] flex items-center justify-center overflow-hidden py-4 sm:py-6 lg:py-10'>
      {/* 背景渐变 */}
      <div className='absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_20%_25%,rgba(255,255,255,0.35),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,182,116,0.35),transparent_28%),linear-gradient(135deg,#f8fafc,#e0f2fe_45%,#fde68a)]' />
      <div className='relative z-10 w-full max-w-[clamp(24rem,95vw,110rem)] mx-auto px-4 sm:px-6 lg:px-28'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='flex flex-col gap-[clamp(1.25rem,3.2vw,2.5rem)] lg:flex-row lg:items-center lg:justify-start lg:gap-6 xl:gap-10 2xl:gap-14'>
            <div className='flex w-full flex-col justify-center text-center lg:w-[54%] xl:w-[52%] 2xl:w-[50%] lg:text-left'>
              <h1 className='text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-black -mt-6 mb-[clamp(1.5rem,3vw,2.75rem)] lg:mb-[clamp(2rem,4vh,3.25rem)] leading-tight'>
                <div className='lg:whitespace-nowrap'>陕西省地热能开发利用</div>
                <div className='mt-4 text-geothermal-orange'>技术中试基地</div>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-base md:text-lg xl:text-xl text-black/70 mb-[clamp(1.25rem,2.5vw,2.25rem)] lg:mb-[clamp(1.75rem,3.5vh,2.75rem)] max-w-2xl leading-relaxed lg:max-w-none'
              >
                集技术研发、产品试制、工艺改进、投资评价于一体的
                <br />
                <strong className='block font-semibold'>
                  地热能全产业链技术集成与推广基地
                </strong>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-[clamp(2rem,4vw,3rem)] lg:mb-[clamp(2rem,4vh,3.25rem)] lg:justify-start'
              >
                <Button
                  size='lg'
                  asChild
                  className='border-2 border-white/80 text-geothermal-blue bg-white/60 hover:bg-white hover:text-geothermal-blue rounded-full px-6 py-4 text-base md:px-8 md:py-6 md:text-lg shadow-sm backdrop-blur'
                >
                  <Link
                    href='#technology'
                    className='flex items-center space-x-2'
                  >
                    <div>探索技术体系</div>
                    <ChevronRight className='w-5 h-5' />
                  </Link>
                </Button>

                <Button
                  variant='outline'
                  size='lg'
                  className='border-2 border-white/80 text-geothermal-blue bg-white/60 hover:bg-white hover:text-geothermal-blue rounded-full px-6 py-4 text-base md:px-8 md:py-6 md:text-lg shadow-sm backdrop-blur'
                >
                  <Play className='w-5 h-5 mr-2' />
                  <div>观看介绍视频</div>
                </Button>
              </motion.div>

              <div className='text-sm text-black/70 lg:text-base lg:text-black/80'>
                承办单位 -{' '}
                <Link
                  href='https://www.nwh.cn/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-geothermal-blue hover:text-geothermal-blue/80'
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
