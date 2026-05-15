// main.js — LaundryLink Marketing Site

(function () {
  'use strict';

  // ——— Scroll Reveal via Intersection Observer ———
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { obs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ——— Mobile Nav Toggle ———
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('nav-open');
      var isOpen = nav.classList.contains('nav-open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
    document.querySelectorAll('.mobile-link, .mobile-menu .btn').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ——— Smooth Scroll for anchor links ———
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = 72;
        var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // (Dashboard preview animation removed - using static images now)

  // ——— Contact Form Handling ———
  var form = document.getElementById('contactForm');
  var success = document.getElementById('formSuccess');
  var submitBtn = document.getElementById('formSubmit');
  if (form && success && submitBtn) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Simulate submission
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      setTimeout(function () {
        form.querySelectorAll('.form-group, .form-row, .form-submit').forEach(function (el) {
          el.style.display = 'none';
        });
        submitBtn.style.display = 'none';
        success.hidden = false;
      }, 800);
    });
  }

  // ——— Nav background on scroll ———
  var navEl = document.querySelector('.nav');
  if (navEl) {
    var onScroll = function () {
      if (window.scrollY > 20) {
        navEl.classList.add('nav-scrolled');
      } else {
        navEl.classList.remove('nav-scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

})();
