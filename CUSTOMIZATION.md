# 40 KUNLIK POKLANISH - Sozlash va Tahrir Qo'llanmasi

Ushbu qo'llanma saytning turli qismlarini qanday sozlash va tahrir qilishni ko'rsatadi.

## 📝 Matnni O'zgartirish

### Hero Section Sarlavhasini O'zgartirish

`index.html` faylini oching va quyidagini toping (taxminan 42-chi qator):

```html
<h1 class="hero-title" data-aos="fade-up" data-aos-duration="800">
    40 KUNLIK<br><span class="highlight">POKLANISH</span>
</h1>
```

**O'zgartirish misoli**:
```html
<h1 class="hero-title" data-aos="fade-up" data-aos-duration="800">
    YANGI HAYOT<br><span class="highlight">BOSHLANG</span>
</h1>
```

### Hero Section Tavsifini O'zgartirish

Quyidagini toping (taxminan 50-chi qator):

```html
<p class="hero-description" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
    Kechiktirilgan xatolardan xalos bo'ling. Ruhingizni tozalang. Hayotingizni qayta dasturlang.
</p>
```

**O'zgartirish misoli**:
```html
<p class="hero-description" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
    Yangi imkoniyatlarni kashf eting. Ruhiy tinchlikni topingiz. Baxtli hayot yarating.
</p>
```

### Problem Section Kartalarini O'zgartirish

Quyidagini toping (taxminan 80-90-chi qatorlar):

```html
<div class="problem-card" data-aos="fade-up" data-aos-duration="800">
    <div class="problem-icon">💔</div>
    <h3>Kechiktirilgan Xatolar</h3>
    <p>O'tmishdagi xatolarning og'irligi sizni bosib turadi</p>
</div>
```

**O'zgartirish misoli**:
```html
<div class="problem-card" data-aos="fade-up" data-aos-duration="800">
    <div class="problem-icon">😔</div>
    <h3>Ruhiy Og'irlik</h3>
    <p>Hayotning bosib turgan og'irligi va qahri</p>
</div>
```

### Journey Cards Sarlavhalarini O'zgartirish

Quyidagini toping (taxminan 130-150-chi qatorlar):

```html
<!-- POKLANISH (40 kun) -->
<div class="journey-card" data-aos="fade-up" data-aos-duration="800">
    <div class="journey-header">
        <div class="journey-number">1</div>
        <h3>POKLANISH</h3>
        <p class="journey-duration">40 kun</p>
    </div>
    <div class="journey-content">
        <p class="journey-intro">O'tmishdagi xatolarni kechiring</p>
        <div class="journey-details">
            <ul>
                <li>✓ O'zingizni kechirish</li>
                <li>✓ Boshqalarni kechirish</li>
                <!-- ... boshqa elementlar ... -->
            </ul>
        </div>
    </div>
</div>
```

## 🎨 Ranglarni O'zgartirish

`style.css` faylini oching va quyidagini toping (taxminan 8-16-chi qatorlar):

```css
/* COLOR PALETTE:
   - Background: Soft cream/beige (#F9F7F4)
   - Accent: Warm gold (#D4A574)
   - Primary: Deep teal (#2C5F5F)
   - Secondary: Soft rose (#E8D4D0)
   - Text: Dark slate (#2B2B2B)
*/
```

### Aksent Rangini O'zgartirish (Oltin → Boshqa Rang)

Quyidagini toping va o'zgartiring:

```css
/* ESKI */
color: #D4A574;
background-color: #D4A574;
border-color: #D4A574;

/* YANGI - Masalan, ko'k */
color: #4A90E2;
background-color: #4A90E2;
border-color: #4A90E2;
```

### Asosiy Rangini O'zgartirish (Teal → Boshqa Rang)

```css
/* ESKI */
color: #2C5F5F;
background-color: #2C5F5F;

/* YANGI - Masalan, qora */
color: #1a1a1a;
background-color: #1a1a1a;
```

