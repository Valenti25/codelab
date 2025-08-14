'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { TTextAnimate } from './type'

import { Compare } from '@/components/ui/compare'
import { TitleGradient } from '@/components/ui/title-gradient'

export const Development = ({ textAnimate }: TTextAnimate) => {
   const { t } = useTranslation()

   const services = [
      { id: 'development-web-application', label: 'Web Application', stiffness: 100 },
      { id: 'development-mobile-application', label: 'Mobile Application', stiffness: 150 },
      { id: 'development-web-3-smart-contract', label: 'Web 3 & Smart Contract', stiffness: 100 },
      { id: 'development-iot-application', label: 'IOT Application', stiffness: 100 },
   ]

   return (
      <>
         <TitleGradient text="Development" className="px-6" />
         <div className="p-6 pt-0">
            <p className="text-gray text-sm dark:text-white/60">{t('service.development')}</p>
         </div>
         <div className="flex w-full flex-row gap-6">
            <div className="w-6/12 pl-6 text-sm sm:w-7/12">
               {services.map(({ id, label, stiffness }, index) => (
                  <motion.p
                     key={id}
                     {...textAnimate}
                     layout="position"
                     layoutId={id}
                     transition={{
                        type: 'spring',
                        stiffness,
                        damping: 10,
                     }}
                     className={`py-2 ${index !== services.length - 1 ? 'border-b border-black/10 dark:border-neutral-200/20' : ''}`}
                  >
                     <span className="line-clamp-1">{label}</span>
                  </motion.p>
               ))}
            </div>
            <div className="flex h-full w-6/12 items-start justify-end sm:w-5/12">
               <Contents />
            </div>
         </div>
      </>
   )
}

const Contents = () => {
   return (
      <div className="z-40 h-[215px] w-full rounded-tl-3xl border border-r-0 border-b-0 border-black/10 p-2 pr-0 pb-0 duration-300 hover:scale-110 lg:w-[215px] dark:border-white/10 dark:bg-white/5">
         <div className="overflow-hidden rounded-xl rounded-r-none">
            <Compare
               firstImage="/svg/code-before.svg"
               secondImage="/svg/code-after.svg"
               firstImageClassName="object-cover object-left-top"
               secondImageClassname="object-cover object-left-top"
               className="h-[250px] w-[390px]"
               slideMode="hover"
               initialSliderPercentage={30}
            />
         </div>
      </div>
   )
}
