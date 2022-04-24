import { attribute, CurrencyInfo } from "../data/products"
import { AttributesState } from "./attributes"

export interface AddProductButtonProps {
  productInfo: {
    name: string,
    brand: string,
    prices: CurrencyInfo[],
    attributes: attribute[],
    pickedAttributes: AttributesState[]
    gallery: string[]
  }
}

export interface AddProductButtonState {
  
}