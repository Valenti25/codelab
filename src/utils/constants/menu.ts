// 'use client'
// import { useTranslation } from 'react-i18next'

interface IMenus {
   label: string
   href: string
}

// export const useMenus = (): IMenus[] => {
//    const { t } = useTranslation()

//    return [
//       {
//          label: t('menu.service'),
//          href: '#service',
//       },
//       {
//          label: t('menu.showcases'),
//          href: '#portfolio',
//       },
//       {
//          label: t('menu.resources'),
//          href: '#contact-us',
//       },
//    ]
// }

// Legacy export for backward compatibility (but this won't work with translations)
export const MENUS: IMenus[] = [
   {
      label: 'Service',
      href: '#service',
   },
   {
      label: 'Showcases',
      href: '#portfolio',
   },
   {
      label: 'Resources',
      href: '#contact-us',
   },
   // {
   //    label: 'Home',
   //    href: '/',
   // },
   // {
   //    label: 'Blog',
   //    href: '/blog',
   // },
   // {
   //    label: 'Work',
   //    href: '/work',
   // },
   // {
   //    label: 'Contact',
   //    href: '#contact-us',
   // },
]
