import { Destination } from '@/domain/entities/Destination';
import { Icon } from '@/presentation/components/atoms/Icon';

interface IntroductionSectionProps {
  destination: Destination;
}

export const IntroductionSection = ({ destination }: IntroductionSectionProps) => {
  return (
    <section className="py-24 px-6 md:px-20 lg:px-40 bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Icon name="history_edu" className="text-4xl text-primary/50 mx-auto" />
        {destination.quote && (
          <h2 className="text-3xl md:text-5xl font-display font-medium text-[#121811] dark:text-[#f9fbf9] leading-tight">
            "{destination.quote}"
          </h2>
        )}
        {destination.description && (
          <p className="text-muted dark:text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            {destination.description}
          </p>
        )}
        <div className="h-16 w-[1px] bg-primary/30 mx-auto mt-12"></div>
      </div>
    </section>
  );
};
