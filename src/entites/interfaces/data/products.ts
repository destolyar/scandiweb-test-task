export interface ProductInfo {
  __typename: "Product",
  id: string,
  name: string,
  inStock: boolean,
  gallery: string[],
  description: string,
  category: string,
  brand: string,
  prices: CurrencyInfo[]
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
