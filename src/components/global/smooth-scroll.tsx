/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useRef, useState, useCallback, useLayoutEffect, ReactNode } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { useViewportScroll, useTransform, useSpring, motion } from 'framer-motion'

const SmoothScroll = ({ children }: { children: ReactNode }) => {
   const scrollRef = useRef<HTMLDivElement>(null)

   // page scrollable height based on content length
   const [pageHeight, setPageHeight] = useState(0)

   // update scrollable height when browser is resizing
   const resizePageHeight = useCallback((entries: any) => {
      for (const entry of entries) {
         setPageHeight(entry.contentRect.height)
      }
   }, [])

   // observe when browser is resizing
   useLayoutEffect(() => {
      const resizeObserver = new ResizeObserver((entries) => resizePageHeight(entries))

      if (scrollRef) {
         resizeObserver.observe(scrollRef.current as HTMLDivElement)
      }
      return () => resizeObserver.disconnect()
   }, [scrollRef, resizePageHeight])

   const { scrollY } = useViewportScroll()
   const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
   const physics = {
      damping: 15, // หน่วงการสั่น
      mass: 0.27, // เพิ่มน้ำหนัก
      stiffness: 55, // ความแข็งของสปริง
   }
   const spring = useSpring(transform, physics)

   return (
      <>
         <motion.div ref={scrollRef} style={{ y: spring }} className="scroll-container">
            {children}
         </motion.div>
         <div style={{ height: pageHeight }} />
      </>
   )
}

export default SmoothScroll
