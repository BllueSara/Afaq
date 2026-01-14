import { Destination } from '@/domain/entities/Destination';
import { Icon } from '@/presentation/components/atoms/Icon';

interface HeroSectionProps {
  destination: Destination;
}

export const HeroSection = ({ destination }: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[20s] hover:scale-100"
        style={{ backgroundImage: `url("${destination.heroImageUrl}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full p-10 md:p-20 flex flex-col items-start justify-end h-full">
        <div className="max-w-4xl space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-2 text-white uppercase tracking-widest text-sm font-bold mb-2">
            <Icon name="location_on" size="sm" className="text-primary" />
            {destination.location}
          </div>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight text-shadow">
            {destination.title}
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl mt-4">
            {destination.heroSubtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
