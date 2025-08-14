'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { TextArea } from '@/components/ui/text-area'
import { useTranslation } from 'react-i18next'
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function FormContact() {
   const { t } = useTranslation()

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      alert('กำลังปรับปรุงระบบ ขออภัยในความไม่สะดวก')
   }

   return (
      <form className="w-full max-w-xl" onSubmit={handleSubmit}>
         <div className="mb-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
               <InputGradient id="name" type="text" placeholder={t('formContact.name')} />
            </LabelInputContainer>
            <LabelInputContainer>
               <InputGradient id="email" type="email" placeholder={t('formContact.email')} />
            </LabelInputContainer>
         </div>
         <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer className="mb-4">
               <InputGradient id="phone" type="tel" placeholder={t('formContact.phone')} />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
               <InputGradient id="company" type="text" placeholder={t('formContact.company')} />
            </LabelInputContainer>
         </div>
         <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer className="mb-4">
               <InputGradient id="subject" type="text" placeholder={t('formContact.subject')} />
            </LabelInputContainer>
         </div>
         <LabelInputContainer className="mb-8">
            <TextArea
               id="message"
               placeholder={t('formContact.message')}
               className="resize-none appearance-none"
            />
         </LabelInputContainer>
         <Button
            type="submit"
            className="h-max w-full lg:w-max rounded-md bg-gradient-to-b from-primary to-primary-light px-6 py-2.5 text-sm text-white shadow-[0px_1px_3px_0px_#FFFFFF4D_inset] drop-shadow-2xl drop-shadow-primary/30"
         >
            {t('formContact.submit')}
         </Button>
      </form>
   )
}

const LabelInputContainer = ({
   children,
   className,
}: {
   children: React.ReactNode
   className?: string
}) => {
   return <div className={cn('flex w-full flex-col space-y-2', className)}>{children}</div>
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputGradient = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, type, ...props }, ref) => {
      const radius = 100 // change this to increase the rdaius of the hover effect
      const [visible, setVisible] = React.useState(false)

      const mouseX = useMotionValue(0)
      const mouseY = useMotionValue(0)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            <input
               type={type}
               className={cn(
                  `flex h-10 w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm text-black shadow-input transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-600 placeholder:opacity-50 focus-visible:ring-[2px] focus-visible:ring-neutral-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-none dark:bg-neutral-900/80 dark:text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-600`,
                  className,
               )}
               ref={ref}
               {...props}
            />
         </motion.div>
      )
   },
)

InputGradient.displayName = 'InputGradient'
