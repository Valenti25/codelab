'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TTextAnimate } from './type'
import { useTranslation } from 'react-i18next'
import { TitleGradient } from '@/components/ui/title-gradient'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'

export const Application = ({ textAnimate }: TTextAnimate) => {
   const { t } = useTranslation()

   return (
      <>
         <TitleGradient text="Application" className="px-6" />
         <div className="p-6 pt-0">
            <p className="text-gray h-[40px] text-sm dark:text-white/60">{t('service.application')}</p>
         </div>
         <div className="flex w-full gap-6">
            <div className="w-6/12 pl-6 text-sm">
               <motion.p
                  {...textAnimate}
                  layout="position"
                  layoutId="application-android"
                  transition={{
                     type: 'spring',
                     stiffness: 100,
                     damping: 10,
                  }}
                  className="border-b border-black/10 py-2 dark:border-neutral-200/20"
               >
                  Android
               </motion.p>
               <motion.p
                  {...textAnimate}
                  layout="position"
                  layoutId="application-ios"
                  transition={{
                     type: 'spring',
                     stiffness: 150,
                     damping: 10,
                  }}
                  className="py-2"
               >
                  iOS
               </motion.p>
            </div>
            <div className="w-6/12">
               <Contents />
            </div>
         </div>
      </>
   )
}

const Contents = () => {
   const people: {
      id: number
      name: string
      designation: string
      image: string
   }[] = [
      {
         id: 3,
         name: 'Jane Smith',
         designation: 'Ux/Ui',
         image: 'https://avatars.githubusercontent.com/u/141486967?v=4',
      },
      {
         id: 1,
         name: 'Panc S.',
         designation: 'Software Engineer',
         image: 'https://avatars.githubusercontent.com/u/80510757?v=4',
      },
      {
         id: 2,
         name: 'BANK.nakorn',
         designation: 'CEO',
         image: 'https://avatars.githubusercontent.com/u/115989965?v=4',
      },
   ]

   return (
      <div className="group relative flex h-[215px] items-start justify-start gap-6 duration-300 hover:-mt-5">
         <div className="absolute bottom-4 left-0 z-50 duration-300 group-hover:-translate-x-4">
            <div className="flex w-max items-center justify-start gap-2 rounded-full border border-black/10 bg-neutral-100 py-2 pr-3 pl-2 dark:border-white/10 dark:bg-neutral-800">
               <div className="flex w-max min-w-max flex-row items-center justify-center">
                  <AnimatedTooltip items={people} />
               </div>
               <div>
                  <p className="min-w-max pl-4 text-xs font-medium text-black dark:text-white">17,8k+</p>
                  <p className="min-w-max pl-4 text-[10px] font-medium text-black dark:text-white">User</p>
               </div>
            </div>
         </div>

         <div className="flex w-9/12 justify-end">
            <div className="relative">
               <Image
                  alt=""
                  src="/images/screen-02.png"
                  width={100}
                  height={100}
                  className="absolute top-10 left-6 translate-x-1/2 overflow-hidden rounded-md drop-shadow-sm duration-300 group-hover:-mt-2 group-hover:ml-4 group-hover:scale-125"
                  unoptimized
               />
               <div className="h-fit w-fit rounded-2xl bg-black/10 p-1 dark:bg-white/10">
                  <Image
                     alt=""
                     src="/images/screen-01.png"
                     className="rounded-md"
                     width={120}
                     height={120}
                     unoptimized
                  />
               </div>
            </div>
         </div>
      </div>
   )
}
