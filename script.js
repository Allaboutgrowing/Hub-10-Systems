// =====================================
// YAXO-SYSTEMS WEBSITE FUNCTIONALITY
// =====================================

// MOBILE NAVIGATION

const menuToggle = document.getElementById(“menuToggle”);
const navLinks = document.getElementById(“navLinks”);

menuToggle.addEventListener(“click”, function () {

navLinks.classList.toggle("active");
if (navLinks.classList.contains("active")) {
    menuToggle.textContent = "✕";
} else {
    menuToggle.textContent = "☰";
}

});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(”.nav-links a”).forEach(function(link) {

link.addEventListener("click", function() {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
});

});

// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById(“year”);

yearElement.textContent = new Date().getFullYear();

// SMOOTH SECTION NAVIGATION

document.querySelectorAll(‘a[href^=”#”]’).forEach(function(link) {

link.addEventListener("click", function(event) {
    const target = document.querySelector(
        this.getAttribute("href")
    );
    if (target) {
        event.preventDefault();
        target.scrollIntoView({
            behavior: "smooth"
        });
    }
});

});

// WEBSITE LOADED

window.addEventListener(“load”, function() {

console.log("Yaxo-Systems website loaded successfully.");

});
