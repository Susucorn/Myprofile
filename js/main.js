// ---------- Profile photo fallback ----------
// images/profile.jpg 가 없으면 안내용 자리 표시가 나타납니다.
(function () {
  const img = document.getElementById("profileImg");
  const frame = img.closest(".photo-frame");
  const showEmpty = () => frame.classList.add("is-empty");
  if (img.complete && img.naturalWidth === 0) showEmpty();
  img.addEventListener("error", showEmpty);
  img.addEventListener("load", () => frame.classList.remove("is-empty"));
})();

// ---------- Nav: scrolled state & mobile menu ----------
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 40);
}, { passive: true });

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("is-open");
  navLinks.classList.toggle("is-open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navToggle.classList.remove("is-open");
    navLinks.classList.remove("is-open");
  })
);

// ---------- Reveal on scroll ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  revealObserver.observe(el);
});

// ---------- Active nav link ----------
const sections = document.querySelectorAll("section[id]");
const linkMap = {};
navLinks.querySelectorAll("a").forEach((a) => (linkMap[a.getAttribute("href").slice(1)] = a));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      Object.values(linkMap).forEach((a) => a.classList.remove("is-active"));
      linkMap[entry.target.id]?.classList.add("is-active");
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach((s) => sectionObserver.observe(s));

// ---------- Count-up stats ----------
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimal || "0", 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals) + (p === 1 ? suffix : "");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countObserver.unobserve(el);
  });
}, { threshold: 0.6 });

document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));
