export interface CatalogItemProps {
  category: string,
  currency: {
    label: string,
    symbol: string
  }
}

export interface CatalogItemState {
  allProducts: any
}