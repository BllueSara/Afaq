import { useLanguage } from '@/application/hooks/useLanguage';
import { useTranslation } from '@/application/hooks/useTranslation';
import { Icon } from '@/presentation/components/atoms/Icon';

const guardianImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB_aSYRg5ZLDLhf-s847dITtqVsblfuZM6S-evkeXhCdqUMyT3X2Yflb3z4J9qTvR0m3J7FeB6zXmWK0KGiFLsr4fLuFNxNNVS_OFGFLOGLXmjinKqDwrcrspEMH0Wn2x4AoXqemzDuGu-dV2j5vK22o0VFmkwiiYhBeJ0IdI83vWqimpwvtHcV9bYVNewDsp0iqBLIe022CSN0GCfu1oB_DDqjCpLk5VOqIFqD1qvx5CnLNOBU4xejM_QgMR_3z7j9rUa8WYwvYw';

export const StorySidebar = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <aside className="lg:col-span-4 order-1 lg:order-2 space-y-8">
      {/* Guardian Card */}
      <div className="bg-white dark:bg-background-dark rounded-2xl p-8 shadow-card border-t-4 border-primary">
        <div className="flex items-center gap-2 mb-6 text-secondary font-bold text-xs uppercase tracking-widest">
          <Icon name="verified_user" size="lg" />
          {t.story.guardian.title}
        </div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary p-1">
            <img
              alt={t.story.guardian.name}
              className="w-full h-full rounded-full object-cover"
              src={guardianImageUrl}
            />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-primary">{t.story.guardian.name}</h3>
            <p className="text-sm text-gray-500">{t.story.guardian.role}</p>
            <div className="flex gap-1 mt-1 text-accent-gold">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="star" size="sm" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 italic border-r-2 border-gray-200 pr-3">
          {t.story.guardian.quote}
        </p>
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-500">{t.story.guardian.regionLabel || 'المنطقة'}</span>
            <span className="text-sm font-bold text-primary">{t.story.guardian.region}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-500">{t.story.guardian.experienceLabel || 'سنوات الخبرة'}</span>
            <span className="text-sm font-bold text-primary">{t.story.guardian.experience}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-500">{t.story.guardian.specialtyLabel || 'التخصص'}</span>
            <span className="text-sm font-bold text-primary">{t.story.guardian.specialty}</span>
          </div>
        </div>
      </div>

      {/* Did You Know Card */}
      <div className="bg-primary text-white rounded-2xl p-8 shadow-elegant relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-10 -translate-y-10" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-10 translate-y-10" />
        <h4 className="font-display text-xl font-bold mb-6 relative z-10">{t.story.didYouKnow.title}</h4>
        <ul className="space-y-4 relative z-10">
          <li className="flex gap-3 text-sm font-light">
            <Icon name="public" className="text-accent-gold shrink-0" />
            <span>{t.story.didYouKnow.fact1}</span>
          </li>
          <li className="flex gap-3 text-sm font-light">
            <Icon name="palette" className="text-accent-gold shrink-0" />
            <span>{t.story.didYouKnow.fact2}</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

