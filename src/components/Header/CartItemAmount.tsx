import React from "react";
import { CartContext } from "../../context/CartContext";
import { CartItemAmountProps, CartItemAmountState } from "../../entites/interfaces/components/cart-item-amount";

export class CartItemAmount extends React.Component<CartItemAmountProps, CartItemAmountState> {
  static contextType = CartContext
  render() {
    const {increaseAmountOfProduct, decreaseAmountOfProduct} = this.context
    return(
      <div className="cart-item__preview__amount">
        <div className="cart-item__preview__amount__change-amount" onClick={() => increaseAmountOfProduct(this.props.productName)}><p>+</p></div>
        <div className="cart-item__preview__amount__amount">{this.props.productAmount}</div>
        <div className="cart-item__preview__amount__change-amount" onClick={() => decreaseAmountOfProduct(this.props.productName)}><p>&#8722;</p></div>
      </div>
    )
  }
}