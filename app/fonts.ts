import localFont from 'next/font/local'

export const alimamaShuHeiTi = localFont({
  src: './fonts/AlimamaShuHeiTi-Bold.woff2',
  display: 'swap',
  fallback: ['MiSans', 'PingFang SC', 'Microsoft YaHei', 'sans-serif']
})

export const miSansBold = localFont({
  src: './fonts/MiSans-Bold.woff2',
  display: 'swap',
  fallback: ['MiSans', 'PingFang SC', 'Microsoft YaHei', 'sans-serif']
})

export const miSansRegular = localFont({
  src: './fonts/MiSans-Regular.woff2',
  display: 'swap',
  fallback: ['MiSans', 'PingFang SC', 'Microsoft YaHei', 'sans-serif']
})
