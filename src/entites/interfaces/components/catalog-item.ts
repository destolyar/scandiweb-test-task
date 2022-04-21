export interface CatalogItemProps {
    id: string,
    inStock?: boolean,
    name: string,
    currency: {
      label: string,
      symbol: string
    },
    gallery: string[]
    amount: string
}


export interface CatalogItemState {
  allProducts: any
}