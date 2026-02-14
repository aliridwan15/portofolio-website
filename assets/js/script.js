document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("app");
    const sections = ["hero.html", "tools.html", "projects.html", "contact.html"];

    const loadSections = async () => {
        for (const fileName of sections) {
            try {
                const response = await fetch(`sections/${fileName}`);
                if (!response.ok) throw new Error(`Gagal load ${fileName}`);
                const html = await response.text();
                
                const div = document.createElement("div");
                div.innerHTML = html;
                app.appendChild(div.firstElementChild);
            } catch (error) {
                console.error("Fetch Error:", error);
            }
        }
        
        console.log("All sections loaded.");
        
        setupCarousel('.carousel-track-container', '#prevBtn', '#nextBtn', 350);
        setupCarousel('.project-track-container', '#projPrevBtn', '#projNextBtn', 360);
        
        initContactForm(); 
        enableSmoothScroll();
    };

    loadSections();
});

/* --- LOGIC WHATSAPP FORM (Percakapan Mengalir) --- */
function initContactForm() {
    const form = document.getElementById("waForm");
    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Nomor WA Asli Anda
        const phoneNumber = "6282334644850"; 

        // Template Percakapan Mengalir
        let text = "";

        if (subject === "Tawaran Kerjasama") {
            text = `Halo Ali, perkenalkan saya *${name}*.%0A%0ASaya tertarik untuk menawarkan kerjasama proyek dengan Anda. Berikut detail singkatnya:%0A%0A"${message}"%0A%0ATerima kasih.`;
        } else if (subject === "Hiring / Recruitment") {
            text = `Halo Ali, saya *${name}*.%0A%0ASaya melihat portofolio Anda dan tertarik untuk membahas peluang recruitment/pekerjaan. Berikut infonya:%0A%0A"${message}"%0A%0ADitunggu responnya.`;
        } else if (subject === "Diskusi / Tanya") {
            text = `Halo Ali, salam kenal. Saya *${name}*.%0A%0ASaya ingin berdiskusi atau bertanya mengenai teknis/project. Ini yang ingin saya sampaikan:%0A%0A"${message}"`;
        } else {
            // Default / Lainnya
            text = `Halo Ali, perkenalkan saya *${name}*.%0A%0ASaya menghubungi Anda untuk membahas perihal *${subject}*.%0A%0AIsi pesan:%0A"${message}"`;
        }

        const waURL = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(waURL, "_blank");
    });
}

function setupCarousel(trackSelector, prevBtnId, nextBtnId, scrollAmount) {
    const track = document.querySelector(trackSelector);
    if (!track) return;

    let direction = 1; 
    let speed = 0.5; 
    let isPaused = false;
    let animationId;

    function animate() {
        if (!isPaused && track) {
            track.scrollLeft += direction * speed;
            if (Math.ceil(track.scrollLeft + track.clientWidth) >= track.scrollWidth) {
                direction = -1; 
            } else if (track.scrollLeft <= 0) {
                direction = 1; 
            }
        }
        animationId = requestAnimationFrame(animate);
    }

    document.body.addEventListener('click', (e) => {
        if (e.target.closest(nextBtnId)) {
            isPaused = true;
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            setTimeout(() => isPaused = false, 2000); 
        }
        if (e.target.closest(prevBtnId)) {
            isPaused = true;
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            setTimeout(() => isPaused = false, 2000);
        }
    });

    track.addEventListener("mouseenter", () => isPaused = true);
    track.addEventListener("mouseleave", () => isPaused = false);
    track.addEventListener("touchstart", () => isPaused = true);
    track.addEventListener("touchend", () => setTimeout(() => isPaused = false, 1500));

    animate();
}

function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });
}