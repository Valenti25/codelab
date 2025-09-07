'use client'

import React from 'react'
import { Card, CardBody, Chip } from '@nextui-org/react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const content = {
   tags: {
      uxui: 'UX/UI',
      dashboard: 'Dashboard',
      dataAnalytics: 'Data Analytics',
      webDev: 'Website',
      branding: 'Branding',
      mobileApp: 'Mobile App',
      ecommerce: 'E-commerce',
      backoffice: 'Back-office',
      service: 'Service',
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
   logo: string[]
   link?: string // Added optional link property
}

const projectsData: Project[] = [
   {
      id: 1,
      logoIcon: '/svg/work/JIB.svg',
      title: 'JIB Dashboard',
      subtitle: 'Smart Data Dashboard',
      description:
         'Gain full control and clarity over your business with our intuitive dashboards. Track performance, visualize key metrics, and make better decisions — all in one place.',
      tags: ['uxui', 'dashboard', 'dataAnalytics'],
      images: [
         '/images/work/JibProduct1.png',
         '/images/work/JibProduct2.png',
         '/images/work/JibProduct3.png',
         '/images/work/JibProduct4.png',
         '/images/work/JibProduct5.png',
         '/images/work/JibProduct6.png',
         '/images/work/JibProduct7.png',
         '/images/work/JibProduct8.png',
         '/images/work/JibProduct9.png',
         '/images/work/JibProduct10.png',
      ],
      logo: ['/svg/work/react.svg', '/svg/work/figma.svg', '/svg/work/nestjs.svg', '/svg/work/nextjs.svg', '/svg/work/mongodb.svg'],
   },
   {
      id: 2,
      logoIcon: '/svg/work/MELONTHAI.svg',
      title: 'MELON THAI',
      subtitle: 'Yearly Mobile Internet SIMs',
      description:
         'Discover the best yearly data SIMs from all major networks! Enjoy unlimited high-speed internet, free calls, and uninterrupted connectivity for a full year. Say goodbye to monthly top-ups and embrace limitless online access with Melon Thai.',
      tags: ['uxui', 'webDev', 'ecommerce', 'backoffice'],
      images: [
         '/images/work/MELONTHAI1.png',
         '/images/work/MELONTHAI2.png',
         '/images/work/MELONTHAI3.png',
         '/images/work/MELONTHAI4.png',
         '/images/work/MELONTHAI5.png',
         '/images/work/MELONTHAI6.png',
         '/images/work/MELONTHAI7.png',
         '/images/work/MELONTHAI8.png',
         '/images/work/MELONTHAI9.png',
         '/images/work/MELONTHAI10.png',
      ],
      logo: ['/svg/work/react.svg', '/svg/work/figma.svg', '/svg/work/nestjs.svg', '/svg/work/nextjs.svg', '/svg/work/mongodb.svg'],
   },
   {
      id: 3,
      logoIcon: '/svg/work/t-shirt.codelab.svg',
      title: 't-shirt.codelab',
      subtitle: 'Your Destination for Fashionable Apparel & Footwear',
      description:
         'Discover your signature style with t-shirt.codelab! We offer a diverse collection of carefully curated clothing and shoes, from casual everyday wear to chic statement pieces. Always updated with the latest trends, shop with ease and get your fashion delivered right to your door.',
      tags: ['uxui', 'webDev', 'ecommerce', 'backoffice'],
      images: [
         '/images/work/t-shirt.codelab1.png',
         '/images/work/t-shirt.codelab2.png',
         '/images/work/t-shirt.codelab3.png',
         '/images/work/t-shirt.codelab4.png',
         '/images/work/t-shirt.codelab5.png',
         '/images/work/t-shirt.codelab6.png',
         '/images/work/t-shirt.codelab7.png',
         '/images/work/t-shirt.codelab8.png',
         '/images/work/t-shirt.codelab9.png',
         '/images/work/t-shirt.codelab10.png',
      ],
      logo: ['/svg/work/react.svg', '/svg/work/figma.svg', '/svg/work/nestjs.svg', '/svg/work/nextjs.svg', '/svg/work/mongodb.svg'],
   },
   {
      id: 4,
      logoIcon: '/svg/work/furniture.codelab.svg',
      title: 'furniture.codelab',
      subtitle: 'Quality Furniture for the Home You Love',
      description:
         'Experience the difference of furniture crafted from premium materials and exquisite workmanship from us Each piece is designed for durability, longevity, and maximum comfort, with styles that meet every need. Make your home a true sanctuary of happiness.',
      tags: ['uxui', 'webDev', 'ecommerce', 'backoffice'],
      images: [
         '/images/work/furniture.codelab1.png',
         '/images/work/furniture.codelab2.png',
         '/images/work/furniture.codelab3.png',
         '/images/work/furniture.codelab4.png',
         '/images/work/furniture.codelab5.png',
         '/images/work/furniture.codelab6.png',
         '/images/work/furniture.codelab7.png',
         '/images/work/furniture.codelab8.png',
         '/images/work/furniture.codelab9.png',
         '/images/work/furniture.codelab10.png',
      ],
      logo: ['/svg/work/react.svg', '/svg/work/figma.svg', '/svg/work/nestjs.svg', '/svg/work/nextjs.svg', '/svg/work/mongodb.svg'],
   },
   {
      id: 5,
      logoIcon: '/svg/work/theGhostradio.svg',
      title: 'the Ghost radio',
      subtitle: "Unveiling the Night's Mysteries",
      description:
         "Discover the enigmatic tales and ancient curses hidden in Thailand's shadows. From whispered legends to undeniable truths, this is your definitive source for Thai ghost stories that will both fascinate and terrify you.",
      tags: ['uxui', 'webDev'],
      images: [
         '/images/work/theGhostradio1.png',
         '/images/work/theGhostradio2.png',
         '/images/work/theGhostradio3.png',
         '/images/work/theGhostradio4.png',
         '/images/work/theGhostradio5.png',
         '/images/work/theGhostradio6.png',
      ],
      logo: ['/svg/work/react.svg', '/svg/work/figma.svg', '/svg/work/nestjs.svg', '/svg/work/nextjs.svg', '/svg/work/mongodb.svg'],
   },
   {
      id: 6,
      logoIcon: '/svg/work/zeedoctor.svg',
      title: 'zeedoctor',
      subtitle: 'Your Health Journey Starts Here',
      description:
         'Experience comprehensive healthcare from the comfort of your home. we offers easy online doctor appointments, teleconsultations, and a wide selection of medical equipment and supplies delivered right to your door. Your well-being is our priority.',
      tags: ['uxui', 'webDev', 'service'],
      images: [
         '/images/work/zeedoctor1.png',
         '/images/work/zeedoctor2.png',
         '/images/work/zeedoctor3.png',
         '/images/work/zeedoctor4.png',
         '/images/work/zeedoctor5.png',
         '/images/work/zeedoctor6.png',
         '/images/work/zeedoctor7.png',
         '/images/work/zeedoctor8.png',
         '/images/work/zeedoctor9.png',
         '/images/work/zeedoctor10.png',
      ],
      logo: ['/svg/work/react.svg', '/svg/work/figma.svg', '/svg/work/nestjs.svg', '/svg/work/nextjs.svg', '/svg/work/mongodb.svg'],
   },
   {
      id: 7,
      logoIcon: '/svg/work/REFINEDREALTY.svg',
      title: 'REFINED REALTY',
      subtitle: 'Your Gateway to Property Success',
      description:
         'Explore a vast collection of residential and commercial properties for sale. Find your perfect home or investment opportunity with our comprehensive listings and expert guidance.',
      tags: ['uxui', 'webDev', 'service'],
      images: [
         '/images/work/REFINEDEALTY1.png',
         '/images/work/REFINEDEALTY2.png',
         '/images/work/REFINEDEALTY3.png',
         '/images/work/REFINEDEALTY4.png',
         '/images/work/REFINEDEALTY5.png',
         '/images/work/REFINEDEALTY6.png',
         '/images/work/REFINEDEALTY7.png',
         '/images/work/REFINEDEALTY8.png',
         '/images/work/REFINEDEALTY9.png',
         '/images/work/REFINEDEALTY10.png',
         '/images/work/REFINEDEALTY11.png',
      ],
      logo: ['/svg/work/react.svg', '/svg/work/figma.svg', '/svg/work/nestjs.svg', '/svg/work/nextjs.svg', '/svg/work/mongodb.svg'],
   },
   {
      id: 8,
      logoIcon: '/svg/work/GFINN.svg',
      title: 'GFINN',
      subtitle: 'Your Financial Freedom Starts Here - Flexible Loan Solutions',
      description:
         "Unlock your financial potential with our comprehensive suite of flexible loan solutions. We understand that everyone's financial journey is unique, which is why we offer tailored options to help you achieve your goals. ",
      tags: ['uxui', 'webDev', 'service'],
      images: [
         '/images/work/GFINN1.png',
         '/images/work/GFINN2.png',
         '/images/work/GFINN3.png',
         '/images/work/GFINN4.png',
         '/images/work/GFINN5.png',
         '/images/work/GFINN6.png',
         '/images/work/GFINN7.png',
         '/images/work/GFINN8.png',
         '/images/work/GFINN9.png',
         '/images/work/GFINN10.png',
      ],
      logo: ['/svg/work/react.svg', '/svg/work/figma.svg', '/svg/work/nestjs.svg', '/svg/work/nextjs.svg', '/svg/work/mongodb.svg'],
   },
   {
      id: 9,
      logoIcon: '/svg/work/Ticket.svg',
      title: 'Ticket',
      subtitle: 'Effortless Event Tickets',
      description:
         'Discover a new standard in online ticket purchasing. Our platform is designed for simplicity and speed, ensuring you can find and secure your seats for concerts, sports, theater, and more in just a few clicks.',
      tags: ['uxui', 'webDev', 'service'],
      images: [
         '/images/work/Ticket1.png',
         '/images/work/Ticket2.png',
         '/images/work/Ticket3.png',
         '/images/work/Ticket4.png',
         '/images/work/Ticket5.png',
         '/images/work/Ticket6.png',
         '/images/work/Ticket7.png',
         '/images/work/Ticket8.png',
         '/images/work/Ticket9.png',
         '/images/work/Ticket10.png',
      ],
      logo: ['/svg/work/react.svg', '/svg/work/figma.svg', '/svg/work/nestjs.svg', '/svg/work/nextjs.svg', '/svg/work/mongodb.svg'],
   },
]

