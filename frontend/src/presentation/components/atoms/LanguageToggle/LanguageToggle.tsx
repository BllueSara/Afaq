import { useLanguage } from '@/application/hooks/useLanguage';
import { Language } from '@/domain/entities/Language';
import { Icon } from '../Icon';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
      aria-label="Toggle language"
    >
      <Icon name="language" size="lg" />
      <span className="text-sm font-semibold">
        {language === Language.AR ? 'EN' : 'AR'}
      </span>
    </button>
  );
};

