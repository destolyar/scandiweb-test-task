import { ContextCartProduct } from "../context/cart-provider";

export interface CartPreviewTotalAmountProps {
  products: ContextCartProduct[]
}

export interface CartPreviewTotalAmountState {
  totalAmount: number,
  productsAmount: number,
  currentCurrency: string
}