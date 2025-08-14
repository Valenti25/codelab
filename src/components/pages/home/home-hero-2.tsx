/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { motion, useInView, useScroll, useSpring, useTransform, Variants } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { FiNavigation } from 'react-icons/fi'

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
         delay: 1,
         duration: 0.3,
      },
   },
}

export const HomeHero2 = () => {
   const sectionRef = useRef(null)

   const isInView = useInView(sectionRef, { once: false, amount: 0.03 })

   return (
      <>
         <motion.section
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="hidden md:block"
         >

            <div className="@container w-full px-4 duration-300">
               <div className="relative h-full w-full rounded-b-4xl bg-[#f3f4f6] py-10 md:pb-20 dark:bg-[#181818]">
                  <motion.div animate={{ x: 100 }} transition={{ ease: 'easeOut', duration: 2 }} />
                  <div className="relative -mb-[200px] pt-3 text-center text-black md:space-y-3 md:pt-5 dark:text-white">
                     <ScrollImageIphone />

                     <div className="hidden lg:block">
                        <ScrollImageElem
                           height={220}
                           width={220}
                           scroll={[0, 1400]}
                           toY={[0, 20]}
                           src="/images/elem-03.avif"
                           className="absolute top-0 left-1/12 [&_img]:overflow-hidden [&_img]:rounded-xl"
                        />

                        <ScrollImageElem
                           height={300}
                           width={300}
                           scroll={[0, 1200]}
                           toY={[0, -180]}
                           src="/images/elem-02.webp"
                           className="absolute top-2/3 left-1/12 hidden xl:block 2xl:left-1/6 [&_img]:overflow-hidden [&_img]:rounded-xl"
                        />

                        <ScrollImageElem
                           height={220}
                           width={220}
                           scroll={[0, 1400]}
                           toY={[0, -50]}
                           src="/images/elem-04.avif"
                           className="absolute top-1/12 right-1/12 [&_img]:overflow-hidden [&_img]:rounded-xl"
                        />

                        <ScrollImageElem
                           height={300}
                           width={300}
                           scroll={[0, 1200]}
                           toY={[0, 100]}
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
                                    delay: 1.5,
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
                                    delay: 1.5,
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

   const yRaw = useTransform(scrollY, [0, 1500], [0, 150])
   const x2Raw = useTransform(scrollY, [100, 600], [1000, 0])
   const x3Raw = useTransform(scrollY, [700, 1200], [1000, 0])

   const springConfig = { stiffness: 80, damping: 20 }
   const x2Spring = useSpring(x2Raw, springConfig)
   const x3Spring = useSpring(x3Raw, springConfig)

   const y = useMemo(() => (isDesktop ? yRaw : undefined), [isDesktop, yRaw])
   const x2 = useMemo(() => (isDesktop ? x2Spring : undefined), [isDesktop, x2Spring])
   const x3 = useMemo(() => (isDesktop ? x3Spring : undefined), [isDesktop, x3Spring])

   return (
      <motion.div className="container mx-auto px-6 lg:pt-10">
         <div className="relative flex items-center justify-center">
            <motion.div style={{ y }} ref={ref} className="relative">
               <Image
                  alt="iPhone"
                  src="/images/iphone-frame.webp"
                  width={325}
                  height={800}
                  className="relative z-10"
               />
               <div className="absolute top-0 left-0 z-0 h-[calc(100%-15px)] w-[calc(100%-15px)] translate-x-1.5 translate-y-1.5 overflow-hidden rounded-[12vw] md:rounded-[60px]">
                  <motion.div className="absolute top-0 left-0 h-full w-full">
                     <Image alt="" src="/images/screen-1.webp" width={325} height={800} />
                  </motion.div>
                  <motion.div
                     style={{ x: x2 }}
                     className="absolute top-0 left-0 hidden h-full w-full md:block"
                  >
                     <Image alt="" src="/images/screen-2.webp" width={325} height={800} />
                  </motion.div>
                  <motion.div
                     style={{ x: x3 }}
                     className="absolute top-0 left-0 hidden h-full w-full md:block"
                  >
                     <Image alt="" src="/images/screen-3.webp" width={325} height={800} />
                  </motion.div>
               </div>
            </motion.div>
         </div>
      </motion.div>
   )
}
