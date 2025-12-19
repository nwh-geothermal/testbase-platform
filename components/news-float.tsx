'use client'

import { ExternalLink, Megaphone } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const newsItems = [
  {
    title: '中国电建西北院获批省级产业技术中试基地建设',
    link: 'https://mp.weixin.qq.com/s/HKcR-r8RtmOsPydXQd5EUQ'
  },
  {
    title: '中国电建两项绿色技术入选国家发改委绿色低碳转型产业指导目录',
    link: 'https://www.powerchina.cn/col/col7440/art/2025/art_23f6279f41c24108970ab375a7a547de.html'
  },
  {
    title: '西北院再获国资委“科改行动”考评“标杆”等级',
    link: 'https://mp.weixin.qq.com/s/Mr932dq2lnPIzqbuS79PtQ'
  },
  {
    title: '城建五载织经纬 奋楫笃行筑未来丨七五征程 · 同心筑梦',
    link: 'https://mp.weixin.qq.com/s/ca9lGgKzsiHn5LXQ4UUrdA'
  }
]

type NewsFloatProps = {
  inline?: boolean
}

export function NewsFloat({ inline = false }: NewsFloatProps) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (inline) return
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
  }, [inline])

  if (!inline && !show) return null

  const containerClasses = inline ? 'max-w-4xl mx-auto' : 'hidden'

  const cardClasses = inline
    ? 'w-full rounded-2xl bg-white/85 backdrop-blur shadow-xl border border-white/60 overflow-hidden'
    : 'w-80 rounded-2xl bg-white/85 backdrop-blur shadow-xl border border-white/60 overflow-hidden'

  return (
    <aside className={containerClasses}>
      <div className={cardClasses}>
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
