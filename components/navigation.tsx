'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationItem {
  name: string
  href: string
  submenu?: { name: string; href: string }[]
}

const navigationItems: NavigationItem[] = [
  { name: '首页', href: '/' },
  { name: '基地概览', href: '/overview' },
  { name: '服务清单', href: '/services' },
  { name: '加入平台', href: '/join' },
  // {
  //   name: '技术体系',
  //   href: '#technology',
  //   submenu: [
  //     { name: '技术研发', href: '#technology-research' },
  //     { name: '产品试制', href: '#technology-products' },
  //     { name: '工艺改进', href: '#technology-process' }
  //   ]
  // },
  // { name: '智慧运维', href: '#operations' },
  // { name: '投资评价', href: '#investment' },
  { name: '成果展示', href: '/achievements' },
  { name: '产学研合作', href: '/cooperation' },
  { name: '关于我们', href: '/about' }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  return (
    <nav className='bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-geothermal-gradient rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>G</span>
              </div>
              <span className='text-xl font-bold text-geothermal-gray'>
                陕西省地热能开发利用技术中试基地
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navigationItems.map((item) => (
              <div key={item.name} className='relative group'>
                <Link
                  href={item.href}
                  className='text-gray-700 hover:text-geothermal-orange transition-colors duration-200 flex items-center space-x-1'
                  onMouseEnter={() =>
                    item.submenu && setActiveSubmenu(item.name)
                  }
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className='w-4 h-4' />}
                </Link>

                {item.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className='absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2'
                        onMouseEnter={() => setActiveSubmenu(item.name)}
                        onMouseLeave={() => setActiveSubmenu(null)}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-geothermal-orange hover:text-white transition-colors duration-200'
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700 hover:text-geothermal-orange'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-white border-t border-gray-200'
          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-geothermal-orange hover:bg-gray-50 rounded-md'
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className='ml-4 space-y-1'>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className='block px-3 py-2 text-sm text-gray-600 hover:text-geothermal-orange hover:bg-gray-50 rounded-md'
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
