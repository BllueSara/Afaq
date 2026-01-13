import { Navigation } from '@/presentation/components/molecules/Navigation';
import { StoryHero } from './components/StoryHeader';
import { StoryArticle } from './components/StoryArticle';
import { StorySidebar } from './components/StorySidebar';

export const StoryPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#121811] dark:text-[#f9fbf9] min-h-screen font-arabic">
      <Navigation />
      <main className="w-full flex flex-col min-h-screen pt-20">
        <StoryHero />
        <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
            <StoryArticle />
            <StorySidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

