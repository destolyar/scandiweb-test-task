import React from "react";

export class CartLink extends React.Component {
  render() {
    return(
      <div className="header__actions__cart">
        <img className="header__actions__cart__image" src="./cart.png" alt="Cart icon"/>
        <div className="header__actions__cart__amount">1</div>
      </div>
    )
  }
}