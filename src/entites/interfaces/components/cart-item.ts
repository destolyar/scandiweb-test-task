import { ContextCartProduct } from "../context/cart-provider"
import { CurrencyInfo } from "../data/products"

export interface CartItemProps {
  product: ContextCartProduct
  isPreviewCart: boolean
}

export interface CartItemState {
  price: CurrencyInfo
}