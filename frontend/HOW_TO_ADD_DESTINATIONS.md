# دليل إضافة وتعديل بيانات الأماكن

## كيف يعمل النظام؟

عندما تضغط على أي بطاقة وجهة، النظام:
1. يأخذ `id` من البطاقة
2. ينتقل إلى `/destination/{id}`
3. يجلب البيانات من `destinationService.ts` بناءً على الـ `id`
4. يعرض صفحة التفاصيل الكاملة

---

## الطريقة 1: إضافة مكان جديد

### الخطوة 1: أضف البيانات في `destinationService.ts`

افتح الملف: `frontend/src/infrastructure/services/destinationService.ts`

أضف مكان جديد في `destinationsData`:

```typescript
const destinationsData: Record<string, Destination> = {
  '1': {
    // بيانات حي الطريف (موجودة)
  },
  
  // أضف مكان جديد هنا 👇
  '2': {
    id: '2',
    title: 'مدائن صالح',
    region: Region.HEJAZ,
    location: 'العلا، منطقة المدينة المنورة',
    imageUrl: 'https://example.com/image.jpg',
    heroImageUrl: 'https://example.com/hero-image.jpg',
    heroSubtitle: 'وصف قصير للمكان',
    quote: 'اقتباس جميل عن المكان',
    description: 'وصف تفصيلي طويل عن المكان...',
    
    // الجدول الزمني
    timeline: [
      {
        year: '100 ق.م',
        title: 'التأسيس',
        description: 'وصف الحدث التاريخي',
        imageUrl: 'https://example.com/timeline1.jpg',
      },
      {
        year: '200 م',
        title: 'حدث آخر',
        description: 'وصف الحدث',
        imageUrl: 'https://example.com/timeline2.jpg',
      },
    ],
    
    // الأماكن القريبة
    nearbyPlaces: [
      {
        id: '1',
        name: 'اسم المطعم',
        type: 'restaurant', // أو 'museum', 'cafe', 'attraction'
        distance: '0.5 كم',
        description: 'وصف المكان',
        imageUrl: 'https://example.com/place.jpg',
        rating: 4.5,
        reviewCount: 150,
      },
    ],
    
    // ساعات العمل
    workingHours: [
      { day: 'الأحد - الخميس', hours: '9:00 صباحاً - 5:00 مساءً' },
      { day: 'الجمعة - السبت', hours: '10:00 صباحاً - 6:00 مساءً', isHighlighted: true },
    ],
    
    // التذاكر
    tickets: [
      {
        type: 'دخول عام',
        price: '75 ر.س',
        note: '*مجاناً للأطفال',
      },
    ],
    
    // الخريطة
    mapImageUrl: 'https://example.com/map.jpg',
    mapLocation: 'مدائن صالح، العلا',
  },
};
```

### الخطوة 2: أضف البطاقة في الصفحة الرئيسية

افتح: `frontend/src/presentation/pages/HomePage/HomePage.tsx`

أضف البطاقة في `baseDestinations`:

```typescript
const baseDestinations: Destination[] = [
  {
    id: '1',
    title: 'حي الطريف',
    region: Region.NAJD,
    location: 'الدرعية، الرياض',
    imageUrl: 'https://...',
  },
  // أضف البطاقة الجديدة هنا 👇
  {
    id: '2', // نفس الـ ID الذي استخدمته في destinationService
    title: 'مدائن صالح',
    region: Region.HEJAZ,
    location: 'العلا، منطقة المدينة المنورة',
    imageUrl: 'https://example.com/card-image.jpg',
  },
];
```

### الخطوة 3: أضف البطاقة في صفحة المناطق (اختياري)

افتح: `frontend/src/presentation/pages/RegionsPage/components/DestinationGrid.tsx`

أضف في `destinations`:

```typescript
const destinations = [
  {
    id: '1',
    title: 'مدائن صالح',
    // ... باقي البيانات
  },
  {
    id: '2', // نفس الـ ID
    title: 'مكان جديد',
    // ... باقي البيانات
  },
];
```

---

## الطريقة 2: تعديل بيانات مكان موجود

### مثال: تعديل بيانات حي الطريف

افتح `destinationService.ts` وابحث عن `'1'`:

```typescript
'1': {
  id: '1',
  title: 'حي الطريف', // غيّر العنوان
  // غيّر أي حقل تريده
  heroSubtitle: 'نص جديد...',
  quote: 'اقتباس جديد...',
  // إلخ...
}
```

---

## الطريقة 3: ربط البيانات بـ Backend API

