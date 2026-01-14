import { Link } from 'react-router-dom';
import { Logo } from '@/presentation/components/atoms/Logo';
import { LanguageToggle } from '@/presentation/components/atoms/LanguageToggle';
import { useLanguage } from '@/application/hooks/useLanguage';
import { useTranslation } from '@/application/hooks/useTranslation';

export const Navigation = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.regions, href: '/regions' },
    { label: t.nav.planTrip, href: '/planner' },
  ];

  return (
    <header className="relative glass-nav border-b border-[#2D5A27]/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
};

