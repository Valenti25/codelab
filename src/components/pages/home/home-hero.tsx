/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { FlipWords } from '@/components/ui/flip-words'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { LuArrowRight } from 'react-icons/lu'
import { Rounded } from './round'
import { FloatImage } from './float-img'
import { SparklesCore } from '@/components/ui/Sparkles'
// import { Meteors } from './meteors'
import { partnerImages } from './home-partner'
import { useInView } from 'framer-motion'

const Meteors = dynamic(() => import('./meteors'), { ssr: false })
// const SparklesCore = dynamic(() => import('@/components/ui/Sparkles'), { ssr: false })

const sectionVariants: Variants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         type: 'spring',
         visualDuration: 0.5,
         bounce: 0.3,
         duration: 0.3,
         // delay: 1,
         delayChildren: 1,
      },
   },
}

const containerVariants: Variants = {
   hidden: { width: 'calc(100vw - 1000px)' },
   visible: {
      width: 'calc(100vw - 400px)',
      transition: {
         // duration: 0.3,
         duration: 1,
      },
   },
}

const containerMbVariants: Variants = {
   hidden: { width: 120 },
   visible: {
      width: '50%',
      transition: {
         duration: 0.3,
         // duration: 1,
      },
   },
}

const pVariants: Variants = {
   hidden: {
      y: 10,
      scale: 0.8,
      opacity: 0,
   },
   visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
         duration: 0.3,
      },
   },
}

