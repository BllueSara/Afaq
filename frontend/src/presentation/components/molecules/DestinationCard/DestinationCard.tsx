import { useNavigate } from 'react-router-dom';
import { Destination } from '@/domain/entities/Destination';
import { Icon } from '@/presentation/components/atoms/Icon';
import { useLanguage } from '@/application/hooks/useLanguage';
import { RegionMapper } from '@/infrastructure/mappers/RegionMapper';

interface DestinationCardProps {
  destination: Destination | Partial<Destination>;
  onClick?: () => void;
}

export const DestinationCard = ({ destination, onClick }: DestinationCardProps) => {
  const navigate = useNavigate();
  const { language, isRTL } = useLanguage();
  const regionLabel = destination.region ? RegionMapper.toLocalized(destination.region, language) : '';

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/destination/${destination.id}`);
    }
  };

  return (
    <div
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transition-all hover:-translate-y-2 cursor-pointer"
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
      <img
        alt={destination.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        src={destination.imageUrl}
      />
      <div className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} p-6 z-20 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
        <span className="bg-accent-gold/90 text-white text-[10px] font-black px-2 py-1 rounded mb-2 inline-block">
          {regionLabel}
        </span>
        <h4 className="text-white text-xl font-bold mb-1">{destination.title}</h4>
        <p className={`text-white/70 text-sm flex items-center ${isRTL ? 'justify-end' : 'justify-start'} gap-1`}>
          <Icon name="location_on" size="xs" />
          {destination.location}
        </p>
      </div>
    </div>
  );
};

