AURELIA — Fine Jewelry Advertising Site
========================================

FA — راهنمای فارسی
-------------------
ساختار پروژه:
  index.html   → کل ساختار و متن سایت
  style.css    → تمام استایل‌ها (رنگ، فونت، چیدمان، انیمیشن)
  script.js    → منوی موبایل، انیمیشن‌های اسکرول، پنجره جزئیات محصول، گالری
  images/      → تصاویر Placeholder فعلی

نحوه اجرا روی گوشی اندروید:
  1) کل پوشه "aurelia-jewelry" را (همراه با style.css، script.js و پوشه images)
     روی گوشی منتقل کنید — مثلاً از طریق دانلود فایل زیپ و اکسترکت با یک
     برنامه فایل‌منیجر.
  2) داخل همان پوشه، روی "index.html" بزنید تا در Chrome باز شود.
  3) چون سایت کاملاً Front-end است، به اینترنت یا Backend نیازی ندارد —
     فقط فونت‌های Google Fonts (Cormorant Garamond و Jost) برای نمایش
     بهتر تایپوگرافی از اینترنت لود می‌شوند؛ در صورت نبود اینترنت هم
     سایت با فونت‌های جایگزین سیستم به‌درستی کار می‌کند.

جایگزینی تصاویر واقعی:
  فایل‌های SVG داخل پوشه images/ فقط Placeholder هستند. برای هرکدام،
  عکس واقعی خودتان را با همان نام فایل (یا نام دلخواه به همراه به‌روزرسانی
  مسیر در index.html) جایگزین کنید. نسبت ابعاد پیشنهادی هر تصویر:
    hero.svg                         → تصویر افقی بزرگ (پس‌زمینه Hero)
    collection-*.svg, product-*.svg  → عمودی، نسبت ۴:۵
    fullscreen-*.svg                 → عمودی، پوششی
    brand-story.svg                  → عمودی، نسبت ۴:۵
    gallery-*.svg                    → مربعی، نسبت ۱:۱

ویرایش‌های ساده:
  - متن‌ها، نام محصولات، قیمت‌های نمایشی: مستقیماً در index.html
  - آیدی‌های Instagram / Telegram / WhatsApp / Email: در بخش Contact
    داخل index.html (به‌صورت placeholder گذاشته شده‌اند)
  - رنگ‌ها و فونت‌ها: در ابتدای فایل style.css، بخش ":root"

نکته: طبق درخواست شما، فعلاً هیچ Backend، دیتابیس، سبد خرید یا درگاه
پرداختی اضافه نشده — سایت کاملاً تبلیغاتی و نمایشی است.


EN — Quick Guide
-----------------
Structure:
  index.html   → all markup and copy
  style.css    → design tokens, layout, animation
  script.js    → mobile nav, scroll reveal, product modal, gallery lightbox
  images/      → current placeholder artwork (SVG)

Running on an Android phone:
  1) Copy the whole "aurelia-jewelry" folder (style.css, script.js and the
     images/ folder must stay alongside index.html) onto the phone —
     e.g. download the zip and extract it with any file manager app.
  2) Open "index.html" from that folder in Chrome.
  3) The site needs no backend or internet connection to run. The only
     network request is for the Google Fonts (Cormorant Garamond, Jost);
     offline, the page still works correctly using system font fallbacks.

Swapping in real photography:
  Every file in images/ is a placeholder. Replace each with a real photo
  using the same filename (or a new one, updating the path in index.html).
  Suggested aspect ratio per file:
    hero.svg                         → large landscape (hero background)
    collection-*.svg, product-*.svg  → portrait, 4:5
    fullscreen-*.svg                 → tall, full-bleed
    brand-story.svg                  → portrait, 4:5
    gallery-*.svg                    → square, 1:1

Easy edits:
  - Copy, product names, display prices → directly in index.html
  - Instagram / Telegram / WhatsApp / Email → Contact section in index.html
    (currently placeholder handles)
  - Colors and fonts → the ":root" block at the top of style.css

Per your brief, no backend, database, cart, or payment gateway has been
added — this is a front-end advertising/showcase site only.
