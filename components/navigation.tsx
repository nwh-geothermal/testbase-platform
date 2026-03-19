'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, LogOut, LogIn, ClipboardList, Blocks } from 'lucide-react'
import { useAuthContext } from './auth-provider'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { alimamaShuHeiTi, miSansRegular } from '@/app/fonts'

interface NavigationItem {
  name: string
  href: string
  submenu?: { name: string; href: string }[]
}

const navigationItems: NavigationItem[] = [
  { name: '首页', href: '/' },
  { name: '基地概览', href: '/overview' },
  { name: '成果展示', href: '/achievements' },
  { name: '服务清单', href: '/services' },
  { name: '数据共享', href: '/datapool' },
  { name: '加入平台', href: '/join' },
  { name: '产学研合作', href: '/cooperation' },
  { name: '地热协会', href: '/association' }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, loading, signOut } = useAuthContext()
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  // Check if user is admin (can be extended to check database or user metadata)
  // For testing purposes, also allow specific email to be admin
  const isAdmin =
    user?.user_metadata?.role === 'admin' ||
    user?.app_metadata?.role === 'admin'

  // Filter navigation items based on user authentication status and role
  const visibleNavigationItems = navigationItems.filter((item) => {
    // Hide "加入平台" if user is logged in
    if (item.name === '加入平台' && user) {
      return false
    }
    return true
  })

  // Add menu items based on user role
  const allNavigationItems = isAdmin
    ? [
        ...visibleNavigationItems,
        { name: '服务申请', href: '/admin/service-inquiries' }
      ]
    : user
    ? [...visibleNavigationItems]
    : visibleNavigationItems

  const handleSignOut = async () => {
    await signOut()
  }

  const desktopLinkClass = (href: string) =>
    cn(
      miSansRegular.className,
      'relative flex h-[21px] items-center whitespace-nowrap py-0 text-[16px] font-normal leading-[21px] text-white transition-colors duration-200 hover:text-white after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-white/85 after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100',
      isActive(href) &&
        'text-white after:opacity-100'
    )

  const isHomePage = pathname === '/'

  return (
    <nav
      className={cn(
        'z-50 overflow-hidden',
        isHomePage
          ? 'absolute inset-x-0 top-0 bg-transparent'
          : 'sticky top-0 bg-transparent'
      )}
    >
      <div className='nav-shell relative'>
        <div className='flex h-16 items-center gap-4 md:h-[78px] md:gap-6'>
          <div className='flex min-w-0 items-center gap-3 md:flex-none lg:gap-6'>
            <Link
              href='/'
              className='flex min-w-0 items-center whitespace-nowrap md:h-[34px] lg:h-[38px] min-[1920px]:h-[45px]'
            >
              <div
                className={cn(
                  alimamaShuHeiTi.className,
                  'inline-flex h-full items-center text-[15px] font-bold leading-none tracking-[0.015em] text-white sm:text-xl md:whitespace-nowrap md:text-[24px] md:tracking-[0.02em] lg:text-[28px] min-[1920px]:text-[32px] min-[1920px]:tracking-[0.03em]'
                )}
              >
                地热能开发利用技术中试基地
              </div>
            </Link>
            <span className="hidden h-[34px] min-w-fit items-center justify-center rounded-[100px] bg-white/20 px-[10px] whitespace-nowrap lg:inline-flex">
              <Link
                href='http://www.sxsdrxh.com/'
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                  miSansRegular.className,
                  'text-[14px] font-normal text-white transition-opacity duration-200 hover:opacity-80'
                )}
              >
                陕西省地热协会
              </Link>
            </span>
          </div>

          <div className='flex-1' />

          {/* Desktop Navigation */}
          <div className='hidden min-w-0 shrink-0 items-center md:flex md:pl-8 lg:pl-12 min-[1920px]:pl-16'>
            <div className='flex items-center gap-5 lg:gap-7'>
              {allNavigationItems.map((item) => (
                <Link key={item.name} href={item.href} className={desktopLinkClass(item.href)}>
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Auth Section */}
            {!loading && (
              <div className='ml-5 flex items-center space-x-3 lg:ml-7'>
                <Separator
                  orientation='vertical'
                  className='h-6 bg-white/20'
                />
                {user ? (
                  <div className='flex items-center space-x-2'>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='h-9 w-9 rounded-full text-white hover:bg-white/12 hover:text-white'
                      asChild
                      aria-label='工作台'
                    >
                      <Link href='/user/workbench'>
                        <Blocks className='h-5 w-5' />
                      </Link>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='h-9 w-9 rounded-full border border-white/15 bg-white/10 p-0 text-white hover:bg-white/15'
                        >
                          <Avatar className='h-8 w-8'>
                            <AvatarFallback className='bg-white/15 text-sm font-semibold text-white'>
                              {user.user_metadata?.contactPerson?.charAt(0) ||
                                user.email?.charAt(0) ||
                                'U'}
                            </AvatarFallback>
                          </Avatar>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='end'>
                        <DropdownMenuItem asChild>
                          <Link
                            href='/user/service-dashboard'
                            className='flex items-center'
                          >
                            <ClipboardList className='mr-2 h-4 w-4' />
                            <div>服务进度</div>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleSignOut}>
                          <LogOut className='mr-2 h-4 w-4' />
                          <div>退出登录</div>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ) : (
                  <Button
                    variant='ghost'
                    className='rounded-full px-3 text-sm font-medium text-white hover:bg-white/12 hover:text-white'
                    asChild
                  >
                    <Link href='/login' className='flex items-center space-x-2'>
                      <LogIn className='w-4 h-4' />
                      <div>登录</div>
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='text-white hover:bg-white/12 hover:text-white'
                >
                  <Menu className='w-6 h-6' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-80'>
                <div className='flex flex-col space-y-4 mt-6'>
                  {allNavigationItems.map((item) => (
                    <div key={item.name} className='space-y-1'>
                      <Link
                        href={item.href}
                        className={cn(
                          miSansRegular.className,
                          `block rounded-md px-4 py-3 text-base font-normal transition-colors ${
                            isActive(item.href)
                              ? 'bg-geothermal-orange/10 text-geothermal-orange'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-geothermal-orange'
                          }`
                        )}
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
                              className={cn(
                                miSansRegular.className,
                                `block rounded-md px-4 py-2 text-sm font-normal transition-colors ${
                                  isActive(subItem.href)
                                    ? 'bg-geothermal-orange/10 text-geothermal-orange'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-geothermal-orange'
                                }`
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Mobile Auth Section */}
                  {!loading && (
                    <div className='border-t pt-4 mt-4'>
                      {user ? (
                        <div className='space-y-2'>
                          <div className='flex items-center px-4 py-2 text-base font-medium text-gray-700'>
                            <Avatar className='h-6 w-6 mr-3'>
                              <AvatarFallback>
                                {user.user_metadata?.contactPerson?.charAt(0) ||
                                  user.email?.charAt(0) ||
                                  'U'}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              {user.user_metadata?.contactPerson || user.email}
                            </div>
                          </div>
                          <Button
                            variant='ghost'
                            className='w-full justify-start'
                            asChild
                            onClick={() => setIsOpen(false)}
                          >
                            <Link href='/user/workbench'>
                              <Blocks className='w-5 h-5 mr-2' />
                              <div>工作台</div>
                            </Link>
                          </Button>
                          <Button
                            variant='ghost'
                            className='w-full justify-start'
                            asChild
                            onClick={() => setIsOpen(false)}
                          >
                            <Link href='/user/service-dashboard'>
                              <ClipboardList className='w-5 h-5 mr-2' />
                              <div>服务进度</div>
                            </Link>
                          </Button>
                          <Button
                            variant='ghost'
                            className='w-full justify-start'
                            onClick={() => {
                              handleSignOut()
                              setIsOpen(false)
                            }}
                          >
                            <LogOut className='w-5 h-5 mr-2' />
                            <div>退出登录</div>
                          </Button>
                        </div>
                      ) : (
                        <Button
                          variant='ghost'
                          className='w-full justify-start'
                          asChild
                          onClick={() => setIsOpen(false)}
                        >
                          <Link href='/login'>
                            <LogIn className='w-5 h-5 mr-2' />
                            <div>登录</div>
                          </Link>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
