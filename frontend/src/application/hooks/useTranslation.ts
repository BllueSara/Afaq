import { translations } from '@/shared/constants/translations';
import { Language } from '@/domain/entities/Language';

export const useTranslation = (language: Language) => {
  return translations[language];
};

