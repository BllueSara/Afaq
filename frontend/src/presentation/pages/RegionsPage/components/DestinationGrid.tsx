import { useNavigate } from 'react-router-dom';
import { Icon } from '@/presentation/components/atoms/Icon';
import { useLanguage } from '@/application/hooks/useLanguage';
import salehcityImage from '@/assets/salehcity.jpeg';
import sixflagImage from '@/assets/sixflag.jpeg';
import jeddahImage from '@/assets/jeddah.jpeg';
import frasanImage from '@/assets/frasan.jpeg';
import jazerahredseaImage from '@/assets/jazerahredsea.jpeg';
import dareahImage from '@/assets/dareah.jpeg';
import albaladImage from '@/assets/albalad.jpeg';
import rjalalmaImage from '@/assets/rjalalma3.jpeg';
import hailImage from '@/assets/7ail.jpg';
import alahsaImage from '@/assets/Al-Ahsa_Palm_Oasis_2023.jpg';
import kabsahImage from '@/assets/kabsah.jpeg';
import slegImage from '@/assets/sleg.jpeg';
import hanethImage from '@/assets/haneth.jpeg';
import fishImage from '@/assets/fish.jpeg';

interface DestinationGridProps {
  activeTab: 'heritage' | 'modern';
  filters: {
    regions: string[];
    interests: string[];
  };
}

type DestinationCategory = 'heritage' | 'modern' | 'culinary';

type DestinationItem = {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  location: string;
  locationEn?: string;
  imageUrl: string;
  badge: string;
  badgeEn?: string;
  regions: string[];
  interests: string[];
  category: DestinationCategory;
  isCulinary?: boolean;
};

