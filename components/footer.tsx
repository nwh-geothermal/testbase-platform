import Link from 'next/link'
import { Mail, Phone, Printer, MapPin, Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className='bg-geothermal-gray text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* 基地介绍 */}
          <div className='col-span-1 md:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <h3 className='text-xl font-bold'>
                中国电建集团西北勘测设计研究院有限公司
              </h3>
            </div>
            <p className='text-gray-300 mb-4 leading-relaxed'>
              在水电与抽水蓄能、新能源与电力、水利与生态环境、城乡建设与基础设施等领域，融合规划咨询、勘测设计、工程承包与投资运营于一体，提供覆盖全过程的一体化智慧服务。
            </p>
            <div className='flex space-x-4'>
              <a
                href='http://www.nwh.cn'
                className='text-gray-300 hover:text-geothermal-orange transition-colors'
              >
                <Globe className='w-5 h-5' />
              </a>
              <a
                href='mailto:geothermal-base@nwh.cn'
                className='text-gray-300 hover:text-geothermal-orange transition-colors'
              >
                <Mail className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>快速链接</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#technology'
                  className='text-gray-300 hover:text-geothermal-orange transition-colors'
                >
                  技术体系
                </Link>
              </li>
              {/* <li>
                <Link
                  href='#operations'
                  className='text-gray-300 hover:text-geothermal-orange transition-colors'
                >
                  智慧运维
                </Link>
              </li> */}
              <li>
                <Link
                  href='#achievements'
                  className='text-gray-300 hover:text-geothermal-orange transition-colors'
                >
                  成果展示
                </Link>
              </li>
              <li>
                <Link
                  href='#cooperation'
                  className='text-gray-300 hover:text-geothermal-orange transition-colors'
                >
                  产学研合作
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>联系我们</h4>
            <div className='space-y-3'>
              <div className='flex items-center space-x-2'>
                <MapPin className='w-4 h-4 text-geothermal-orange' />
                <span className='text-gray-300 text-sm'>
                  陕西省西安市长安区城南大道18号
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <Phone className='w-4 h-4 text-geothermal-orange' />
                <span className='text-gray-300 text-sm'>+86-29-89810100</span>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm'>
            © 2025 中国电建集团西北勘测设计研究院有限公司. 保留所有权利.
          </p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <Link
              href='#privacy'
              className='text-gray-400 hover:text-geothermal-orange text-sm transition-colors'
            >
              隐私政策
            </Link>
            <Link
              href='#terms'
              className='text-gray-400 hover:text-geothermal-orange text-sm transition-colors'
            >
              使用条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
