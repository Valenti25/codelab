'use client'

import { useTranslation } from 'react-i18next'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import { FlipWordsInView } from '@/components/ui/flip-words-in-view'
import { CSSProperties, memo, ReactNode, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'

// const VideoItem = memo(({ src = '/video/port-1.mp4' }: { src?: string }) => (
//    <video src={src} className="h-full w-full object-cover" autoPlay loop muted playsInline />
// ))

const ImgItem = memo(({ src = '/images/p-01.png' }: { src?: string }) => {
   const refDiv = useRef<HTMLDivElement>(null)
   const refImage = useRef<HTMLImageElement>(null)

   const [heightDiv, setHeightDiv] = useState(0)
   const [heightImage, setHeightImage] = useState(0)

   const maxTranslateY = heightDiv - heightImage

   const duration = heightImage / 20

   useLayoutEffect(() => {
      if (refDiv.current) setHeightDiv(refDiv.current.clientHeight)
   }, [])

   const getHeightImage = () => {
      if (refImage.current) setHeightImage(refImage.current.clientHeight)
   }

   return (
      <div ref={refDiv} className={`relative h-full w-full overflow-hidden bg-red-500 [--maxTy:${maxTranslateY}]`}>
         <Image
            ref={refImage}
            src={src}
            alt="portfolio"
            width={800}
            height={1200}
            quality={100}
            className="absolute top-0 left-0 h-max min-h-full w-max min-w-full animate-updown transition-transform ease-linear"
            onLoadingComplete={getHeightImage}
            style={
               {
                  '--maxTy': `${maxTranslateY}px`,
                  '--duration': `${duration}s`,
               } as CSSProperties
            }
         />
      </div>
   )
})

const PortfolioContent = memo(({ scrollYProgress, videoList }: { scrollYProgress: MotionValue<number>; videoList: ReactNode[] }) => (
   <motion.div
      // style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]) }}
      className="flex h-[60vh] flex-col gap-2 lg:h-[95vh]"
   >
      <div className="h-1/3 w-full overflow-x-hidden">
         <motion.div
            layout="position"
            layoutId="portfolio-content-row-1"
            style={{ x: useTransform(scrollYProgress, [0, 1], [0, -600]) }}
            className="flex h-full min-w-max items-center justify-start gap-2"
         >
            {videoList}
         </motion.div>
      </div>
      <div className="flex h-1/3 w-full justify-end overflow-x-hidden">
         <motion.div
            layout="position"
            layoutId="portfolio-content-row-2"
            style={{ x: useTransform(scrollYProgress, [0, 1], [0, 600]) }}
            className="flex h-full min-w-max items-center justify-start gap-2"
         >
            {videoList}
         </motion.div>
      </div>
      <div className="h-1/3 w-full overflow-x-hidden">
         <motion.div
            layout="position"
            layoutId="portfolio-content-row-3"
            style={{ x: useTransform(scrollYProgress, [0, 1], [0, -600]) }}
            className="flex h-full min-w-max items-center justify-start gap-2"
         >
            {videoList}
         </motion.div>
      </div>
   </motion.div>
))

const PortfolioHeader = memo(({ scrollYProgress, t }: { scrollYProgress: MotionValue<number>; t: (key: string) => string }) => (
   <motion.div
      layout="position"
      layoutId="portfolio-header"
      // style={{ y: useTransform(scrollYProgress, [0, 0.8], [0, -200]) }}
      className="absolute top-1/2 left-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2"
   >
      <div className="relative z-10 container mx-auto px-4">
         <div className="flex justify-center">
            <motion.button
               layout="position"
               layoutId="portfolio-header-button"
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
                  duration: 1,
               }}
               className="h-10 min-w-max rounded-full border border-primary-light bg-primary-light px-4 text-sm font-semibold text-white duration-200 md:text-base dark:border-white/10 dark:bg-white/5 dark:text-white/60"
            >
               <motion.p
                  layout="position"
                  layoutId="portfolio-header-button-text"
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
                  Our Work
               </motion.p>
            </motion.button>
         </div>

         <div className="flex flex-col justify-center pt-6 pb-4">
            <FlipWordsInView words={[t('portfolio')]} className="text-center text-3xl font-extrabold drop-shadow-sm md:text-5xl" />
         </div>
         <p className="px-20 text-center text-sm text-black/60 md:text-base dark:text-white/60">{t('portfolioDetail')}</p>
      </div>
   </motion.div>
))

export const HomePortfolio = () => {
   const { t } = useTranslation()

   const sectionRef = useRef<HTMLElement>(null)
   const { scrollYProgress } = useScroll()

   const videoList = useMemo(() => {
      return Array.from({ length: 8 }).map((_, idx) => (
         <div key={idx} className="relative h-full w-[70vw] overflow-hidden rounded-xl lg:w-[28vw]">
            <ImgItem src={`/images/p-0${idx + 1}.png`} key={`img-${idx}`} />
         </div>
      ))
   }, [])

   return (
      <section ref={sectionRef} id="portfolio" className="relative z-20 w-full bg-background py-10 sm:py-16" style={{ willChange: 'transform' }}>
         <PortfolioHeader scrollYProgress={scrollYProgress} t={t} />
         <PortfolioContent scrollYProgress={scrollYProgress} videoList={videoList} />

         <div className="bg-radial-mask absolute top-0 left-0 h-full w-full opacity-80 lg:opacity-95" />
         {/* <motion.div
            layout="position"
            layoutId="portfolio-mask"
            style={{ opacity: useTransform(scrollYProgress, [0.5, 0.9], [0, 0.7]) }}
            className="pointer-events-none absolute top-0 left-1/2 aspect-square w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-[15vw] lg:w-2/5"
         /> */}
      </section>
   )
}
