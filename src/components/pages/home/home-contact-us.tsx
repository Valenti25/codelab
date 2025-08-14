'use client'

import Link from 'next/link'
import { FormContact } from './form-contact'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { SITE_CONTACT, SITE_INFO } from '@/utils/constants/site-info'
import { useCurrentLocale } from 'next-i18n-router/client'
import i18nConfig, { Locale } from '@/i18n/i18nConfig'
import { RiDiscordLine, RiFacebookCircleLine, RiInstagramLine, RiLineLine } from 'react-icons/ri'
import { LuMail } from 'react-icons/lu'
import { FlipWordsInView } from '@/components/ui/flip-words-in-view'

export const HomeContactUs = () => {
   const { t } = useTranslation()
   const currentLocale = (useCurrentLocale(i18nConfig) as Locale) || i18nConfig.defaultLocale

   return (
      <section id="contact-us" className="relative z-20 container mx-auto mt-4 max-w-[1100px] px-4">
         <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex items-center justify-start sm:justify-center lg:justify-start">
               <div className="flex-col items-center justify-center space-y-6 text-black sm:flex lg:block dark:text-white">
                  <Image
                     alt={SITE_INFO[currentLocale].title}
                     src="/svg/logo-codelab-text-row7.svg"
                     width={131}
                     height={44}
                     quality={100}
                     className="hidden max-w-[200px] w-[200px] md:w-max dark:block"
                     unoptimized
                  />
                  <Image
                     alt={SITE_INFO[currentLocale].title}
                     src="/svg/logo-codelab-text-row7black.svg"
                     width={131}
                     height={44}
                     quality={100}
                     className="block max-w-[200px] w-[200px] md:w-max dark:hidden"
                     unoptimized
                  />

                  <div className="flex-col items-center space-y-2 sm:flex lg:block">
                     <FlipWordsInView
                        words={[t('contact')]}
                        className="text-xl font-extrabold drop-shadow-sm md:text-2xl"
                     />
                     <p className="text-sm dark:text-white/60 leading-relaxed">
                        {SITE_INFO[currentLocale].address1}<br/>
                        {SITE_INFO[currentLocale].address2}<br/>
                        {SITE_INFO[currentLocale].address3}<br/>
                        {SITE_INFO[currentLocale].taxNo}<br/>
                     </p>
                  </div>

                  <ul className="space-y-2.5">
                     <li>
                        <Link
                           href={`mailto:${SITE_CONTACT.email}`}
                           className="flex w-fit items-center justify-start gap-3 duration-300 hover:translate-x-2"
                        >
                           <LuMail />
                           {SITE_CONTACT.email}
                        </Link>
                     </li>
                  </ul>

                  <FooterIcon />
               </div>
            </div>
            <div className="justify-center sm:flex lg:block">
               <FormContact />
            </div>
         </div>
      </section>
   )
}

const FooterIcon = () => {
   return (
      <div className="relative flex items-center justify-start gap-3">
         <Link href="#" className="group relative">
            <RiDiscordLine className="text-gray relative z-10 text-xl duration-300 group-hover:scale-125 group-hover:text-[#4f62ed] dark:text-[#909090]" />
            <div className="absolute top-0 left-0 z-0 size-2 rounded-full bg-black/30 duration-300 group-hover:size-full group-hover:scale-150 dark:bg-white"></div>
         </Link>
         <Link href="#" className="group relative">
            <RiFacebookCircleLine className="text-gray relative z-10 text-xl duration-300 group-hover:scale-125 group-hover:text-[#075fff] dark:text-[#909090]" />
            <div className="absolute top-0 left-0 z-0 size-2 rounded-full bg-black/30 duration-300 group-hover:size-full group-hover:scale-150 dark:bg-white"></div>
         </Link>
         <Link href="#" className="group relative">
            <RiInstagramLine className="text-gray relative z-10 text-xl duration-300 group-hover:scale-125 group-hover:text-[#e80070] dark:text-[#909090]" />
            <div className="absolute top-0 left-0 z-0 size-2 rounded-full bg-black/30 duration-300 group-hover:size-full group-hover:scale-150 dark:bg-white"></div>
         </Link>
         <Link href="#" className="group relative">
            <RiLineLine className="text-gray relative z-10 text-xl duration-300 group-hover:scale-125 group-hover:text-[#00b300] dark:text-[#909090]" />
            <div className="absolute top-0 left-0 z-0 size-2 rounded-full bg-black/30 duration-300 group-hover:size-full group-hover:scale-150 dark:bg-white"></div>
         </Link>
      </div>
   )
}
