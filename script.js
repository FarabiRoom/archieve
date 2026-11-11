
// NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Tutup menu setelah link diklik
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// FOOTER YEAR
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// MEMBER DATA
// Ganti nama contoh dengan data anggota sebenarnya.

// MEMBER DATA

const generations = {
    1: {
        title: "Angkatan I",
        members: [
            "Amirah Annajiah",
            "Khoirun Nisa'",
            "Tias Dwi Apriliana",
            "Komariatur Ribaba",
            "Alwasilatur Rohma",
            "Qurrotul Uyun",
            "Amanda Safira",
            "Balqis Iklilah",
            "Sintya Dwi Lestari",
            "Aisya Fira Shiva Dwita",
            "Aisyatul Munawwaroh",
            "Nur Alami",
            "Hiqmatul Jannah",
            "Balqis Sa'diyah",
            "Ana",
            "Saniah Kamilah"
        ]
    },

    2: {
        title: "Angkatan II",
        members: [
            "Nama Anggota 1",
            "Nama Anggota 2"
        ]
    },

    3: {
        title: "Angkatan III",
        members: [
            "Nama Anggota 1",
            "Nama Anggota 2"
        ]
    }
};

// MODAL
const modal = document.getElementById("memberModal");
const modalTitle = document.getElementById("modalTitle");
const modalMembers = document.getElementById("modalMembers");
const modalClose = document.getElementById("modalClose");

// Buka modal anggota
document.querySelectorAll("[data-generation]").forEach(button => {
    button.addEventListener("click", () => {
        const generation = button.dataset.generation;
        const data = generations[generation];

        modalTitle.textContent = data.title;

        modalMembers.innerHTML = `
            <ul class="member-list">
                ${data.members.map(name => `<li>${name}</li>`).join("")}
            </ul>
        `;

        modal.classList.add("show");
    });
});

// Tutup modal dengan tombol
modalClose.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Tutup modal jika area luar diklik
modal.addEventListener("click", event => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

// Tutup modal dengan tombol Escape
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        modal.classList.remove("show");
    }
});
