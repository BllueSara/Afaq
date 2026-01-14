import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/presentation/pages/HomePage';
import { StoryPage } from '@/presentation/pages/StoryPage';
import { RegionsPage } from '@/presentation/pages/RegionsPage';
import { DestinationDetailPage } from '@/presentation/pages/DestinationDetailPage';
import { PlannerPage } from '@/presentation/pages/PlannerPage';
import { ItineraryPage } from '@/presentation/pages/ItineraryPage';
import { LanguageProvider } from '@/application/store/LanguageContext';
import { ToastProvider } from '@/application/store/ToastContext';
import '@/presentation/theme/index.css';

function App() {
  return (
    <LanguageProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/regions" element={<RegionsPage />} />
            <Route path="/destination/:id" element={<DestinationDetailPage />} />
            <Route path="/planner" element={<PlannerPage />} />
            <Route path="/itinerary" element={<ItineraryPage />} />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </LanguageProvider>
  );
}

export default App;

