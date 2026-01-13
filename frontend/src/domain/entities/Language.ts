export enum Language {
  AR = 'ar',
  EN = 'en',
}

export const LanguageConfig = {
  [Language.AR]: {
    code: Language.AR,
    name: 'العربية',
    dir: 'rtl' as const,
  },
  [Language.EN]: {
    code: Language.EN,
    name: 'English',
    dir: 'ltr' as const,
  },
};

