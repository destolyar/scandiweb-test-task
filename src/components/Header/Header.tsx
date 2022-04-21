import React from "react";
import { Link } from "react-router-dom";
import '../../styles/components/header.scss';
import { CartLink } from "./CartLink";
import { Categories } from "./Categories";
import { CurrencyDropdown } from "./CurrencyDropdown";
import { HeaderProps, HeaderState } from "../../entites/interfaces/components/header";

export class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return(
      <header className="header">
        <Categories category={this.props.category} setCategory={this.props.setCategory}/>
        <Link to="/">
          <img className="header__logo" src="./logo.png" alt="Store logo" />
        </Link>
        <div className="header__actions">
          <CurrencyDropdown currency={this.props.currency} setCurrency={this.props.setCurrency}/>
          <Link to='/cart'>
            <CartLink/>
          </Link>
        </div>
      </header>
    )
  }
}