const destinations: DestinationItem[] = [
  {
    id: '1',
    title: 'حي الطريف، الدرعية',
    titleEn: 'At-Turaif District, Diriyah',
    description:
      'مهد الدولة السعودية ومقر الحكم التاريخي، يقدم مزيجاً فريداً من العمارة الطينية التقليدية والتفاعل الحديث.',
    descriptionEn:
      'Birthplace of the first Saudi state and historic seat of power, offering a unique blend of traditional mud architecture and modern experiences.',
    location: 'الدرعية، الرياض',
    locationEn: 'Diriyah, Riyadh',
    imageUrl: dareahImage,
    badge: 'تراث وطني',
    badgeEn: 'National Heritage',
    regions: ['central'],
    interests: ['التاريخ', 'العمارة', 'الفنون'],
    category: 'heritage',
  },
  {
    id: '2',
    title: 'مدائن صالح (الحجر)',
    titleEn: 'Hegra (Al-Hijr)',
    description:
      'رحلة عبر الزمن إلى قلب الحضارة النبطية، حيث تحكي الصخور المنحوتة قصص ألفي عام من التاريخ في العلا.',
    descriptionEn:
      'A journey through time into the heart of the Nabataean civilization, where carved rocks tell stories of two thousand years of history in AlUla.',
    location: 'العلا، منطقة المدينة المنورة',
    locationEn: 'AlUla, Medina Region',
    imageUrl: salehcityImage,
    badge: 'اليونسكو',
    badgeEn: 'UNESCO World Heritage',
    regions: ['north'],
    interests: ['التاريخ', 'الطبيعة'],
    category: 'heritage',
  },
  {
    id: 'rijal-alma',
    title: 'قرية رجال ألمع',
    titleEn: 'Rijal Almaa Village',
    description:
      'أيقونة معمارية في عسير، تتميز بقلاعها الملونة وتاريخ حافل بالكرم والشجاعة في الجبال الخضراء.',
    descriptionEn:
      'An architectural icon in Asir, known for its colorful fortresses and a long history of hospitality and courage in lush green mountains.',
    location: 'رجال ألمع، عسير',
    locationEn: 'Rijal Almaa, Asir Region',
    imageUrl: rjalalmaImage,
    badge: 'قرية جبلية',
    badgeEn: 'Mountain Village',
    regions: ['south'],
    interests: ['التاريخ', 'الطبيعة', 'الفنون'],
    category: 'heritage',
  },
  {
    id: '3',
    title: 'حي البلد التاريخي',
    titleEn: 'Al-Balad Historic District',
    description:
      'أزقة حجرية وبيوت تاريخية بواجهات خشبية مزخرفة تحكي قصة جدة القديمة وروح البحر الأحمر.',
    descriptionEn:
      'Stone alleyways and historic houses with ornate wooden facades telling the story of old Jeddah and the Red Sea spirit.',
    location: 'حي البلد، جدة',
    locationEn: 'Al-Balad, Jeddah',
    imageUrl: albaladImage,
    badge: 'تراث حضري',
    badgeEn: 'Urban Heritage',
    regions: ['west'],
    interests: ['التاريخ', 'العمارة', 'الفنون'],
    category: 'heritage',
  },
  {
    id: 'al-ahsa-oasis',
    title: 'واحة الأحساء',
    titleEn: 'Al-Ahsa Oasis',
    description: 'أكبر واحة نخيل في العالم، تجمع بين العيون الطبيعية والمزارع والبيوت الطينية التاريخية.',
    descriptionEn:
      "The world's largest palm oasis, combining natural springs, farms, and historic mud houses.",
    location: 'واحة الأحساء، المنطقة الشرقية',
    locationEn: 'Al-Ahsa Oasis, Eastern Region',
    imageUrl: alahsaImage,
    badge: 'واحة تراثية',
    badgeEn: 'Heritage Oasis',
    regions: ['east'],
    interests: ['التاريخ', 'الطبيعة'],
    category: 'heritage',
  },
  {
    id: '4',
    title: 'الفنون الصخرية في منطقة حائل',
    titleEn: 'Rock Art of Hail Region',
    description:
      'أكبر متحف مفتوح للتاريخ البشري، يحتوي على نقوش تعود لآلاف السنين تصور حياة الإنسان والحيوان.',
    descriptionEn:
      'The largest open-air museum of human history, featuring carvings dating back thousands of years depicting humans and animals.',
    location: 'جبة والشويمس، حائل',
    locationEn: 'Jubbah & Shuwaymis, Hail',
    imageUrl: hailImage,
    badge: 'اليونسكو',
    badgeEn: 'UNESCO World Heritage',
    regions: ['north'],
    interests: ['التاريخ', 'الطبيعة', 'الفنون'],
    category: 'heritage',
  },
  // وجهات سياحة وترفيه حديثة
  {
    id: 'red-sea-islands',
    title: 'جزر البحر الأحمر',
    titleEn: 'Red Sea Islands',
    description: 'منتجعات فاخرة وشواطئ بكر وأنشطة غوص في مياه فيروزية على ساحل البحر الأحمر.',
    descriptionEn:
      'Luxury resorts, pristine beaches, and world-class diving experiences on the Red Sea coast.',
    location: 'البحر الأحمر، الساحل الغربي',
    locationEn: 'Red Sea, Western Coast',
    imageUrl: jazerahredseaImage,
    badge: 'سياحة بحرية',
    badgeEn: 'Marine Tourism',
    regions: ['west'],
    interests: ['الطبيعة', 'الفنون'],
    category: 'modern',
  },
  {
    id: 'qiddiya-six-flags',
    title: 'مدينة القدية - سيكس فلاغز',
    titleEn: 'Qiddiya City – Six Flags',
    description: 'مدينة ترفيهية ضخمة جنوب غرب الرياض تضم ألعاباً عالمية ومرافق ترفيهية حديثة.',
    descriptionEn:
      'A massive entertainment city southwest of Riyadh featuring world-class rides and modern attractions.',
    location: 'القدية، الرياض',
    locationEn: 'Qiddiya, Riyadh',
    imageUrl: sixflagImage,
    badge: 'مدينة ترفيهية',
    badgeEn: 'Entertainment City',
    regions: ['central'],
    interests: ['الفنون', 'الطبيعة'],
    category: 'modern',
  },
  {
    id: 'farasan-islands',
    title: 'جزر فرسان',
    titleEn: 'Farasan Islands',
    description: 'أرخبيل من الجزر والشواطئ البكر والشعاب المرجانية، ملاذ لمحبي الغوص ومراقبة الدلافين والطيور.',
    descriptionEn:
      'An archipelago of pristine islands and coral reefs, a haven for divers and those who love dolphins and bird watching.',
    location: 'منطقة جازان، جنوب غرب المملكة',
    locationEn: 'Jazan Region, Southwest Saudi Arabia',
    imageUrl: frasanImage,
    badge: 'محميّة بحرية',
    badgeEn: 'Marine Reserve',
    regions: ['south'],
    interests: ['الطبيعة'],
    category: 'modern',
  },
  {
    id: 'jeddah-waterfront',
    title: 'ممشى جدة البحري',
    titleEn: 'Jeddah Waterfront',
    description: 'واجهة بحرية حديثة تضم مسارات مشي، مناطق لعب، مطاعم، وإطلالات على البحر الأحمر.',
    descriptionEn:
      'A modern seafront promenade with walking tracks, playgrounds, restaurants, and views of the Red Sea.',
    location: 'كورنيش جدة، المنطقة الغربية',
    locationEn: 'Jeddah Corniche, Western Region',
    imageUrl: jeddahImage,
    badge: 'واجهة بحرية',
    badgeEn: 'Seafront',
    regions: ['west'],
    interests: ['الطبيعة', 'الفنون'],
    category: 'modern',
  },
  // أطباق سعودية حسب المنطقة - تظهر عند اختيار اهتمام الطهي
  {
    id: 'dish-najd',
    title: 'كبسة نجدية',
    description: 'طبق الأرز الشهير من منطقة نجد، يُطهى مع اللحم أو الدجاج وتوابل عربية عميقة النكهة.',
    location: 'نجد، المنطقة الوسطى',
    imageUrl: kabsahImage,
    badge: 'المطبخ السعودي',
    badgeEn: 'Saudi Cuisine',
    regions: ['central'],
    interests: ['الطهي'],
    category: 'culinary',
    isCulinary: true,
  },
  {
    id: 'dish-hejaz',
    title: 'السليق الحجازي',
    description: 'أرز أبيض بحليب مطهو برفق مع الدجاج أو اللحم، من أشهر أطباق المنطقة الغربية.',
    location: 'الحجاز، المنطقة الغربية',
    imageUrl: slegImage,
    badge: 'المطبخ السعودي',
    badgeEn: 'Saudi Cuisine',
    regions: ['west'],
    interests: ['الطهي'],
    category: 'culinary',
    isCulinary: true,
  },
  {
    id: 'dish-asir',
    title: 'الحنيد العسيري',
    description: 'لحم يُطهى ببطء في حفرة تقليدية تحت الأرض، يقدم مع الأرز في أجواء جبلية مميزة.',
    location: 'عسير، المنطقة الجنوبية',
    imageUrl: hanethImage,
    badge: 'المطبخ السعودي',
    badgeEn: 'Saudi Cuisine',
    regions: ['south'],
    interests: ['الطهي'],
    category: 'culinary',
    isCulinary: true,
  },
  {
    id: 'dish-eastern',
    title: 'سمك الكنعد الشرقي',
    description: 'سمك كنعد متبل ومشوي على الجمر، من ألذ أطباق الساحل الشرقي في المملكة.',
    location: 'المنطقة الشرقية',
    imageUrl: fishImage,
    badge: 'المطبخ السعودي',
    badgeEn: 'Saudi Cuisine',
    regions: ['east'],
    interests: ['الطهي'],
    category: 'culinary',
    isCulinary: true,
  },
];