const MarQUEeRow = ({ images, reverse = false }: { images: string[]; reverse?: boolean }) => {
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
                  <Image src={src} alt={`Row image ${i + 1}`} fill sizes="240px" className="object-cover object-center" loading="lazy" />
               </div>
            ))}
         </motion.div>
      </div>
   )
}

const ProjectCard = ({ project }: { project: Project }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: -30 }}
         animate={{ opacity: 1, y: 0 }}
         whileInView="animate"
         viewport={{ once: true, amount: 0.5 }}
         className="cursor-pointer"
      >
         <div className="rounded-xl shadow-[0_4px_10px_-2px_#00000040,0_2px_2px_-1px_#00000030,0_0_0_1px_#ffffff20]">
            <Card className="group w-full max-w-7xl overflow-hidden rounded-xl border-0 bg-black">
               <div className="pointer-events-none absolute inset-0 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_left_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_25%)] before:transition-all before:duration-500 group-hover:before:bg-[radial-gradient(circle_at_left_bottom,rgba(255,255,255,0.15),rgba(255,255,255,0)_25%)]" />
               <CardBody className="flex flex-col items-stretch gap-0 p-0 sm:flex-row">
                  {/* Left Side */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-6">
                     <div className="relative z-10 flex items-center gap-3">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden">
                           <Image
                              src={project.logoIcon}
                              alt={`${project.title} Logo`}
                              width={48}
                              height={48}
                              loading="lazy"
                              className="object-contain"
                           />
                        </div>
                        <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                     </div>
                     <p className="relative z-10 text-xl text-white">{project.subtitle}</p>
                     <p className="relative z-10 max-w-lg text-sm leading-relaxed text-[#A5A5A5]">{project.description}</p>
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
                              <Image
                                 src={logoSrc}
                                 alt={`Logo ${idx + 1}`}
                                 width={32}
                                 height={32}
                                 loading="lazy"
                                 className="h-full w-full object-contain"
                              />
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Right Side */}
                  <div
                     className="relative flex flex-1 items-center justify-center overflow-hidden"
                     style={{
                        perspective: '1500px',
                        minHeight: '250px',
                     }}
                  >
                     {/* Shadow ฝั่งซ้าย */}
                     <div
                        className="pointer-events-none absolute inset-y-0 left-0 z-20"
                        style={{
                           width: '40%',
                           background: `linear-gradient(90deg, 
            rgba(0,0,0,1) 0%, 
            rgba(0,0,0,0.5) 20%, 
            rgba(0,0,0,0.05) 50%, 
            rgba(0,0,0,0) 100%)`,
                        }}
                     />

                     {/* Shadow ฝั่งขวา */}
                     <div
                        className="pointer-events-none absolute inset-y-0 right-0 z-20"
                        style={{
                           width: '40%',
                           background: `linear-gradient(270deg, 
            rgba(0,0,0,1) 0%, 
            rgba(0,0,0,0.5) 20%, 
            rgba(0,0,0,0.05) 50%,  
            rgba(0,0,0,0) 100%)`,
                        }}
                     />
                     {/* Shadow ด้านบน */}
                     <div
                        className="pointer-events-none absolute inset-x-0 top-0 z-20"
                        style={{
                           height: '40px',
                           background: `linear-gradient(to bottom, 
            rgba(0,0,0,1) 0%, 
            rgba(0,0,0,0.5) 20%, 
            rgba(0,0,0,0.05) 50%,  
            rgba(0,0,0,0) 100%)`,
                        }}
                     />

                     {/* Shadow ด้านล่าง */}
                     <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-20"
                        style={{
                           height: '40px',
                           background: `linear-gradient(to top, 
            rgba(0,0,0,1) 0%, 
            rgba(0,0,0,0.5) 20%, 
            rgba(0,0,0,0.05) 50%,  
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
                           <MarQUEeRow images={project.images} />
                        </div>
                        <div className="overflow-hidden">
                           <MarQUEeRow images={[...project.images].reverse()} reverse />
                        </div>
                     </div>
                  </div>
               </CardBody>
            </Card>
         </div>
      </motion.div>
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
