import { Link } from 'react-router-dom';
import { useLanguage } from '@/application/hooks/useLanguage';
import { useTranslation } from '@/application/hooks/useTranslation';
import { LanguageToggle } from '@/presentation/components/atoms/LanguageToggle';
import { Icon } from '@/presentation/components/atoms/Icon';
import { Button } from '@/presentation/components/atoms/Button';

const navItems = [
  { label: 'stories', href: '/stories' },
  { label: 'regions', href: '/regions' },
  { label: 'interactiveExperiences', href: '/experiences' },
];

export const StoryHeader = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <header className="fixed top-0 z-50 w-full bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 shrink-0 cursor-pointer">
            <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20">
              <Icon name="mosque" size="3xl" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold tracking-tight text-primary">
                {t.nav.culturalGateway || 'بوابة الثقافة'}
              </h1>
              <p className="text-[10px] text-secondary tracking-widest uppercase font-sans font-bold">
                Cultural Gateway
              </p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-text-main hover:text-primary font-medium transition-colors relative group py-2"
              >
                {t.nav[item.label as keyof typeof t.nav] || item.label}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              aria-label="Search"
              className="p-2 text-primary hover:bg-primary/5 rounded-full transition-colors"
            >
              <Icon name="search" />
            </button>
            <LanguageToggle />
            <Button className="hidden sm:flex items-center justify-center h-10 px-6 rounded-lg shadow-soft">
              {t.nav.planTrip || 'خطط لزيارتك'}
            </Button>
            <button className="sm:hidden p-2 text-primary">
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export const StoryHero = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const heroImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAUFwPUhTzgfnet0VL5g9vk342VkbEmNMIZ9S6ZZbk8Rl6HcYas-Pql_SLzB7NQ2x-TCcD-6CakFvJXwa4a9Rf7qMGuYLRCGXPr98as1g0cR-SG8N0l7rX_dy4Yev_W2U8rLay-6FI2H4dcY4lUa5CCIL2UaF59wcJWvFLavckMBqBrHHK0mj2QiVGmtr_BCwcGRSngaip-cINZAe_EuFah3IeQJIxh03o19ZapGWn_RgOVFI3nFmJeUCFWYcc1dhYJDl2Yq9jUFQ';

  return (
    <header className="relative w-full h-[70vh] min-h-[500px] flex items-end justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt={t.alt.qattAlAsiri}
          className="w-full h-full object-cover scale-105"
          src={heroImageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-light via-black/30 to-black/10 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background-light/50 via-transparent to-transparent z-10 opacity-30" />
      </div>
      <div className="relative z-20 w-full max-w-[1200px] px-6 pb-20 mx-auto">
        <div className="flex flex-col items-start animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/90 backdrop-blur text-white text-xs font-bold rounded-full mb-6 border border-white/20">
            <Icon name="auto_awesome" size="sm" />
            <span>{t.story.unescoBadge}</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-none mb-6 drop-shadow-lg">
            {t.story.title}
          </h1>
          <p className="font-display text-2xl md:text-3xl text-white/90 font-light max-w-2xl drop-shadow-md border-r-4 border-accent-gold pr-6">
            {t.story.subtitle}
          </p>
        </div>
      </div>
    </header>
  );
};

