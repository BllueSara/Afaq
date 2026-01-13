# آفاق - منصة التراث السعودي

منصة React لتقديم التراث الثقافي السعودي باستخدام Clean Architecture.

## البنية المعمارية

المشروع يتبع Clean Architecture مع الفصل التالي:

- **Domain**: Entities و Interfaces (المنطق الأساسي)
- **Application**: Hooks, Store, Use Cases (منطق التطبيق)
- **Infrastructure**: API, Mappers (التكامل مع الخدمات الخارجية)
- **Presentation**: Components, Pages, Theme (واجهة المستخدم)

## المكونات

### Atoms
- Button
- Input
- Select
- Icon
- Logo

### Molecules
- SearchForm
- Navigation
- DestinationCard
- Footer

## التثبيت والتشغيل

```bash
# تثبيت التبعيات
npm install

# تشغيل المشروع في وضع التطوير
npm run dev

# بناء المشروع للإنتاج
npm run build

# معاينة البناء
npm run preview
```

## التقنيات المستخدمة

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Material Symbols Icons

