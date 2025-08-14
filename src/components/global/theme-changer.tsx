'use client'

import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

import { PiSunDimFill } from 'react-icons/pi'
import { RiMoonClearFill } from 'react-icons/ri'

interface IThemeChanger {
   className?: string
}

export const ThemeChanger = ({ className }: IThemeChanger) => {
   const [mounted, setMounted] = useState<boolean>(false)
   const { setTheme, theme } = useTheme()

   useEffect(() => {
      setMounted(true)
   }, [])

   const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
   }

   if (!mounted) {
      return (
         <Button
            variant="ghost"
            size="icon"
            border
            className={cn('size-10 rounded-full', className)}
         >
            <span className="size-5" />
         </Button>
      )
   }

   return (
      <Button
         onClick={toggleTheme}
         variant="ghost"
         size="icon"
         border
         className={cn('size-10 rounded-full', className)}
      >
         {theme === 'dark' ? (
            <PiSunDimFill className="size-5 text-yellow-400" />
         ) : (
            <RiMoonClearFill className="size-5 text-yellow-400" />
         )}
      </Button>
   )
}
