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
# الانتقال إلى مجلد frontend
cd frontend

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
5. **مهم جداً**: في إعدادات البناء (Build settings):
   - **Base directory**: `frontend`
   - **Build command**: `npm run build` (سيتم اكتشافه تلقائياً من `netlify.toml`)
   - **Publish directory**: `frontend/dist` (سيتم اكتشافه تلقائياً من `netlify.toml`)
6. اضغط "Deploy site"

### الطريقة الثالثة: السحب والإفلات
1. انتقل إلى مجلد `frontend`: `cd frontend`
2. قم ببناء المشروع: `npm run build`
3. اذهب إلى [Netlify](https://www.netlify.com)
4. اسحب مجلد `dist` إلى Netlify

### ملاحظات مهمة:
- إذا كان المشروع يحتوي على مجلدات `frontend` و `backend`، تأكد من تعيين **Base directory** كـ `frontend` في إعدادات Netlify
- ملف `netlify.toml` موجود في مجلد `frontend` وسيتم اكتشافه تلقائياً عند تعيين Base directory

## التقنيات المستخدمة

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Material Symbols Icons

