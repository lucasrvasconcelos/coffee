export function currency(value: number) {
  const currency = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return currency
}

export function renderSwitchPayment(payment: string) {
  switch (payment) {
    case 'credito':
      return 'Cartão de crédito'
    case 'debito':
      return 'Cartão de débito'
    default:
      return 'Dinheiro'
  }
}
