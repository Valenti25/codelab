'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TTextAnimate } from './type'
import { TitleGradient } from '@/components/ui/title-gradient'
import { useTranslation } from 'react-i18next'

export const Consultant = ({ textAnimate }: TTextAnimate) => {
   const { t } = useTranslation()

   return (
      <>
         <TitleGradient text="Consultant" className="px-6" />
         <div className="p-6 pt-0">
            <p className="text-gray text-sm dark:text-white/60">{t('service.consultant')}</p>
         </div>
         <div className="flex w-full gap-6">
            <div className="w-7/12 pl-6 text-sm">
               {[
                  { id: 'consultant-system-design', label: 'System Design' },
                  { id: 'consultant-system-development', label: 'System Development' },
                  { id: 'consultant-cybersecurity-service', label: 'Cybersecurity Service' },
                  { id: 'consultant-training-users', label: 'Training Users' },
               ].map(({ id, label }) => (
                  <motion.p
                     key={id}
                     {...textAnimate}
                     layout="position"
                     layoutId={id}
                     transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 10,
                     }}
                     className="border-b border-black/10 py-2 last:border-0 dark:border-neutral-200/20"
                  >
                     {label}
                  </motion.p>
               ))}
            </div>
            <div className="flex w-5/12 items-start justify-end">
               <Contents />
            </div>
         </div>
      </>
   )
}

const Contents = () => {
   const { t } = useTranslation()

   const messages = [
      { id: 1, avatar: '/images/logo.png', bg: 'bg-white', alt: 'Company Logo', message: t('consultantMsg.msg1'), align: 'left' },
      { id: 2, avatar: '/images/avatar9.png', bg: 'bg-[#f0ed1d]', alt: 'Customer Avatar', message: t('consultantMsg.msg2'), align: 'right' },
      { id: 3, avatar: '/images/logo.png', bg: 'bg-white', alt: 'Company Logo', message: t('consultantMsg.msg3'), align: 'left' },
      { id: 4, avatar: '/images/avatar9.png', bg: 'bg-[#f0ed1d]', alt: 'Customer Avatar', message: t('consultantMsg.msg4'), align: 'right' },
   ]

   return (
      <motion.div
         layout="position"
         layoutId="consultant-contents"
         initial={{ opacity: 0, x: -20 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ ease: 'easeInOut', duration: 0.5 }}
         className="h-[215px] w-full overflow-hidden pr-4"
      >
         <div className="h-max w-full space-y-4 transition-transform duration-300 hover:-translate-y-14">
            {messages.map(({ id, avatar, bg, alt, message, align }) => (
               <div key={id} className={`mt-3 flex items-start justify-start gap-2 ${align === 'right' ? 'flex-row-reverse' : ''}`}>
                  <div className={`grid aspect-square min-w-[24px] overflow-hidden rounded-full border ${bg}`}>
                     <Image src={avatar} width={24} height={24} alt={alt} className="p-1" />
                  </div>
                  <div className="h-max rounded-lg border border-neutral-400/20 bg-neutral-400/20 p-3 dark:border-white/10 dark:bg-white/5">
                     <span className="text-[10px]">{message}</span>
                  </div>
               </div>
            ))}
         </div>
      </motion.div>
   )
}
