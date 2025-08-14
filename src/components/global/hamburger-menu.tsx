'use client'

import { cn } from '@/lib/utils'
import type { Variants } from 'motion/react'
import * as motion from 'motion/react-client'
import { Dispatch, SetStateAction } from 'react'

interface IHamburgerMenu {
   isOpen: boolean
   setIsOpen: Dispatch<SetStateAction<boolean>>
}
export const HamburgerMenu = ({ isOpen, setIsOpen }: IHamburgerMenu) => {
   return (
      <>
         <motion.div
            animate={isOpen ? 'open' : 'closed'}
            className="relative z-10 size-9 lg:hidden"
         >
            <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
         </motion.div>
      </>
   )
}

interface PathProps {
   d?: string
   variants: Variants
   transition?: { duration: number }
}

const Path = (props: PathProps) => (
   <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
   />
)

const MenuToggle = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => (
   <button
      onClick={toggle}
      className={cn(
         'absolute top-1/2 right-1 z-50 flex size-9 -translate-y-1/2 cursor-pointer justify-end rounded-full border-none bg-transparent pt-2 outline-none select-none dark:[&_path]:stroke-white',
         isOpen && '[&_path]:stroke-white',
      )}
   >
      <svg width="23" height="23" viewBox="0 0 23 23">
         <Path
            variants={{
               closed: { d: 'M 2 2.5 L 20 2.5' },
               open: { d: 'M 3 16.5 L 17 2.5' },
            }}
         />
         <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
               closed: { opacity: 1 },
               open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
         />
         <Path
            variants={{
               closed: { d: 'M 2 16.346 L 20 16.346' },
               open: { d: 'M 3 2.5 L 17 16.346' },
            }}
         />
      </svg>
   </button>
)
