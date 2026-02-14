<h1 align="center">🚀 Personal Portfolio Website</h1>
<h3 align="center">Ali Ridwan Nurhasan</h3>

<p align="center">
  <img width="85%" src="https://github.com/user-attachments/assets/1153e29f-d83b-498e-b909-430211d731df" alt="Portfolio Banner" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Responsive-Mobile%20Friendly-green?style=for-the-badge" alt="Responsive" />
</p>

<p align="center">
  Website portofolio pribadi yang dirancang dengan antarmuka modern, responsif, dan interaktif. Website ini dibangun menggunakan <strong>Vanilla JavaScript</strong> dengan arsitektur modular (menggunakan Fetch API) untuk memuat komponen halaman secara dinamis tanpa reload.
</p>

<p align="center">
  🔗 <strong>Live Demo:</strong> <a href="https://aliridwan15.github.io/portofolio-website">Lihat Website</a>
</p>

---

## ✨ Fitur Utama

* **⚡ Modular Architecture:** Konten dipisah menjadi file terpisah (`hero.html`, `tools.html`, `projects.html`) dan dimuat menggunakan JavaScript `fetch()` untuk kode yang lebih bersih.
* **📱 Fully Responsive:** Tampilan optimal di Desktop, Tablet, dan Mobile dengan navigasi yang adaptif.
* **🎨 Interactive UI:**
    * **Dual Carousel:** Slider otomatis (ping-pong animation) untuk Tech Stack dan Projects.
    * **Smooth Scroll:** Navigasi halus antar section.
    * **Hover Effects:** Efek glow dan levitasi pada kartu dan ikon.
* **💬 WhatsApp Integration:** Formulir kontak yang terintegrasi langsung ke API WhatsApp dengan format pesan otomatis yang dinamis.

---

## 🛠️ Teknologi yang Digunakan

* **Frontend:** HTML5, CSS3 (Custom Properties/Variables, Flexbox, Grid), JavaScript (ES6+).
* **Icons:** FontAwesome 6 & Devicon.
* **Fonts:** Poppins & Inter (Google Fonts).

---

## 📂 Struktur Folder

```text
portofolio-website/
├── assets/
│   ├── css/
│   │   └── style.css       # Styling utama
│   ├── js/
│   │   └── script.js       # Logic carousel, fetch, & WA form
│   └── img/                # Aset gambar project & profil
├── sections/
│   ├── hero.html           # Komponen Hero
│   ├── tools.html          # Komponen Tech Stack
│   ├── projects.html       # Komponen Project Cards
│   └── contact.html        # Komponen Contact Form
├── index.html              # Main entry point
└── README.md               # Dokumentasi ini
