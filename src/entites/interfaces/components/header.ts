export interface HeaderProps {
  currency: {
    label: string, 
    symbol: string
  },
  setCurrency: (symbol: string, label: string) => void
}

export interface HeaderState {
  
}