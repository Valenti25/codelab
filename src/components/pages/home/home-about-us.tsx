'use client'

import {
   motion,
   MotionValue,
   useAnimationFrame,
   useMotionValue,
   useScroll,
   useSpring,
   useTransform,
   useVelocity,
} from 'framer-motion'
import { FlipWordsInView } from '@/components/ui/flip-words-in-view'
import { useTranslation } from 'react-i18next'
import { LuBookMinus, LuCode, LuImage, LuMessageSquareText, LuShoppingCart } from 'react-icons/lu'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TextFade } from '@/components/ui/text-fade'
import { TagHeading } from '@/components/ui/tag-heading'

const animateElem = {
   initial: {
      scale: 0,
   },
   whileInView: {
      scale: 1,
      transition: {
         delay: 0.75,
      },
   },
}

export const HomeAboutUs = () => {
   const { t } = useTranslation()

   const refInner = useRef<HTMLDivElement>(null)
   const refOuter = useRef<HTMLDivElement>(null)
   const [innerWidth, setInnerWidth] = useState<number>(0)
   const [outerWidth, setOuterWidth] = useState<number>(0)

   const [screenWidth, setScreenWidth] = useState<number>(0)

   const { scrollY } = useScroll()
   const scrollVelocity = useVelocity(scrollY)

   const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
   })

   useEffect(() => {
      const width = refOuter.current?.offsetWidth || 0
      if (refOuter.current?.offsetWidth) {
         setOuterWidth(width / 2)
      }
   }, [refOuter, screenWidth])

   useEffect(() => {
      const width = refInner.current?.offsetWidth || 0
      if (refInner.current?.offsetWidth) {
         setInnerWidth(width / 2)
      }
   }, [refInner, screenWidth])

   useEffect(() => {
      const handleResize = () => {
         setScreenWidth(window.innerWidth)
      }

      handleResize()
      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
   }, [])

   return (
      <section className="relative z-20 w-full bg-background pt-16 sm:pb-10 md:pt-32">
         <div className="container mx-auto max-w-[1200px] px-10">
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-10">
               <div className="flex items-center justify-center pb-[50px] sm:pb-[100px] lg:justify-start lg:pb-0">
                  <div>
                     <div className="flex justify-center lg:justify-start">
                        <TagHeading label="About Us" />
                     </div>

                     <div className="flex flex-col justify-center pt-6 pb-4 lg:justify-start">
                        <FlipWordsInView
                           words={[t('aboutUsTitle')]}
                           className="px-0 text-center text-3xl font-extrabold drop-shadow-sm [text-shadow:1px_1px_2px_#fff,_0_0_1em_#fff,_0_0_0.2em_#fff] md:text-5xl lg:text-left dark:[text-shadow:1px_1px_2px_#000,_0_0_1em_#000,_0_0_0.2em_#000]"
                        />
                     </div>
                     <TextFade direction="up">
                        <p className="w-full max-w-[420px] text-center text-sm text-black/60 md:text-base lg:text-left dark:text-white/60">
                           {t('aboutUsDetail')}
                        </p>
                     </TextFade>

                     <TextFade direction="up">
                        <div className="flex justify-center pt-6 md:justify-start">
                           <Link href="/contact-us" className="w-fit">
                              <Button className="rounded-full bg-gradient-to-b from-primary to-primary-light px-4 py-2 text-sm text-white shadow-[0px_1px_3px_0px_#FFFFFF4D_inset]">
                                 {t('contactBtn')}
                              </Button>
                           </Link>
                        </div>
                     </TextFade>
                  </div>
               </div>

               <div className="relative pb-[50vw] sm:pb-0 md:pb-[50px] lg:pb-0">
                  <div className="relative z-10">
                     <motion.div
                        initial={{
                           x: 40,
                           scale: 0,
                        }}
                        whileInView={{
                           x: -10,
                           scale: 1,
                           transition: {
                              delay: 0.85,
                           },
                        }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-[160%] scale-90 sm:translate-y-[180%] lg:left-0 lg:-translate-x-1/3"
                     >
                        <div className="w-fit rounded-2xl border border-black/10 bg-white/5 p-6 shadow-2xl/10 shadow-primary backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                           <p className="font-bold">{t('aboutUsElemTitle')}</p>

                           <div className="flex w-[310px] flex-wrap gap-2 pt-4">
                              <motion.div
                                 {...animateElem}
                                 className="flex items-center justify-start gap-2 rounded-full bg-black/5 p-2 pr-3 dark:bg-white/5"
                              >
                                 <div className="flex size-6 min-w-max items-center justify-center rounded-full bg-primary text-sm">
                                    <LuShoppingCart className="text-white" />
                                 </div>
                                 <p className="text-xs">E-Commerce</p>
                              </motion.div>
                              <motion.div
                                 {...animateElem}
                                 className="flex items-center justify-start gap-2 rounded-full bg-black/5 p-2 pr-3 dark:bg-white/5"
                              >
                                 <div className="flex size-6 min-w-max items-center justify-center rounded-full bg-primary text-sm">
                                    <LuMessageSquareText className="text-white" />
                                 </div>
                                 <p className="text-xs">ChatBot</p>
                              </motion.div>
                              <motion.div
                                 {...animateElem}
                                 className="flex items-center justify-start gap-2 rounded-full bg-black/5 p-2 pr-3 dark:bg-white/5"
                              >
                                 <div className="flex size-6 min-w-max items-center justify-center rounded-full bg-primary text-sm">
                                    <LuBookMinus className="text-white" />
                                 </div>
                                 <p className="text-xs">Blog</p>
                              </motion.div>
                              <motion.div
                                 {...animateElem}
                                 className="flex items-center justify-start gap-2 rounded-full bg-black/5 p-2 pr-3 dark:bg-white/5"
                              >
                                 <div className="flex size-6 min-w-max items-center justify-center rounded-full bg-primary text-sm">
                                    <LuImage className="text-white" />
                                 </div>
                                 <p className="text-xs">Gallery</p>
                              </motion.div>
                              <motion.div
                                 {...animateElem}
                                 className="flex items-center justify-start gap-2 rounded-full bg-black/5 p-2 pr-3 dark:bg-white/5"
                              >
                                 <div className="flex size-6 min-w-max items-center justify-center rounded-full bg-primary text-sm">
                                    <LuCode className="text-white" />
                                 </div>
                                 <p className="text-xs">Custom CMS</p>
                              </motion.div>
                           </div>
                        </div>
                     </motion.div>
                  </div>

                  <div className="relative mx-auto aspect-square h-full w-full max-w-[400px] lg:max-w-none">
                     <motion.div
                        initial={{
                           scale: 0,
                        }}
                        whileInView={{
                           scale: 1,
                        }}
                        transition={{
                           duration: 0.4,
                           delay: 0,
                        }}
                        className="absolute top-1/2 left-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-1.5"
                     >
                        <motion.div
                           initial={{
                              scale: 0,
                           }}
                           whileInView={{
                              scale: 1,
                           }}
                           transition={{
                              delay: 0.3,
                           }}
                           className="in-checked: flex h-full w-full justify-center rounded-full border border-dashed border-black/40 bg-white shadow-2xl shadow-primary"
                        >
                           <Image
                              alt="logo"
                              src="/svg/new-logo.svg"
                              width={60}
                              height={60}
                              className="object-contain"
                              unoptimized
                           />
                        </motion.div>
                     </motion.div>

                     <motion.div
                        initial={{
                           scale: 0,
                        }}
                        whileInView={{
                           scale: 1,
                        }}
                        transition={{
                           delay: 0.3,
                        }}
                        className="absolute top-1/2 left-1/2 h-7/12 w-7/12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-black/10 dark:border-white/20"
                     >
                        <div ref={refInner} className="h-full w-full">
                           {innerWidth > 0 && (
                              <>
                                 <RotatingIcon
                                    src="/images/facebook.webp"
                                    startAngle={-100}
                                    smoothVelocity={smoothVelocity}
                                    radius={innerWidth}
                                 />
                                 <RotatingIcon
                                    src="/images/ig.webp"
                                    startAngle={200}
                                    smoothVelocity={smoothVelocity}
                                    radius={innerWidth}
                                 />
                                 <RotatingIcon
                                    src="/images/line.webp"
                                    startAngle={500}
                                    smoothVelocity={smoothVelocity}
                                    radius={innerWidth}
                                 />
                                 <RotatingIcon
                                    src="/images/youtube.webp"
                                    startAngle={800}
                                    smoothVelocity={smoothVelocity}
                                    radius={innerWidth}
                                 />
                              </>
                           )}
                        </div>
                     </motion.div>
                     <motion.div
                        initial={{
                           scale: 0,
                        }}
                        whileInView={{
                           scale: 1,
                        }}
                        transition={{
                           duration: 0.5,
                           delay: 0.3,
                        }}
                        ref={refOuter}
                        className="h-full w-full rounded-full border-2 border-dashed border-black/10 dark:border-white/20"
                     >
                        {outerWidth > 0 && (
                           <>
                              <RotatingIcon
                                 src="/images/x.webp"
                                 startAngle={0.8}
                                 smoothVelocity={smoothVelocity}
                                 radius={outerWidth}
                              />
                              <RotatingIcon
                                 src="/images/tiktok.webp"
                                 startAngle={2}
                                 smoothVelocity={smoothVelocity}
                                 radius={outerWidth}
                              />
                              <RotatingIcon
                                 src="/images/linkdin.webp"
                                 startAngle={3}
                                 smoothVelocity={smoothVelocity}
                                 radius={outerWidth}
                              />
                              <RotatingIcon
                                 src="/images/google-ads.webp"
                                 startAngle={4}
                                 smoothVelocity={smoothVelocity}
                                 radius={outerWidth}
                              />
                              <RotatingIcon
                                 src="/images/shopee.webp"
                                 startAngle={4.7}
                                 smoothVelocity={smoothVelocity}
                                 radius={outerWidth}
                              />
                              
                              <RotatingIcon
                                 src="/images/shopify.webp"
                                 startAngle={5.7}
                                 smoothVelocity={smoothVelocity}
                                 radius={outerWidth}
                              />
                              
                              <RotatingIcon
                                 src="/images/laz.webp"
                                 startAngle={6.5}
                                 smoothVelocity={smoothVelocity}
                                 radius={outerWidth}
                              />
                              
                              <RotatingIcon
                                 src="/images/wordpress.webp"
                                 startAngle={7.7}
                                 smoothVelocity={smoothVelocity}
                                 radius={outerWidth}
                              />
                           </>
                        )}
                     </motion.div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

const RotatingIcon = ({
   src,
   startAngle,
   radius,
   smoothVelocity,
}: {
   src: string
   startAngle: number
   radius: number
   smoothVelocity: MotionValue<number>
}) => {
   const containerRef = useRef(null)
   const angle = useMotionValue(startAngle)

   useAnimationFrame((t, delta) => {
      const velocity = smoothVelocity.get()
      const speed = velocity / 800
      angle.set(angle.get() + speed * (delta / 1000))
   })

   const x = useTransform(angle, (v) => Math.cos(v) * radius)
   const y = useTransform(angle, (v) => Math.sin(v) * radius)

   return (
      <motion.div
         ref={containerRef}
         initial={{
            scale: 0,
         }}
         whileInView={{
            scale: 1,
            transition: {
               delay: 0.5,
            },
         }}
         style={{ x, y }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
         <Image
            alt=""
            src={src}
            width={58}
            height={58}
            className="size-9 object-contain sm:size-12 lg:size-auto"
         />
      </motion.div>
   )
}
