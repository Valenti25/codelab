'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { TTextAnimate } from './type'
import { useTranslation } from 'react-i18next'
import { TitleGradient } from '@/components/ui/title-gradient'
import { GlobeLight } from '@/components/ui/globe-light'

export const Cloud = ({ textAnimate }: TTextAnimate) => {
   const { t } = useTranslation()
   const { theme } = useTheme()

   const services = [
      { id: 'cloud-domain-hosting', label: 'Domain & Hosting', stiffness: 100 },
      { id: 'cloud-database', label: 'Database', stiffness: 150 },
      { id: 'cloud-server', label: 'Server', stiffness: 200 },
   ]

   return (
      <>
         <TitleGradient text="Cloud" className="px-6" />
         <div className="p-6 pt-0">
            <p className="text-gray text-sm dark:text-white/60">{t('service.cloud')}</p>
         </div>

         <div className="flex w-full gap-6">
            <div className="w-7/12 pl-6 text-sm">
               {services.map(({ id, label, stiffness }, index) => (
                  <motion.p
                     key={id}
                     {...textAnimate}
                     layout="position"
                     layoutId={id}
                     transition={{
                        type: 'spring',
                        stiffness,
                        damping: 10,
                     }}
                     className={`py-2 ${index !== services.length - 1 ? 'border-b border-black/10 dark:border-neutral-200/20' : ''}`}
                  >
                     {label}
                  </motion.p>
               ))}
            </div>

            <div className="flex h-full w-5/12 items-start justify-end">
               <div className="relative h-[215px] w-full">
                  <div className="absolute top-0 -left-1/4 aspect-square h-[200%] w-[200%]">
                     <GlobeLight isDark={theme === 'dark'} />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
