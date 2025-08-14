'use client'

import { SITE_INFO } from '@/utils/constants/site-info'
import Image from 'next/image'
import { useCurrentLocale } from 'next-i18n-router/client'
import i18nConfig, { Locale } from '@/i18n/i18nConfig'
import { LanguageChanger } from './language-changer'
import { ThemeChanger } from './theme-changer'
import { LuArrowUpRight } from 'react-icons/lu'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { Profiler, useEffect, useState, ProfilerOnRenderCallback } from 'react'
import { cn } from '@/lib/utils'
import { HamburgerMenu } from './hamburger-menu'
import { PointAnimate } from '../ui/point-animate'

import dynamic from 'next/dynamic'

const SidebarMobile = dynamic(() => import('./sidebar-mobile').then((mod) => mod.SidebarMobile), {
   ssr: false,
})

import { Navbar } from './navbar'

export const Header = () => {
   const currentLocale = (useCurrentLocale(i18nConfig) as Locale) || i18nConfig.defaultLocale

   const [isOpen, setIsOpen] = useState(false)
   const [size, setSize] = useState<'full' | 'container'>('full')

   const container: Variants = {
      default: { y: -100 },
      animate: {
         y: 0,
         transition: {
            ease: 'linear',
            duration: 0.3,
            // delay: 3,
         },
      },
   }

   useEffect(() => {
      const addScrollAction = () => {
         setSize(window.scrollY > 20 ? 'container' : 'full')
      }

      window.addEventListener('scroll', addScrollAction)

      return () => {
         window.removeEventListener('scroll', addScrollAction)
      }
   }, [])

   const onRender = (
      id: string,
      phase: string,
      actualDuration: number,
      baseDuration: number,
      startTime: number,
      commitTime: number,
      interactions: Set<{ id: number; name: string; timestamp: number }>,
   ) => {
      console.table({
         id,
         phase,
         actualDuration,
         baseDuration,
         startTime,
         commitTime,
         interactions,
      })
   }

   return (
      <>
         <motion.header
            variants={container}
            initial="default"
            animate="animate"
            className={cn(
               'fixed top-7 left-1/2 z-[9999] w-full max-w-full -translate-x-1/2 items-center px-2 py-2 duration-300 md:px-4 lg:top-4 xl:top-6',
               size === 'container' && 'top-2 max-w-[1100px]',
            )}
         >
            <section
               className={cn(
                  'relative grid w-full grid-cols-[1fr_auto_1fr] lg:border-0 lg:bg-transparent lg:backdrop-blur-none lg:dark:border-0 lg:dark:bg-transparent lg:dark:backdrop-blur-none',
                  size === 'container' &&
                     'h-[50px] rounded-full border border-neutral-200 bg-white text-black/60 backdrop-blur-lg md:h-[65px] dark:border-white/10 dark:bg-white/5 dark:text-white/60',
               )}
            >
               <Link
                  href="/"
                  className={cn(
                     'flex items-center justify-start pl-5 lg:pl-0',
                     size === 'container' && 'pl-3',
                  )}
               >
                  <Image
                     alt={SITE_INFO[currentLocale].title}
                     // src="/images/logo-codelab-text-row7.png"
                     src="/svg/logo-codelab-text-row7.svg"
                     width={131}
                     height={44}
                     quality={100}
                     className="hidden max-w-[130px] w-[130px] md:w-max dark:block"
                     unoptimized
                  />
                  <Image
                     alt={SITE_INFO[currentLocale].title}
                     // src="/images/logo-codelab-text-row4.png"
                     src="/svg/logo-codelab-text-row7black.svg"
                     width={131}
                     height={44}
                     quality={100}
                     className="block max-w-[130px] w-[130px] md:w-max dark:hidden"
                     unoptimized
                  />
               </Link>
               <div className="flex flex-auto items-center justify-center">
                  <Navbar />
               </div>
               <div
                  className={cn(
                     'flex items-center justify-end gap-2 pr-2',
                     size === 'container' && 'pr-2',
                  )}
               >
                  <Link
                     href="#contact-us"
                     className={cn(
                        'group bg-animateAi pulseButton hover:animate-pulseButton rounded-full',
                        isOpen && '!hidden',
                     )}
                  >
                     <PointAnimate>
                        <span className="z-50 flex items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-bold text-white md:text-sm lg:h-10">
                           Get in touch
                           <LuArrowUpRight className="hidden text-lg duration-300 group-hover:rotate-45 md:flex" />
                        </span>
                     </PointAnimate>
                  </Link>
                  <ThemeChanger
                     className={cn(
                        'hidden lg:flex',
                        isOpen && 'flex border-white/10 bg-white/5 [&_svg]:text-white',
                     )}
                  />
                  <LanguageChanger
                     className={cn(
                        'hidden lg:flex',
                        isOpen && 'flex border-white/10 bg-white/5 [&_svg]:text-white',
                     )}
                  />
                  <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
               </div>
            </section>
         </motion.header>

         <SidebarMobile isScroll={size === 'container'} isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
   )
}
