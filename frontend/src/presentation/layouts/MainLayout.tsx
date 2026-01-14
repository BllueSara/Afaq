import { ReactNode } from 'react';
import { Navigation } from '../components/molecules/Navigation/Navigation';
import { useLanguage } from '../../application/hooks/useLanguage';

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    const { isRTL } = useLanguage();

    return (
        <div
            className={`bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-arabic ${!isRTL ? "font-['Plus_Jakarta_Sans']" : ""}`}
            dir={isRTL ? "rtl" : "ltr"}
        >
            {/* Navbar */}
            <Navigation />

            {/* Main Content */}
            <main className="flex-grow flex justify-center py-10 px-4 md:px-6">
                <div className="w-full max-w-[960px] flex flex-col gap-8">
                    {children}
                </div>
            </main>
        </div>
    );
};
