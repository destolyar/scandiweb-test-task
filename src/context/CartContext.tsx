import React from "react";

export const CartContext: any = React.createContext({
  cartProducts: []
})

export class CartProvider extends React.Component<any, any> {
  constructor(props: {}) {
    super(props)
    this.state = {
      cartProducts: []
    }
    this.appendProduct = this.appendProduct.bind(this)
  }

  appendProduct(product: any) {
    this.setState((state: any) => ({
      cartProducts: [...state.cartProducts, product]
    }))
  }
  
  render() {
    const {cartProducts} = this.state;
    return(
      <CartContext.Provider value={{appendProduct: this.appendProduct, cartProducts: cartProducts}}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}