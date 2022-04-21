export interface ProductInfo {
  __typename: "Product",
  id: string,
  name: string,
  inStock: boolean,
  gallery: string[],
  description: string,
  category: string,
  brand: string,
  prices: CurrencyInfo[],
  attributes: attribute[]
}

export interface CurrencyInfo {
  amount: string,
  currency: {
    label: string,
    symbol: string
  }
}

export interface Category {
  name: string,
  products: ProductInfo[],
  __typename: "Category"
}

export interface Categories {
  categories: Category[]
}

export interface attribute {
  name: string,
  type: string,
  items: attributeItem[]
}

export interface attributeItem {
  displayValue: string,
  value: string
}
