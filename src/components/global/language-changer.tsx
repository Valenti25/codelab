'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import i18nConfig, { Locale } from '@/i18n/i18nConfig'
import { Button } from '../ui/button'
import { BsTranslate } from 'react-icons/bs'
import { useCurrentLocale } from 'next-i18n-router/client'
import { cn } from '@/lib/utils'

interface ILanguageChanger {
   className?: string
}
export function LanguageChanger({ className }: ILanguageChanger) {
   const currentLocale = (useCurrentLocale(i18nConfig) as Locale) || i18nConfig.defaultLocale
   const router = useRouter()
   const currentPathname = usePathname()

   const onClick = () => {
      const newLocale = currentLocale === 'th' ? 'en' : 'th'

      const days = 30
      const date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`

      if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
         router.push('/' + newLocale + currentPathname)
      } else {
         router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
      }

      router.refresh()
   }

   return (
      <Button
         onClick={onClick}
         variant="ghost"
         size="icon"
         border
         className={cn(
            'flex size-10 h-10 w-10 items-center justify-center gap-2 rounded-full',
            className,
         )}
      >
         <BsTranslate className="text-lg text-neutral-600 dark:text-white" />
      </Button>
   )
}
