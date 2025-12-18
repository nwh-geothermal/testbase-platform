'use client'

import { Megaphone, X, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

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
  const [closed, setClosed] = useState(false)

  if (closed) return null

  return (
    <aside className='hidden lg:block fixed left-4 top-1/3 z-50'>
      <div className='w-72 rounded-2xl bg-white/90 backdrop-blur shadow-xl border border-white/60 overflow-hidden'>
        <div className='flex items-center justify-between px-4 py-3 bg-gradient-to-r from-geothermal-blue/90 to-geothermal-green/90 text-white'>
          <div className='flex items-center gap-2'>
            <Megaphone className='w-4 h-4' />
            <div className='text-sm font-semibold'>资讯</div>
          </div>
          <button
            aria-label='关闭资讯'
            onClick={() => setClosed(true)}
            className='p-1 rounded-full hover:bg-white/20 transition-colors'
          >
            <X className='w-4 h-4' />
          </button>
        </div>
        <div className='divide-y divide-gray-200/70 bg-white/90'>
          {newsItems.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className='group flex items-start gap-2 px-4 py-3 hover:bg-geothermal-blue/5 transition-colors'
            >
              <ExternalLink className='w-4 h-4 mt-0.5 text-geothermal-blue/70 group-hover:text-geothermal-blue' />
              <p
                className={cn(
                  'text-sm text-gray-800 leading-snug group-hover:text-geothermal-blue'
                )}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
