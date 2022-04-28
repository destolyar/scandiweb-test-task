export interface CurrencyDropdownProps {
}

export interface CurrencyDropdownState {
  currencies: {
    label: string,
    symbol: string
  }[],
  dropdownDisplay: boolean
}