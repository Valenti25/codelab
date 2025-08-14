'use client'

import React from 'react'
import { Card, CardBody, Chip } from '@nextui-org/react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const content = {
   tags: {
      uxui: 'UX/UI Design',
      dashboard: 'Dashboard',
      dataAnalytics: 'Data Analytics',
      webDev: 'Web Development',
      branding: 'Branding',
      mobileApp: 'Mobile App',
   },
}

type Project = {
   id: number
   logoIcon: string
   title: string
   subtitle: string
   description: string
   tags: (keyof typeof content.tags)[]
   images: string[]
   logo: string[] // เพิ่มโลโก้หลายอันได้
}

const projectsData: Project[] = [
   {
      id: 1,
      logoIcon: '/svg/JIB.svg',
      title: 'JIB Dashboard',
      subtitle: 'Smart Data Dashboard',
      description:
         'Gain full control and clarity over your business with our intuitive dashboards. Track performance, visualize key metrics, and make better decisions — all in one place.',
      tags: ['uxui', 'dashboard', 'dataAnalytics'],
      images: [
         '/images/JibProduct1.png',
         '/images/JibProduct2.png',
         '/images/JibProduct3.png',
         '/images/JibProduct4.png',
         '/images/JibProduct5.png',
         '/images/JibProduct6.png',
         '/images/JibProduct7.png',
         '/images/JibProduct8.png',
         '/images/JibProduct9.png',
         '/images/JibProduct10.png',
      ],
      logo: ['/svg/react.svg', '/svg/figma.svg', '/svg/nestjs.svg', '/svg/nextjs.svg', '/svg/mongodb.svg'],
   },
   {
      id: 2,
      logoIcon: '/svg/MELONTHAI.svg',
      title: 'MELON THAI',
      subtitle: 'Yearly Mobile Internet SIMs',
      description:
         'Discover the best yearly data SIMs from all major networks! Enjoy unlimited high-speed internet, free calls, and uninterrupted connectivity for a full year. Say goodbye to monthly top-ups and embrace limitless online access with Melon Thai.',
      tags: ['uxui', 'dashboard', 'dataAnalytics'],
      images: [
         '/images/MELONTHAI1.png',
         '/images/MELONTHAI2.png',
         '/images/MELONTHAI3.png',
         '/images/MELONTHAI4.png',
         '/images/MELONTHAI5.png',
         '/images/MELONTHAI6.png',
         '/images/MELONTHAI7.png',
         '/images/MELONTHAI8.png',
         '/images/MELONTHAI9.png',
         '/images/MELONTHAI10.png',
      ],
      logo: ['/svg/react.svg', '/svg/figma.svg', '/svg/nestjs.svg', '/svg/nextjs.svg', '/svg/mongodb.svg'],
   },
]

const MarqueeRow = ({ images, reverse = false }: { images: string[]; reverse?: boolean }) => {
   return (
      <div className="relative overflow-hidden">
         <motion.div
            className="flex w-max gap-1"
            animate={{
               x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
            }}
            transition={{
               ease: 'linear',
               duration: 150,
               repeat: Infinity,
            }}
         >
            {[...images, ...images].map((src, i) => (
               <div
                  key={`${reverse ? 'bottom' : 'top'}-${i}`}
                  className="relative flex-shrink-0 overflow-hidden shadow-2xl"
                  style={{
                     width: '150px',
                     height: '150px',
                  }}
               >
                  <Image src={src} alt={`Row image ${i + 1}`} fill sizes="240px" className="object-cover object-center" unoptimized />
               </div>
            ))}
         </motion.div>
      </div>
   )
}

const ProjectCard = ({ project }: { project: Project }) => {
   return (
      <div className="rounded-xl shadow-[0_4px_10px_-2px_#00000040,0_2px_2px_-1px_#00000030,0_0_0_1px_#ffffff20]">
         <Card className="w-full overflow-hidden rounded-xl border-0 bg-black">
            <CardBody className="flex flex-col items-stretch gap-0 p-0 lg:flex-row">
               {/* Left Side */}
               <div className="flex min-w-0 flex-1 flex-col justify-center gap-4 p-8">
                  <div className="relative z-10 flex items-center gap-3">
                     <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden ">
                        <Image src={project.logoIcon} alt={`${project.title} Logo`} width={48} height={48} className="object-contain" />
                     </div>
                     <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  </div>
                  <p className="relative z-10 text-lg text-white">{project.subtitle}</p>
                  <p className="relative z-10 max-w-lg text-sm leading-relaxed text-white">{project.description}</p>
                  <div className="relative z-10 mt-2 flex flex-wrap gap-2">
                     {project.tags.map((tagKey, i) => (
                        <Chip key={i} className="border border-[#565656]/60 p-1 text-sm text-[#565656]">
                           {content.tags[tagKey]}
                        </Chip>
                     ))}
                  </div>
                  <div className="flex items-center gap-4 p-4">
                     {project.logo.map((logoSrc, idx) => (
                        <div key={idx} className="flex h-7 w-7 items-center justify-center overflow-hidden rounded">
                           <Image src={logoSrc} alt={`Logo ${idx + 1}`} width={32} height={32} className="h-full w-full object-contain" unoptimized />
                        </div>
                     ))}
                  </div>
               </div>

               {/* Right Side */}
               <div
                  className="relative flex flex-1 items-center justify-center overflow-hidden"
                  style={{
                     perspective: '1500px',
                     minHeight: '350px',
                  }}
               >
                  <div
                     className="pointer-events-none absolute inset-y-0 left-0 z-20"
                     style={{
                        width: '100%',
                        background: `linear-gradient(90deg, 
                  rgba(0,0,0,1) 0%, 
                  rgba(0,0,0,0.9) 10%, 
                  rgba(0,0,0,0.7) 20%, 
                  rgba(0,0,0,0.4) 40%, 
                  rgba(0,0,0,0.2) 60%, 
                  rgba(0,0,0,0.05) 100%, 
                  rgba(0,0,0,0) 100%)`,
                     }}
                  />
                  <div
                     className="absolute w-full"
                     style={{
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(12deg) rotateZ(12deg) scale(1.6)',
                        left: '10%',
                     }}
                  >
                     <div className="mb-1 overflow-hidden">
                        <MarqueeRow images={project.images} />
                     </div>
                     <div className="overflow-hidden">
                        <MarqueeRow images={[...project.images].reverse()} reverse />
                     </div>
                  </div>
               </div>
            </CardBody>
         </Card>
      </div>
   )
}

export default function ProjectsShowcase() {
   return (
      <div className="mx-auto flex max-w-7xl flex-col gap-8 p-4">
         {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
         ))}
      </div>
   )
}
