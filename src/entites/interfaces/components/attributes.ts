import { attribute } from "../data/products";

export interface AttributesProps {
  attributes: attribute,
  setAttribute: (attribute: AttributesState) => void
}

export interface AttributesState {
  name: string,
  type: string,
  pickedValue: string,
}
