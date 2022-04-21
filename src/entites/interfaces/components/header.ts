export interface HeaderProps {
  category: string,
  setCategory: (category: string) => void,
  
  currency: {
    label: string, 
    symbol: string
  },
  setCurrency: (symbol: string, label: string) => void
}

export interface HeaderState {
  
}