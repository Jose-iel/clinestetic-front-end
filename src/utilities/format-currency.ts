export function formatCurrency(value: number) {
  const options = { style: 'currency', currency: 'BRL' };
  const currencyConfig = new Intl.NumberFormat('pt-BR', options);

  const formattedValue = currencyConfig.format(value);
  const prefix = formattedValue.replace('R$', '');

  return prefix.trim();
}
