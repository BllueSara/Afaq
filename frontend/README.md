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

## النشر على Netlify

تم إعداد المشروع للنشر على Netlify. يمكنك النشر بعدة طرق:

### الطريقة الأولى: عبر Netlify CLI
```bash
# تثبيت Netlify CLI
npm install -g netlify-cli

# تسجيل الدخول
netlify login

# النشر
netlify deploy --prod
```

### الطريقة الثانية: عبر GitHub
1. ارفع المشروع على GitHub
2. اذهب إلى [Netlify](https://www.netlify.com)
3. اضغط على "Add new site" > "Import an existing project"
4. اختر GitHub واختر المستودع
5. Netlify سيكتشف الإعدادات تلقائياً من ملف `netlify.toml`

### الطريقة الثالثة: السحب والإفلات
1. قم ببناء المشروع: `npm run build`
2. اذهب إلى [Netlify](https://www.netlify.com)
3. اسحب مجلد `dist` إلى Netlify

## التقنيات المستخدمة

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Material Symbols Icons

