import React from "react";
import '../styles/components/header.scss';

export class Header extends React.Component {
  render() {
    return(
      <header className="header">
        <div className="header__categories">
          <p className="header__categories__item">Women</p>
          <p className="header__categories__item">Men</p>
          <p className="header__categories__item">Kids</p>
        </div>
        <img className="header__logo" src="./logo.png" alt="Store logo" />
        <div className="header__actions">
          <select className="header__actions__currency" name="" id="">
            <option value="" defaultChecked>$USD</option>
            <option value="">€EUR</option>
            <option value="">¥JPY</option>
          </select>
          <div className="header__actions__cart">
            <img className="header__actions__cart__image" src="./cart.png" alt="Cart icon"/>
            <div className="header__actions__cart__amount">1</div>
          </div>
        </div>
      </header>
    )
  }
}