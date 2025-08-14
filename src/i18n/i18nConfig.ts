import { Config } from 'next-i18n-router/dist/types';

const locales = ['th', 'en'] as const
export type Locale = (typeof locales)[number];

const i18nConfig: Config = {
  locales: locales,
  defaultLocale: locales[0],
  localeDetector: false
};

export default i18nConfig;