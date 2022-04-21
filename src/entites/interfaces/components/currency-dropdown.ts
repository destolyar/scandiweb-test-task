export interface CurrencyDropdownProps {
  currency: {
    label: string, 
    symbol: string
  },
  setCurrency: (symbol: string, label: string) => void
}

export interface CurrencyDropdownState {
  currencies: {
    label: string,
    symbol: string
  }[]
}