/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { FlipWords } from '@/components/ui/flip-words'
import { motion, useScroll, useSpring, useTransform, Variants } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiNavigation } from 'react-icons/fi'
import { LuArrowRight } from 'react-icons/lu'

const sectionVariants: Variants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         type: 'spring',
         visualDuration: 0.5,
         bounce: 0.3,
         duration: 0.3,
         delay: 1,
         delayChildren: 2,
      },
   },
}

const containerVariants: Variants = {
   hidden: { width: 'calc(100vw - 1000px)' },
   visible: {
      width: 'calc(100vw - 400px)',
      transition: {
         duration: 1,
      },
   },
}

const containerMbVariants: Variants = {
   hidden: { width: 120 },
   visible: {
      width: '50%',
      transition: {
         duration: 1,
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

const elemVariants: Variants = {
   hidden: {
      scale: 0.7,
      opacity: 0,
      y: 50,
   },
   visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
         delay: 2,
         duration: 0.3,
      },
   },
}

export const HomeHero = () => {
   const { t } = useTranslation()

   return (
      <>
         <motion.section
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="pb-[100px] md:pb-[900px]"
         >
            <div className="@container h-[90dvh] w-full px-4 duration-300">
               <motion.div
                  variants={containerVariants}
                  className="mx-auto mt-4 hidden h-[75px] grid-cols-2 items-start bg-background px-40 md:h-[80px] lg:grid"
               >
                  <div className="shape-left relative hidden h-full rounded-tl-4xl bg-[#f3f4f6] before:shadow-[0_2.5rem_0_0_#f3f4f6] @7xl:block dark:bg-[#181818] dark:before:shadow-[0_2.5rem_0_0_#181818]" />
                  <div className="shape-right relative hidden h-full rounded-tr-4xl bg-[#f3f4f6] before:shadow-[0_2.5rem_0_0_#f3f4f6] @7xl:block dark:bg-[#181818] dark:before:shadow-[0_2.5rem_0_0_#181818]" />
               </motion.div>
               <motion.div
                  variants={containerMbVariants}
                  className="mt-4 flex h-[75px] w-1/2 items-start bg-background md:h-[80px] lg:hidden"
               >
                  <div className="shape-right relative block h-full w-full rounded-t-4xl bg-[#f3f4f6] before:shadow-[0_2.5rem_0_0_#f3f4f6] dark:bg-[#181818] dark:before:shadow-[0_2.5rem_0_0_#181818]" />
               </motion.div>

               <div className="relative h-full w-full rounded-4xl rounded-tl-none bg-[#f3f4f6] py-10 md:py-20 lg:rounded-tl-4xl dark:bg-[#181818]">
                  <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-2">
                     <motion.button
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
                           delay: 0.75,
                           ease: 'anticipate',
                           duration: 1,
                        }}
                        className="h-10 min-w-max rounded-full bg-gradient-to-b from-primary to-primary-light px-4 text-sm text-white shadow-[0px_1px_3px_0px_#FFFFFF4D_inset]"
                     >
                        <motion.p
                           initial={{
                              display: 'none',
                              width: 0,
                           }}
                           animate={{
                              display: 'block',
                              width: 'auto',
                           }}
                           transition={{
                              delay: 1.75,
                           }}
                        >
                           Digital Hub
                        </motion.p>
                     </motion.button>
                     <motion.div
                        initial={{
                           width: 0,
                        }}
                        animate={{
                           width: 'auto',
                        }}
                        transition={{
                           delay: 1.75,
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

                  <motion.div animate={{ x: 100 }} transition={{ ease: 'easeOut', duration: 2 }} />
                  <div className="relative pt-3 text-center text-black md:space-y-3 md:pt-5 dark:text-white">
                     <motion.p variants={pVariants} className="pb-2 text-lg font-bold md:text-2xl">
                        {t('secondHeader')}
                     </motion.p>

                     <FlipWords
                        words={[
                           'Design UX/UI',
                           'Website service',
                           'Application',
                           'Digital marketing',
                           'Consultation',
                        ]}
                        duration={4000}
                        className="text-center text-5xl leading-tight font-extrabold drop-shadow-sm [text-shadow:1px_1px_2px_#fff,_0_0_1em_#fff,_0_0_0.2em_#fff] md:text-7xl dark:[text-shadow:1px_1px_2px_#000,_0_0_1em_#000,_0_0_0.2em_#000]"
                     />
                     <motion.p
                        variants={pVariants}
                        className="pt-2 text-sm font-medium text-black/60 md:pt-4 md:text-base dark:text-white/40"
                     >
                        {t('detailHero1')}
                        <br />
                        {t('detailHero2')}
                     </motion.p>

                     <ScrollImageIphone />

                     <div className="hidden lg:block">
                        <ScrollImageElem
                           height={220}
                           width={220}
                           scroll={[0, 100]}
                           toY={[0, 50]}
                           src="/images/elem-01.avif"
                           className="absolute top-1/4 left-1/12 [&_img]:overflow-hidden [&_img]:rounded-xl"
                        />

                        <ScrollImageElem
                           height={300}
                           width={300}
                           scroll={[0, 200]}
                           toY={[0, -100]}
                           src="/images/elem-02.webp"
                           className="absolute top-2/3 left-1/12 hidden xl:block 2xl:left-1/6 [&_img]:overflow-hidden [&_img]:rounded-xl"
                        />

                        <ScrollImageElem
                           height={220}
                           width={220}
                           scroll={[0, 100]}
                           toY={[0, 50]}
                           src="/images/elem-04.avif"
                           className="absolute top-1/4 right-1/12 [&_img]:overflow-hidden [&_img]:rounded-xl"
                        />

                        <ScrollImageElem
                           height={300}
                           width={300}
                           scroll={[0, 200]}
                           toY={[0, -100]}
                           src="/images/elem-04.webp"
                           className="absolute top-2/3 right-1/12 hidden xl:block 2xl:right-1/6 [&_img]:overflow-hidden [&_img]:rounded-xl"
                        />
                     </div>

                     <div className="hidden md:block">
                        <motion.div
                           variants={{
                              hidden: {
                                 x: -50,
                                 opacity: 0,
                              },
                              visible: {
                                 x: 0,
                                 opacity: 1,
                                 transition: {
                                    type: 'keyframes',
                                    ease: 'linear',
                                    duration: 0.2,
                                    delay: 2.5,
                                 },
                              },
                           }}
                           className="absolute top-2/5 left-1/12 duration-300 lg:left-2/12 xl:left-3/12"
                        >
                           <div className="relative flex items-start justify-end gap-1">
                              <span className="text-md rounded-full border border-black/10 bg-black/5 px-4 py-1.5 dark:border-white/10 dark:bg-white/10">
                                 Client
                              </span>
                              <FiNavigation className="-mt-2 -ml-2 fill-current text-lg" />
                           </div>
                        </motion.div>

                        <motion.div
                           variants={{
                              hidden: {
                                 x: 50,
                                 opacity: 0,
                              },
                              visible: {
                                 x: 0,
                                 opacity: 1,
                                 transition: {
                                    type: 'keyframes',
                                    ease: 'linear',
                                    duration: 0.2,
                                    delay: 2.5,
                                 },
                              },
                           }}
                           className="absolute top-3/6 right-1/12 duration-300 lg:right-2/12 xl:right-3/12"
                        >
                           <div className="relative flex items-start justify-end gap-1">
                              <FiNavigation className="-mt-2 -ml-2 -rotate-90 fill-current text-lg text-primary" />
                              <span className="rounded-full border border-black/10 bg-black/5 px-4 py-1.5 text-primary dark:border-white/10 dark:bg-white/10">
                                 Designer
                              </span>
                           </div>
                        </motion.div>
                     </div>
                  </div>
               </div>
            </div>
         </motion.section>
      </>
   )
}

interface IScrollImageElem {
   src: string
   scroll: [number, number]
   toY: [number, number]
   width: number
   height: number
   className?: string
}

const ScrollImageElem = ({ height, width, src, scroll, toY, className }: IScrollImageElem) => {
   const ref = useRef(null)
   const { scrollY } = useScroll()
   const y = useTransform(scrollY, scroll, toY)

   return (
      <motion.div variants={elemVariants} className={className}>
         <motion.div style={{ y }} ref={ref}>
            <Image alt="" src={src} width={width} height={height} />
         </motion.div>
      </motion.div>
   )
}

const ScrollImageIphone = () => {
   const ref = useRef(null)
   const { scrollY } = useScroll()
   const [isDesktop, setIsDesktop] = useState(false)

   useEffect(() => {
      const handleResize = () => {
         setIsDesktop(window.innerWidth >= 768)
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
   }, [])

   const yRaw = useTransform(scrollY, [0, 1500], [0, 800])
   const x2Raw = useTransform(scrollY, [100, 600], [1000, 0])
   const x3Raw = useTransform(scrollY, [700, 1200], [1000, 0])

   const springConfig = { stiffness: 80, damping: 20 }
   const x2Spring = useSpring(x2Raw, springConfig)
   const x3Spring = useSpring(x3Raw, springConfig)

   const y = useMemo(() => (isDesktop ? yRaw : undefined), [isDesktop, yRaw])
   const x2 = useMemo(() => (isDesktop ? x2Spring : undefined), [isDesktop, x2Spring])
   const x3 = useMemo(() => (isDesktop ? x3Spring : undefined), [isDesktop, x3Spring])

   return (
      <motion.div className="container mx-auto px-6 pt-10">
         <div className="relative flex items-center justify-center">
            <motion.div style={{ y }} ref={ref} className="relative">
               <Image
                  alt="iPhone"
                  src="/images/iphone-frame.webp"
                  width={420}
                  height={800}
                  className="relative z-10"
               />
               <div className="absolute top-0 left-0 z-0 h-[calc(100%-15px)] w-[calc(100%-15px)] translate-x-1.5 translate-y-1.5 overflow-hidden rounded-[12vw] md:rounded-[90px]">
                  <motion.div className="absolute top-0 left-0 h-full w-full">
                     <Image alt="" src="/images/screen-1.webp" width={420} height={800} />
                  </motion.div>
                  <motion.div
                     style={{ x: x2 }}
                     className="absolute top-0 left-0 hidden h-full w-full md:block"
                  >
                     <Image alt="" src="/images/screen-2.webp" width={420} height={800} />
                  </motion.div>
                  <motion.div
                     style={{ x: x3 }}
                     className="absolute top-0 left-0 hidden h-full w-full md:block"
                  >
                     <Image alt="" src="/images/screen-3.webp" width={420} height={800} />
                  </motion.div>
               </div>
            </motion.div>
         </div>
      </motion.div>
   )
}