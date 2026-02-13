document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("app");
    const sections = ["hero.html", "tools.html"];

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
        // Inisialisasi logic setelah fetch tuntas
        initCarouselLogic();
        enableSmoothScroll();
    };

    loadSections();
});

function initCarouselLogic() {
    const scrollBox = document.querySelector(".carousel-track-container");
    if (!scrollBox) return;

    let direction = 1; 
    let speed = 0.8;
    let isPaused = false;

    // --- 1. AUTO PING-PONG ANIMATION ---
    function animate() {
        if (!isPaused && scrollBox) {
            scrollBox.scrollLeft += direction * speed;
            if (Math.ceil(scrollBox.scrollLeft + scrollBox.clientWidth) >= scrollBox.scrollWidth) {
                direction = -1;
            } else if (scrollBox.scrollLeft <= 0) {
                direction = 1;
            }
        }
        requestAnimationFrame(animate);
    }

    // --- 2. BUTTON CLICKS (EVENT DELEGATION) ---
    document.body.addEventListener('click', (e) => {
        const nextBtn = e.target.closest("#nextBtn");
        const prevBtn = e.target.closest("#prevBtn");

        if (nextBtn || prevBtn) {
            isPaused = true;
            const amount = nextBtn ? 350 : -350;
            scrollBox.scrollBy({ left: amount, behavior: "smooth" });
            
            // Resume auto-scroll after 2 seconds
            clearTimeout(scrollBox.resumeTimer);
            scrollBox.resumeTimer = setTimeout(() => isPaused = false, 2000);
        }
    });

    // --- 3. PAUSE ON HOVER/TOUCH ---
    scrollBox.addEventListener("mouseenter", () => isPaused = true);
    scrollBox.addEventListener("mouseleave", () => isPaused = false);
    scrollBox.addEventListener("touchstart", () => isPaused = true);
    scrollBox.addEventListener("touchend", () => {
        setTimeout(() => isPaused = false, 1500);
    });

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