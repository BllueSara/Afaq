import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/presentation/pages/HomePage';
import { StoryPage } from '@/presentation/pages/StoryPage';
import { RegionsPage } from '@/presentation/pages/RegionsPage';
import { LanguageProvider } from '@/application/store/LanguageContext';
import '@/presentation/theme/index.css';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/regions" element={<RegionsPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

