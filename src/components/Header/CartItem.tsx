import React from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { CartItemProps, CartItemState } from "../../entites/interfaces/components/cart-item";
import '../../styles/components/cart-item.scss';
import { CartItemAmount } from "./CartItemAmount";
import { CartItemAttributes } from "./CartItemAttributes/CartItemAttributes";

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
  
  //Setting current currency
  componentDidMount() {
    const {currency} = this.context
    const price = this.props.product.prices.filter((i: {currency: {label: string}}) => i.currency.label === currency.label)[0]

    this.setState({
      price: {
        amount: Math.trunc(+price.amount).toString(),
        currency: price.currency
      }
    })
  }

  //Comparing current currency with currency in component state and re-render if they are not equal. 
  componentDidUpdate() {
    const {currency} = this.context
    if(currency.label !== this.state.price.currency.label) {
      const price = this.props.product.prices.filter((i: {currency: {label: string}}) => i.currency.label === currency.label)[0]
    
      this.setState({
        price: {
          amount: Math.trunc(+price.amount).toString(),
          currency: price.currency
        }
      })
    }
  }

  static contextType = CurrencyContext

  render() {
    return(
      <div className="cart-item">
        <div className="cart-item__info">
          <h3 className="cart-item__info__brand">{this.props.product.brand}</h3>
          <h3 className="cart-item__info__name">{this.props.product.name}</h3>
          <h3 className="cart-item__info__price">{this.state.price.currency.symbol + '' + this.state.price.amount}</h3>
          <div className="cart-item__info__attributes">
            {this.props.product.attributes.map((productAttributes => <CartItemAttributes 
            productAttributes={productAttributes} 
            pickedAttribute={this.props.product.pickedAttributes.filter((attributeItem) => attributeItem.name === productAttributes.name)[0].pickedValue}/>))}
          </div>
        </div>
        <div className="cart-item__preview">
          <CartItemAmount productAmount={this.props.product.amount} productName={this.props.product.name}/>
          <img className="cart-item__preview__image" src={this.props.product.gallery[0]} 
          alt={this.props.product.name} />
        </div>
      </div>
    )
  }
}