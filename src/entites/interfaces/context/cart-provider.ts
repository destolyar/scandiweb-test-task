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

interface Attributes {
  name: string,
  type: string,
  item: AttributesItem[]
}

interface AttributesItem {
  displayValue: string,
  value: string
}

interface PickedAttributes {
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