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

  componentDidMount() {
    const {currency} = this.context
    if(this.props.products.length > 0) {
      const prices: Price[] = this.props.products.map((product => 
        product.prices.filter((price) => price.currency.symbol === currency.symbol)))[0]
      this.setState({
        totalAmount: prices.reduce((previosPrice, currentPrice) => previosPrice + currentPrice.amount, 0),
        currentCurrency: currency.symbol
      })
    }
  }

  componentDidUpdate() {
    const {currency} = this.context
    if((this.props.products.length > 0) && (this.state.productsAmount !== this.props.products.length)) {
      const prices: Price[] = this.props.products.map((product => 
        product.prices.filter((price) => price.currency.symbol === currency.symbol)))[0]
      this.setState({
        totalAmount: prices.reduce((previosPrice, currentPrice) => previosPrice + currentPrice.amount, 0),
        currentCurrency: currency.symbol,
        productsAmount: this.props.products.length
      })
    }
  }

  render() {
    return(
      <h3 className="header__actions__cart-preview__window__content-container__total-amount__amount">{this.state.currentCurrency}{Math.trunc(this.state.totalAmount)}</h3>
    )
  }
}