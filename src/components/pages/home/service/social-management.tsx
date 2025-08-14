'use client'

import { motion } from 'framer-motion'
import { TTextAnimate } from './type'
import { useTranslation } from 'react-i18next'
import { TitleGradient } from '@/components/ui/title-gradient'
import Image from 'next/image'
// import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6'
import { Input } from '@/components/ui/input'

export const SocialManagement = ({ textAnimate }: TTextAnimate) => {
   const { t } = useTranslation()

   return (
      <>
         <TitleGradient text="Social Management" className="px-6" />
         <div className="p-6 pt-0">
            <p className="text-gray h-[40px] text-sm dark:text-white/60">{t('service.social')}</p>
         </div>
         <div className="flex w-full flex-col gap-6 md:flex-row">
            <div className="w-full pl-6 text-sm md:w-6/12">
               <motion.p
                  layout="position"
                  layoutId="social-chat"
                  {...textAnimate}
                  transition={{
                     type: 'spring',
                     stiffness: 100,
                     damping: 10,
                  }}
                  className="border-b border-black/10 py-2 dark:border-neutral-200/20"
               >
                  Social Chat
               </motion.p>
               <motion.p
                  layout="position"
                  layoutId="social-chat-bot"
                  {...textAnimate}
                  transition={{
                     type: 'spring',
                     stiffness: 150,
                     damping: 10,
                  }}
                  className="border-b border-black/10 py-2 dark:border-neutral-200/20"
               >
                  Chat Bot
               </motion.p>
               <motion.p
                  layout="position"
                  layoutId="social-post"
                  {...textAnimate}
                  transition={{
                     type: 'spring',
                     stiffness: 200,
                     damping: 10,
                  }}
                  className="border-b border-black/10 py-2 dark:border-neutral-200/20"
               >
                  Post
               </motion.p>
               <motion.p
                  {...textAnimate}
                  layout="position"
                  layoutId="social-crm"
                  transition={{
                     type: 'spring',
                     stiffness: 200,
                     damping: 10,
                  }}
                  className="border-b border-black/10 py-2 dark:border-neutral-200/20"
               >
                  CRM
               </motion.p>
               <motion.p
                  layout="position"
                  layoutId="social-etc"
                  {...textAnimate}
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
            <div className="w-full md:w-6/12">
               <Contents />
            </div>
         </div>
      </>
   )
}

