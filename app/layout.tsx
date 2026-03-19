import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AuthProvider } from '@/components/auth-provider'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: '陕西省地热能开发利用技术中试基地',
  description:
    '集技术研发、产品试制、工艺改进、智能监测、投资评价和成果展示于一体的国内首个地热能全产业链技术集成与推广基地',
  keywords: '地热能,中试基地,陕西省,技术研发,产学研合作'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='zh-CN' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <div className='min-h-screen flex flex-col'>
              <Navigation />
              <main className='flex-1'>{children}</main>
              <Footer />
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
