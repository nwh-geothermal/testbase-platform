'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, LogOut, LogIn, ClipboardList, Blocks } from 'lucide-react'
import { useAuthContext } from './auth-provider'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink
} from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

interface NavigationItem {
  name: string
  href: string
  submenu?: { name: string; href: string }[]
}

const navigationItems: NavigationItem[] = [
  { name: '首页', href: '/' },
  { name: '基地概览', href: '/overview' },
  { name: '成果展示', href: '/achievements' },
  { name: '产学研合作', href: '/cooperation' },
  { name: '服务清单', href: '/services' },
  { name: '加入平台', href: '/join' }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, loading, signOut } = useAuthContext()

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
            <NavigationMenu>
              <NavigationMenuList className='space-x-6'>
                {allNavigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className='text-gray-700 hover:text-geothermal-orange transition-colors duration-200 bg-transparent'>
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className='w-48 p-2'>
                            {item.submenu.map((subItem) => (
                              <NavigationMenuLink key={subItem.name} asChild>
                                <Link
                                  href={subItem.href}
                                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-geothermal-orange hover:text-white transition-colors duration-200 rounded-md'
                                >
                                  {subItem.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className='text-gray-700 hover:text-geothermal-orange transition-colors duration-200'
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Auth Section */}
            {!loading && (
              <div className='flex items-center space-x-4'>
                <Separator orientation='vertical' className='h-6' />
                {user ? (
                  <div className='flex items-center space-x-2'>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='h-8 w-8'
                      asChild
                      aria-label='工作台'
                    >
                      <Link href='/user/workbench'>
                        <Blocks className='h-5 w-5 text-gray-700 hover:text-geothermal-orange transition-colors' />
                      </Link>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='h-8 w-8 rounded-full p-0'
                        >
                          <Avatar className='h-8 w-8'>
                            <AvatarFallback>
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
                            <span>服务进度</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleSignOut}>
                          <LogOut className='mr-2 h-4 w-4' />
                          <span>退出登录</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ) : (
                  <Button variant='ghost' asChild>
                    <Link href='/login' className='flex items-center space-x-2'>
                      <LogIn className='w-4 h-4' />
                      <span>登录</span>
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
                <Button variant='ghost' size='icon'>
                  <Menu className='w-6 h-6' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-80'>
                <div className='flex flex-col space-y-4 mt-6'>
                  {allNavigationItems.map((item) => (
                    <div key={item.name} className='space-y-1'>
                      <Link
                        href={item.href}
                        className='block px-4 py-3 text-base font-medium text-gray-700 hover:text-geothermal-orange hover:bg-gray-50 rounded-md transition-colors'
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
                              className='block px-4 py-2 text-sm text-gray-600 hover:text-geothermal-orange hover:bg-gray-50 rounded-md transition-colors'
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
                            <span>
                              {user.user_metadata?.contactPerson || user.email}
                            </span>
                          </div>
                          <Button
                            variant='ghost'
                            className='w-full justify-start'
                            asChild
                            onClick={() => setIsOpen(false)}
                          >
                            <Link href='/user/workbench'>
                              <Blocks className='w-5 h-5 mr-2' />
                              <span>工作台</span>
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
                              <span>服务进度</span>
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
                            <span>退出登录</span>
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
                            <span>登录</span>
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