const Contents = () => {
   return (
      <div className="relative -mt-4 flex h-[230px] items-start justify-center gap-6 px-6 py-3 duration-300 md:h-[215px]">
         <div className="group relative h-full w-full">
            <div className="-mt-2 max-w-sm space-y-4 rounded-xl border border-neutral-400/20 bg-neutral-400/20 p-5 duration-300 group-hover:scale-95 group-hover:blur-[2px] dark:border-white/10 dark:bg-white/5">
               <div className="flex items-center justify-start gap-4 border-b border-neutral-400/20 pb-4 dark:border-white/10">
                  <div className="size-9 min-w-max rounded-full">
                     <Image priority src="/images/facebook.webp" width={36} height={36} alt="" />
                  </div>
                  <div className="space-y-2">
                     <div className="h-2 w-16 rounded-full bg-black/30 dark:bg-white/30" />
                     <div className="h-2 w-10 rounded-full bg-black/30 dark:bg-white/30" />
                  </div>
               </div>

               <div className="absolute bottom-0 left-0 aspect-square w-full translate-y-2/3 rounded-full bg-primary opacity-0 blur-3xl duration-700 group-hover:opacity-50" />

               <div className="space-y-4">
                  <div className="flex items-center justify-start gap-2 px-2">
                     <div className="size-8 min-w-max overflow-hidden rounded-full bg-white">
                        <Image priority src="/images/avatar9.png" width={32} height={32} alt="" />
                     </div>
                     <div className="space-y-1.5">
                        <div className="flex items-center justify-start gap-1">
                           <div className="h-2 w-16 rounded-full bg-black/30 dark:bg-white/30" />
                           {/* <FaCircleCheck className="text-xs text-green-400" /> */}
                           <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              className="text-xs text-green-400"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                           </svg>
                        </div>
                        <div className="h-1 w-20 rounded-full bg-black/10 dark:bg-white/10" />
                     </div>
                  </div>
                  <div className="flex items-center justify-start gap-2 px-2">
                     <div className="size-8 min-w-max overflow-hidden rounded-full bg-white">
                        <Image priority src="/images/avatar10.webp" width={32} height={32} alt="" />
                     </div>
                     <div className="space-y-1.5">
                        <div className="flex items-center justify-start gap-1">
                           <div className="h-2 w-16 rounded-full bg-black/30 dark:bg-white/30" />
                           {/* <FaCircleXmark className="text-xs text-red-500" /> */}
                           <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              className="text-xs text-red-500"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path>
                           </svg>
                        </div>
                        <div className="h-1 w-20 rounded-full bg-black/10 dark:bg-white/10" />
                     </div>
                  </div>
                  <div className="flex items-center justify-start gap-2 px-2">
                     <div className="size-8 min-w-max overflow-hidden rounded-full bg-white">
                        <Image priority src="/images/avatar11.webp" width={32} height={32} alt="" />
                     </div>
                     <div className="space-y-1.5">
                        <div className="flex items-center justify-start gap-1">
                           <div className="h-2 w-16 rounded-full bg-black/30 dark:bg-white/30" />
                           {/* <FaCircleCheck className="text-xs text-green-400" /> */}
                           <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              className="text-xs text-green-400"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                           </svg>
                        </div>
                        <div className="h-1 w-20 rounded-full bg-black/10 dark:bg-white/10" />
                     </div>
                  </div>
                  <div className="flex items-center justify-start gap-2 px-2">
                     <div className="size-8 min-w-max overflow-hidden rounded-full bg-white">
                        <Image priority src="/images/avatar9.png" width={32} height={32} alt="" />
                     </div>
                     <div className="space-y-1.5">
                        <div className="flex items-center justify-start gap-1">
                           <div className="h-2 w-16 rounded-full bg-black/30 dark:bg-white/30" />
                           {/* <FaCircleXmark className="text-xs text-red-500" /> */}
                           <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              className="text-xs text-red-500"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path>
                           </svg>
                        </div>
                        <div className="h-1 w-20 rounded-full bg-black/10 dark:bg-white/10" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="absolute top-4 left-2/5 w-[320px] overflow-hidden rounded-xl border border-neutral-400/20 bg-white ring-white/5 duration-300 group-hover:-translate-y-10 group-hover:shadow-2xl dark:border-white/10 dark:bg-[#232323] dark:ring-4">
               <div className="flex w-full items-center justify-start gap-2 bg-primary px-4 py-2">
                  <p className="text-sm font-medium text-white">CRM</p>
                  <div className="h-2 w-16 rounded-full bg-white/30" />
               </div>
               <div className="p-4">
                  <div className="flex items-center justify-start gap-4">
                     <div className="size-12 min-w-max rounded-full bg-white">
                        <Image priority src="/images/avatar9.png" width={48} height={48} alt="" />
                     </div>
                     <div className="space-y-2">
                        <div className="h-2 w-16 rounded-full bg-black/30 dark:bg-white/30" />
                        <div className="h-2 w-10 rounded-full bg-black/30 dark:bg-white/30" />
                     </div>
                  </div>
                  <div className="flex items-center justify-start gap-2 pt-4">
                     <div className="h-2 w-8 rounded-full bg-black/30 dark:bg-white/30" />
                     <Input className="h-7 w-full rounded-sm px-2" defaultValue="098-xxx-xxxx" style={{ fontSize: '12px' }} />
                  </div>
                  <div className="flex items-center justify-start gap-2 pt-4">
                     <div className="h-2 w-8 rounded-full bg-black/30 dark:bg-white/30" />
                     <Input
                        className="h-7 w-full rounded-sm border-ring px-2 ring-[3px] ring-ring/50"
                        defaultValue="ctm001@email.com"
                        style={{ fontSize: '12px' }}
                     />
                  </div>
                  <div className="flex items-center justify-start gap-2 pt-4">
                     <div className="h-2 w-8 rounded-full bg-black/30 dark:bg-white/30" />
                     <Input className="h-7 w-full rounded-sm px-2" defaultValue="xxxxxxx" style={{ fontSize: '12px' }} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
