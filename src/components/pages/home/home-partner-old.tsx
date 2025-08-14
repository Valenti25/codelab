'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const HomePartner = () => {
   const images: string[] = [
      'analytics.png',
      'aws.png',
      'cloudflare.png',
      'cloundways.png',
      'digitalocean.png',
      'figma.png',
      'golang.png',
      'hostatom.png',
      'next.png',
      'react.png',
      'node.png',
   ]

   return (
      <motion.section className="relative z-10 container mx-auto flex min-h-[240px] items-end overflow-hidden bg-gradient-to-b from-transparent to-background to-70%">
         <div className="group dark:bg-darkBg container inline-flex flex-nowrap overflow-hidden bg-background [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <div className="animate-infiniteScroll group-hover:pause flex min-w-max items-center justify-center grayscale-0 dark:opacity-70 dark:grayscale">
               {images.map((img) => (
                  <Image
                     key={img}
                     alt=""
                     src={`/images/${img}`}
                     width={65}
                     height={35}
                     className="mx-6 w-10 object-contain md:mx-8 md:w-auto"
                     unoptimized
                  />
               ))}
            </div>
            <div
               className="animate-infiniteScroll group-hover:pause flex min-w-max items-center justify-center grayscale-0 dark:opacity-70 dark:grayscale"
               aria-hidden="true"
            >
               {images.map((img) => (
                  <Image
                     key={img}
                     alt=""
                     src={`/images/${img}`}
                     width={65}
                     height={35}
                     className="mx-6 w-10 object-contain md:mx-8 md:w-auto"
                     unoptimized
                  />
               ))}
            </div>
         </div>
      </motion.section>
   )
}
