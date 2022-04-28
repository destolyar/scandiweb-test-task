import React from "react";
import '../../styles/components/cart.scss'
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../Header/CartItem";
import { ContextCartProduct } from "../../entites/interfaces/context/cart-provider";
import { CartProps, CartState } from "../../entites/interfaces/components/cart";

export class Cart extends React.Component<CartProps, CartState> {
  static contextType = CartContext
  
  state = {
    cartProducts: [],
    quanity: 0,
    totalPrice: 0,
    currencySymbol: "$"
  }

  componentDidMount() {
    const {cartProducts} = this.context
    console.log()
    const totalPrice = cartProducts.map(((product: ContextCartProduct) => product.amount * product.prices.filter((price) => price.currency.symbol === this.props.currency.symbol)[0].amount))
    this.setState({
      totalPrice: Math.trunc(totalPrice.reduce((previosPrice: number, currentPrice: number) => previosPrice + currentPrice, 0)),
      cartProducts: cartProducts,
      quanity: cartProducts.map((product: ContextCartProduct) => product.amount).reduce((previosValue: number, currentValue: number) => previosValue + currentValue, 0),
      currencySymbol: this.props.currency.symbol
    })
  }

  componentDidUpdate() {
    const {cartProducts} = this.context
    if(this.state.cartProducts.length !== cartProducts.length) {
      this.setState({
        cartProducts: cartProducts,
      })
    }
    const totalPrice = cartProducts.map(((product: ContextCartProduct) => product.amount * product.prices.filter((price) => price.currency.symbol === this.props.currency.symbol)[0].amount))
    const quanity = cartProducts.map((product: ContextCartProduct) => product.amount).reduce((previosValue: number, currentValue: number) => previosValue + currentValue, 0)
    if(quanity !== this.state.quanity) {
      this.setState({
        quanity: quanity,
        totalPrice: Math.trunc(totalPrice.reduce((previosPrice: number, currentPrice: number) => previosPrice + currentPrice, 0))
      })
    }

    if(this.state.currencySymbol !== this.props.currency.symbol) {
      this.setState({
        currencySymbol: this.props.currency.symbol
      })
    }
  }

  render() {
    const {clearCart} = this.context
    return(
      <main className="cart">
        <h1 className="cart__title">Cart</h1>
        {this.state.cartProducts.map((i: ContextCartProduct) =>
            <CartItem key={i.name} product={i} isPreviewCart={false}/>
        )}
        {(this.state.cartProducts.length > 0) ? 
          <div className="cart__order-info">
            <h3 className="cart__order-info__item">Tax: <span className="cart__order-info__item__value">{this.state.currencySymbol}{Math.trunc(this.state.totalPrice * 0.15)}</span></h3>
            <h3 className="cart__order-info__item">Qty: <span className="cart__order-info__item__value">{this.state.quanity}</span></h3>
            <h3 className="cart__order-info__item">Total: <span className="cart__order-info__item__value">{this.state.currencySymbol}{this.state.totalPrice}</span></h3>
            <button className="cart__order-info__order-button" onClick={() => clearCart()}>ORDER</button>
          </div> : 
          <h3 className="cart__order-notification">You have nothing in cart</h3>
          }
      </main>
    )
  }
}
