import { ProductInfo } from "../data/products"

export interface ItemPageProps {
  
}

export interface ItemPageState {
  product: ProductInfo,
  currentImage: string,
  price: {
    amount: string,
    currency: {
      label: string,
      symbol: string
    }
  }
}