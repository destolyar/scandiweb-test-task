import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CartPreviewProps, CartPreviewState } from "../../entites/interfaces/components/cart-preview";
import '../../styles/components/cart-preview.scss'
import { CartItem } from "./CartItem";

export class CartPreview extends React.Component<CartPreviewProps, CartPreviewState> {
  state = {
    totalCost : 0
  }

  static contextType = CartContext
  render() {
    const {cartProducts} = this.context
    const changeTotalCost = (amount: number) => {
      this.setState((state) => ({
        totalCost: state.totalCost + Math.trunc(amount)
      }))
    }
    return(
      <div className="header__actions__cart-preview">
          <div className="header__actions__cart-preview__amount">{cartProducts.length}</div>
          <input type="checkbox" id="cart-preview-checkbox" style={{display: "none"}}/>
          <label className="header__actions__cart-preview__label" htmlFor="cart-preview-checkbox">
            <img className="header__actions__cart-preview__label__image" src="./header-cart.png" alt="Cart icon"/>
          </label>
          <div className="header__actions__cart-preview__window">
            <div className="header__actions__cart-preview__window__content-container">
              <h1 className="header__actions__cart-preview__window__content-container__title">My bag, {cartProducts.length} items</h1>
              <div className="header__actions__cart-preview__window__content-container__items">{cartProducts.map((i: any) => <CartItem key={i.name} product={i} changeTotalCost={changeTotalCost}/>)}</div>
              <div className="header__actions__cart-preview__window__content-container__total-amount">
                <h3 className="header__actions__cart-preview__window__content-container__total-amount__title">Total</h3>
                <h3 className="header__actions__cart-preview__window__content-container__total-amount__amount">
                  {this.state.totalCost}
                </h3>
              </div>
              <div className="header__actions__cart-preview__window__content-container__action-buttons">
                <Link to='/cart' className="header__actions__cart-preview__window__content-container__action-buttons__view-bag">VIEW BAG</Link>
                <button className="header__actions__cart-preview__window__content-container__action-buttons__check-out">CHECK OUT</button>
              </div>
            </div>
          </div>
      </div>
    )
  }
}