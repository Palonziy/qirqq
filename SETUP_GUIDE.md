# 40 KUNLIK POKLANISH - Saytni O'rnatish va Ishga Tushirish Qo'llanmasi

## 📦 Paketni Ochish

### Windows 10/11:

1. **ZIP faylni yuklab oling**
   - `poklanish_web.zip` faylini kompyuteringizga yuklab oling
   - Fayl Downloads papkasida bo'ladi

2. **ZIP faylni ochib qo'ying**
   - `poklanish_web.zip` fayliga o'ng tugma bosing
   - "Extract All" ni tanlang
   - Yangi papka yaratiladi: `poklanish_standalone`

3. **Fayllarni tekshiring**
   - Ochilgan papkada quyidagi fayllar bo'lishi kerak:
     - `index.html` (asosiy fayl)
     - `style.css` (stillar)
     - `script.js` (interaktivlik)
     - `README.md` (qo'llanma)
     - `CUSTOMIZATION.md` (sozlash qo'llanmasi)

### Mac:

1. **ZIP faylni yuklab oling**
   - `poklanish_web.zip` faylini yuklab oling
   - Fayl Downloads papkasida bo'ladi

2. **ZIP faylni ochib qo'ying**
   - `poklanish_web.zip` fayliga double-click qiling
   - Avtomatik ravishda ochiladi
   - Yangi papka yaratiladi: `poklanish_standalone`

3. **Fayllarni tekshiring**
   - Finder orqali papkani oching
   - Barcha fayllar mavjudligini tekshiring

### Linux:

```bash
# Terminal orqali ZIP faylni ochib qo'ying
unzip poklanish_web.zip

# Papkaga o'ting
cd poklanish_standalone

# Fayllarni ko'ring
ls -la
```

## 🌐 Saytni Brauzer bilan Ochish

### Windows:

**Usul 1: Direct**
1. `poklanish_standalone` papkasini oching
2. `index.html` faylini topib, o'ng tugma bosing
3. "Open with" → "Chrome" (yoki boshqa brauzer)
4. Sayt brauzerda ochiladi

**Usul 2: Drag and Drop**
1. `index.html` faylini brauzer oynasiga sudrab tashlang
2. Sayt yuklanadi

### Mac:

**Usul 1: Direct**
1. `poklanish_standalone` papkasini oching
2. `index.html` faylga double-click qiling
3. Sayt brauzerda ochiladi

**Usul 2: Finder**
1. Finder orqali `index.html` ni toping
2. Ctrl+Click (yoki o'ng tugma)
3. "Open With" → "Chrome" (yoki boshqa brauzer)

### Linux:

```bash
# Terminal orqali brauzer bilan oching
firefox index.html
# yoki
google-chrome index.html
# yoki
chromium index.html
```

## ✅ Sayt to'g'ri Ochilganligini Tekshiring

Sayt ochilgandan keyin quyidagilarni tekshiring:

1. **Sarlavha ko'rinadi**: "40 KUNLIK POKLANISH"
2. **Tugmalar ishlaydi**: "Boshlash" tugmasini bosing
3. **Animatsiyalar ishlaydi**: Sahifani asta-sekin scroll qiling
4. **Raqamlar ko'rinadi**: Uchta bosqich (1, 2, 3) ko'rinishi kerak
5. **FAQ ishlaydi**: Savollarni bosib, javoblar ochilishi kerak

## 🔧 Saytni Sozlash

### Telegram Linkini O'zgartirish

1. `index.html` faylini tekst muharriri bilan oching (Notepad, VS Code)
2. Ctrl+F bosib, quyidagini qidiring: `https://t.me/T_M_Manager`
3. Barcha joylarda o'zingizning Telegram username'ini qo'ying
4. Faylni saqlang (Ctrl+S)
5. Brauzerda F5 bosib, yangilang

### Matnni O'zgartirish

1. `index.html` faylini tekst muharriri bilan oching
2. O'zgartirishni xohlagan matnni toping
3. Yangi matnni yozing
4. Faylni saqlang
5. Brauzerda yangilang

### Ranglarni O'zgartirish

1. `style.css` faylini tekst muharriri bilan oching
2. Quyidagini qidiring: `#D4A574` (aksent rang)
3. Yangi rang kodini qo'ying (masalan, `#4A90E2` - ko'k)
4. Faylni saqlang
5. Brauzerda yangilang

## 📱 Turli Cihozlarda Tekshirish

### Desktop:
1. Saytni brauzer bilan oching
2. Sayt to'liq ekranda ko'rinishi kerak
3. Barcha elementlar o'z joyida bo'lishi kerak

### Planshet:
1. Brauzer Developer Tools'ni oching (F12)
2. Device Emulation'ni oching (Ctrl+Shift+M)
3. "iPad" yoki "Tablet" ni tanlang
4. Sayt planshetga mos kelishi kerak

### Mobil:
1. Developer Tools'ni oching (F12)
2. Device Emulation'ni oching (Ctrl+Shift+M)
3. "iPhone" yoki "Mobile" ni tanlang
4. Sayt mobil uchun optimallashtirilgan bo'lishi kerak

## 🚀 Oflayn Ishlash

Sayt to'liq oflayn rejimda ishlaydi:

1. **Internet ulanmasdan ishlatish**
   - Papkani kompyuteringizda saqlang
   - `index.html` faylini brauzer bilan oching
   - Barcha xususiyatlar ishlaydi

2. **Boshqa kompyuterlarga ko'chirish**
   - Butun `poklanish_standalone` papkasini ko'chiring
   - Boshqa kompyuterda `index.html` faylini oching
   - Sayt ishlaydi

3. **USB flashka saqlash**
   - `poklanish_standalone` papkasini USB flashkaga ko'chiring
   - Istalgan kompyuterda `index.html` faylini oching
   - Sayt ishlaydi

## 🎯 Saytni Foydalanuvchilarga Taqdim Etish

### Usul 1: ZIP Fayl
1. `poklanish_web.zip` faylini foydalanuvchiga yuboring
2. Ular ZIP faylni ochadi
3. `index.html` faylini brauzer bilan ochadi

### Usul 2: Papka
1. `poklanish_standalone` papkasini foydalanuvchiga yuboring
2. Ular `index.html` faylini brauzer bilan ochadi

### Usul 3: Veb-server
1. Papkani veb-serverga yuklang
2. URL orqali foydalanuvchilarga taqdim eting
3. Foydalanuvchilar brauzer orqali kiradi

## 🐛 Muammolarni Hal Qilish

### Sayt brauzerda ko'rinmaydi

**Sabab**: `index.html` fayli topilmadi yoki noto'g'ri yo'lda

**Hal qilish**:
1. `index.html` faylining papkada ekanligini tekshiring
2. Fayl nomini tekshiring (katta-kichik harflar muhim)
3. Faylni brauzer bilan qayta oching

### Tugmalar ishlama

**Sabab**: JavaScript fayli yuklanmadi

**Hal qilish**:
1. Brauzer Developer Tools'ni oching (F12)
2. Console tabiga o'ting
3. Xatolarni tekshiring
4. `script.js` faylini tekshiring

### Animatsiyalar ishlama

**Sabab**: CSS fayli yuklanmadi yoki AOS kutubxonasi

**Hal qilish**:
1. `style.css` faylini tekshiring
2. AOS CDN linkini tekshiring (internet kerak)
3. Brauzer cache'ni tozalang (Ctrl+Shift+Delete)

### Sayt sekin yuklanyapti

**Sabab**: Katta fayllar yoki sekin internet

**Hal qilish**:
1. Brauzer cache'ni tozalang
2. Boshqa brauzerni sinab ko'ring
3. Internet tezligini tekshiring

## 📋 Tekshirish Ro'yxati

Saytni taqdim etishdan oldin:

- [ ] Sayt brauzerda ochiladi
- [ ] Barcha matnlar ko'rinadi
- [ ] Tugmalar ishlaydi
- [ ] Animatsiyalar ishlaydi
- [ ] FAQ ishlaydi
- [ ] Journey cards kengayadi
- [ ] Telegram linki to'g'ri
- [ ] Desktop'da ko'rinadi
- [ ] Planshetda ko'rinadi
- [ ] Mobilda ko'rinadi

## 📞 Qo'shimcha Yordam

Sayt haqida savol bo'lsa:

1. **README.md** faylini o'qing
2. **CUSTOMIZATION.md** faylini o'qing
3. Brauzer Developer Tools'dan foydalaning (F12)
4. Telegram: @T_M_Manager

## 🎓 Texnik Xususiyatlar

- **Fayl hajmi**: ~50KB (juda yengil)
- **Yuklanish vaqti**: <1 sekund (tez internet)
- **Brauzer qo'llab-quvvatlash**: Chrome, Firefox, Safari, Edge
- **Operatsion sistema**: Windows, Mac, Linux
- **Internet**: Ixtiyoriy (oflayn ishlaydi)

## 📚 Fayllar Tafsiloti

### index.html
- Asosiy HTML fayli
- Barcha bo'limlar va matn
- 450+ qator kod

### style.css
- CSS stillar
- Animatsiyalar
- Responsive design
- 700+ qator kod

### script.js
- Vanilla JavaScript
- Interaktivlik
- Event handlers
- 300+ qator kod

### README.md
- Asosiy qo'llanma
- Sozlash ko'rsatmalari
- Muammolarni hal qilish

### CUSTOMIZATION.md
- Batafsil sozlash qo'llanmasi
- Kod misollari
- Rang sxemalari

### SETUP_GUIDE.md
- Bu fayl
- O'rnatish va ishga tushirish


