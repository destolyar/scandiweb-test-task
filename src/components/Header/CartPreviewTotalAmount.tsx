import React from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { CartPreviewTotalAmountProps, CartPreviewTotalAmountState } from "../../entites/interfaces/components/cart-preview-total-amount";
import { Price } from "../../entites/interfaces/context/cart-provider";

export class CartPreviewTotalAmount extends React.Component
<CartPreviewTotalAmountProps, CartPreviewTotalAmountState> {
  static contextType = CurrencyContext
  
  state = {
    totalAmount: 0,
    productsAmount: 0,
    currentCurrency: '$'

  }

  //If products more then one, each product amount * product price, after that summing and show.
  //If we have'nt products in cart, totalAmount = 0
  componentDidUpdate() {
    const {currency} = this.context
    if((this.props.products.length > 0) && (this.state.productsAmount !== this.props.products.map((product) => product.amount).reduce((previosValue, currentValue) => previosValue + currentValue, 0))) {
      const totalAmount: number[] = this.props.products.map((product => product.amount * product.prices.filter((price) => 
      price.currency.symbol === currency.symbol)[0].amount))
  
      this.setState({
        totalAmount: totalAmount.reduce((previosPrice, currentPrice) => previosPrice + currentPrice, 0),
        currentCurrency: currency.symbol,
        productsAmount: this.props.products.map((product) => product.amount).reduce((previosValue, currentValue) => previosValue + currentValue, 0)
      })
    }

    if(this.props.products.length === 0) {
      this.setState({totalAmount: 0})
    }
  }

  render() {
    return(
      <h3 className="header__actions__cart-preview__window__content-container__total-amount__amount">{this.state.currentCurrency}{Math.trunc(this.state.totalAmount)}</h3>
    )
  }
}