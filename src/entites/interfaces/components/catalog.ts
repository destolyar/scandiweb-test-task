export interface CatalogProps {
  category: string,
  currency: {
    label: string,
    symbol: string
  }
}

export interface CatalogState {
  allProducts: any
}