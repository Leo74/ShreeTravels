# Shree Travels — Website

A fast, fully responsive, **bilingual (English / मराठी)** website for **Shree Travels**,
Kolhapur — local cabs & buses plus outstation tour packages across India.

Built as a plain static site (HTML + CSS + vanilla JS). **No build step, no dependencies.**
Everything works offline except the Google Map, web fonts and social links.

---

## 🚀 Run it locally

**Option A — just open it**
Double-click `index.html`. (The map and Google fonts need internet; everything else works.)

**Option B — local server (recommended)**
```powershell
cd C:\Projects\shree
py -m http.server 8123
```
Then open http://localhost:8123

---

## 📁 Structure
```
shree/
├─ index.html            # page markup (sections + icon sprite)
├─ css/styles.css        # all styling + responsive rules
├─ js/
│  ├─ translations.js    # ⭐ EDIT ME: business details + all text + card data
│  └─ main.js            # interactivity (toggle, gallery, forms, etc.)
├─ assets/img/*.svg      # placeholder artwork (buses, cars, destinations, videos)
└─ README.md
```

---

## ✏️ How to customise (all in `js/translations.js`)

### 1. Business details — `CONFIG` (top of the file)
```js
const CONFIG = {
  phone: "+91 98765 43210",     // shown on the site
  phoneHref: "+919876543210",   // for click-to-call
  whatsapp: "919876543210",     // WhatsApp number (country code, no +)
  email: "bookings@shreetravels.example",
  social: { facebook:"#", instagram:"#", twitter:"#", youtube:"#" }, // ← real profile URLs
  mapEmbed: "https://www.google.com/maps?q=Kolhapur..."              // ← real Google Maps embed
};
```
> To get the map embed: Google Maps → your shop → **Share** → **Embed a map** → copy the `src` URL.

### 2. Text — `I18N.en` and `I18N.mr`
Every visible label exists in both languages. Edit the English value and its Marathi twin.

### 3. Cards — `DATA`
Services, buses, cars, gallery, packages, `why` and reviews are all data-driven arrays.
Add/remove an item by editing the array — the page updates automatically.

---

## 🖼️ Replacing the placeholder photos & videos

The `assets/img/` files are hand-drawn SVG placeholders. Replace them with real media:

- **Easiest:** save your real photo over the same filename (e.g. `assets/img/dest-ooty.svg` → `dest-ooty.jpg`) and update that `img:` path in `DATA` inside `translations.js`.
- **Videos:** the three `video-*.svg` items are animated placeholders. To use real video, either
  swap the image for a real poster, or open `js/main.js` → `openLB()` and point the lightbox at a
  `<video>` tag or a YouTube embed (a commented example is easy to add there).

Recommended real photo sizes: fleet/gallery **≈ 800×600**, package cards **≈ 800×500**, hero **≈ 1600×900**.

---

## 📞 Where the callback form goes

There is no server, so the **Request a Callback** form:
1. validates name + phone,
2. saves the lead to the browser's `localStorage` (nothing is lost), and
3. opens **WhatsApp** with the details pre-filled so it reaches you instantly.

To send leads to email/DB instead, wire `handleLead()` in `js/main.js` to a free service like
**Formspree** or **EmailJS** (one `fetch()` call — marked with a comment in the code).

---

## 🌐 Deploy (free options)
Upload the whole folder to any static host — **Netlify**, **Vercel**, **GitHub Pages**,
or your existing **cPanel/shared hosting** `public_html`. No configuration needed.

---

## ✨ Extras included (creative suggestions)
- English ⇄ Marathi toggle (remembers the visitor's choice).
- Sticky navbar, animated counters, scroll reveals, mobile hamburger menu.
- Fleet tabs (Buses / Cars), gallery filters (All / Photos / Videos) + lightbox.
- Hero **quick-callback** card + full contact form, both with WhatsApp delivery.
- Floating WhatsApp button, back-to-top button, testimonials, newsletter signup.
- "Enquire" buttons on vehicles & packages auto-fill the contact form.

**Ideas for later:** real Google reviews widget, online booking/payment, blog with travel tips,
photo galleries per trip, seasonal offer banner, multi-language beyond Marathi (Hindi).

---
_This is a demo build. Replace placeholder photos, videos, prices, address, phone, email and
social links before going live._
