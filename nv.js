document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var navPrimary = document.querySelector('.nav-primary');
  if (toggle && navPrimary) {
    toggle.addEventListener('click', function () {
      var isOpen = navPrimary.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Close mobile menu after clicking a link
  document.querySelectorAll('.nav-primary a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navPrimary) navPrimary.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Scrollspy: highlight the nav link for the section in view
  var sections = Array.from(document.querySelectorAll('main .section'));
  var navLinks = Array.from(document.querySelectorAll('.nav-link'));

  function setActive(id) {
    navLinks.forEach(function (link) {
      var match = link.dataset.section === id;
      link.classList.toggle('is-active', match);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { observer.observe(section); });
  }

  // Back to top button
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('is-visible', window.scrollY > 500);
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Contact form (front-end only — wire up to your own backend or a form service)
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        status.textContent = 'Please fill in every field with a valid email address.';
        return;
      }
      // Placeholder behaviour: replace with a fetch() call to your backend
      // or a service like Formspree, Netlify Forms, or EmailJS.
      status.textContent = 'Thanks — this form isn\'t wired up to a server yet, but your message would be sent here.';
      form.reset();
    });
  }

});
