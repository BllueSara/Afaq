import { createContext, useState, useEffect, ReactNode } from 'react';
import { Language, LanguageConfig } from '@/domain/entities/Language';

const LANGUAGE_STORAGE_KEY = 'afaq-language';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  dir: 'rtl' | 'ltr';
  isRTL: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return (stored as Language) || Language.AR;
    }
    return Language.AR;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
      document.documentElement.lang = language;
      document.documentElement.dir = LanguageConfig[language].dir;
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === Language.AR ? Language.EN : Language.AR));
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    dir: LanguageConfig[language].dir,
    isRTL: language === Language.AR,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

