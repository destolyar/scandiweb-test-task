import React from "react";
import { CartProviderState, ContextCartProduct } from "../entites/interfaces/context/cart-provider";

export const CartContext: any = React.createContext({
  cartProducts: []
})

export class CartProvider extends React.Component<{}, CartProviderState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      cartProducts: []
    }
    this.appendProduct = this.appendProduct.bind(this)
    this.increaseAmountOfProduct = this.increaseAmountOfProduct.bind(this)
    this.decreaseAmountOfProduct = this.decreaseAmountOfProduct.bind(this)
  }

  componentDidMount() {
    this.setState({
      cartProducts: JSON.parse(localStorage.getItem("CartProducts") || '{}')
    })
  }

  componentDidUpdate() {
    localStorage.setItem("CartProducts", JSON.stringify(this.state.cartProducts))
  }

  //Checking products what adding in cart on duplicates
  appendProduct(product: any) {
    const repeatedProducts = this.state.cartProducts.filter((i: {name: string}) => {
      return i.name === product.name
    })
    if(repeatedProducts.length === 0) {
      this.setState({
        cartProducts: [...this.state.cartProducts, (Object.assign(product, {amount: 1}))]
      })
    }
  }
  
  //Increasing amount of product by one
  increaseAmountOfProduct(productName: string) {
    let updatedProduct: ContextCartProduct = this.state.cartProducts.filter((i) => i.name === productName)[0]
    updatedProduct['amount'] = ++updatedProduct.amount
    
    this.setState((state: CartProviderState) => ({
      cartProducts: state.cartProducts.map((product) => (product.name === updatedProduct.name) ? updatedProduct : product)
    }))
  }

  //Decreasing amount of product by one, if product amount = 0 - delete him
  decreaseAmountOfProduct(productName: string) {
    let updatedProduct: ContextCartProduct = this.state.cartProducts.filter((i) => i.name === productName)[0]
    updatedProduct['amount'] = --updatedProduct.amount

    if(updatedProduct['amount'] > 0) {
      this.setState((state: CartProviderState) => ({
        cartProducts: state.cartProducts.map((product) => (product.name === updatedProduct.name) ? updatedProduct : product)
      }))
    } else {
      this.setState((state: CartProviderState) => ({
        cartProducts: state.cartProducts.filter((product) => product.name !== updatedProduct.name)
      }))
    }
  }

  render() {
    const {cartProducts} = this.state;
    return(
      <CartContext.Provider value={{
        appendProduct: this.appendProduct,
        increaseAmountOfProduct: this.increaseAmountOfProduct,
        decreaseAmountOfProduct: this.decreaseAmountOfProduct,
        cartProducts: cartProducts}}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}