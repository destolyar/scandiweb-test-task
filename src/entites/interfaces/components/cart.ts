import { ContextCartProduct } from "../context/cart-provider";

export interface CartProps {
  currency: {
    label: string,
    symbol: string
  }
}

export interface CartState {
  cartProducts: ContextCartProduct[],
  quanity: number,
  totalPrice: number,
  currencySymbol: string
}