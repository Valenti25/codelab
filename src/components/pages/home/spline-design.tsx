import { useInView } from 'motion/react'
import React, { Suspense, useRef } from 'react'

const Spline = React.lazy(() => import('@splinetool/react-spline'))

export default function App() {
   
   const sectionRef = useRef(null)
   const isInView = useInView(sectionRef)

   return (
      <section
         ref={sectionRef}
         className="pointer-events-none relative z-20 container mx-auto -mt-4 max-w-[1100px] overflow-hidden rounded-4xl pb-10"
      >
         {isInView && (
            <Suspense fallback={<></>}>
               <Spline scene="https://prod.spline.design/Lcpv-pBgISgGEkCI/scene.splinecode" />
            </Suspense>
         )}
      </section>
   )
}
