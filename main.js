// main.js — RA Solutions & LaundryLink site

(function () {
  'use strict';

  // ——— Scroll Reveal ———
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { obs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ——— Mobile Nav Toggle ———
  var toggle = document.getElementById('navToggle');
  var nav    = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('nav-open'));
    });
    document.querySelectorAll('.mobile-link, .mobile-menu .btn').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ——— Smooth Scroll ———
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.pageYOffset - 72;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ——— Nav background on scroll ———
  var navEl = document.querySelector('.nav');
  if (navEl) {
    var onScroll = function () {
      navEl.classList.toggle('nav-scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ——— Demo Form (index.html) ———
  var demoForm   = document.getElementById('demoForm');
  var demoBtn    = document.getElementById('demoSubmit');
  var demoOk     = document.getElementById('demoSuccess');
  if (demoForm && demoBtn && demoOk) {
    demoForm.addEventListener('submit', function (e) {
      e.preventDefault();
      demoBtn.textContent = 'Sending…';
      demoBtn.disabled = true;
      setTimeout(function () {
        demoForm.querySelectorAll('.form-group, .form-row').forEach(function (el) {
          el.style.display = 'none';
        });
        demoBtn.style.display = 'none';
        demoForm.querySelector('.form-note') && (demoForm.querySelector('.form-note').style.display = 'none');
        demoOk.hidden = false;
      }, 900);
    });
  }

  // ——— Contact / Inquiry Form (laundrylink.html) ———
  var contactForm = document.getElementById('contactForm');
  var submitBtn   = document.getElementById('formSubmit');
  var formOk      = document.getElementById('formSuccess');
  if (contactForm && submitBtn && formOk) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;
      setTimeout(function () {
        contactForm.querySelectorAll('.form-group, .form-row').forEach(function (el) {
          el.style.display = 'none';
        });
        submitBtn.style.display = 'none';
        formOk.hidden = false;
      }, 900);
    });
  }

})();
