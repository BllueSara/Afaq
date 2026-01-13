import { Logo } from '@/presentation/components/atoms/Logo';
import { Button } from '@/presentation/components/atoms/Button';
import { Input } from '@/presentation/components/atoms/Input';
import { Icon } from '@/presentation/components/atoms/Icon';

const exploreLinks = [
  { label: 'التراث الثقافي', href: '#' },
  { label: 'السياحة البيئية', href: '#' },
  { label: 'مواقع اليونسكو', href: '#' },
  { label: 'الحرفيون المحليون', href: '#' },
];

const aboutLinks = [
  { label: 'رؤيتنا', href: '#' },
  { label: 'شركاؤنا', href: '#' },
  { label: 'غرفة الأخبار', href: '#' },
  { label: 'الاستدامة', href: '#' },
];

const socialLinks = [
  { icon: 'public', href: '#' },
  { icon: 'share', href: '#' },
  { icon: 'mail', href: '#' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 px-6 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-right">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6 justify-start flex-row-reverse">
              <div className="flex items-center gap-3">
                <div className="size-12 text-accent-gold">
                  <svg className="size-12" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path
                      clipRule="evenodd"
                      d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold text-white">آفاق</h2>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              نحتفي بالقصص والمناظر الطبيعية الخالدة في المملكة العربية السعودية.
            </p>
            <div className="flex gap-4 justify-end">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  className="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-gold transition-colors"
                >
                  <Icon name={link.icon} size="xl" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent-gold">استكشف</h4>
            <ul className="space-y-4 text-white/70">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent-gold">عن آفاق</h4>
            <ul className="space-y-4 text-white/70">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent-gold">النشرة البريدية</h4>
            <p className="text-white/70 mb-4 text-sm">
              كن على اطلاع بأحدث الاكتشافات والفعاليات.
            </p>
            <div className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="bg-white/10 border-white/20"
              />
              <Button variant="secondary" className="text-xs">
                اشترك الآن
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40">
          <p>© 2024 منصة آفاق للتراث. جميع الحقوق محفوظة.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-white">
              شروط الخدمة
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

