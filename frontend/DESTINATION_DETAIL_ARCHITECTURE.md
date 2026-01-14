# بنية صفحة تفاصيل الوجهة (Destination Detail Page)

## نظرة عامة

تم إنشاء صفحة تفاصيل ديناميكية تعرض معلومات شاملة عن أي مكان تراثي في المملكة. الصفحة قابلة لإعادة الاستخدام وتعمل مع أي مكان يتم اختياره من الصفحة الرئيسية أو صفحة المناطق.

## البنية المعمارية

### 1. Domain Layer (الطبقة الأساسية)

#### `Destination.ts`
تم توسيع كيان `Destination` ليشمل:
- **TimelineEvent**: أحداث تاريخية مع السنة، العنوان، الوصف، والصورة
- **NearbyPlace**: الأماكن القريبة مع التقييمات والمسافات
- **WorkingHours**: ساعات العمل
- **TicketInfo**: معلومات التذاكر والأسعار
- حقول إضافية: `heroImageUrl`, `heroSubtitle`, `quote`, `description`, `mapImageUrl`, `mapLocation`

### 2. Infrastructure Layer (طبقة البنية التحتية)

#### `destinationService.ts`
خدمة لجلب بيانات الأماكن:
- `getDestinationById(id, language)`: جلب مكان محدد
- `getAllDestinations(language)`: جلب جميع الأماكن
- حالياً تستخدم بيانات وهمية (Mock Data) يمكن استبدالها بـ API calls

### 3. Presentation Layer (طبقة العرض)

#### الصفحة الرئيسية: `DestinationDetailPage.tsx`
- تحميل البيانات بناءً على `id` من URL
- إدارة حالة التحميل والأخطاء
- تجميع جميع المكونات الفرعية

#### المكونات الفرعية:

1. **HeroSection**: قسم البطل مع صورة خلفية، العنوان، والموقع
2. **IntroductionSection**: قسم التعريف مع الاقتباس والوصف
3. **TimelineSection**: الجدول الزمني التفاعلي مع الأحداث التاريخية
4. **NearbyPlacesSection**: الأماكن القريبة مع التمرير الأفقي
5. **PracticalInfoSection**: المعلومات العملية (ساعات العمل، التذاكر، الخريطة)
6. **ChatWidget**: ويدجت الدردشة الذكية

## التوجيه (Routing)

تم إضافة مسار جديد في `App.tsx`:
```tsx
<Route path="/destination/:id" element={<DestinationDetailPage />} />
```

## الربط مع المكونات الأخرى

### DestinationCard
تم تحديث `DestinationCard` للانتقال تلقائياً إلى صفحة التفاصيل عند النقر:
```tsx
navigate(`/destination/${destination.id}`);
```

## الاستخدام

### من الصفحة الرئيسية:
1. المستخدم ينقر على أي بطاقة وجهة
2. يتم التوجيه إلى `/destination/{id}`
3. يتم تحميل البيانات وعرض صفحة التفاصيل

### من صفحة المناطق:
يمكن تحديث `DestinationGrid` في `RegionsPage` لاستخدام نفس الآلية.

## إضافة أماكن جديدة

لإضافة مكان جديد:

1. أضف البيانات في `destinationService.ts`:
```typescript
const destinationsData: Record<string, Destination> = {
  'new-id': {
    id: 'new-id',
    title: 'اسم المكان',
    // ... باقي البيانات
  }
};
```

2. أو قم بتوصيل الخدمة بـ API حقيقي:
```typescript
export const getDestinationById = async (id: string, language: Language): Promise<Destination> => {
  const response = await fetch(`/api/destinations/${id}?lang=${language}`);
  return response.json();
};
```

## الميزات

✅ بنية نظيفة وقابلة للصيانة  
✅ مكونات قابلة لإعادة الاستخدام  
✅ دعم RTL/LTR  
✅ دعم الوضع الداكن  
✅ تصميم متجاوب (Responsive)  
✅ تحميل ديناميكي للبيانات  
✅ معالجة الأخطاء وحالة التحميل  

## الخطوات التالية

1. ربط الخدمة بـ Backend API
2. إضافة ترجمة ديناميكية للمحتوى
3. تحسين أداء تحميل الصور (Lazy Loading)
4. إضافة اختبارات (Unit Tests)
5. إضافة تحليلات (Analytics)
