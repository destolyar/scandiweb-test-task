import { Attributes } from "../context/cart-provider"
import { attributeItem, CurrencyInfo } from "../data/products"
import { AttributesState } from "./attributes"

export interface CartItemProps {
  product: {
    amount: number,
    attributes: Attributes[],
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