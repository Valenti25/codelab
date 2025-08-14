'use client'

import { FlipWordsInView } from '@/components/ui/flip-words-in-view'
import { TagHeading } from '@/components/ui/tag-heading'
import { TextFade } from '@/components/ui/text-fade'
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Counter } from '@/components/ui/counter'
import { Marquee } from '@/components/ui/marquee'
import { useCurrentLocale } from 'next-i18n-router/client'
import i18nConfig, { Locale } from '@/i18n/i18nConfig'

const reviewsThai = [
   {
      profile: 'review-av-01.avif',
      text: 'บริการดีมาก ทีมงานตอบไวและเป็นมืออาชีพ เว็บไซต์ที่ได้ตรงตามที่ต้องการเลยครับ',
   },
   {
      profile: 'review-av-02.avif',
      text: 'ประทับใจในงานออกแบบมาก ๆ ครับ งานกราฟิกสวย คุยง่าย ใส่ใจรายละเอียด',
   },
   {
      profile: 'review-av-03.avif',
      text: 'บริการจัดทำสื่อสิ่งพิมพ์ได้มาตรฐานมากค่ะ งานออกมาตรงแบบและสวยงาม',
   },
   {
      profile: 'review-av-04.avif',
      text: 'ให้คำปรึกษาเรื่องระบบได้ตรงจุดมากครับ ช่วยแก้ปัญหา IT ที่ค้างคาใจมานานได้เลย',
   },
   {
      profile: 'review-av-05.avif',
      text: 'รู้สึกดีมากที่เลือกใช้บริการที่นี่ ทีมงานมืออาชีพ งานออกมาตรงเวลา',
   },
   {
      profile: 'review-av-06.avif',
      text: 'ทีมงานเข้าใจความต้องการของลูกค้าอย่างแท้จริง บริการครบวงจรและดูแลดีมากค่ะ',
   },
   {
      profile: 'review-av-07.avif',
      text: 'เว็บไซต์โหลดไว ใช้งานง่าย รองรับมือถือด้วย ดีไซน์ดูทันสมัยมากครับ',
   },
]

const reviewsEng = [
   {
      profile: 'review-av-01.avif',
      text: 'Very professional team! The website was delivered on time and exceeded our expectations.',
   },
   {
      profile: 'review-av-02.avif',
      text: 'Their app development skills are top-notch. Great communication and support throughout.',
   },
   {
      profile: 'review-av-03.avif',
      text: 'I needed a branding and web package, and Codelab nailed it. Beautiful design and smooth functionality.',
   },
   {
      profile: 'review-av-04.avif',
      text: 'Their team gave us a full IT solution – from design to development to deployment. Fantastic!',
   },
   {
      profile: 'review-av-05.avif',
      text: 'Codelab helped us launch our app smoothly. Highly recommended for any tech projects.',
   },
   {
      profile: 'review-av-06.avif',
      text: 'Their graphic design work is clean, creative, and exactly what we envisioned.',
   },
   {
      profile: 'review-av-07.avif',
      text: 'We received not only great service but also valuable advice that improved our system efficiency.',
   },
]

