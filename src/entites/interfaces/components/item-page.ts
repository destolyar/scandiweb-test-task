import { ProductInfo } from "../data/products"
import { AttributesState } from "./attributes"

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
  pickedAttributes: AttributesState[]
}