export const DestinationGrid = ({ activeTab, filters }: DestinationGridProps) => {
  const navigate = useNavigate();
  const { isRTL, language } = useLanguage();

  const handleDestinationClick = (id: string) => {
    navigate(`/destination/${id}`);
  };

  const isCulinaryMode = filters.interests.includes('الطهي');

  const filteredDestinations = destinations.filter((destination) => {
    const matchRegions =
      filters.regions.length === 0 ||
      destination.regions.some((region) => filters.regions.includes(region));

    // في وضع الطهي نعرض فقط الأطباق السعودية
    if (isCulinaryMode) {
      return destination.category === 'culinary' && matchRegions;
    }

    const matchInterests =
      filters.interests.length === 0 ||
      destination.interests.some((interest) => filters.interests.includes(interest));

    const matchCategory =
      activeTab === 'heritage'
        ? destination.category === 'heritage'
        : destination.category === 'modern';

    return matchRegions && matchInterests && matchCategory;
  });

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar px-2">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredDestinations.map((destination) => {
          const isCulinary = destination.isCulinary;

          const title = language === 'ar' ? destination.title : destination.titleEn ?? destination.title;
          const description =
            language === 'ar'
              ? destination.description
              : destination.descriptionEn ?? destination.description;
          const location =
            language === 'ar' ? destination.location : destination.locationEn ?? destination.location;
          const badge = language === 'ar' ? destination.badge : destination.badgeEn ?? destination.badge;

          return (
            <div
              key={destination.id}
              onClick={isCulinary ? undefined : () => handleDestinationClick(destination.id)}
              className={`group bg-white rounded-3xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                isCulinary ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${destination.imageUrl}')` }}
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                  {badge}
                </div>
                <button className="absolute top-4 left-4 bg-white/20 backdrop-blur-md p-1.5 rounded-full text-white hover:bg-white hover:text-primary transition-all">
                  <Icon name="favorite" size="sm" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
                <p className="text-primary/60 text-sm leading-relaxed mb-4">{description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-primary/40">
                    <Icon name="location_on" size="xs" />
                    <span className="text-xs">{location}</span>
                  </div>
                  {!isCulinary && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDestinationClick(destination.id);
                      }}
                      className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      <span>{language === 'ar' ? 'اكتشف المزيد' : 'Discover more'}</span>
                      <Icon name="arrow_forward" size="sm" className={isRTL ? 'scale-x-[-1]' : ''} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

