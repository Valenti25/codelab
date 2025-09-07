'use client'

import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'

interface ISidebarMobile {
  isOpen: boolean
  isScroll: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } } as const,
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } } as const,
  },
} as const

export const SidebarMobile = ({ isScroll, isOpen }: ISidebarMobile) => {
  const [isClient, setIsClient] = useState(false)

  const sidebarVariants = {
    open: (height: number = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at ${
        isScroll ? 'calc(100% - 2.4rem)' : 'calc(100% - 1.9rem)'
      } ${isScroll ? '45' : '55'}px)`,
      transition: { type: 'spring', stiffness: 20, restDelta: 2 } as const,
    }),
    closed: {
      clipPath: `circle(0px at ${
        isScroll ? 'calc(100% - 2.4rem)' : 'calc(100% - 1.9rem)'
      } ${isScroll ? '45' : '55'}px)`,
      transition: { delay: 0.2, type: 'spring', stiffness: 400, damping: 40 } as const,
    },
  } as const

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.overscrollBehavior = 'contain'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.overscrollBehavior = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.overscrollBehavior = ''
      document.body.style.touchAction = ''
    }
  }, [isOpen])

  useEffect(() => setIsClient(true), [])
  if (!isClient) return null

  const sidebarHeight = 1000

  return (
    <motion.div animate={isOpen ? 'open' : 'closed'} initial="closed" className="fixed z-40">
      <motion.div
        custom={sidebarHeight}             // ✅ สำคัญสำหรับ variant แบบฟังก์ชัน
        variants={sidebarVariants}
        style={{
          clipPath: `circle(0px at ${
            isScroll ? 'calc(100% - 2.4rem)' : 'calc(100% - 1.9rem)'
          } ${isScroll ? '45' : '55'}px)`,
        }}
        className={cn('fixed top-0 left-0 z-40 h-dvh w-[100vw] bg-primary')}
      >
        <div className="absolute top-[120px] w-full">
          <Navigation />
        </div>
      </motion.div>
    </motion.div>
  )
}

const navVariants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
} as const

const Navigation = () => {
  const { t } = useTranslation()
  const MENUS = useMemo(
    () => [
      { label: t('menu.service'), href: '#service' },
      { label: t('menu.showcases'), href: '#portfolio' },
      { label: t('menu.resources'), href: '#contact-us' },
    ],
    [t],
  )

  return (
    <motion.ul variants={navVariants}>
      {MENUS.map((val) => (
        <MenuItem key={val.href} val={val} />
      ))}
    </motion.ul>
  )
}

const MenuItem = ({ val }: { val: { label: string; href: string } }) => {
  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="my-1 flex w-full justify-center py-2"
    >
      <Link href={val.href} className="w-full text-center text-lg font-semibold text-white">
        {val.label}
      </Link>
    </motion.li>
  )
}
