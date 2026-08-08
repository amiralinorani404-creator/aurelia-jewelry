(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header: solid on scroll ---------- */
  var header = document.getElementById("site-header");
  function updateHeader() {
    if (window.scrollY > 30) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* ---------- Mobile nav ---------- */
  var toggle = document.getElementById("menu-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  function openMobileNav() {
    mobileNav.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }
  function closeMobileNav() {
    mobileNav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }
  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (isOpen) closeMobileNav(); else openMobileNav();
  });
  mobileNav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMobileNav);
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Focus-trapped dialog helper ---------- */
  function trapFocus(panel) {
    var focusable = panel.querySelectorAll(
      'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    panel.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    });
  }

  /* ---------- Product detail modal ---------- */
  var modal = document.getElementById("product-modal");
  var modalImg = document.getElementById("modal-img");
  var modalTitle = document.getElementById("modal-title");
  var modalDesc = document.getElementById("modal-desc");
  var modalPrice = document.getElementById("modal-price");
  var lastFocused = null;

  function openModal(data) {
    modalImg.src = data.img || "";
    modalImg.alt = data.name || "";
    modalTitle.textContent = data.name || "";
    modalDesc.textContent = data.desc || "";
    modalPrice.textContent = data.price ? data.price + " · indicative price" : "";
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close").focus();
    trapFocus(modal.querySelector(".modal-panel"));
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll(".product-media, .view-details").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      openModal({
        name: trigger.getAttribute("data-name"),
        desc: trigger.getAttribute("data-desc"),
        price: trigger.getAttribute("data-price"),
        img: trigger.getAttribute("data-img")
      });
    });
  });
  modal.querySelectorAll("[data-close-modal]").forEach(function (el) {
    el.addEventListener("click", closeModal);
  });

  /* ---------- Gallery lightbox ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lastFocusedLb = null;

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lastFocusedLb = document.activeElement;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightbox.querySelector(".lightbox-close").focus();
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedLb) lastFocusedLb.focus();
  }
  document.querySelectorAll(".gallery-item").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var img = btn.querySelector("img");
      openLightbox(btn.getAttribute("data-img"), img ? img.alt : "");
    });
  });
  lightbox.querySelectorAll("[data-close-lightbox]").forEach(function (el) {
    el.addEventListener("click", closeLightbox);
  });

  /* ---------- Shared Escape key ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (!modal.hidden) closeModal();
    if (!lightbox.hidden) closeLightbox();
    if (mobileNav.classList.contains("open")) closeMobileNav();
  });
})();
