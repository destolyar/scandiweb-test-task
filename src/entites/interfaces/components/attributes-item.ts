import { attributeItem } from "../data/products";
import { AttributesState } from "./attributes";

export interface AttributesItemProps {
  index: number,
  attributeName: string,
  attributeType: string,
  attributeItemInfo: attributeItem,
  setAttribute: (attribute: AttributesState, isFirstSet?: boolean) => void
}

export interface AttributesItemState {
  
}