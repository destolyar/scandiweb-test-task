export interface CartProviderProps {

}

export interface CartProviderState {
  cartProducts: ContextCartProduct[]
}

export interface ContextCartProduct {
  amount: number,
  attributes: Attributes[],
  pickedAttributes: PickedAttributes[],
  name: string,
  brand: string,
  prices: Price[]
}

export interface Attributes {
  name: string,
  type: string,
  items: AttributesItem[]
}

export interface AttributesItem {
  displayValue: string,
  value: string
}

export interface PickedAttributes {
  name: string,
  type: string,
  pickedValue: string
}

export interface Price {
  amount: number,
  currency: {
    label: string,
    symbol: string
  }
}