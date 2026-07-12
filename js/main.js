/* ============================================================
   Nexco — website interactions (vanilla)
   Replicates the Claude Design app.jsx shell: reading progress,
   nav-glass on scroll, mobile menu, scroll-reveal, contact form.
   ============================================================ */
(function () {
  "use strict";

  /* -------- Lucide icons -------- */
  function initIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  /* -------- Reading progress + nav glass -------- */
  function initScroll() {
    var nav = document.getElementById("nav");
    var bar = document.getElementById("progress");
    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (nav) nav.classList.toggle("scrolled", y > 20);
      if (bar) {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? Math.min(100, (y / h) * 100) : 0) + "%";
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* -------- Mobile menu -------- */
  function initMenu() {
    var burger = document.getElementById("burger");
    var mobile = document.getElementById("mobile");
    if (!burger || !mobile) return;
    function set(open) {
      mobile.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    }
    burger.addEventListener("click", function () {
      set(!mobile.classList.contains("open"));
    });
    mobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { set(false); });
    });
  }

  /* -------- Scroll reveal (gated on .reveal-ready) -------- */
  function initReveal() {
    var els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) return; // no-JS/old: content already visible
    document.documentElement.classList.add("reveal-ready");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* -------- Contact form (demo — no backend) -------- */
  function initForm() {
    var form = document.getElementById("contactForm");
    var thanks = document.getElementById("contactThanks");
    if (!form || !thanks) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      // Real: POST to your backend or wire to the official inbox (domain TBD).
      form.hidden = true;
      thanks.hidden = false;
      initIcons(); // ensure the check icon renders
      thanks.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* -------- Tarjetas de servicio: spotlight que sigue al cursor -------- */
  function initCards() {
    document.querySelectorAll(".s-svc").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - r.left) + "px");
        card.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });
  }

  function init() {
    initIcons();
    initScroll();
    initMenu();
    initReveal();
    initForm();
    initCards();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
