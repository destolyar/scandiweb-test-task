import { attributeItem, CurrencyInfo } from "../data/products"
import { AttributesState } from "./attributes"

export interface CartItemProps {
  product: {
    amount: number,
    attributes: attributeItem[],
    brand: string,
    name: string,
    pickedAttributes: AttributesState[],
    prices: CurrencyInfo[],
    gallery: string[]
  }
}

export interface CartItemState {
  price: CurrencyInfo
}