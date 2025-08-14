'use client'

import { motion } from 'framer-motion'
// import { FiItalic, FiLayers, FiNavigation, FiPenTool, FiTable } from 'react-icons/fi'
import { TTextAnimate } from './type'
import { useTranslation } from 'react-i18next'
import { TitleGradient } from '@/components/ui/title-gradient'

export const Design = ({ textAnimate }: TTextAnimate) => {
   const { t } = useTranslation()

   const services = [
      { id: 'design-ux-ui', label: 'UX/UI Design' },
      { id: 'design-ux-writing', label: 'UX Writing & Research' },
      { id: 'design-branding', label: 'Branding Design' },
      { id: 'design-thinking', label: 'Design Thinking' },
   ]

   return (
      <>
         <TitleGradient text="Design" className="px-6" />
         <div className="p-6 pt-0">
            <p className="text-gray text-sm dark:text-white/60">{t('service.design')}</p>
         </div>

         <div className="flex w-full gap-6">
            <div className="w-7/12 pl-6 text-sm">
               {services.map(({ id, label }, index) => (
                  <motion.p
                     key={id}
                     {...textAnimate}
                     layout="position"
                     layoutId={id}
                     transition={{
                        type: 'spring',
                        stiffness: 100 + index * 50,
                        damping: 10,
                     }}
                     className={`py-2 ${index !== services.length - 1 ? 'border-b border-black/10 dark:border-neutral-200/20' : ''}`}
                  >
                     {label}
                  </motion.p>
               ))}
            </div>

            <div className="flex h-full w-5/12 items-start justify-end">
               <Contents />
            </div>
         </div>
      </>
   )
}

const Contents = () => {
   const icons = [
      <svg
         stroke="currentColor"
         fill="none"
         strokeWidth="2"
         viewBox="0 0 24 24"
         strokeLinecap="round"
         strokeLinejoin="round"
         height="1em"
         width="1em"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
         <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
         <path d="M2 2l7.586 7.586"></path>
         <circle cx="11" cy="11" r="2"></circle>
      </svg>,
      <svg
         stroke="currentColor"
         fill="none"
         strokeWidth="2"
         viewBox="0 0 24 24"
         strokeLinecap="round"
         strokeLinejoin="round"
         height="1em"
         width="1em"
         xmlns="http://www.w3.org/2000/svg"
      >
         <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
         <polyline points="2 17 12 22 22 17"></polyline>
         <polyline points="2 12 12 17 22 12"></polyline>
      </svg>,
      <svg
         stroke="currentColor"
         fill="none"
         strokeWidth="2"
         viewBox="0 0 24 24"
         strokeLinecap="round"
         strokeLinejoin="round"
         height="1em"
         width="1em"
         xmlns="http://www.w3.org/2000/svg"
      >
         <line x1="19" y1="4" x2="10" y2="4"></line>
         <line x1="14" y1="20" x2="5" y2="20"></line>
         <line x1="15" y1="4" x2="9" y2="20"></line>
      </svg>,
      <svg
         stroke="currentColor"
         fill="none"
         strokeWidth="2"
         viewBox="0 0 24 24"
         strokeLinecap="round"
         strokeLinejoin="round"
         height="1em"
         width="1em"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>
      </svg>,
      // FiLayers,
      // FiItalic,
      // FiTable,
   ]

   return (
      <div className="group flex w-full items-start justify-start gap-7">
         <motion.div
            layout="position"
            layoutId="design-contents"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="relative"
         >
            <div className="flex flex-col gap-2 rounded-lg border border-black/10 p-1 dark:border-white/10">
               {icons.map((Icon, idx) => (
                  <div
                     key={idx}
                     className="grid aspect-square place-content-center rounded-sm p-2 duration-300  hover:bg-black/5  dark:hover:bg-white/5"
                  >
                     {/* <Icon /> */}
                     {Icon}
                  </div>
               ))}
            </div>

            {/* Client Label */}
            <div className="absolute top-36 left-12 transition-all duration-300 group-hover:top-32 group-hover:left-16">
               <div className="relative flex items-start justify-end gap-1">
                  <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-[10px] dark:border-white/10 dark:bg-white/10">
                     Client
                  </span>
                  {/* <FiNavigation className="-mt-2 -ml-2 fill-current text-sm" /> */}
                  <svg
                     stroke="currentColor"
                     fill="none"
                     strokeWidth="2"
                     viewBox="0 0 24 24"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="-mt-2 -ml-2 fill-current text-sm"
                     height="1em"
                     width="1em"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
               </div>
            </div>

            {/* Designer Label */}
            <div className="absolute top-24 left-32 transition-all duration-300 group-hover:top-20 group-hover:left-10">
               <div className="relative flex items-start justify-end">
                  {/* <FiNavigation className="-mt-2 -ml-2 -rotate-90 fill-current text-sm text-primary" /> */}
                  <svg
                     stroke="currentColor"
                     fill="none"
                     strokeWidth="2"
                     viewBox="0 0 24 24"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="-mt-2 -ml-2 -rotate-90 fill-current text-sm text-primary"
                     height="1em"
                     width="1em"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
                  <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-[10px] text-primary dark:border-white/10 dark:bg-white/10">
                     Designer
                  </span>
               </div>
            </div>
         </motion.div>

         {/* 'Aa' Text */}
         <motion.div
            initial={{
               opacity: 0,
               y: 20,
            }}
            whileInView={{
               opacity: 1,
               y: 0,
            }}
            transition={{
               ease: 'easeOut',
               duration: 0.3,
            }}
            className="relative mt-7 border border-blue-500 px-4 py-1"
         >
            <div className="dark:bg-darkBg absolute top-0 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 border border-blue-500 bg-white" />
            <div className="dark:bg-darkBg absolute top-0 right-0 h-2 w-2 translate-x-1/2 -translate-y-1/2 border border-blue-500 bg-white" />
            <div className="dark:bg-darkBg absolute top-0 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 border border-blue-500 bg-white" />
            <div className="dark:bg-darkBg absolute right-0 bottom-0 h-2 w-2 translate-x-1/2 translate-y-1/2 border border-blue-500 bg-white" />
            <div className="dark:bg-darkBg absolute bottom-0 left-0 h-2 w-2 -translate-x-1/2 translate-y-1/2 border border-blue-500 bg-white" />
            <p className="text-center text-xl font-semibold">Aa</p>
         </motion.div>
      </div>
   )
}
