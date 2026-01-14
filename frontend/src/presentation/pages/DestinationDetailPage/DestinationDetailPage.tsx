import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Destination } from '@/domain/entities/Destination';
import { Navigation } from '@/presentation/components/molecules/Navigation';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { TimelineSection } from './components/TimelineSection';
import { NearbyPlacesSection } from './components/NearbyPlacesSection';
import { PracticalInfoSection } from './components/PracticalInfoSection';
import { useLanguage } from '@/application/hooks/useLanguage';
import { getDestinationById } from '@/infrastructure/services/destinationService';

export const DestinationDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDestination = async () => {
      if (!id) {
        navigate('/');
        return;
      }

      try {
        setLoading(true);
        const data = await getDestinationById(id, language);
        setDestination(data);
      } catch (error) {
        console.error('Error loading destination:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    loadDestination();
  }, [id, language, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-[#121811] dark:text-[#f9fbf9]">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (!destination) {
    return null;
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#121811] dark:text-[#f9fbf9] min-h-screen font-arabic antialiased overflow-x-hidden transition-colors duration-300">
      <Navigation />
      <main className="flex-grow pt-[72px]">
        <HeroSection destination={destination} />
        <IntroductionSection destination={destination} />
        <TimelineSection timeline={destination.timeline} />
        <NearbyPlacesSection places={destination.nearbyPlaces} />
        <PracticalInfoSection
          workingHours={destination.workingHours}
          mapImageUrl={destination.mapImageUrl}
          mapLocation={destination.mapLocation}
        />
      </main>
    </div>
  );
};
