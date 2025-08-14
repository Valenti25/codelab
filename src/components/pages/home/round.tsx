'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface IRounded {
   duration: number
   delay: number
   className?: string
}

export const Rounded = ({ className, duration, delay }: IRounded) => {
   const [isDark, setIsDark] = useState<boolean>(true)
   const { theme } = useTheme()

   useEffect(() => {
      setIsDark(theme === 'dark')
   }, [theme])

   return (
      <motion.div
         initial={{
            opacity: 0,
         }}
         animate={{
            opacity: 1,
         }}
         transition={{
            ease: 'linear',
            duration: duration,
            delay: delay,
         }}
         className="absolute top-1/2 left-1/2 -z-10 aspect-square w-full -translate-x-1/2 -translate-y-1/2 opacity-50"
      >
         <Image
            alt=""
            src="/svg/border.svg"
            width={1200}
            height={1200}
            className={cn(
               'absolute top-1/2 left-1/2 -z-10 aspect-square -translate-x-1/2 -translate-y-1/2 scale-[2] animate-pulse',
               !isDark ? 'invert' : '',
               className,
            )}
            unoptimized
         />
      </motion.div>
   )
}
