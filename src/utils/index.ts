export const parseToBrl = (amount: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getDescription = (text: string) => {
  if (text.length > 250) {
    return text.slice(0, 250) + '...'
  }
  return text
}
