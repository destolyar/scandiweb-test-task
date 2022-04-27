import { Attributes, ContextCartProduct } from "../context/cart-provider"
import { attributeItem, CurrencyInfo } from "../data/products"
import { AttributesState } from "./attributes"

export interface CartItemProps {
  product: ContextCartProduct
}

export interface CartItemState {
  price: CurrencyInfo
}