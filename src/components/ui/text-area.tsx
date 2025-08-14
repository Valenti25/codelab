/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion'

export interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, InputProps>(
   ({ className, ...props }, ref) => {
      const radius = 100 // change this to increase the rdaius of the hover effect
      const [visible, setVisible] = React.useState(false)

      const mouseX = useMotionValue(0)
      const mouseY = useMotionValue(0)

      function handleMouseMove({ currentTarget, clientX, clientY }: any) {
         const { left, top } = currentTarget.getBoundingClientRect()

         mouseX.set(clientX - left)
         mouseY.set(clientY - top)
      }
      return (
         <motion.div
            style={{
               background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          #6E42FF,
          transparent 80%
        )
      `,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="group/input rounded-lg p-[2px] transition duration-300"
         >
            <textarea
               className={cn(
                  `flex h-20 w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm text-black shadow-input transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-600 placeholder:opacity-50 focus-visible:ring-[2px] focus-visible:ring-neutral-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-none dark:bg-neutral-900/80 dark:text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-600`,
                  className,
               )}
               ref={ref}
               {...props}
            />
         </motion.div>
      )
   },
)
TextArea.displayName = 'TextArea'

export { TextArea }
