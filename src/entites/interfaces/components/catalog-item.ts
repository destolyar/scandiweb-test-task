import { ContextCartProduct } from "../context/cart-provider"

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
    fullProductInfo: any
}


export interface CatalogItemState {
  allProducts: any
}