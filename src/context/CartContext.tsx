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
    const repeatedProducts = this.state.cartProducts.filter((i: {name: string}) => {
      return i.name === product.name
    })
    if(repeatedProducts.length === 0) {
      this.setState({
        cartProducts: [...this.state.cartProducts, (Object.assign(product, {amount: 1}))]
      }) 
    }
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