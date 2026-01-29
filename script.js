// Lightbox
const images = document.querySelectorAll(".item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Dropdown
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Tutup dropdown lain
        dropdowns.forEach(d => {
            if (d !== dropdown) d.classList.remove("active");
        });

        dropdown.classList.toggle("active");
    });

    // Cegah tertutup saat klik di menu
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});

// Tutup dropdown (klik di luar)
document.addEventListener("click", () => {
    dropdowns.forEach(d => d.classList.remove("active"));
});
