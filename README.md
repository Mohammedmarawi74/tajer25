<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# رادار المستثمر - مصمم الكاروسيل

مشروع تفاعلي لتصميم شرائح كاروسيل احترافية للمستثمرين باستخدام React و Vite.

---

## 🚀 النشر على Vercel

### الطريقة 1: الربط المباشر مع GitHub (موصى به)

1. ارفع المشروع على مستودع GitHub
2. اذهب إلى [vercel.com](https://vercel.com)
3. سجل الدخول بحسابك
4. انقر على **"Add New Project"**
5. اختر المستودع من GitHub
6. انقر على **"Deploy"**

### الطريقة 2: رفع باستخدام Vercel CLI

```bash
# تثبيت Vercel CLI عالمياً
npm install -g vercel

# الانتقال إلى مجلد المشروع
cd c:\Users\ASUS\Desktop\ssoo\51

# تسجيل الدخول إلى Vercel
vercel login

# رفع المشروع
vercel
```

### الطريقة 3: رفع من خلال واجهة Vercel

1. اذهب إلى [vercel.com/new](https://vercel.com/new)
2. اسحب وأفلت مجلد المشروع أو ارفعه من GitHub
3. اتبع التعليمات لإكمال النشر

---

## 📝 إعدادات Vercel التلقائية

الملف `vercel.json` يحتوي على الإعدادات التالية:
- **أمر البناء**: `npm run build`
- **مجلد الإخراج**: `dist`
- **إطار العمل**: Vite
- **إعادة التوجيه**: تمكين SPA routing

---

## 🛠️ التطوير المحلي

```bash
# تثبيت التبعيات
npm install

# تشغيل خادم التطوير
npm run dev

# بناء المشروع للإنتاج
npm run build

# معاينة البناء الإنتاجي
npm run preview
```

---

## 📁 هيكل المشروع

```
├── App.tsx              # المكون الرئيسي
├── components/
│   └── PreviewCanvas.tsx # مكون معاينة الشريحة
├── styles.css           # ملف التنسيقات المنفصل
├── index.html           # نقطة الدخول
├── index.tsx            # ملف الدخول الرئيسي
├── vercel.json          # إعدادات Vercel
└── vite.config.ts       # إعدادات Vite
```

---

## 🎨 الميزات

- تصميم شرائح كاروسيل احترافية
- دعم الثيمات المخصصة
- محرر CSS مخصص
- تصدير الشرائح كصور PNG
- واجهة عربية بالكامل

---

## 📄 الترخيص

مشروع خاص
