(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const nav = document.querySelector('.primary-nav');

    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!isOpen));
        nav.classList.toggle('is-open', !isOpen);
        const labelKey = isOpen ? 'a11y.openMenu' : 'a11y.closeMenu';
        const label = window.FunAgencyI18n?.getTranslation(window.FunAgencyI18n.getLanguage(), labelKey);
        menuToggle.querySelector('.sr-only').textContent = label;
      });

      nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          menuToggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('is-open');
        });
      });
    }

    const showcaseTabs = document.querySelectorAll('[data-showcase-tab]');
    const showcasePanels = document.querySelectorAll('[data-showcase-panel]');
    showcaseTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const selectedView = tab.dataset.showcaseTab;
        showcaseTabs.forEach((item) => {
          const isSelected = item === tab;
          item.classList.toggle('is-active', isSelected);
          item.setAttribute('aria-selected', String(isSelected));
        });
        showcasePanels.forEach((panel) => {
          panel.hidden = panel.dataset.showcasePanel !== selectedView;
          panel.classList.toggle('is-active', !panel.hidden);
        });
      });
    });

    document.querySelectorAll('.faq-question').forEach((question) => {
      question.addEventListener('click', () => {
        const item = question.closest('.faq-item');
        const answer = document.getElementById(question.getAttribute('aria-controls'));
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        question.setAttribute('aria-expanded', String(!isExpanded));
        item.classList.toggle('is-open', !isExpanded);
        answer.hidden = isExpanded;
      });
    });

    const revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        });
      }, { threshold: 0.12 });
      revealItems.forEach((item) => observer.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    }
  });
})();
