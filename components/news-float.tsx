'use client'

import { ExternalLink, Megaphone } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const newsItems = [
  {
    title: '陕西地热产业动态：推进勘探与示范项目',
    link: '/achievements'
  },
  {
    title: '基地实践基地：联动高校开展产学研实训',
    link: '/cooperation'
  },
  {
    title: '服务清单更新：新增测井数据、运行数据套餐',
    link: '/services'
  }
]

export function NewsFloat() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const update = () => {
      // 仅在首屏显示，滚动超过 0.9 屏后隐藏
      setShow(window.scrollY < window.innerHeight * 0.9)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  if (!show) return null

  return (
    <aside className='hidden lg:block absolute left-4 top-1/3 z-20'>
      <div className='w-80 rounded-2xl bg-white/85 backdrop-blur shadow-xl border border-white/60 overflow-hidden'>
        <div className='flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-geothermal-blue/90 to-geothermal-green/90 text-white'>
          <Megaphone className='w-4 h-4' />
          <div className='text-sm font-semibold'>资讯</div>
        </div>
        <div className='divide-y divide-gray-200/70 bg-white/80'>
          {newsItems.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className='group flex items-start gap-3 px-4 py-3 hover:bg-geothermal-blue/5 transition-colors'
            >
              <ExternalLink className='w-4 h-4 mt-0.5 text-geothermal-blue/70 group-hover:text-geothermal-blue' />
              <p className='text-sm text-gray-800 leading-snug group-hover:text-geothermal-blue'>
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
