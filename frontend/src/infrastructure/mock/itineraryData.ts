import { ItineraryStop } from '../../domain/entities/Itinerary';
import { Language } from '../../domain/entities/Language';

export const getItineraryStops = (language: Language): ItineraryStop[] => {
    if (language === Language.EN) {
        return [
            {
                id: 1,
                title: 'At-Turaif District',
                category: 'Historical',
                time: '08:00 AM',
                description: 'Start your journey in the cradle of the first Saudi state, where ancient history resides.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCICOhWIC0786i_5A43Ka5EguxQ-dWwQgH3m_7VZ8eOR5v6kzJ5NdMt3yxb3KbPnw2KVTDKmedk3ewBSRNDhJi0MsBJHxIKZp2QO8qlsLmSxdY-WNnPAD1qdKv3E8H2LQ3P-QcnPDWKRr9Igj6cZQHqeS_W-yF-jTN17u54XJNabNGb8gIDWacNmZeVWEch8YdUDGRp-e0eDSRWNFKXYvTVWHE5uUHmXYR1QzFy57cHpAzLNojCeVQcmEbKlpIAJJazH7_PMv_MBpy1',
                tipType: 'ai',
                tipTitle: 'Smart Tip',
                tipText: 'Best time to visit for photos is 4 PM for perfect shadows.',
                coordinates: { x: 600, y: 150 }
            },
            {
                id: 2,
                title: 'Heritage Cafe',
                category: 'Break',
                time: '10:30 AM',
                description: 'Enjoy authentic Saudi coffee and premium dates in a traditional atmosphere.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAupLFVCb2tCGC394tRskmttLQaCWPSMlMAw2jJwSi71f9oq9FVKCx8yr9W5Juiv4ZTQtxVSF9uc-lJNs85b19x_yXr7-jw6qEt27g2u9wdNDJ5HxL8QImmOLRIP0g9WmQT4fnFvm4wdqQMi09PxLKBlZBTZj8eNtMWheD04GUmQ8b4nEAE1M3AahYCrHaaX9x_19mG57fGBN-weH50opZspkhysFnabv6RoVdNadtpo7DHAv4ptuHDpodXS78JJkgnsRw35jftWbKJ',
                tipType: 'rest',
                tipTitle: 'Break Duration',
                tipText: 'We suggest spending 45 minutes here to recharge.',
                coordinates: { x: 400, y: 300 }
            },
            {
                id: 3,
                title: 'Saqr Al-Jazira Museum',
                category: 'Modern Culture',
                time: '12:00 PM',
                description: 'A journey through Saudi aviation history in one of the finest military museums.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1NjE5qi57Otk4NbM7dAz-GsLEPthcliElRvliHwxnPT7hQ-oePXzcIOIi23pTJHhgXWLjSumtqQsEsKyiTW26L_Pwa1zFhXpViBCgXzBZ-sad_mldxxIDiKMZGhpEAl4HcrjmdPvkpQU6dz4iP9krVdMBC282n6g597tFjQMS-YzLR0abRWdTPWNXIfuM0aFEqRLJ3ZP2iv3DaCA-xuC4ImaAWQTKyfqDZH014H-paBYqWaIBOTUjtt6cIeE0fShU4QOMI6qRnvpf',
                tipType: 'reminder',
                tipTitle: 'Ticket Reminder',
                tipText: 'Preferable to book tickets in advance via app to avoid waiting.',
                coordinates: { x: 250, y: 500 }
            }
        ];
    }

    // Default to Arabic
    return [
        {
            id: 1,
            title: 'حي الطريف',
            category: 'تاريخي',
            time: '08:00 صباحاً',
            description: 'ابدأ رحلتك في مهد الدولة السعودية الأولى، حيث التاريخ العريق.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCICOhWIC0786i_5A43Ka5EguxQ-dWwQgH3m_7VZ8eOR5v6kzJ5NdMt3yxb3KbPnw2KVTDKmedk3ewBSRNDhJi0MsBJHxIKZp2QO8qlsLmSxdY-WNnPAD1qdKv3E8H2LQ3P-QcnPDWKRr9Igj6cZQHqeS_W-yF-jTN17u54XJNabNGb8gIDWacNmZeVWEch8YdUDGRp-e0eDSRWNFKXYvTVWHE5uUHmXYR1QzFy57cHpAzLNojCeVQcmEbKlpIAJJazH7_PMv_MBpy1',
            tipType: 'ai',
            tipTitle: 'نصيحة ذكية',
            tipText: 'أفضل وقت للزيارة لالتقاط الصور هو الساعة 4 مساءً لظلال مثالية.',
            coordinates: { x: 600, y: 150 }
        },
        {
            id: 2,
            title: 'مقهى تراثي',
            category: 'استراحة',
            time: '10:30 صباحاً',
            description: 'استمتع بالقهوة السعودية الأصيلة والتمر الفاخر في أجواء شعبية.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAupLFVCb2tCGC394tRskmttLQaCWPSMlMAw2jJwSi71f9oq9FVKCx8yr9W5Juiv4ZTQtxVSF9uc-lJNs85b19x_yXr7-jw6qEt27g2u9wdNDJ5HxL8QImmOLRIP0g9WmQT4fnFvm4wdqQMi09PxLKBlZBTZj8eNtMWheD04GUmQ8b4nEAE1M3AahYCrHaaX9x_19mG57fGBN-weH50opZspkhysFnabv6RoVdNadtpo7DHAv4ptuHDpodXS78JJkgnsRw35jftWbKJ',
            tipType: 'rest',
            tipTitle: 'مدة الاستراحة',
            tipText: 'نقترح قضاء 45 دقيقة هنا لاستعادة النشاط.',
            coordinates: { x: 400, y: 300 }
        },
        {
            id: 3,
            title: 'متحف صقر الجزيرة',
            category: 'ثقافة حديثة',
            time: '12:00 مساءً',
            description: 'رحلة عبر تاريخ الطيران السعودي في واحد من أرقى المتاحف العسكرية.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1NjE5qi57Otk4NbM7dAz-GsLEPthcliElRvliHwxnPT7hQ-oePXzcIOIi23pTJHhgXWLjSumtqQsEsKyiTW26L_Pwa1zFhXpViBCgXzBZ-sad_mldxxIDiKMZGhpEAl4HcrjmdPvkpQU6dz4iP9krVdMBC282n6g597tFjQMS-YzLR0abRWdTPWNXIfuM0aFEqRLJ3ZP2iv3DaCA-xuC4ImaAWQTKyfqDZH014H-paBYqWaIBOTUjtt6cIeE0fShU4QOMI6qRnvpf',
            tipType: 'reminder',
            tipTitle: 'تذكير التذاكر',
            tipText: 'يفضل حجز التذاكر مسبقاً عبر التطبيق لتجنب الانتظار.',
            coordinates: { x: 250, y: 500 }
        }
    ];
};

// Kept for backward compatibility if needed, but components should update to use getItineraryStops
export const itineraryStops = getItineraryStops(Language.AR);