### Fon Rangini O'zgartirish

```css
/* ESKI */
background-color: #F9F7F4;

/* YANGI - Masalan, oq */
background-color: #FFFFFF;
```

### Gradient Fon O'zgartirish

Hero section gradientini o'zgartirish (taxminan 130-chi qator):

```css
/* ESKI */
background: linear-gradient(135deg, #F9F7F4 0%, #F5F0EA 100%);

/* YANGI - Masalan, ko'k gradient */
background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
```

## 🔗 Telegram Linkini O'zgartirish

`index.html` faylida quyidagini toping (taxminan 50-chi qator):

```html
<a href="https://t.me/T_M_Manager" target="_blank" rel="noopener noreferrer" class="cta-button hero-cta">
    Boshlash
</a>
```

**O'zgartirish**:
```html
<a href="https://t.me/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" class="cta-button hero-cta">
    Boshlash
</a>
```

`YOUR_USERNAME` o'rniga o'zingizning Telegram username'ini qo'ying (masalan, `@mymanager`).

### Barcha CTA Tugmalarini O'zgartirish

`index.html` faylida quyidagini toping va o'zgartiring:

```html
<!-- Final CTA Section -->
<a href="https://t.me/T_M_Manager" target="_blank" rel="noopener noreferrer" class="cta-button primary">
    Telegram orqali Ro'yxatdan O'tish
</a>
```

## 🖼️ Rasm Qo'shish

### Mentor Section'da Rasm Qo'shish

`index.html` faylida quyidagini toping (taxminan 280-chi qator):

```html
<div class="mentor-visual" data-aos="fade-left" data-aos-duration="800">
    <div class="mentor-avatar"></div>
</div>
```

**Rasm qo'shish uchun**:
```html
<div class="mentor-visual" data-aos="fade-left" data-aos-duration="800">
    <div class="mentor-avatar">
        <img src="mentor.jpg" alt="Mentor" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
    </div>
</div>
```

### Hero Section'da Rasm Qo'shish

`index.html` faylida quyidagini toping (taxminan 60-chi qator):

```html
<div class="hero-visual">
    <div class="hero-shape" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300"></div>
</div>
```

**Rasm qo'shish uchun**:
```html
<div class="hero-visual">
    <img src="hero-image.jpg" alt="Hero" style="width: 100%; max-width: 500px; border-radius: 20px; box-shadow: 0 20px 60px rgba(212, 165, 116, 0.1);">
</div>
```

## 🎬 Animatsiya Tezligini O'zgartirish

### Scroll Reveal Animatsiyasi

`script.js` faylida quyidagini toping (taxminan 20-chi qator):

```javascript
AOS.init({
    duration: 800,        // Animatsiya davomiyligi (ms)
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    disable: 'mobile'
});
```

**O'zgartirish misoli** (tezroq animatsiya):
```javascript
AOS.init({
    duration: 400,        // 400ms (tezroq)
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    disable: 'mobile'
});
```

### Hover Effektlarini O'zgartirish

`style.css` faylida quyidagini toping (taxminan 200-chi qator):

