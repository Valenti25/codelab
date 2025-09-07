'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectHero() {
   return (
      <motion.div
         initial={{ opacity: 0, y: -30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
            duration: 0.4,
            ease: 'easeOut',
         }}
      >
         <section className="py-14 pt-36">
            <div className="mx-auto max-w-7xl px-6">
               <h1 className="mb-4 text-5xl font-bold text-white">Creative Showcase</h1>
               <p className="max-w-lg text-lg text-gray-300">
                  A collection of real projects crafted with clients — including websites, applications, and high-quality design work.
               </p>
            </div>
         </section>
      </motion.div>
   )
}
