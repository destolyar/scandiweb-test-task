import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CartPreviewProps, CartPreviewState } from "../../entites/interfaces/components/cart-preview";
import { CartProviderState } from '../../entites/interfaces/context/cart-provider';
import '../../styles/components/cart-preview.scss'
import { CartItem } from "./CartItem";
import { CartPreviewTotalAmount } from "./CartPreviewTotalAmount";

export class CartPreview extends React.Component<CartPreviewProps, CartPreviewState> {
  static contextType = CartContext
  render() {
    const {cartProducts}: CartProviderState = this.context
    return(
      <div className="header__actions__cart-preview">
          <div className="header__actions__cart-preview__amount">{cartProducts.length}</div>
          <input type="checkbox" id="cart-preview-checkbox" style={{display: "none"}}/>
          <label className="header__actions__cart-preview__label" htmlFor="cart-preview-checkbox">
            <img className="header__actions__cart-preview__label__image" src="/header-cart.png" alt="Cart icon"/>
          </label>
          <div className="header__actions__cart-preview__window">
            <div className="header__actions__cart-preview__window__content-container">
              <h1 className="header__actions__cart-preview__window__content-container__title">My bag, {cartProducts.length} items</h1>
              <div className="header__actions__cart-preview__window__content-container__items">{cartProducts.map((i: any) => <CartItem key={i.name} product={i}/>)}</div>
              <div className="header__actions__cart-preview__window__content-container__total-amount">
                <h3 className="header__actions__cart-preview__window__content-container__total-amount__title">Total</h3>
                <CartPreviewTotalAmount products={cartProducts}/>
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