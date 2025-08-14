import '../globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import { ReactNode } from 'react'
import { dir } from 'i18next'
import { notFound } from 'next/navigation'
import i18nConfig, { Locale } from '@/i18n/i18nConfig'
import { SITE_INFO } from '@/utils/constants/site-info'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Header } from '@/components/global/header'
import localFont from 'next/font/local'
import Footer from '@/components/global/footer'
import FloatChatIcon from '@/components/float-chat/FloatChatIcon'
import initTranslations from '@/i18n/i18n'
import TranslationsProvider from '@/components/providers/translations-provider'

const notoSansThai = Noto_Sans_Thai({
   variable: '--font-th',
   subsets: ['latin'],
})

const satoshi = localFont({
   variable: '--font-en',
   src: [
      {
         path: '../../fonts/Satoshi-Light.woff',
         weight: '300',
         style: 'normal',
      },
      {
         path: '../../fonts/Satoshi-Regular.woff',
         weight: '400',
         style: 'normal',
      },
      {
         path: '../../fonts/Satoshi-Medium.woff',
         weight: '500',
         style: 'normal',
      },
      {
         path: '../../fonts/Satoshi-Bold.woff',
         weight: '700',
         style: 'normal',
      },
      {
         path: '../../fonts/Satoshi-Black.woff',
         weight: '900',
         style: 'normal',
      },
   ],
})

const i18nNamespaces = ['home']

export async function generateMetadata({
   params,
}: {
   params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
   const { locale } = await params
   return {
      title: SITE_INFO[locale].title,
      description: SITE_INFO[locale].description,
   }
}

export function generateStaticParams() {
   return i18nConfig.locales.map((locale) => ({ locale }))
}

export default async function RootLayout(props: {
   children: ReactNode
   params: Promise<{ locale: string }>
}) {
   const { locale } = await props.params
   const { children } = props

   if (!i18nConfig.locales.includes(locale)) {
      notFound()
   }

   const { resources } = await initTranslations(locale, i18nNamespaces)

   return (
      <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
         <body className={`${notoSansThai.variable} ${satoshi.variable} antialiased`}>
            <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
               <ThemeProvider
                  attribute="class"
                  defaultTheme="dark"
                  enableSystem
                  disableTransitionOnChange
               >
                  <Header />
                  {children}
                  <Footer />
                  <FloatChatIcon />
               </ThemeProvider>
            </TranslationsProvider>
         </body>
      </html>
   )
}
