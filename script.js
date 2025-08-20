// Typing Animation
const typingElement = document.getElementById("typing");
const words = ["Frontend Developer ", "ReactJS Enthusiast ", "JavaScript Coder "];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      current = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = words[i].substring(0, j--);
    }

    typingElement.textContent = current;

    if (!isDeleting && j === words[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 60 : 120);
  }
}
type();

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.onclick = () => {
  document.body.classList.toggle("dark-mode");
};

const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });