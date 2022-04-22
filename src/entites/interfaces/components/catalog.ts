import { Category } from "../data/products"

export interface CatalogProps {
  category: string,
}

export interface CatalogState {
  allProducts: Category[]
}