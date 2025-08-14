"use client"
import { SITE_CONFIG } from '@/utils/constants/site-info'
import { PiLinuxLogoFill } from 'react-icons/pi'
import { RiAndroidFill, RiAppleFill, RiChromeFill, RiWindowsFill } from 'react-icons/ri'

const Footer = () => {
   return (
      <footer id="contact-us" className="relative z-20 mt-10 border-t border-t-black/10 pb-16 lg:pb-0 dark:border-t-white/10">
         <div className="container mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 py-4 md:flex-row">
            <div className="flex items-center justify-start gap-2">
               <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
               </span>
               <p className="text-xs text-black opacity-70 hover:opacity-100 dark:text-white">
                  All Systems Operational ↗<br />
                  <span className="text-[10px] opacity-40">
                     COPYRIGHT©{new Date().getFullYear()} {SITE_CONFIG.domainName}
                  </span>
               </p>
            </div>

            <div className="grid grid-cols-3 items-center justify-end gap-4 sm:flex">
               <div className="rounded-md border border-black/10 p-2 pr-3 duration-300 dark:border-white/10 dark:hover:bg-white/5">
                  <div className="flex items-center justify-start gap-2">
                     <RiAppleFill className="text-lg" />
                     <span className="text-xs opacity-70">macOS</span>
                  </div>
               </div>
               <div className="rounded-md border border-black/10 p-2 pr-3 duration-300 dark:border-white/10 dark:hover:bg-white/5">
                  <div className="flex items-center justify-start gap-2">
                     <RiWindowsFill className="text-lg" />
                     <span className="text-xs opacity-70">Windows</span>
                  </div>
               </div>
               <div className="rounded-md border border-black/10 p-2 pr-3 duration-300 dark:border-white/10 dark:hover:bg-white/5">
                  <div className="flex items-center justify-start gap-2">
                     <PiLinuxLogoFill className="text-lg" />
                     <span className="text-xs opacity-70">Linux</span>
                  </div>
               </div>
               <div className="rounded-md border border-black/10 p-2 pr-3 duration-300 dark:border-white/10 dark:hover:bg-white/5">
                  <div className="flex items-center justify-start gap-2">
                     <RiChromeFill className="text-lg" />
                     <span className="text-xs opacity-70">Chrome</span>
                  </div>
               </div>
               <div className="rounded-md border border-black/10 p-2 pr-3 duration-300 dark:border-white/10 dark:hover:bg-white/5">
                  <div className="flex items-center justify-start gap-2">
                     <RiAppleFill className="text-lg" />
                     <span className="text-xs opacity-70">IOS</span>
                  </div>
               </div>
               <div className="rounded-md border border-black/10 p-2 pr-3 duration-300 dark:border-white/10 dark:hover:bg-white/5">
                  <div className="flex items-center justify-start gap-2">
                     <RiAndroidFill className="text-lg" />
                     <span className="text-xs opacity-70">Android</span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
