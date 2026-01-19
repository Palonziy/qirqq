# 40 KUNLIK POKLANISH - Premium Website

Ruhiy yangilanish va ichki tinchlik dasturi uchun zamonaviy, interaktiv, yuqori samarali veb-sayt.

## 📋 Tarkibi

- **index.html** - Asosiy HTML fayli (barcha bo'limlar)
- **style.css** - CSS stillar (animatsiyalar bilan)
- **script.js** - Vanilla JavaScript (interaktivlik)
- **README.md** - Bu fayl

## 🚀 Tezkor Boshlash

### 1. Fayllarni Ochish

1. ZIP faylni kompyuteringizga yuklab oling
2. ZIP faylni o'ng tugma → "Extract All" (Windows) yoki "Open" (Mac) orqali ochib qo'ying
3. Ochilgan papkada `index.html` faylini topib, uni brauzer bilan oching

### 2. Brauzer bilan Ochish

#### Windows:
- `index.html` fayliga o'ng tugma bosing
- "Open with" → "Chrome" (yoki boshqa brauzer)

#### Mac:
- `index.html` faylga double-click qiling
- Avtomatik ravishda brauzer ochiladi

#### Linux:
```bash
# Faylni brauzer bilan oching
firefox index.html
# yoki
google-chrome index.html
```

### 3. Oflayn Ishlash

Sayt to'liq oflayn rejimda ishlaydi. Internet ulanmasdan ham foydalanish mumkin:

1. Papkani kompyuteringizda saqlang
2. `index.html` faylini brauzer bilan oching
3. Barcha bo'limlar va animatsiyalar ishlaydi

## 🎨 Dizayn Xususiyatlari

### Ranglar
```css
- Fon: Yumshoq krem (#F9F7F4)
- Asosiy: Chuqur teal (#2C5F5F)
- Aksent: Iliq oltin (#D4A574)
- Ikkinchi: Yumshoq gulab (#E8D4D0)
- Matn: Qora shifer (#2B2B2B)
```

### Shriftlar
- **Sarlavhalar**: Playfair Display (elegantlik)
- **Asosiy matn**: Lora (o'qish qulayligi)
- **UI elementlar**: Inter (toza, zamonaviy)

### Animatsiyalar
- **Scroll Reveal**: AOS kutubxonasi (yumshoq ko'rinish)
- **Hover Effects**: CSS transitions (GPU-tezlashtirilgan)
- **Expand/Collapse**: Yumshoq balandlik o'zgarishi
- **Performance**: 200-800ms davomiyligi

## ⚙️ Sozlash va Tahrir

### 1. Matnni O'zgartirish

`index.html` faylini tekst muharriri bilan oching (Notepad, VS Code, va h.k.):

```html
<!-- HERO SECTION - Sarlavha -->
<h1 class="hero-title">
    40 KUNLIK<br><span class="highlight">POKLANISH</span>
</h1>

<!-- HERO SECTION - Kichik sarlavha -->
<p class="hero-subtitle">
    Ruhiy yangilanish, ichki tinchlik va haqiqiy ozodlik yo'lida
</p>
```

### 2. Ranglarni O'zgartirish

`style.css` faylini tekst muharriri bilan oching va quyidagi bo'limni toping:

```css
/* ASOSIY RANGLAR */
--primary-color: #2C5F5F;      /* Asosiy rang */
--accent-color: #D4A574;       /* Aksent rang */
--secondary-color: #E8D4D0;    /* Ikkinchi rang */
--background-color: #F9F7F4;   /* Fon rangi */
--text-color: #2B2B2B;         /* Matn rangi */
```

**Misol**: Aksent rangini o'zgartirishni xohlaysiz:
```css
/* Eski */
--accent-color: #D4A574;

/* Yangi - masalan, ko'k */
--accent-color: #4A90E2;
```

### 3. CTA Tugmasining Telegram Linkini O'zgartirish

`index.html` faylida quyidagini toping:

```html
<a href="https://t.me/T_M_Manager" target="_blank" rel="noopener noreferrer" class="cta-button primary">
    Telegram orqali Ro'yxatdan O'tish
</a>
```

`https://t.me/T_M_Manager` o'rniga o'zingizning Telegram username'ini qo'ying:

```html
<a href="https://t.me/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" class="cta-button primary">
    Telegram orqali Ro'yxatdan O'tish
</a>
```

### 4. Bo'lim Sarlavhalarini O'zgartirish

Har bir bo'lim sarlavhasini `index.html` faylida topib o'zgartirishingiz mumkin:

```html
<!-- Problem Section -->
<h2>Siz nima bilan kurashmoqdasiz?</h2>

<!-- Journey Section -->
<h2 class="section-title">Uch Bosqichli Transformatsiya</h2>

<!-- Benefits Section -->
<h2 class="section-title">Transformatsiyaning Natijalari</h2>
```

### 5. Rasm Qo'shish

Rasm qo'shish uchun `index.html` faylida `<img>` tegi ishlatiladi:

```html
<!-- Mentor seksiyasida rasm qo'shish -->
<div class="mentor-avatar">
    <!-- Rasm qo'shish uchun -->
    <img src="mentor.jpg" alt="Mentor" style="width: 100%; border-radius: 20px;">
</div>
```

## 🔧 Texnik Xususiyatlar

### Samaradorlik
- **Fayl hajmi**: ~50KB (CSS + JS)
- **Yuklanish vaqti**: <1 sekund (tez internet)
- **Animatsiyalar**: GPU-tezlashtirilgan (transform + opacity)
- **Brauzer qo'llab-quvvatlash**: Barcha zamonaviy brauzerlar

### Responsive Design
- **Desktop**: 1200px+ (to'liq grid layout)
- **Planshet**: 768px-1199px (2-ustun layout)
- **Mobil**: <768px (1-ustun layout)

### Accessibility
- **Keyboard Navigation**: Tab va Enter tugmalari
- **Screen Readers**: ARIA labellar
- **Motion Preferences**: `prefers-reduced-motion` qo'llab-quvvatlash

## 📱 Turli Cihozlarda Tekshirish

### Windows:
1. `index.html` faylini brauzer bilan oching
2. F12 tugmasini bosing (Developer Tools)
3. Ctrl+Shift+M (Device Emulation)
4. Turli cihozlarni tanlang

### Mac:
1. `index.html` faylini brauzer bilan oching
2. Cmd+Option+I (Developer Tools)
3. Cmd+Shift+M (Device Emulation)

### Linux:
1. `index.html` faylini brauzer bilan oching
2. F12 tugmasini bosing
3. Ctrl+Shift+M (Device Emulation)

## 🎯 Bo'limlar Tafsiloti

### 1. Hero Section (Bosh Bo'lim)
- Animatsion sarlavha (fade + slide)
- Kichik sarlavha va tavsif
- CTA tugmasi (Telegram ro'yxatdan o'tish)
- Dekorativ shakl (float animatsiyasi)

### 2. Problem Section (Muammolar)
- Uchta asosiy muammoni ko'rsatadi
- Hover effektli kartalar
- Emoji ikonkalar

### 3. Journey Section (Yo'l)
- Uchta bosqich: Poklanish, Tiklanish, Yuksalish
- Har bir bosqichda 40 kun
- Expand/Collapse tugmalari
- Yumshoq animatsiyalar

### 4. Benefits Section (Foydalari)
- Oltita asosiy foyda
- Emoji ikonkalar
- Hover effektli kartalar

### 5. Bonuses Section (Bonuslar)
- Ramazon Tuhfasi
- Sevgida Yashash
- Premium stil

### 6. Mentor Section (Rahbar)
- Muallif ma'lumoti
- Uchta kredensial (tajriba, foydalanuvchilar, muvaffaqiyat)
- Avatar bo'limi

### 7. FAQ Section (Ko'p Beriladigan Savollar)
- 5 ta asosiy savol
- Accordion-style expand/collapse
- Yumshoq animatsiyalar

### 8. Final CTA Section (Yakuniy Chaqiruv)
- Kuchli chaqiruv
- Foydalari ro'yxati
- Telegram ro'yxatdan o'tish tugmasi

### 9. Footer (Pastki Bo'lim)
- Bog'lanish ma'lumoti
- Havolalar
- Mualliflik huquqi

## 🛠️ Muammolarni Hal Qilish

### Sayt brauzerda ko'rinmaydi
1. `index.html` faylining to'g'ri yo'lda ekanligini tekshiring
2. Brauzerni yangilang (F5 yoki Ctrl+R)
3. Brauzer cache'ni tozalang (Ctrl+Shift+Delete)

### Animatsiyalar ishlama
1. `style.css` faylini tekshiring
2. JavaScript faylining yuklanganligini tekshiring (F12 → Console)
3. AOS kutubxonasining yuklanganligini tekshiring

### Tugmalar ishlama
1. `script.js` faylini tekshiring
2. Brauzer konsolida xatolarni tekshiring (F12 → Console)
3. JavaScript fayli `index.html` faylida to'g'ri ulanganligini tekshiring

### Responsive design ishlama
1. Brauzer o'lchamini o'zgartirib ko'ring
2. F12 → Device Emulation
3. CSS media queries'ni tekshiring

## 📧 Qo'shimcha Yordam

Sayt haqida savol yoki muammolar bo'lsa:
- Telegram: @T_M_Manager

## 📄 Litsenziya

© 2026 Palonziy
