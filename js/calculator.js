(() => {
  const getFormatter = (options) => new Intl.NumberFormat(
    window.FunAgencyI18n?.getLanguage() === 'ru' ? 'ru-RU' : 'en-US',
    { style: 'currency', currency: 'USD', ...options }
  );

  const getIntegerFormatter = () => new Intl.NumberFormat(
    window.FunAgencyI18n?.getLanguage() === 'ru' ? 'ru-RU' : 'en-US'
  );

  const getMoneyFormatter = () => getFormatter({ minimumFractionDigits: 0, maximumFractionDigits: 0 });
  const getCommissionFormatter = () => getFormatter({ minimumFractionDigits: 0, maximumFractionDigits: 2 });

  const getElements = () => ({
    form: document.querySelector('[data-calculator-form]'),
    clientCount: document.querySelector('#clientCount'),
    deposit: document.querySelector('#deposit'),
    clientsOutputs: [...document.querySelectorAll('[data-result="clients"]')],
    depositOutputs: [...document.querySelectorAll('[data-result="deposit"]')],
    totalOutputs: [...document.querySelectorAll('[data-result="total"]')],
    rateOutputs: [...document.querySelectorAll('[data-result="rate"]')],
    commissionOutputs: [...document.querySelectorAll('[data-result="commission"]')],
    feeOptions: [...document.querySelectorAll('input[name="serviceFee"]')]
  });

  const getBaseRate = (feeValue) => feeValue === 'low' ? 0.5 : 1.0;

  const setAll = (elements, text) => {
    elements.forEach((el) => {
      el.textContent = text;
      el.classList.remove('result-flash');
      void el.offsetWidth;
      el.classList.add('result-flash');
    });
  };

  const updateSliderProgress = (input) => {
    const min = Number(input.min) || 0;
    const max = Number(input.max) || 100;
    const value = Number(input.value);
    const pct = max > min ? ((value - min) / (max - min)) * 100 : 0;
    input.style.setProperty('--range-progress', `${pct}%`);
  };

  const updateAriaValueText = (input, formattedValue, suffixKey) => {
    const suffix = window.FunAgencyI18n?.getTranslation(window.FunAgencyI18n.getLanguage(), suffixKey) || '';
    input.setAttribute('aria-valuetext', `${formattedValue} ${suffix}`.trim());
  };

  const updateCalculator = () => {
    const elements = getElements();
    if (!elements.clientCount || !elements.deposit || elements.rateOutputs.length === 0) return;

    const clientCount = Number(elements.clientCount.value);
    const deposit = Number(elements.deposit.value);
    const selectedFee = elements.feeOptions.find((option) => option.checked)?.value || 'high';
    const baseRate = getBaseRate(selectedFee);
    const total = clientCount * deposit;
    const commission = total * (baseRate / 100);

    const integerFormatter = getIntegerFormatter();
    const moneyFormatter = getMoneyFormatter();
    const commissionFormatter = getCommissionFormatter();

    setAll(elements.clientsOutputs, integerFormatter.format(clientCount));
    setAll(elements.depositOutputs, moneyFormatter.format(deposit));
    setAll(elements.totalOutputs, moneyFormatter.format(total));
    setAll(elements.rateOutputs, `${baseRate.toFixed(1)}%`);
    setAll(elements.commissionOutputs, commissionFormatter.format(commission));

    updateSliderProgress(elements.clientCount);
    updateSliderProgress(elements.deposit);
    updateAriaValueText(elements.clientCount, integerFormatter.format(clientCount), 'calculator.clientCountAriaSuffix');
    updateAriaValueText(elements.deposit, moneyFormatter.format(deposit), 'calculator.depositAriaSuffix');

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
    updateCalculator();
    window.addEventListener('languagechange', updateCalculator);
  });
})();
