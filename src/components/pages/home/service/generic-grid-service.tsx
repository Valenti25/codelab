'use client'

import { cn } from '@/lib/utils'
import { ReactNode, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MagicCard } from '@/components/ui/magic-card'

export const GenericGridService = ({
   children,
   className,
   delay = 0,
}: {
   children: ReactNode
   className?: string
   delay?: number
}) => {
   const [isLoad, setIsLoad] = useState<boolean>(false)
   const [isDesktop, setIsDesktop] = useState(false)

   useEffect(() => {
      setIsLoad(true)
      const handleResize = () => {
         setIsDesktop(window.innerWidth >= 768)
      }

      handleResize()
      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
   }, [])

   if (!isLoad) return <></>

   // return (
   //    <motion.div
   //       initial={{
   //          opacity: isDesktop ? 0 : 1,
   //          y: isDesktop ? 80 : 0,
   //       }}
   //       whileInView={{
   //          opacity: 1,
   //          y: 0,
   //       }}
   //       viewport={{ once: true, amount: 0.3 }}
   //       transition={{
   //          type: 'keyframes',
   //          ease: 'linear',
   //          duration: 0.3,
   //          delay: delay,
   //       }}
   //       className={cn(
   //          'w-full overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-[#f3f4f6] to-background to-50% duration-200 hover:border-black/20 hover:shadow-xl hover:shadow-primary/5 dark:border-white/10 dark:from-white/5 hover:dark:border-white/20',
   //          className,
   //       )}
   //    >
   //       <div className="relative">
   //          {children}
   //          <div className="absolute top-0 right-0 size-20 -translate-y-1/2 bg-primary opacity-50 blur-[80px]" />
   //       </div>
   //    </motion.div>
   // )
   return (
      <MagicCard
         className={cn(
            'w-full overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-[#f3f4f6] to-background to-50% duration-200 hover:border-black/20 hover:shadow-xl hover:shadow-primary/5 dark:border-white/10 dark:from-white/5 hover:dark:border-white/20',
            className,
         )}
      >
         <motion.div
            initial={{
               opacity: isDesktop ? 0 : 1,
               y: isDesktop ? 80 : 0,
            }}
            whileInView={{
               opacity: 1,
               y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
               type: 'keyframes',
               ease: 'linear',
               duration: 0.3,
               // delay: delay,
            }}
         >
            <div className="relative">
               {children}
               <div className="absolute top-0 right-0 size-20 -translate-y-1/2 bg-primary opacity-50 blur-[80px]" />
            </div>
         </motion.div>
      </MagicCard>
   )
}
