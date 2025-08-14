'use client'

import { useTranslation } from 'react-i18next'
import { motion, useInView, Variants } from 'framer-motion'
import { FlipWordsInView } from '@/components/ui/flip-words-in-view'
import { TitleGradient } from '@/components/ui/title-gradient'
import { TagHeading } from '@/components/ui/tag-heading'
import { useRef } from 'react'
import { LuPuzzle, LuRepeat2, LuTrendingUp, LuZoomIn } from 'react-icons/lu'
import { AnimatedList } from '@/components/ui/animated-list'
import { cn } from '@/lib/utils'

const phoneVariant: Variants = {
   hidden: {
      y: 100,
      scale: 0.8,
   },
   show: {
      y: 0,
      scale: 1,
   },
}

export const HomeWhyChooseUs = () => {
   const { t } = useTranslation()

   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, amount: 0.5 })

   return (
      <motion.section
         ref={ref}
         initial="hidden"
         animate={isInView ? 'show' : 'hidden'}
         variants={{
            hidden: {},
            show: {
               transition: {
                  staggerChildren: 0.1,
               },
            },
         }}
         className="relative z-20 w-full bg-background py-14 pb-0 md:py-16"
      >
         <div className="relative container mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-4 pt-4 lg:grid-cols-[2fr_3fr]">
            <div className="relative block h-full w-full">
               <div className="flex h-full w-full items-end justify-center overflow-hidden">
                  <motion.img
                     variants={phoneVariant}
                     alt=""
                     src="/images/phone.avif"
                     width={250}
                     height={460}
                     className="object-contain md:pt-16"
                  />
               </div>
               <div className="absolute bottom-0 left-[55%] z-20 -translate-x-1/2 animate-bounce overflow-hidden rounded-xl">
                  <div className="relative flex h-[180px] w-full flex-col overflow-hidden p-2">
                     <AnimatedList>
                        {notifications.map((item, idx) => (
                           <Notification {...item} key={idx} />
                        ))}
                     </AnimatedList>
                  </div>
               </div>

               <div className="absolute bottom-0 left-1/2 h-1/2 w-2/3 -translate-x-1/2 bg-gradient-to-b from-transparent to-background" />
            </div>

            <div className="z-10 pt-10">
               <div className="flex justify-center lg:justify-start">
                  <TagHeading label="Why Choose Us" maxWidth={140} className="[&_p]:text-sm" />
               </div>

               <div className="flex flex-col justify-center pt-6 pb-4 lg:justify-start">
                  <FlipWordsInView
                     words={[t('whyChooseUs')]}
                     className="text-center text-3xl font-extrabold drop-shadow-sm [text-shadow:1px_1px_2px_#fff,_0_0_1em_#fff,_0_0_0.2em_#fff] md:text-5xl lg:text-left dark:[text-shadow:1px_1px_2px_#000,_0_0_1em_#000,_0_0_0.2em_#000]"
                  />
               </div>

               <div className="grid grid-cols-1 gap-4 overflow-hidden pt-6 lg:grid-cols-2">
                  <motion.div
                     variants={{
                        hidden: {
                           x: -100,
                           opacity: 0,
                        },
                        show: {
                           x: 0,
                           opacity: 1,
                           transition: {
                              duration: 0.4,
                           },
                        },
                     }}
                     className="rounded-xl border border-black/10 p-6 dark:border-white/10"
                  >
                     <div className="flex items-center justify-start gap-2 pb-4">
                        <LuPuzzle />
                        <TitleGradient
                           text={t('whyChooseUsTopic.topic1')}
                           className="px-0 py-0 text-lg font-bold"
                        />
                     </div>
                     <p className="text-sm">{t('whyChooseUsTopic.topic1Detail')}</p>
                  </motion.div>
                  <motion.div
                     variants={{
                        hidden: {
                           y: -100,
                           opacity: 0,
                        },
                        show: {
                           y: 0,
                           opacity: 1,
                           transition: {
                              duration: 0.4,
                           },
                        },
                     }}
                     className="rounded-xl border border-black/10 p-6 dark:border-white/10"
                  >
                     <div className="flex items-center justify-start gap-2 pb-4">
                        <LuTrendingUp />
                        <TitleGradient
                           text={t('whyChooseUsTopic.topic2')}
                           className="px-0 py-0 text-lg font-bold"
                        />
                     </div>
                     <p className="text-sm">{t('whyChooseUsTopic.topic2Detail')}</p>
                  </motion.div>
                  <motion.div
                     variants={{
                        hidden: {
                           y: 100,
                           opacity: 0,
                        },
                        show: {
                           y: 0,
                           opacity: 1,
                           transition: {
                              duration: 0.4,
                           },
                        },
                     }}
                     className="rounded-xl border border-black/10 p-6 dark:border-white/10"
                  >
                     <div className="flex items-center justify-start gap-2 pb-4">
                        <LuZoomIn />
                        <TitleGradient
                           text={t('whyChooseUsTopic.topic3')}
                           className="px-0 py-0 text-lg font-bold"
                        />
                     </div>
                     <p className="text-sm">{t('whyChooseUsTopic.topic3Detail')}</p>
                  </motion.div>
                  <motion.div
                     variants={{
                        hidden: {
                           x: 100,
                           opacity: 0,
                        },
                        show: {
                           x: 0,
                           opacity: 1,
                           transition: {
                              duration: 0.4,
                           },
                        },
                     }}
                     className="rounded-xl border border-black/10 p-6 dark:border-white/10"
                  >
                     <div className="flex items-center justify-start gap-2 pb-4">
                        <LuRepeat2 />
                        <TitleGradient
                           text={t('whyChooseUsTopic.topic4')}
                           className="px-0 py-0 text-lg font-bold"
                        />
                     </div>
                     <p className="text-sm">{t('whyChooseUsTopic.topic4Detail')}</p>
                  </motion.div>
               </div>
            </div>
         </div>
      </motion.section>
   )
}

interface Item {
   icon: string
   color: string
   time: string
}

let notifications = [
   {
      time: '15m ago',

      icon: '💸',
      color: '#00C9A7',
   },
   {
      time: '10m ago',
      icon: '👤',
      color: '#FFB800',
   },
   {
      time: '5m ago',
      icon: '💬',
      color: '#FF3D71',
   },
   {
      time: '2m ago',
      icon: '🗞️',
      color: '#1E86FF',
   },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ icon, color, time }: Item) => {
   return (
      <figure
         className={cn(
            'relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4',
            // animation styles
            'transition-all duration-200 ease-in-out hover:scale-[103%]',
            // light styles
            'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
            // dark styles
            'transform-gpu dark:bg-[#181818] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]',
         )}
      >
         <div className="flex flex-row items-center gap-3">
            <div
               className="flex size-10 items-center justify-center rounded-2xl"
               style={{
                  backgroundColor: color,
               }}
            >
               <span className="text-lg">{icon}</span>
            </div>
            <div className="flex flex-col overflow-hidden">
               <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
                  <div className="h-2.5 w-20 rounded-full bg-black/30 dark:bg-white/30"></div>
                  <span className="mx-2">·</span>
                  <span className="text-xs text-gray-500">{time}</span>
               </figcaption>
               <div className="h-1.5 w-14 rounded-full bg-black/20 dark:bg-white/20"></div>
            </div>
         </div>
      </figure>
   )
}
