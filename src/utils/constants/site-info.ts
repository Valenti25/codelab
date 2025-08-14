import { Locale } from '@/i18n/i18nConfig'

type TSiteInfo = {
   [key in Locale]: {
      title: string
      description: string
      address1: string
      address2: string
      address3: string
      taxNo: string
   }
}

export const SITE_CONFIG = {
   domainName: 'codelabdev.co',
}

export const SITE_INFO: TSiteInfo = {
   th: {
      title: 'บริษัท โค้ดแล็บ เทค จำกัด',
      description: 'บริษัท โค้ดแล็บ เทค จำกัด',
      address1: '99/8, นิว คอนเน็กซ์ เฮาส์ ดอนเมือง',
      address2: 'ถนน วิภาวดีรังสิต แขวงสนามบิน',
      address3: 'ดอนเมือง กรุงเทพมหานคร 10210',
      taxNo: 'เลขประจำตัวผู้เสียภาษี 0105568024536',
   },
   en: {
      title: 'Codelabs Tech Co.,Ltd.',
      description: 'Codelabs Tech Co.,Ltd.',
      address1: '99/8 Nue Connex House Don Mueang Village,',
      address2: 'Pahonyothin Road, Sanambin Sub-district,',
      address3: 'Don Mueang District, Bangkok Province 10210',
      taxNo: 'Tax. 0105568024536',
   },
}

export const SITE_CONTACT = {
   email: 'admin@codelabdev.co',
}
