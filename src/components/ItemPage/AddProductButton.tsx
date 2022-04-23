import React from "react";
import { CartContext } from "../../context/CartContext";
import { AddProductButtonProps, AddProductButtonState } from "../../entites/interfaces/components/add-product-button";

export class AddProductButton extends React.Component<AddProductButtonProps, AddProductButtonState> {  
  static contextType = CartContext
  
  render() {
    const {appendProduct} = this.context
    return(<button className="item-page__info__add-to-cart" onClick={() => {appendProduct(this.props.productInfo)}}>Add to cart</button>)
  }
}