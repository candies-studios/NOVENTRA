/* Noventra Ventures — interactions (no dependencies) */
(function () {
  'use strict';

  var doc = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header state on scroll ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Ventures dropdown ---------- */
  var canHover = window.matchMedia('(hover: hover) and (min-width: 961px)');
  document.querySelectorAll('[data-dropdown]').forEach(function (item) {
    var btn = item.querySelector('button');
    var closeTimer;
    function setOpen(open) {
      if (open && header) doc.style.setProperty('--hdr-bottom', header.getBoundingClientRect().bottom + 'px');
      item.classList.toggle('nav__item--open', open);
      btn.setAttribute('aria-expanded', String(open));
    }
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      // Desktop opens on hover, so a click keeps it open; touch screens toggle.
      if (canHover.matches) setOpen(true);
      else setOpen(btn.getAttribute('aria-expanded') !== 'true');
    });
    item.addEventListener('mouseenter', function () { if (canHover.matches) { clearTimeout(closeTimer); setOpen(true); } });
    item.addEventListener('mouseleave', function () { if (canHover.matches) closeTimer = setTimeout(function () { setOpen(false); }, 160); });
    item.addEventListener('focusout', function (e) { if (!item.contains(e.relatedTarget)) setOpen(false); });
    item.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setOpen(false); btn.focus(); } });
    document.addEventListener('click', function (e) { if (!item.contains(e.target)) setOpen(false); });
    window.addEventListener('scroll', function () { if (!canHover.matches) setOpen(false); }, { passive: true });
  });

  /* ---------- Section indicator (home page only) ---------- */
  var indicator = document.querySelector('.indicator');
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var footer = document.querySelector('.site-footer');

  function updateIndicator() {
    if (!indicator || !sections.length) return;
    var probe = window.innerHeight * 0.45;
    var mid = window.innerHeight / 2;
    var current = sections[0];
    var toneSection = sections[0];
    sections.forEach(function (s) {
      var r = s.getBoundingClientRect();
      if (r.top <= probe) current = s;
      if (r.top <= mid && r.bottom > mid) toneSection = s;
    });
    var tone = toneSection.getAttribute('data-tone') || 'light';
    if (footer && footer.getBoundingClientRect().top <= mid) tone = 'dark';
    indicator.setAttribute('data-tone', tone);
    indicator.querySelectorAll('a').forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('data-target') === current.id);
    });
  }
  if (indicator) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { updateIndicator(); ticking = false; });
    }, { passive: true });
    window.addEventListener('resize', updateIndicator);
    updateIndicator();
  }

  /* ---------- Contact page: preselect topic from link (#marketing, #mep, #venture) ---------- */
  var topicMap = { marketing: 'topic-marketing', mep: 'topic-mep', venture: 'topic-venture' };
  var preset = topicMap[(window.location.hash || '').replace('#', '')];
  if (preset && document.getElementById(preset)) document.getElementById(preset).checked = true;

  /* ---------- Enquiry form (static site: composes an email) ---------- */
  var form = document.getElementById('enquiry');
  if (form) {
    var note = document.getElementById('enquiry-note');
    var defaultNote = note.textContent;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      ['enq-name', 'enq-email', 'enq-message'].forEach(function (id) {
        var input = document.getElementById(id);
        var valid = input.value.trim() !== '' && (input.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim()));
        input.parentElement.classList.toggle('is-invalid', !valid);
        input.setAttribute('aria-invalid', String(!valid));
        if (!valid) ok = false;
      });
      if (!ok) {
        note.textContent = 'Please add your name, a valid email address and a short message.';
        note.classList.add('is-error');
        return;
      }
      var topic = (form.querySelector('input[name="topic"]:checked') || {}).value || 'Enquiry';
      var name = document.getElementById('enq-name').value.trim();
      var email = document.getElementById('enq-email').value.trim();
      var message = document.getElementById('enq-message').value.trim();
      var subject = 'Enquiry: ' + topic + ' — ' + name;
      var body = message + '\n\n' + name + '\n' + email;
      note.classList.remove('is-error');
      note.textContent = 'Your email app should now open. If it does not, write to hello@noventra-ventures.com.';
      window.location.href = 'mailto:hello@noventra-ventures.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
    form.addEventListener('input', function (e) {
      var f = e.target.closest('.field');
      if (f && f.classList.contains('is-invalid') && e.target.value.trim() !== '') {
        f.classList.remove('is-invalid'); e.target.removeAttribute('aria-invalid');
        note.textContent = defaultNote; note.classList.remove('is-error');
      }
    });
  }

  /* ---------- Reveal on scroll (only below-the-fold content) ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && !reduceMotion) {
    var vh = window.innerHeight;
    var pending = reveals.filter(function (el) { return el.getBoundingClientRect().top > vh * 0.92; });
    if (pending.length) {
      doc.classList.add('js');
      reveals.forEach(function (el) { if (pending.indexOf(el) === -1) el.classList.add('is-visible'); });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      pending.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- Year ---------- */
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = String(new Date().getFullYear());
})();
