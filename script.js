const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navMenu");

menuBtn.onclick = () => {
  nav.classList.toggle("active");
};


/* =============================
   MOBILE MENU TOGGLE
============================= */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/* =============================
   AUTO IMAGE SLIDER (SMOOTH)
============================= */
const slides = document.querySelector(".slides");
let index = 0;

function autoSlide() {
  if (!slides) return;

  const total = slides.children.length;
  index++;

  if (index >= total) {
    index = 0;
  }

  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(autoSlide, 4000);


/* =============================
   SMOOTH SCROLL
============================= */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    /* mobile menu close after click */
    nav.classList.remove("active");
  });
});


/* =============================
   SCROLL ANIMATION (FADE UP)
============================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach(sec => {
  sec.classList.add("fade-up");
  observer.observe(sec);
});


/* =============================
   ACTIVE NAV LINK ON SCROLL
============================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


/* =============================
   HOVER EFFECT IMPROVE
============================= */
document.querySelectorAll(".club-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});


/* =============================
   BUTTON CLICK EFFECT
============================= */
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});