export const HomeTestimonials = () => {
   const local = (useCurrentLocale(i18nConfig) as Locale) || i18nConfig.defaultLocale
   const { t } = useTranslation()

   const ref = useRef(null)
   const isInView = useInView(ref, { once: false, amount: 0.8 })

   const reviews = local === 'th' ? reviewsThai : reviewsEng

   const firstRow = reviews.slice(0, reviews.length / 2)
   const secondRow = reviews.slice(reviews.length / 2)

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
         className="relative z-20 w-full bg-background py-14 pt-0 pb-0 md:py-16 md:pt-0 lg:pt-14"
      >
         <div className="relative container mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-4 pt-4 lg:grid-cols-2">
            <div className="z-10 flex flex-col items-center justify-center w-full space-y-4 p-4 lg:items-start lg:p-6">
               <div>
                  <div className="flex justify-center lg:justify-start">
                     <TagHeading label="Testimonials" maxWidth={110} className="[&_p]:text-sm" />
                  </div>

                  <div className="flex flex-col justify-center pt-6 pb-4 lg:justify-start">
                     <FlipWordsInView
                        words={[t('testimonials')]}
                        className="text-center text-3xl font-extrabold drop-shadow-sm [text-shadow:1px_1px_2px_#fff,_0_0_1em_#fff,_0_0_0.2em_#fff] md:text-4xl lg:text-left dark:[text-shadow:1px_1px_2px_#000,_0_0_1em_#000,_0_0_0.2em_#000]"
                     />
                  </div>
               </div>
               <TextFade direction="up">
                  <p className="w-full max-w-[420px] text-center text-sm text-black/60 md:text-base lg:text-left dark:text-white/60">
                     {t('testimonialsDetail')}
                  </p>
               </TextFade>
            </div>
            <div className="relative h-[400px] overflow-hidden">
               <div className="relative flex h-full w-full flex-row items-center justify-center overflow-hidden">
                  <Marquee pauseOnHover vertical className="[--duration:10s]">
                     {firstRow.map((review, idx) => (
                        <ReviewCard key={idx} {...review} />
                     ))}
                  </Marquee>
                  <Marquee reverse pauseOnHover vertical className="[--duration:10s]">
                     {secondRow.map((review, idx) => (
                        <ReviewCard key={idx} {...review} />
                     ))}
                  </Marquee>
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
               </div>
            </div>
         </div>

         <div className="container mx-auto mt-10 grid max-w-[1200px] grid-cols-3 gap-0 md:gap-6 border-y-black/10 px-4 pt-6 divide-x sm:border-y sm:pt-0 lg:mt-20 dark:divide-white/10 dark:border-y-white/10">
            <div className="flex w-full flex-col items-center justify-start sm:py-8">
               <div className="flex flex-col items-center justify-center w-full">
                  <p className="font-bold">
                     <Counter
                        from={0}
                        to={7}
                        animationOptions={{ duration: 1 }}
                        className="text-[40px] md:text-[70px]"
                     />
                  </p>
                  <p className="bg-gradient-to-r from-[#000] to-[#999] bg-clip-text text-xs md:text-base font-semibold text-transparent sm:text-lg dark:from-[#fff]">
                     Brands
                  </p>
               </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start sm:py-8">
               <div className="flex flex-col items-center justify-center w-full">
                  <p className="font-bold">
                     <Counter
                        from={0}
                        to={15}
                        animationOptions={{ duration: 1 }}
                        className="text-[40px] md:text-[70px]"
                     />
                     <span className="text-4xl md:text-7xl">+</span>
                  </p>
                  <p className="bg-gradient-to-r from-[#000] to-[#999] bg-clip-text text-xs md:text-base font-semibold text-transparent sm:text-lg dark:from-[#fff]">
                     Projects
                  </p>
               </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start sm:py-8">
               <div className="flex flex-col items-center justify-center w-full">
                  <p className="font-bold">
                     <Counter
                        from={0}
                        to={4}
                        animationOptions={{ duration: 1 }}
                        className="text-[40px] md:text-[70px]"
                     />
                     <span className="text-4xl md:text-6xl">X</span>
                  </p>
                  <p className="bg-gradient-to-r from-[#000] to-[#999] bg-clip-text text-xs md:text-base font-semibold text-transparent sm:text-lg dark:from-[#fff]">
                     Search Volume
                  </p>
               </div>
            </div>
         </div>
      </motion.section>
   )
}

const ReviewCard = ({ text, profile }: { text: string; profile: string }) => {
   return (
      <div className="h-full w-full rounded-xl border border-black/10 p-4 hover:bg-black/5 dark:border-white/10 hover:dark:bg-white/5">
         <p>{text}</p>

         <div className="flex w-full items-center justify-start gap-2 pt-4">
            <div className="size-6 overflow-hidden rounded-full">
               <Image alt="" src={`/images/${profile}`} width={32} height={32} />
            </div>
            <div className="space-y-2">
               <div className="h-1.5 w-20 rounded-full bg-black dark:bg-white" />
               <div className="h-1 w-14 rounded-full bg-black/50 dark:bg-white/50" />
            </div>
         </div>
      </div>
   )
}
