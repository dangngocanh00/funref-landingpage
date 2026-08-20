(() => {
  const getCurrencyFormatter = () => new Intl.NumberFormat(
    window.FunAgencyI18n?.getLanguage() === 'ru' ? 'ru-RU' : 'en-US',
    { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }
  );

  const getElements = () => ({
    form: document.querySelector('[data-calculator-form]'),
    deposit: document.querySelector('#deposit'),
    rateOutputs: [...document.querySelectorAll('[data-result="rate"]')],
    depositOutputs: [...document.querySelectorAll('[data-result="deposit"]')],
    yearlyOutputs: [...document.querySelectorAll('[data-result="yearly"]')],
    error: document.querySelector('#deposit-error'),
    feeOptions: [...document.querySelectorAll('input[name="serviceFee"]')],
    quickValues: [...document.querySelectorAll('[data-deposit]')]
  });

  const getBaseRate = (feeValue) => feeValue === 'low' ? 0.5 : 1.0;

  const getErrorKey = (rawValue) => {
    if (rawValue.trim() === '') return 'calculator.errorEmpty';
    if (rawValue.trim().startsWith('-')) return 'calculator.errorNegative';
    const parsedValue = Number.parseFloat(rawValue);
    if (!Number.isFinite(parsedValue)) return 'calculator.errorInvalid';
    return null;
  };

  const setAll = (elements, text) => elements.forEach((el) => { el.textContent = text; });

  const updateCalculator = () => {
    const elements = getElements();
    if (!elements.deposit || elements.rateOutputs.length === 0) return;

    const rawValue = elements.deposit.value;
    const errorKey = getErrorKey(rawValue);
    const parsedDeposit = Number.parseFloat(rawValue);
    const monthlyDeposit = errorKey ? 0 : parsedDeposit;
    const selectedFee = elements.feeOptions.find((option) => option.checked)?.value || 'high';
    const baseRate = getBaseRate(selectedFee);
    const monthlyCommission = monthlyDeposit * (baseRate / 100);
    const yearlyCommission = monthlyCommission * 12;
    const currencyFormatter = getCurrencyFormatter();

    setAll(elements.depositOutputs, currencyFormatter.format(monthlyDeposit));
    setAll(elements.rateOutputs, `${baseRate.toFixed(1)}%`);
    setAll(elements.yearlyOutputs, currencyFormatter.format(yearlyCommission));
    elements.deposit.setAttribute('aria-invalid', String(Boolean(errorKey)));
    if (elements.error) {
      elements.error.textContent = errorKey ? window.FunAgencyI18n.getTranslation(window.FunAgencyI18n.getLanguage(), errorKey) : '';
      elements.error.hidden = !errorKey;
    }

    document.querySelectorAll('.fee-option').forEach((option) => {
      const input = option.querySelector('input');
      option.classList.toggle('is-selected', input?.checked === true);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    const elements = getElements();
    if (!elements.form) return;

    elements.form.addEventListener('input', updateCalculator);
    elements.form.addEventListener('change', updateCalculator);
    elements.quickValues.forEach((button) => {
      button.addEventListener('click', () => {
        elements.deposit.value = button.dataset.deposit;
        updateCalculator();
        elements.deposit.focus();
      });
    });
    updateCalculator();
    window.addEventListener('languagechange', updateCalculator);
  });
})();
