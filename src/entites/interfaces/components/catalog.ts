import { Category } from "../data/products"

export interface CatalogProps {
  category: string,
  currency: {
    label: string,
    symbol: string
  }
}

export interface CatalogState {
  allProducts: Category[]
}