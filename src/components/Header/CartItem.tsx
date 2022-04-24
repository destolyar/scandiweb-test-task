import React from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { CartItemProps, CartItemState } from "../../entites/interfaces/components/cart-item";
import '../../styles/components/cart-item.scss';

export class CartItem extends React.Component<CartItemProps, CartItemState> {
  state = {
    price: {
      amount: '',
      currency: {
        symbol: '',
        label: ''
      }
    }
  }

  componentDidMount() {
    const {currency} = this.context
    const price = this.props.product.prices.filter((i: {currency: {label: string}}) => i.currency.label === currency.label)[0]

    this.setState({
      price: {
        amount: Math.trunc(+price.amount).toString(),
        currency: price.currency
      }
    })

    this.props.changeTotalCost(+price.amount * this.props.product.amount)
  }

  static contextType = CurrencyContext

  render() {
    return(
      <div className="cart-item">
        <div className="cart-item__info">
          <h3>{this.props.product.brand}</h3>
          <h3>{this.props.product.name}</h3>
          <h3>{this.state.price.currency.symbol + '' + this.state.price.amount}</h3>
          <div></div>
        </div>
        <div className="cart-item__preview">
          <div className="cart-item__preview__amount">
            <div>+</div>
            {this.props.product.amount}
            <div>-</div>
          </div>
          <img className="cart-item__preview__image" src={this.props.product.gallery[0]} 
          alt={this.props.product.name} />
        </div>
      </div>
    )
  }
}