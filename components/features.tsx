'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { miSansBold, miSansRegular } from '@/app/fonts'
import { getAssetPath } from '@/lib/utils'

const features = [
  {
    title: '基地概览',
    description: '园区布局、设施能力与资源配置一览，快速了解基地全貌',
    iconSrc: getAssetPath('/feature-card-overview.svg'),
    iconAlt: '基地概览图标',
    cardNodeId: '13:244',
    iconNodeId: '13:264',
    titleNodeId: '13:251',
    descriptionNodeId: '13:258',
    variant: 'featured'
  },
  {
    title: '成果展示',
    description: '集中呈现创新成果与应用案例，推动技术示范与推广',
    iconSrc: getAssetPath('/feature-card-results.svg'),
    iconAlt: '成果展示图标',
    cardNodeId: '13:245',
    iconNodeId: '13:266',
    titleNodeId: '13:252',
    descriptionNodeId: '13:259',
    variant: 'default'
  },
  {
    title: '产学研合作',
    description: '加强与行业内外企业和科研机构合作，共推产业创新',
    iconSrc: getAssetPath('/feature-card-cooperation.svg'),
    iconAlt: '产学研合作图标',
    cardNodeId: '13:248',
    iconNodeId: '13:268',
    titleNodeId: '13:255',
    descriptionNodeId: '13:262',
    variant: 'default'
  },
  {
    title: '服务清单',
    description: '整合关键资源与能力服务目录，提供一站式服务导航',
    iconSrc: getAssetPath('/feature-card-services.svg'),
    iconAlt: '服务清单图标',
    cardNodeId: '13:247',
    iconNodeId: '13:273',
    titleNodeId: '13:254',
    descriptionNodeId: '13:261',
    variant: 'default'
  },
  {
    title: '数据共享',
    description: '建立标准化数据共享机制，促进多方协同与价值释放',
    iconSrc: getAssetPath('/feature-card-data.svg'),
    iconAlt: '数据共享图标',
    cardNodeId: '13:246',
    iconNodeId: '13:275',
    titleNodeId: '13:253',
    descriptionNodeId: '13:260',
    variant: 'default'
  },
  {
    title: '地热协会',
    description: '链接行业资源与政策信息，促进交流合作与标准共建',
    iconSrc: getAssetPath('/feature-card-association.svg'),
    iconAlt: '地热协会图标',
    cardNodeId: '13:249',
    iconNodeId: '13:277',
    titleNodeId: '13:256',
    descriptionNodeId: '13:263',
    variant: 'default'
  }
]

export function Features() {
  return (
    <section
      id='technology'
      className='relative overflow-hidden'
      aria-labelledby='features-heading'
    >
      <div className='page-shell relative z-10 flex items-center py-16 md:py-20 lg:py-[100px]'>
        <div className='w-full'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2
              id='features-heading'
              data-node-id='1:124'
              className={`${miSansBold.className} text-[2rem] leading-none text-black sm:text-[2.2rem] lg:text-[2.5rem]`}
            >
              核心功能体系
            </h2>

            <p
              data-node-id='1:159'
              className={`${miSansRegular.className} mt-4 text-base leading-8 text-black/90 sm:text-lg sm:leading-9`}
            >
              围绕地热能开发利用的全生命周期，打造集材料、技术、设备于一体的国内领先地热能综合创新平台
            </p>
          </motion.div>

          <div className='mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.3 }}
                data-node-id={feature.cardNodeId}
                className={`min-h-[170px] rounded-[8px] p-[30px] ${
                  feature.variant === 'featured'
                    ? 'bg-[#1A8E85]'
                    : 'bg-[#F6F6F6]'
                }`}
              >
                <div className='flex items-start justify-between gap-6'>
                  <div className='max-w-[23.125rem]'>
                    <h3
                      data-node-id={feature.titleNodeId}
                      className={`${miSansBold.className} text-2xl leading-none ${
                        feature.variant === 'featured'
                          ? 'text-white'
                          : 'text-[#282828]'
                      }`}
                    >
                      {feature.title}
                    </h3>

                    <p
                      data-node-id={feature.descriptionNodeId}
                      className={`${miSansRegular.className} mt-10 text-base leading-normal ${
                        feature.variant === 'featured'
                          ? 'text-white'
                          : 'text-[#666666]'
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  <div
                    data-node-id={feature.iconNodeId}
                    className='relative h-[50px] w-[50px] shrink-0'
                  >
                    <Image
                      src={feature.iconSrc}
                      alt={feature.iconAlt}
                      fill
                      unoptimized
                      sizes='50px'
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
