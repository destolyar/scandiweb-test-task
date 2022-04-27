import { Attributes, AttributesItem, ContextCartProduct, PickedAttributes } from "../../context/cart-provider";

export interface CartItemAttributesProps {
  productAttributes: Attributes,
  pickedAttribute: string,
  productName: string,
  isPreviewCart: boolean,
  fullProductInfo: ContextCartProduct
}

export interface CartItemAttributesState {
  
}