export const HomeHero = () => {
   const { t } = useTranslation()

   // Create refs for elements that should only animate when in view
   const heroRef = useRef(null)
   const isInView = useInView(heroRef, { once: true })

   return (
      <>
         <motion.section
            ref={heroRef}
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
            layout="position"
         >
            <div className="@container flex h-max w-full flex-col overflow-hidden px-4 duration-300 md:min-h-dvh lg:min-h-dvh">
               <motion.div
                  layout="position"
                  layoutId="hero-container"
                  variants={containerVariants}
                  className="mx-auto mt-4 hidden h-[25px] grid-cols-2 items-start bg-background px-40 md:h-[30px] lg:grid"
               >
                  {/* <div className="shape-left relative hidden h-full rounded-tl-4xl bg-[#f3f4f6] before:shadow-[0_2.5rem_0_0_#f3f4f6] @7xl:block dark:bg-[#181818] dark:before:shadow-[0_2.5rem_0_0_#181818]" />
                  <div className="shape-right relative hidden h-full rounded-tr-4xl bg-[#f3f4f6] before:shadow-[0_2.5rem_0_0_#f3f4f6] @7xl:block dark:bg-[#181818] dark:before:shadow-[0_2.5rem_0_0_#181818]" /> */}
               </motion.div>
               <motion.div
                  variants={containerMbVariants}
                  className="mt-4 flex h-[75px] w-1/2 items-start bg-background opacity-0 md:h-[80px] md:opacity-100 lg:hidden"
                  layout="position"
                  layoutId="hero-container-mb"
               >
                  <div className="shape-right relative hidden h-full w-full rounded-t-4xl bg-background md:block" />
                  {/* <div className="shape-right relative hidden h-full w-full rounded-t-4xl bg-background before:shadow-[0_2.5rem_0_0_#f3f4f6] md:block md:bg-[#f3f4f6] dark:before:shadow-[0_2.5rem_0_0_#181818] dark:md:bg-[#181818]" /> */}
               </motion.div>

               <div className="relative h-full w-full flex-1 overflow-hidden rounded-t-4xl rounded-tl-none rounded-b-4xl bg-background pt-10 pb-0 md:pt-20 lg:rounded-tl-4xl @max-2xl:rounded-b-4xl">
                  {/* <div className="relative h-full w-full flex-1 overflow-hidden rounded-t-4xl rounded-tl-none rounded-b-4xl bg-background pt-10 pb-0 md:bg-[#f3f4f6] md:pt-20 lg:rounded-tl-4xl @max-2xl:rounded-b-4xl dark:md:bg-[#181818]">    */}
                  <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-2">
                     <motion.button
                        layout="position"
                        layoutId="hero-button"
                        initial={{
                           opacity: 0,
                           width: 40,
                           x: -20,
                        }}
                        animate={{
                           opacity: [0, 0.5, 1, 1],
                           width: [40, 40, 40, 110],
                           x: [-20, -10, 0, 0],
                        }}
                        transition={{
                           // delay: 0.75,
                           ease: 'anticipate',
                           // duration: 0.3,
                           duration: 1,
                        }}
                        aria-label="Digital Hub"
                        className="h-10 min-w-max rounded-full bg-gradient-to-b from-primary to-primary-light px-4 text-sm font-bold text-white shadow-[0px_1px_3px_0px_#FFFFFF4D_inset]"
                     >
                        <motion.p
                           layout="position"
                           layoutId="hero-button-text"
                           initial={{
                              display: 'none',
                              width: 0,
                           }}
                           animate={{
                              display: 'block',
                              width: 'auto',
                           }}
                           transition={
                              {
                                 // delay: 1.75,
                              }
                           }
                        >
                           Digital Hub
                        </motion.p>
                     </motion.button>
                     <motion.div
                        layout="position"
                        layoutId="hero-button-text-mb"
                        initial={{
                           width: 0,
                        }}
                        animate={{
                           width: 'auto',
                        }}
                        transition={{
                           // delay: 1.75,
                           duration: 0.3,
                        }}
                        className="overflow-hidden"
                     >
                        <div className="flex min-w-max items-center justify-center gap-2 text-xs text-neutral-700 md:text-base dark:text-white">
                           <p>{t('greeting')}</p>
                           <LuArrowRight className="animate-bounceRight" />
                        </div>
                     </motion.div>
                  </div>

                  <div className="relative z-20 pt-3 text-center text-black md:space-y-3 md:pt-5 dark:text-white">
                     <motion.p
                        layout="position"
                        layoutId="hero-second-header"
                        variants={pVariants}
                        className="relative z-20 pb-2 text-lg font-bold md:text-2xl"
                     >
                        {t('secondHeader')}
                     </motion.p>

                     <FlipWords
                        words={['Design UX/UI', 'Website service', 'Application', 'Digital marketing', 'Consultation']}
                        duration={4000}
                        className="relative z-20 text-center text-4xl leading-tight font-extrabold drop-shadow-sm [text-shadow:1px_1px_2px_#fff,_0_0_1em_#fff,_0_0_0.2em_#fff] md:text-7xl dark:[text-shadow:1px_1px_2px_#000,_0_0_1em_#000,_0_0_0.2em_#000]"
                     />
                     <motion.p
                        layout="position"
                        layoutId="hero-detail-hero-1"
                        variants={pVariants}
                        className="relative z-20 pt-2 text-sm font-medium text-black/60 md:pt-4 md:text-base dark:text-white/40"
                     >
                        {t('detailHero1')}
                        <br />
                        {t('detailHero2')}
                     </motion.p>

                     <div className="relative z-10 rounded-b-4xl">
                        <motion.div
                           layout="position"
                           layoutId="hero-detail-hero-1-img"
                           initial={{
                              opacity: 0,
                              transform: 'rotate(-10deg) translateY(200px) scale(0.75)',
                           }}
                           animate={{
                              y: 0,
                              opacity: 1,
                              transform: 'rotate(0deg) translateY(0px) scale(1)',
                           }}
                           transition={{
                              ease: 'easeOut',
                              duration: 0.5,
                              // delay: 1,
                           }}
                           className="relative -z-[1] mx-auto -mt-2 flex w-[300px] max-w-[40dvh] items-center justify-center md:-mt-6 md:w-[600px] lg:mt-6 lg:w-auto"
                        >
                           <div className="relative z-0">
                              <div className="z-10 container">
                                 <Image
                                    priority
                                    alt=""
                                    src="/svg/hand-phone.svg"
                                    width={780}
                                    height={965}
                                    className="z-10 aspect-square w-[600px] max-w-full lg:aspect-auto"
                                    unoptimized
                                 />
                              </div>

                              <Rounded delay={2} duration={0.75} className="scale-[3]" />
                              <Rounded delay={1.75} duration={0.75} className="scale-[2.625]" />
                              <Rounded delay={1.5} duration={0.85} className="scale-[2.25]" />
                              <Rounded delay={1.5} duration={0.95} className="scale-[1.875]" />
                              <Rounded delay={1} duration={1.25} className="scale-[1.5]" />
                              <Rounded delay={1} duration={1.25} className="scale-[1.125]" />
                              <Rounded delay={1} duration={1} className="scale-[0.75]" />

                              <FloatImage />
                           </div>
                        </motion.div>

                        <div className="pointer-none: fixed inset-0 top-0 right-0 bottom-0 left-0 -z-[10] h-dvh w-full opacity-80">
                           <SparklesCore
                              background="transparent"
                              minSize={0.6}
                              maxSize={1.4}
                              particleDensity={4}
                              speed={1}
                              className="h-full w-full"
                              particleColor="#FFFFFF"
                           />
                        </div>
                     </div>
                  </div>

                  <motion.div
                     layout="position"
                     layoutId="hero-meteors"
                     initial={{
                        opacity: 0,
                     }}
                     animate={{
                        y: 0,
                        opacity: 1,
                     }}
                     className="pointer-events-none absolute top-0 left-1/12 h-full w-full"
                  >
                     <Meteors number={8} className="opacity-70" />
                  </motion.div>
               </div>
            </div>

            {/* <div className="absolute right-4 bottom-[66px] left-4 z-30 hidden h-[80px] bg-gradient-to-t from-[#f3f4f6] to-transparent md:block lg:bottom-[74px] dark:from-[#181818]" /> */}

            <div className="absolute bottom-0 left-1/2 z-50 flex w-full -translate-x-1/2 justify-center">
               <div className="relative flex w-full justify-center px-4">
                  <div className="group relative container hidden flex-nowrap overflow-hidden rounded-b-4xl bg-background pb-4 md:inline-flex lg:pb-6">
                     {/* <div className="absolute top-0 left-0 z-30 h-full w-[120px] max-w-1/4 bg-gradient-to-r from-[#f3f4f6] to-transparent dark:from-[#181818]" />
                     <div className="absolute top-0 right-0 z-30 h-full w-[120px] max-w-1/4 bg-gradient-to-l from-[#f3f4f6] to-transparent dark:from-[#181818]" /> */}

                     <ul className="animate-infiniteScroll group-hover:pause flex min-w-max items-center justify-center grayscale-0 dark:opacity-70 dark:grayscale">
                        {partnerImages.map((img) => (
                           <li key={img}>
                              <Image
                                 priority
                                 alt={`Partner logo - ${img.replace('.png', '').replace('.jpg', '')}`}
                                 src={`/images/${img}`}
                                 width={65}
                                 height={35}
                                 className="mx-6 w-10 object-contain md:mx-8 md:w-auto"
                                 unoptimized
                              />
                           </li>
                        ))}
                     </ul>
                     <ul
                        className="animate-infiniteScroll group-hover:pause flex min-w-max items-center justify-center grayscale-0 dark:opacity-70 dark:grayscale"
                        aria-hidden="true"
                     >
                        {partnerImages.map((img) => (
                           <li key={img}>
                              <Image
                                 priority
                                 alt=""
                                 src={`/images/${img}`}
                                 width={65}
                                 height={35}
                                 className="mx-6 w-10 object-contain md:mx-8 md:w-auto"
                                 unoptimized
                              />
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </motion.section>
      </>
   )
}