```css
.cta-button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**O'zgartirish misoli** (sekinroq):
```css
.cta-button {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 📐 Shriftlarni O'zgartirish

`index.html` faylida quyidagini toping (taxminan 10-chi qator):

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Lora:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

**Boshqa shriftlarni qo'shish misoli**:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Lora:wght@400;500;600&family=Inter:wght@300;400;500;600&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
```

Keyin `style.css` faylida shriftni o'zgartiring:
```css
.hero-title {
    font-family: 'Merriweather', serif;  /* Yangi shrift */
}
```

## 🎯 Bo'lim Sarlavhalarini O'zgartirish

### Problem Section Sarlavhasi

`index.html` faylida quyidagini toping (taxminan 80-chi qator):

```html
<h2 data-aos="fade-up" data-aos-duration="800">Siz nima bilan kurashmoqdasiz?</h2>
```

**O'zgartirish**:
```html
<h2 data-aos="fade-up" data-aos-duration="800">Asosiy Muammolar</h2>
```

### Journey Section Sarlavhasi

`index.html` faylida quyidagini toping (taxminan 120-chi qator):

```html
<h2 class="section-title" data-aos="fade-up" data-aos-duration="800">Uch Bosqichli Transformatsiya</h2>
```

**O'zgartirish**:
```html
<h2 class="section-title" data-aos="fade-up" data-aos-duration="800">120 Kunlik Yo'l</h2>
```

## 🔄 Kartalarning Kengayish Effektini O'zgartirish

`style.css` faylida quyidagini toping (taxminan 450-chi qator):

```css
.journey-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.journey-card.expanded .journey-content {
    max-height: 500px;
}
```

**O'zgartirish misoli** (katta matn uchun):
```css
.journey-card.expanded .journey-content {
    max-height: 800px;  /* Yangi maksimal balandlik */
}
```

## 📱 Responsive Breakpoints O'zgartirish

`style.css` faylida quyidagini toping (taxminan 650-chi qator):

```css
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }
}
```

**O'zgartirish misoli** (planshet uchun):
```css
@media (max-width: 1024px) {
    .hero-title {
        font-size: 3rem;
    }
}
```

## 🎨 Rang Sxemasi Misollari

### Qora va Oq Sxemasi
```css
--primary-color: #000000;      /* Qora */
--accent-color: #FFFFFF;       /* Oq */
--background-color: #F5F5F5;   /* Och kul */
--text-color: #333333;         /* Qora matn */
```

### Ko'k va Oq Sxemasi
```css
--primary-color: #1E3A8A;      /* Chuqur ko'k */
--accent-color: #3B82F6;       /* Ko'k */
--background-color: #F0F9FF;   /* Och ko'k */
--text-color: #1F2937;         /* Qora matn */
```

### Yashil va Oq Sxemasi
```css
--primary-color: #065F46;      /* Chuqur yashil */
--accent-color: #10B981;       /* Yashil */
--background-color: #F0FDF4;   /* Och yashil */
--text-color: #1F2937;         /* Qora matn */
```

### Qizil va Oq Sxemasi
```css
--primary-color: #7F1D1D;      /* Chuqur qizil */
--accent-color: #EF4444;       /* Qizil */
--background-color: #FEF2F2;   /* Och qizil */
--text-color: #1F2937;         /* Qora matn */
```

## 💡 Maslahatlar

1. **Barcha o'zgarishlardan oldin backup oling**: Asl fayllarni saqlang
2. **Bir vaqtda bir narsani o'zgartiring**: Qaysi o'zgarish muammoga sabab bo'lganini bilish uchun
3. **Brauzer cache'ni tozalang**: Ctrl+Shift+Delete (o'zgarishlarni ko'rish uchun)
4. **Turli cihozlarda tekshiring**: Desktop, planshet, mobil
5. **Rang kontrasti tekshiring**: Matn va fon o'rtasida yetarli farq bo'lsin

## 🆘 Muammolarni Hal Qilish

### O'zgarishlar ko'rinmaydi
1. Faylni saqlang (Ctrl+S)
2. Brauzer cache'ni tozalang (Ctrl+Shift+Delete)
3. Brauzerni yangilang (F5)

### Sayt buzulgan ko'rinadi
1. HTML sintaksisni tekshiring (barcha taglar yopilgan bo'lsin)
2. CSS sintaksini tekshiring (barcha qavslar to'g'ri bo'lsin)
3. Brauzer konsolida xatolarni tekshiring (F12 → Console)

### Animatsiyalar ishlama
1. `script.js` faylini tekshiring
2. AOS kutubxonasini tekshiring
3. CSS transitions'ni tekshiring

---

**Eslatma**: Ushbu qo'llanmadagi barcha qator raqamlari taxminiy. Faylning tuzilishiga qarab o'zgarishi mumkin.
