const CURRENCY_FORMATTER = new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'VND'
});

export const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
}
