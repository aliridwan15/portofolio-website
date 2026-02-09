document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("app");

    // Daftar file section yang akan dimuat
    const sections = ["hero.html", "tools.html"];

    // Fungsi untuk memuat HTML
    const loadSection = async (fileName) => {
        try {
            const response = await fetch(`sections/${fileName}`);
            if (!response.ok) throw new Error(`Gagal memuat ${fileName}`);
            const html = await response.text();
            
            // Membuat elemen div sementara untuk menampung konten
            const div = document.createElement("div");
            div.innerHTML = html;
            
            // Menambahkan isi section ke dalam <main id="app">
            app.appendChild(div.firstElementChild);
        } catch (error) {
            console.error(error);
        }
    };

    // Jalankan loop untuk memuat semua section secara berurutan
    const loadAllSections = async () => {
        for (const file of sections) {
            await loadSection(file);
        }
        
        // Setelah semua dimuat, aktifkan smooth scroll (opsional)
        enableSmoothScroll();
    };

    loadAllSections();
});

// Fungsi Smooth Scroll untuk navigasi (Navbar)
function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}