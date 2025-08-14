'use client'

import dynamic from 'next/dynamic'
import { FlipWordsInView } from '@/components/ui/flip-words-in-view'
import { useTranslation } from 'react-i18next'

import { TagHeading } from '@/components/ui/tag-heading'

import { GenericGridService } from './service/generic-grid-service'
import { Development } from './service/development'
import { Security } from './service/security'

import { Consultant } from './service/consultant'
import { Design } from './service/design'
import { Cloud } from './service/cloud'
import { DigitalMarketing } from './service/digital-marketing'
import { SocialManagement } from './service/social-management'
import { Application } from './service/application'

const DataAnalytics = dynamic(() => import('./service/data-analytics').then((mod) => mod.DataAnalytics), {
   ssr: false,
})

const textAnimate = {
   initial: {
      opacity: 0,
      x: 10,
   },
   whileInView: {
      opacity: 1,
      x: 0,
   },
}

export default function HomeService() {
   const { t } = useTranslation()

   return (
      <section id="service" className="relative z-20 w-full bg-background py-4 sm:py-16">
         <div className="container mx-auto">
            <div className="flex justify-center">
               <TagHeading label="Our Service" maxWidth={130} />
            </div>

            <div className="flex flex-col justify-center pt-6 pb-4">
               <FlipWordsInView
                  words={[t('ourService')]}
                  className="text-center text-3xl font-extrabold drop-shadow-sm [text-shadow:1px_1px_2px_#fff,_0_0_1em_#fff,_0_0_0.2em_#fff] md:text-5xl dark:[text-shadow:1px_1px_2px_#000,_0_0_1em_#000,_0_0_0.2em_#000]"
               />
            </div>
            <p className="px-20 text-center text-sm text-black/60 md:text-base dark:text-white/60">{t('ourServiceDetail')}</p>
         </div>

         <div className="relative z-10 container mx-auto mt-6 flex flex-col gap-4 px-2 md:mt-14 md:gap-8 lg:flex-row">
            <GenericGridService className="lg:w-1/2 xl:w-1/3">
               <Development textAnimate={textAnimate} />
            </GenericGridService>
            <GenericGridService
               // delay={0.3}
               className="lg:w-1/2 xl:w-2/3"
            >
               <Security textAnimate={textAnimate} />
            </GenericGridService>
         </div>

         <div className="relative z-10 container mx-auto mt-4 flex flex-col gap-4 px-2 md:mt-8 md:gap-8 lg:flex-row">
            <GenericGridService className="lg:w-1/3 xl:w-1/3">
               <Consultant textAnimate={textAnimate} />
            </GenericGridService>
            <GenericGridService
               // delay={0.3}
               className="lg:w-1/3 xl:w-1/3"
            >
               <Design textAnimate={textAnimate} />
            </GenericGridService>
            <GenericGridService
               // delay={0.6}
               className="lg:w-1/3 xl:w-1/3"
            >
               <Cloud textAnimate={textAnimate} />
            </GenericGridService>
         </div>

         <div className="relative z-10 container mx-auto mt-4 flex flex-col gap-4 px-2 md:mt-8 md:gap-8 lg:flex-row">
            <GenericGridService className="lg:w-1/2 xl:w-2/3">
               <SocialManagement textAnimate={textAnimate} />
            </GenericGridService>
            <GenericGridService
               // delay={0.3}
               className="lg:w-1/2 xl:w-1/3"
            >
               <DigitalMarketing textAnimate={textAnimate} />
            </GenericGridService>
         </div>

         <div className="relative z-10 container mx-auto mt-4 flex flex-col gap-4 px-2 md:mt-8 md:gap-8 lg:flex-row">
            <GenericGridService className="lg:w-1/2 xl:w-1/3">
               <Application textAnimate={textAnimate} />
            </GenericGridService>
            <GenericGridService
               // delay={0.3}
               className="lg:w-1/2 xl:w-2/3"
            >
               <DataAnalytics textAnimate={textAnimate} />
            </GenericGridService>
         </div>
      </section>
   )
}
