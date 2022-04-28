import { ContextCartProduct } from "../../context/cart-provider";

export interface CartItemAttributesItemProps {
  displayValue: string,
  value: string,
  productName: string,
  attributeName: string,
  attributeType: string,
  cartClassName: string,
  isChecked: boolean,
  fullProductInfo: ContextCartProduct,
  isPreviewCart: boolean
}

export interface CartItemAttributesItemState {
  
}