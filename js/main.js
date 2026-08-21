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

    document.querySelectorAll('[data-copy-button]').forEach((button) => {
      const label = button.querySelector('[data-copy-label]');
      let resetTimer = null;

      button.addEventListener('click', async () => {
        const text = button.dataset.copyText || '';

        try {
          await navigator.clipboard.writeText(text);
        } catch (error) {
          return;
        }

        if (!label) return;
        const language = window.FunAgencyI18n?.getLanguage() || 'en';
        label.textContent = window.FunAgencyI18n?.getTranslation(language, 'tracking.copyButtonCopied') || 'Copied';
        button.classList.add('is-copied');

        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          const currentLanguage = window.FunAgencyI18n?.getLanguage() || 'en';
          label.textContent = window.FunAgencyI18n?.getTranslation(currentLanguage, 'tracking.copyButton') || 'Copy';
          button.classList.remove('is-copied');
        }, 2000);
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
