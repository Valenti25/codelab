'use client'

import { cn } from '@/lib/utils'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pVariants = {
   hidden: {
      display: 'none',
      width: 0,
   },
   show: {
      display: 'block',
      width: 'auto',
   },
}

export const TagHeading = ({
   label,
   className,
   maxWidth = 110,
}: {
   label: string
   className?: string
   maxWidth?: number
}) => {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true })

   const bgVariants = {
      hidden: {
         opacity: 0,
         width: 40,
         x: -20,
      },
      show: {
         opacity: [0, 0.5, 1, 1],
         width: [40, 40, 40, maxWidth],
         x: [-20, -10, 0, 0],
      },
   }

   return (
      <motion.div
         ref={ref}
         initial="hidden"
         animate={isInView ? 'show' : ''}
         variants={{
            hidden: {},
            show: {
               transition: {
                  staggerChildren: 0.1,
               },
            },
         }}
         className="h-10"
      >
         <motion.button
            variants={bgVariants}
            transition={{
               delay: 0.75,
               duration: 0.4,
            }}
            className={cn(
               'h-10 rounded-full border border-primary-light bg-primary-light px-4 text-sm font-semibold text-white duration-200 md:text-base dark:border-white/10 dark:bg-white/5 dark:text-white/60',
               className,
            )}
         >
            <motion.p
               variants={pVariants}
               transition={{
                  delay: 1.75,
               }}
            >
               {label}
            </motion.p>
         </motion.button>
      </motion.div>
   )
}
