import { Icon } from '@/presentation/components/atoms/Icon';
import { useLanguage } from '@/application/hooks/useLanguage';

interface DestinationGridProps {
  activeTab: 'heritage' | 'modern';
}

const destinations = [
  {
    id: '1',
    title: 'مدائن صالح (الحجر)',
    description: 'رحلة عبر الزمن إلى قلب الحضارة النبطية، حيث تحكي الصخور المنحوتة قصص ألفي عام من التاريخ في العلا.',
    location: 'العلا، منطقة المدينة المنورة',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0C3XiNWq5K2GV8UQO74BcRIywVshCSeBWlgAlz-h5VL5E1nLxfmmog9AKwTv_XGCEeKLuWjWWS0uoJe3g1ygbZwUHtd0zm1xw8h9IzAplzTfELTz6SXOhNg8YFoSs8aiXXjchsftYT4HyI6XPLQo0ujzNXbhMDrRJCRMte5ckZOoUX9Gx9dN2X8W6bcGBg8Z66KSDgiHd_0NSVZMz7nnPfMPpODNNONlmmP2AHHFpZuN_or4eQHApgC8i100fmyik7j8ZBPvm6aNV',
    badge: 'اليونسكو',
  },
  {
    id: '2',
    title: 'حي الطريف، الدرعية',
    description: 'مهد الدولة السعودية ومقر الحكم التاريخي، يقدم مزيجاً فريداً من العمارة الطينية التقليدية والتفاعل الحديث.',
    location: 'الدرعية، الرياض',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBW_-suh3Zy7j5GnF_VxK6Da1qj_F7y8s0vwT48GH58K9X5ujWQiVH_0zWjSW7MgkxRpUFj86LC3aXElj2XOSpC7lgppi_-wfxPhNSHYEYmK8G38qFUBFbkNZOZnkZrZDmBrEszke1m8UGIuFREcrAAFcn8dZgbDG6PIF9vuD13q-9AquT9X7C_iEGYo0IIyJpKEpKoWIB2S_ojCeUtoGxatFHonfNLFzPmx4xgUM8xp4ykw_RS3kslUbwW7on-3IB20-QKTVCptDYR',
    badge: 'تراث وطني',
  },
  {
    id: '3',
    title: 'قرية رجال ألمع',
    description: 'أيقونة معمارية في عسير، تتميز بقلاعها الملونة وتاريخ حافل بالكرم والشجاعة في الجبال الخضراء.',
    location: 'عسير، المنطقة الجنوبية',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSQQRuQwzHr4kgo5OBlm_mNrxROeRD-7FYClxsjtY_i8-c1kiTjNI_1hAGoeRNGiIw-YAh67OfC-ugv0RriyudrL5AzWV4dg36TQoiKk9sfcrGTD4UJn_ed8f3PVXF54rZG75GP_4wq66vGxJAj7a56E6Xnkc5ct5TKIdh2arDTR6Bbk5-3fdI_gi66rcKbozcF63RI5OLuVBKF5qz-_ZSNFY672G8Y5-dLrqsUBQ-nIb87pbd5F7vfUF7MRa1BjyPN9S2r_Kjit8a',
    badge: 'ثقافة',
  },
  {
    id: '4',
    title: 'الفنون الصخرية في منطقة حائل',
    description: 'أكبر متحف مفتوح للتاريخ البشري، يحتوي على نقوش تعود لآلاف السنين تصور حياة الإنسان والحيوان.',
    location: 'جبة والشويمس، حائل',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZJlEAb_AkfjIwC08wFkegeXyQ75sfNaMDP0znDPdBz5JEdncnh_8fOL3mpAUbPqc4BCNvEh6mqQ4gRyQzIVgvEVHUCDjbIjM-DPbMp6LHea5XYxnYE0DTaMQfxYnJNhVMk_pwNe4AJ75hpKpDy1PL0I1G3nSddRdJxgSkNVGMI37uNVkcSU82m051YvYIb7vY_wpqxGO0BOiHj52-Hx3eHrEc7ywgOSf42ZFWOOLgubcZM5Qog1lPQsUZDCdzVwS3uYf_Uasg9Mus',
    badge: 'اليونسكو',
  },
];

export const DestinationGrid = ({ activeTab }: DestinationGridProps) => {
  const { isRTL } = useLanguage();

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar px-2">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="group bg-white rounded-3xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('${destination.imageUrl}')` }}
              />
              <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                {destination.badge}
              </div>
              <button className="absolute top-4 left-4 bg-white/20 backdrop-blur-md p-1.5 rounded-full text-white hover:bg-white hover:text-primary transition-all">
                <Icon name="favorite" size="sm" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">{destination.title}</h3>
              <p className="text-primary/60 text-sm leading-relaxed mb-4">{destination.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-primary/40">
                  <Icon name="location_on" size="xs" />
                  <span className="text-xs">{destination.location}</span>
                </div>
                <a
                  className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                  href="#"
                >
                  <span>اكتشف المزيد</span>
                  <Icon name="arrow_forward" size="sm" className={isRTL ? 'scale-x-[-1]' : ''} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

