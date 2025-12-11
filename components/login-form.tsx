'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react'
import { useAuth } from '@/lib/auth-hooks'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { toast } from 'sonner'
import Link from 'next/link'

export function LoginForm() {
  const { signIn } = useAuth()
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const { data, error: authError } = await signIn(
        formData.email,
        formData.password
      )

      if (authError) {
        setError(authError.message)
        setIsSubmitting(false)
        return
      }

      // If login successful, show success toast and redirect
      toast.success('登录成功！')
      router.push('/')
    } catch (err) {
      toast.error('登录失败，请稍后重试')
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.email && formData.password

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className='w-full max-w-md'
      >
        <Card>
          <CardHeader className='text-center'>
            <CardTitle className='text-2xl font-bold'>登录平台</CardTitle>
            <CardDescription>
              欢迎回到陕西省地热能开发利用技术中试基地平台
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-4'>
              {/* Email Field */}
              <div className='space-y-2'>
                <Label htmlFor='email'>邮箱地址 *</Label>
                <div className='relative'>
                  <Mail className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
                  <Input
                    id='email'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='pl-10'
                    placeholder='请输入邮箱地址'
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className='space-y-2'>
                <Label htmlFor='password'>密码 *</Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    value={formData.password}
                    onChange={handleInputChange}
                    className='pl-10 pr-10'
                    placeholder='请输入密码'
                    required
                  />
                  <Button
                    type='button'
                    variant='ghost'
                    size='sm'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-1 top-1 h-8 w-8 p-0'
                  >
                    {showPassword ? (
                      <EyeOff className='w-4 h-4' />
                    ) : (
                      <Eye className='w-4 h-4' />
                    )}
                  </Button>
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <Alert variant='destructive'>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <Button
                type='submit'
                disabled={!isFormValid || isSubmitting}
                className='w-full'
              >
                {isSubmitting ? (
                  <>
                    <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2' />
                    <div>登录中...</div>
                  </>
                ) : (
                  <>
                    <LogIn className='w-4 h-4 mr-2' />
                    <div>登录</div>
                  </>
                )}
              </Button>

              {/* Register Link */}
              <div className='text-center'>
                <p className='text-sm text-gray-600'>
                  还没有账户？{' '}
                  <Link
                    href='/join'
                    className='font-medium text-primary hover:underline'
                  >
                    立即注册
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
