// =======================
// Typewriter Effect
// =======================
const skills = ["React.js", "JavaScript (ES6+)", "Java", "UI/UX Design", "Full Stack Development"];
let i = 0, j = 0;
let currentSkill = "";
let isDeleting = false;

function typeWriter() {
  if (i < skills.length) {
    if (!isDeleting && j <= skills[i].length) {
      currentSkill = skills[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentSkill = skills[i].substring(0, j--);
    }

    document.getElementById("typewriter").textContent = currentSkill;

    let speed = isDeleting ? 100 : 150;

    if (!isDeleting && j === skills[i].length) {
      isDeleting = true;
      speed = 1000; // pause before deleting
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % skills.length;
    }

    setTimeout(typeWriter, speed);
  }
}
typeWriter();
// =======================
// Scroll Spy & Smooth Scroll
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Scroll spy effect
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // Smooth scroll with navbar offset
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth"
      });

      // Collapse navbar on mobile
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
});
// =======================
// Fade-in Animations
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in-left, .fade-in-right, .fade-in-top, .fade-in-bottom");

  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});
// =======================
// Animate Progress Bars
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  const progressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const bar = entry.target;
        const value = bar.getAttribute("data-value");
        bar.style.width = value;
        observer.unobserve(bar); // animate only once
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => progressObserver.observe(bar));
});
// =======================
// Dark/Light Mode Toggle
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme from localStorage
  if(localStorage.getItem("theme") === "dark") body.classList.add("dark-mode");

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if(body.classList.contains("dark-mode")){
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
