'use client'

import Link from 'next/link'
import { MouseEvent, useRef, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
// import { MENUS } from '@/utils/constants/menu'

export const Navbar = () => {
   const { t } = useTranslation()

   const MENUS = useMemo(
      () => [
         {
            label: t('menu.service'),
            href: '#service',
         },
         {
            label: t('menu.showcases'),
            href: '#portfolio',
         },
         {
            label: t('menu.resources'),
            href: '#contact-us',
         },
      ],
      [t],
   )

   const [show, setShow] = useState<boolean>(false)

   const [xPos, setXPos] = useState<number>(0)
   const [width, setWidth] = useState<number>(0)

   const divRef = useRef<HTMLDivElement>(null)

   const handleMouseHover = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
      const liRect = e.currentTarget.getBoundingClientRect()
      const containerRect = divRef.current?.getBoundingClientRect()

      if (!containerRect) return

      setXPos(liRect.x - containerRect.x)
      setWidth(liRect.width)
   }

   return (
      <div ref={divRef} className="relative w-max overflow-hidden" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
         <motion.nav
            initial={{
               opacity: 0,
               y: -100,
            }}
            animate={{
               opacity: 1,
               y: 0,
            }}
            transition={{
               duration: 1,
            }}
            className="relative hidden list-none items-center justify-between gap-2 rounded-full border border-neutral-200 bg-white px-1 py-3 font-medium text-black/60 backdrop-blur-lg lg:flex dark:border-white/10 dark:bg-white/5 dark:text-white/60"
         >
            {MENUS.map((item, index) => (
               <li key={index} onMouseEnter={handleMouseHover} className="z-20">
                  <Link
                     href={item.href}
                     className="px-3 py-1.5 text-sm font-semibold duration-300 ease-in-out hover:text-black xl:text-sm hover:dark:text-white"
                  >
                     {item.label}
                  </Link>
               </li>
            ))}
         </motion.nav>
         {show && (
            <div
               id="elm"
               className="pointer-events-none absolute top-1/2 z-10 h-10 rounded-full bg-black/5 duration-300 ease-out dark:bg-white/5"
               style={{
                  left: `${xPos}px`,
                  width: `${width}px`,
                  transform: 'translateY(-50%)',
               }}
            />
         )}
      </div>
   )
}