إذا كان لديك Backend API، غيّر `getDestinationById`:

```typescript
export const getDestinationById = async (id: string, language: Language = Language.AR): Promise<Destination> => {
  try {
    const response = await fetch(`/api/destinations/${id}?lang=${language}`);
    
    if (!response.ok) {
      throw new Error(`Destination with id ${id} not found`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching destination:', error);
    throw error;
  }
};
```

---

## مثال كامل: إضافة "قرية رجال ألمع"

### 1. في `destinationService.ts`:

```typescript
const destinationsData: Record<string, Destination> = {
  // ... الأماكن الموجودة
  
  '3': {
    id: '3',
    title: 'قرية رجال ألمع',
    region: Region.ASIR,
    location: 'عسير، المنطقة الجنوبية',
    imageUrl: 'https://example.com/rijal-almah-card.jpg',
    heroImageUrl: 'https://example.com/rijal-almah-hero.jpg',
    heroSubtitle: 'أيقونة معمارية في عسير، تتميز بقلاعها الملونة وتاريخ حافل بالكرم والشجاعة.',
    quote: 'حيث تلتقي الجبال بالتاريخ، وتزهر الثقافة في كل زاوية.',
    description: 'قرية رجال ألمع هي لوحة فنية معمارية حية، تجسد تراث عسير العريق...',
    
    timeline: [
      {
        year: '1800',
        title: 'التأسيس',
        description: 'تأسست القرية كمركز تجاري وثقافي مهم في المنطقة.',
        imageUrl: 'https://example.com/timeline1.jpg',
      },
      {
        year: '2015',
        title: 'ترميم شامل',
        description: 'تم ترميم القرية بالكامل للحفاظ على تراثها المعماري الفريد.',
        imageUrl: 'https://example.com/timeline2.jpg',
      },
    ],
    
    nearbyPlaces: [
      {
        id: '1',
        name: 'مطعم القلعة',
        type: 'restaurant',
        distance: '0.3 كم',
        description: 'مأكولات عسيرية أصيلة.',
        imageUrl: 'https://example.com/restaurant.jpg',
        rating: 4.8,
        reviewCount: 320,
      },
      {
        id: '2',
        name: 'متحف رجال ألمع',
        type: 'museum',
        distance: '0.1 كم',
        description: 'معرض للتراث المحلي.',
        imageUrl: 'https://example.com/museum.jpg',
        rating: 4.6,
        reviewCount: 180,
      },
    ],
    
    workingHours: [
      { day: 'الأحد - الخميس', hours: '8:00 صباحاً - 6:00 مساءً' },
      { day: 'الجمعة - السبت', hours: '9:00 صباحاً - 7:00 مساءً', isHighlighted: true },
    ],
    
    tickets: [
      {
        type: 'دخول عام',
        price: '30 ر.س',
        note: '*مجاناً للأطفال دون 10 أعوام',
      },
    ],
    
    mapImageUrl: 'https://example.com/map-rijal.jpg',
    mapLocation: 'قرية رجال ألمع، عسير',
  },
};
```

### 2. في `HomePage.tsx`:

```typescript
const baseDestinations: Destination[] = [
  // ... البطاقات الموجودة
  {
    id: '3',
    title: 'قرية رجال ألمع',
    region: Region.ASIR,
    location: 'عسير، المنطقة الجنوبية',
    imageUrl: 'https://example.com/rijal-card.jpg',
  },
];
```

---

## نصائح مهمة

✅ **استخدم نفس الـ ID** في:
- `destinationService.ts` (المفتاح في `destinationsData`)
- `HomePage.tsx` (في `baseDestinations`)
- `DestinationGrid.tsx` (في `destinations`)

✅ **الصور**: استخدم روابط صور صالحة (URLs)

✅ **المناطق**: استخدم `Region.NAJD`, `Region.HEJAZ`, `Region.ASIR`, إلخ

✅ **التقييمات**: من 0 إلى 5 (يمكن استخدام 4.5، 4.7، إلخ)

---

## التحقق من النتيجة

1. شغّل المشروع: `npm run dev`
2. افتح الصفحة الرئيسية
3. اضغط على البطاقة الجديدة
4. يجب أن تظهر صفحة التفاصيل بالبيانات الجديدة

---

## استكشاف الأخطاء

❌ **الصفحة لا تظهر**: تأكد من أن الـ ID متطابق في جميع الأماكن

❌ **خطأ 404**: تأكد من إضافة البيانات في `destinationService.ts`

❌ **الصور لا تظهر**: تحقق من صحة روابط الصور
