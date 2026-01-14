import { useRef } from 'react';
import { NearbyPlace } from '@/domain/entities/Destination';
import { Icon } from '@/presentation/components/atoms/Icon';
import { useLanguage } from '@/application/hooks/useLanguage';

interface NearbyPlacesSectionProps {
  places: NearbyPlace[];
}

export const NearbyPlacesSection = ({ places }: NearbyPlacesSectionProps) => {
  const { isRTL } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 400;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const newPosition = isRTL
      ? direction === 'right'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount
      : direction === 'left'
      ? currentScroll - scrollAmount
      : currentScroll + scrollAmount;
    scrollContainerRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={i} name="star" className="text-[16px]" />);
    }

    if (hasHalfStar) {
      stars.push(<Icon key="half" name="star_half" className="text-[16px]" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Icon key={`empty-${i}`} name="star_border" className="text-[16px]" />);
    }

    return stars;
  };

  return (
    <section className="py-24 px-0 bg-background-light dark:bg-background-dark border-t border-accent-gold dark:border-gray-800">
      <div className="container mx-auto px-6 md:px-12 mb-10 flex justify-between items-end">
        <div>
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">وسائل الراحة الحديثة</h3>
          <h2 className="text-3xl font-display font-bold text-[#121811] dark:text-[#f9fbf9]">حولك</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('right')}
            className="size-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors"
          >
            <Icon name={isRTL ? 'arrow_back' : 'arrow_forward'} />
          </button>
          <button
            onClick={() => scroll('left')}
            className="size-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors"
          >
            <Icon name={isRTL ? 'arrow_forward' : 'arrow_back'} />
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-10 hide-scrollbar snap-x"
      >
        {places.map((place) => (
          <div
            key={place.id}
            className="min-w-[300px] md:min-w-[350px] bg-white dark:bg-[#2a261a] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer snap-start"
          >
            <div className="h-48 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundImage: `url("${place.imageUrl}")` }}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold text-[#121811] dark:text-[#f9fbf9]">{place.name}</h4>
                <span className="bg-primary/20 text-[#121811] dark:text-primary px-2 py-1 text-xs font-bold rounded">
                  {place.distance}
                </span>
              </div>
              <p className="text-muted dark:text-gray-400 text-sm mb-4">{place.description}</p>
              <div className="flex gap-1 text-primary dark:text-accent-gold text-sm">
                {renderStars(place.rating)}
                <span className="text-muted dark:text-gray-500 mr-1">({place.reviewCount})</span>
              </div>
            </div>
          </div>
        ))}
        <div className="min-w-[300px] md:min-w-[350px] bg-white dark:bg-[#2a261a] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer snap-start flex flex-col justify-center items-center border-2 border-dashed border-gray-300 dark:border-gray-700">
          <Icon name="explore" className="text-4xl text-gray-300 dark:text-gray-600 mb-2" />
          <span className="text-gray-400 dark:text-gray-500 font-medium">عرض جميع المواقع</span>
        </div>
      </div>
    </section>
  );
};
