'use client'

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { TitleGradient } from '@/components/ui/title-gradient'
import { motion, useInView } from 'framer-motion'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

// import { PiFingerprintSimpleDuotone } from 'react-icons/pi'
// import { TbLayoutCardsFilled, TbMessageFilled } from 'react-icons/tb'

import { TTextAnimate } from './type'

export const Security = ({ textAnimate }: TTextAnimate) => {
   const { t } = useTranslation()

   const services = [
      { id: 'security-otp', label: 'OTP (One Time Password)', stiffness: 100 },
      { id: 'security-2fa', label: '2FA (Two-Factor Authentication)', stiffness: 150 },
      { id: 'security-waf', label: 'WAF (Web Application Firewall)', stiffness: 200 },
   ]

   return (
      <>
         <TitleGradient text="Security" className="px-6" />
         <div className="p-6 pt-0">
            <p className="text-gray h-[40px] text-sm dark:text-white/60">{t('service.security')}</p>
         </div>
         <div className="flex w-full gap-6">
            <div className="w-6/12 pl-6 text-sm">
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
                     <span className="line-clamp-1">{label}</span>
                  </motion.p>
               ))}
            </div>
            <div className="w-6/12">
               <Contents />
            </div>
         </div>
      </>
   )
}

const Contents = () => {
   const ref = useRef(null)
   const isInView = useInView(ref)

   const [isSubmitting, setIsSubmitting] = useState(false)
   const [isSuccess, setIsSuccess] = useState(false)

   const resetAnimate = useCallback(() => {
      setIsSubmitting(false)
      setIsSuccess(false)
   }, [isInView])

   const handleClick = async () => {
      const fakeApi = () => {
         return new Promise<boolean>((resolve) => {
            setTimeout(() => {
               resolve(true)
            }, 1500)
         })
      }
      setIsSubmitting(true)
      await fakeApi()
      setIsSuccess(true)
   }

   useEffect(() => {
      if (!isInView) {
         resetAnimate()
      }
   }, [isInView])

   return (
      <div ref={ref} className="flex h-[215px] items-start justify-start gap-6 duration-300">
         <motion.div
            // layout="position"
            // layoutId="security-otp-title"
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
            className="z-10 -mt-2 w-max space-y-4 rounded-xl border border-black/10 px-6 py-6 font-medium duration-300 dark:border-white/10 dark:bg-white/5"
         >
            <div className="flex flex-col items-center justify-center">
               {/* <TbLayoutCardsFilled className="text-4xl" /> */}
               <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-4xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M8 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3z"></path>
                  <path d="M18 3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3z"></path>
               </svg>
               <p className="text-center text-sm">
                  Enter your secure <br />
                  passcode to continue
               </p>
            </div>

            {isSuccess ? (
               <div className="min-w-[232px] rounded-sm border border-green-200 bg-green-400/10 p-2 dark:border-green-700 dark:bg-green-700/10">
                  <p className="text-center text-xs text-green-600">Your email address has been verified</p>
               </div>
            ) : (
               <>
                  <div className="flex items-center justify-center gap-2">
                     <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                        <InputOTPGroup className="gap-2">
                           {[...Array(6)].map((_, index) => (
                              <InputOTPSlot key={index} index={index} className="h-10 w-8 rounded-md border dark:border-white/20 dark:ring-white" />
                           ))}
                        </InputOTPGroup>
                     </InputOTP>
                  </div>
                  <div className="flex items-center justify-center">
                     <button
                        onClick={handleClick}
                        className="w-full rounded-2xl border border-black/20 px-4 py-2 text-xs hover:bg-neutral-700 hover:text-white dark:border-white/30 dark:hover:bg-white dark:hover:text-neutral-700"
                     >
                        {!isSubmitting ? 'Verify Code' : 'Waiting...'}
                     </button>
                  </div>
               </>
            )}
         </motion.div>

         <div className="mt-2 space-y-6">
            <motion.div
               layout="position"
               layoutId="security-otp-fingerprint"
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ ease: 'easeOut', duration: 0.3 }}
               className="z-0 grid aspect-square h-14 w-14 place-content-center rounded-xl border border-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-white"
            >
               {/* <PiFingerprintSimpleDuotone className="text-4xl" /> */}
               <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 256"
                  className="text-4xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path>
                  <path d="M184,128a246.64,246.64,0,0,1-18.54,94.24,8,8,0,0,1-7.4,5,8.19,8.19,0,0,1-3-.6,8,8,0,0,1-4.36-10.45A230.67,230.67,0,0,0,168,128a8,8,0,0,1,16,0ZM128,88a40.06,40.06,0,0,1,29.81,13.33,8,8,0,1,0,11.92-10.67A56,56,0,0,0,72,128a136.06,136.06,0,0,1-17,65.85,8,8,0,1,0,14,7.76A152.14,152.14,0,0,0,88,128,40,40,0,0,1,128,88Zm0-64a103.75,103.75,0,0,0-34.67,5.92A8,8,0,0,0,98.67,45,88.05,88.05,0,0,1,216,128a281.31,281.31,0,0,1-6.94,62.23,8,8,0,0,0,6,9.57,7.77,7.77,0,0,0,1.78.2,8,8,0,0,0,7.8-6.23A298.11,298.11,0,0,0,232,128,104.11,104.11,0,0,0,128,24ZM69.31,62.42A8,8,0,1,0,58.64,50.49,104.16,104.16,0,0,0,24,128a87.29,87.29,0,0,1-8,36.66,8,8,0,0,0,14.54,6.68A103.17,103.17,0,0,0,40,128,88.13,88.13,0,0,1,69.31,62.42Zm44.58,138.32a8,8,0,0,0-10.6,3.93c-1.93,4.2-4.05,8.39-6.3,12.44A8,8,0,0,0,100.11,228a7.88,7.88,0,0,0,3.87,1,8,8,0,0,0,7-4.12c2.44-4.41,4.74-9,6.84-13.52A8,8,0,0,0,113.89,200.74ZM128,120a8,8,0,0,0-8,8,185.07,185.07,0,0,1-5.79,46,8,8,0,0,0,5.75,9.74,8.12,8.12,0,0,0,2,.25,8,8,0,0,0,7.74-6,200.68,200.68,0,0,0,6.3-50A8,8,0,0,0,128,120Z"></path>
               </svg>
            </motion.div>

            <motion.div
               layout="position"
               layoutId="security-otp-message"
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ ease: 'easeOut', duration: 0.3 }}
               className="z-50 w-52 min-w-max space-y-4 rounded-xl border border-black/10 p-4 dark:border-white/10 dark:bg-white/5"
            >
               <div className="group flex items-center justify-start gap-2">
                  <div className="grid aspect-square h-8 w-8 place-content-center rounded-lg bg-black/5 dark:bg-white/5">
                     {/* <TbMessageFilled /> */}
                     <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2"></path>
                     </svg>
                  </div>
                  <span className="text-sm">MESSAGES</span>
               </div>
               <p className="text-xs">Your passcode for Money app is 88124</p>
            </motion.div>
         </div>
      </div>
   )
}
