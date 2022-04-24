import React from "react";
import { CartContext } from "../../context/CartContext";

export class Cart extends React.Component {
  static contextType = CartContext
  render() {
    const {cartProducts} = this.context
    return(
      <main className="cart">{cartProducts.map((i: {name: string}) => <div>{i.name}</div>)}</main>
    )
  }
}
