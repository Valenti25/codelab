'use client'
import React, { lazy, Suspense } from 'react'
import dynamic from 'next/dynamic'

const HomePartner = dynamic(() => import('@/components/pages/home/home-partner').then((mod) => mod.HomePartner), {
   ssr: false,
})

const HomeService = lazy(() => import('@/components/pages/home/home-service'))
// const HomeService = dynamic(() => import('@/components/pages/home/home-service').then((mod) => mod.HomeService), {
//    ssr: false,
// })
const HomeAboutUs = dynamic(() => import('@/components/pages/home/home-about-us').then((mod) => mod.HomeAboutUs), {
   ssr: false,
})
const HomePortfolio = dynamic(() => import('@/components/pages/home/home-portfolio').then((mod) => mod.HomePortfolio), {
   ssr: false,
})
const HomeWhyChooseUs = dynamic(() => import('@/components/pages/home/home-why-choose-us').then((mod) => mod.HomeWhyChooseUs), {
   ssr: false,
})
const HomeTestimonials = dynamic(() => import('@/components/pages/home/home-testimonials').then((mod) => mod.HomeTestimonials), {
   ssr: false,
})
const HomeStack = dynamic(() => import('@/components/pages/home/home-stack').then((mod) => mod.HomeStack), {
   ssr: false,
})
const HomeContactUs = dynamic(() => import('@/components/pages/home/home-contact-us').then((mod) => mod.HomeContactUs), {
   ssr: false,
})
// const SplineDesign = dynamic(() => import('@/components/pages/home/spline-design'), {
//    ssr: false,
// })

// import SplineDesign from '@/components/pages/home/spline-design'

export const Home = () => {
   return (
      <>
         {/* Show on mobile */}
         <HomePartner />

         {/* Show on desktop */}
         <HomeAboutUs />

         <Suspense fallback={<></>}>
            <HomeService />
         </Suspense>

         <HomeWhyChooseUs />
         <HomePortfolio />
         <HomeTestimonials />
         <HomeStack />

         {/* <SplineDesign /> */}
         
         <HomeContactUs />
      </>
      // <></>
   )
}
