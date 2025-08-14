'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { BsSearch } from 'react-icons/bs'
import { TTextAnimate } from './type'
import { useTranslation } from 'react-i18next'
import { TitleGradient } from '@/components/ui/title-gradient'
import { TypingAnimation } from '@/components/ui/typing-animation'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'

export const DigitalMarketing = ({ textAnimate }: TTextAnimate) => {
   const { t } = useTranslation()

   return (
      <>
         <TitleGradient text="Digital Marketing" />
         <div className="p-6 pt-0">
            <p className="text-gray h-[40px] text-sm dark:text-white/60">{t('service.digital')}</p>
         </div>
         <div className="flex w-full gap-6">
            <div className="w-6/12 pl-6 text-sm">
               <motion.p
                  {...textAnimate}
                  layout="position"
                  layoutId="digital-marketing-seo"
                  transition={{
                     type: 'spring',
                     stiffness: 100,
                     damping: 10,
                  }}
                  className="border-b border-black/10 py-2 dark:border-neutral-200/20"
               >
                  SEO
               </motion.p>
               <motion.p
                  {...textAnimate}
                  layout="position"
                  layoutId="digital-marketing-google-ads"
                  transition={{
                     type: 'spring',
                     stiffness: 150,
                     damping: 10,
                  }}
                  className="border-b border-black/10 py-2 dark:border-neutral-200/20"
               >
                  Google ADS
               </motion.p>
               <motion.p
                  {...textAnimate}
                  layout="position"
                  layoutId="digital-marketing-broadcast"
                  transition={{
                     type: 'spring',
                     stiffness: 200,
                     damping: 10,
                  }}
                  className="border-b border-black/10 py-2 dark:border-neutral-200/20"
               >
                  Broadcast
               </motion.p>
               <motion.p
                  {...textAnimate}
                  layout="position"
                  layoutId="digital-marketing-boost-post"
                  transition={{
                     type: 'spring',
                     stiffness: 200,
                     damping: 10,
                  }}
                  className="border-b border-black/10 py-2 dark:border-neutral-200/20"
               >
                  Boost Post
               </motion.p>
               <motion.p
                  {...textAnimate}
                  layout="position"
                  layoutId="digital-marketing-etc"
                  transition={{
                     type: 'spring',
                     stiffness: 200,
                     damping: 10,
                  }}
                  className="py-2"
               >
                  etc.
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
   return (
      <div className="group flex h-[215px] items-start justify-start gap-6">
         <motion.div
            layout="position"
            layoutId="digital-marketing-contents"
            initial={{
               opacity: 0,
               x: -50,
            }}
            whileInView={{
               opacity: 1,
               x: 0,
            }}
            transition={{
               ease: 'easeOut',
               duration: 0.3,
            }}
            className="flex h-full w-full flex-col gap-4 pr-2 sm:pr-4"
         >
            <div className="flex h-full w-full flex-col items-start justify-start gap-2">
               <div className="flex w-full flex-col items-center justify-center gap-2">
                  <div
                     className={cn(
                        'group w-fit rounded-full border border-black/5 bg-neutral-50 pb-1 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800',
                     )}
                  >
                     <AnimatedShinyText className="inline-flex items-center justify-center px-2 py-0.5 text-[10px] transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>✨ ENTER A TOPIC</span>
                     </AnimatedShinyText>
                  </div>
                  <div className="flex w-full items-center justify-between gap-2 rounded-lg border border-black/10 bg-neutral-50 py-1.5 pr-2 pl-3 text-sm text-black dark:border-white/10 dark:bg-neutral-900 dark:text-white">
                     <TypingAnimation text="Google search" className="line-clamp-1 text-left text-xs" />
                     {/* <BsSearch className="min-w-[20px]" /> */}
                     <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="min-w-[20px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                     </svg>
                  </div>
               </div>
               <div className="h-full w-full min-w-max sm:min-w-0">
                  <div className="mb-1 grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-1 border-b border-b-black/10 text-center text-xs font-medium dark:border-b-neutral-50/10 [&>p]:px-1.5 [&>p]:pt-1 [&>p]:pb-2">
                     <p className="text-left">Keyword</p>
                     <p>Volume</p>
                     <p>KD</p>
                     <p className="text-right">Traffic</p>
                  </div>
                  <div className="h-full overflow-y-auto text-center">
                     <div className="h-max w-full duration-300 group-hover:-mt-8">
                        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-1 text-xs [&>p]:p-1.5">
                           <p className="text-left">Marketing</p>
                           <p>112k</p>
                           <p>97</p>
                           <p className="text-right">12.8k</p>
                        </div>
                        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-1 text-xs [&>p]:p-1.5">
                           <p className="text-left">Tech</p>
                           <p>103k</p>
                           <p>94</p>
                           <p className="text-right">10.3k</p>
                        </div>
                        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-1 text-xs [&>p]:p-1.5">
                           <p className="text-left">Company</p>
                           <p>94k</p>
                           <p>92</p>
                           <p className="text-right">8.6k</p>
                        </div>
                        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-1 text-xs [&>p]:p-1.5">
                           <p className="text-left">Security</p>
                           <p>87k</p>
                           <p>89</p>
                           <p className="text-right">8.4k</p>
                        </div>
                        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-1 text-xs [&>p]:p-1.5">
                           <p className="text-left">Shop</p>
                           <p>71k</p>
                           <p>86</p>
                           <p className="text-right">7.7k</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
   )
}
