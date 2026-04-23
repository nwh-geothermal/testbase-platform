import Image from 'next/image'
import Link from 'next/link'
import { alimamaShuHeiTi, miSansRegular } from '@/app/fonts'
import { getAssetPath } from '@/lib/utils'

const footerLinks = [
  { label: '陕西省地热协会', href: '/association', nodeId: '13:240' },
  {
    label: '中国电建西北院',
    href: 'https://www.nwh.cn',
    isExternal: true
  }
]

const footerContactItems = [
  {
    text: '地址：陕西省西安市长安区城南大道18号',
    iconSrc: getAssetPath('/footer-map-pin.svg'),
    textNodeId: '13:228',
    iconNodeId: '13:384'
  },
  {
    text: '电话：+86-18066967290',
    iconSrc: getAssetPath('/footer-phone.svg'),
    textNodeId: '13:229',
    iconNodeId: '13:12'
  },
  {
    text: '邮箱：geothermal@nwh.cn',
    iconSrc: getAssetPath('/footer-mail.svg'),
    textNodeId: '13:230',
    iconNodeId: '13:382'
  }
]

export function Footer() {
  return (
    <footer
      data-node-id='13:11'
      className='bg-geothermal-gray text-white'
      aria-labelledby='footer-heading'
    >
      <section className='page-shell py-14 md:py-16'>
        <h2
          id='footer-heading'
          data-node-id='13:22'
          className={`${alimamaShuHeiTi.className} text-[1.75rem] leading-normal text-white sm:text-[30px]`}
        >
          地热能开发利用技术中试基地
        </h2>

        <div className='mt-6 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,440px)_minmax(0,220px)_minmax(0,380px)] lg:justify-between'>
          <div>
            <h3
              className={`${miSansRegular.className} text-[20px] font-semibold leading-normal text-white`}
            >
              基地介绍
            </h3>

            <p
              data-node-id='13:109'
              className={`${miSansRegular.className} mt-3.5 text-base leading-7 text-white/60`}
            >
              在水电与抽水蓄能、新能源与电力、水利与生态环境、城乡建设与基础设施等领域，融合规划咨询、勘测设计、工程承包与投资运营于一体，提供覆盖全过程的一体化智慧服务
            </p>
          </div>

          <nav aria-labelledby='footer-links-heading'>
            <h3
              id='footer-links-heading'
              data-node-id='13:231'
              className={`${miSansRegular.className} text-[20px] font-semibold leading-normal text-white`}
            >
              快速链接
            </h3>

            <div className='mt-3.5 flex flex-col items-start gap-3'>
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  data-node-id={link.nodeId}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  className={`${miSansRegular.className} max-w-[260px] text-[16px] leading-normal text-white/60 transition-colors hover:text-white`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <address
            className='not-italic'
            aria-labelledby='footer-contact-heading'
          >
            <h3
              id='footer-contact-heading'
              data-node-id='13:232'
              className={`${miSansRegular.className} text-[20px] font-semibold leading-normal text-white`}
            >
              联系我们
            </h3>

            <div className='mt-3.5 space-y-[17px]'>
              {footerContactItems.map((item) => (
                <div key={item.text} className='flex items-center gap-2'>
                  <span
                    data-node-id={item.iconNodeId}
                    className='relative h-[18px] w-[18px] shrink-0'
                  >
                    <Image
                      src={item.iconSrc}
                      alt=''
                      fill
                      sizes='18px'
                      aria-hidden='true'
                    />
                  </span>
                  <span
                    data-node-id={item.textNodeId}
                    className={`${miSansRegular.className} text-[14px] leading-normal text-white/60`}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </address>
        </div>
      </section>

      <section aria-label='版权信息'>
        <div
          data-node-id='13:38'
          className='h-px w-full bg-white/10'
          aria-hidden='true'
        />

        <div className='page-shell py-5'>
          <p
            data-node-id='13:39'
            className={`${miSansRegular.className} text-center text-[14px] font-medium leading-normal text-white/60`}
          >
            Copyright © 2025 - 2026 NWH. All Rights Reserved. 中国电建西北院
            版权所有
          </p>
        </div>
      </section>
    </footer>
  )
}
