import React from "react";
import { CartContext } from "../../../context/CartContext";
import { 
  CartItemAttributesItemProps, 
  CartItemAttributesItemState 
} from "../../../entites/interfaces/components/CartAttributes/attributes-item";
import { ContextCartProduct } from "../../../entites/interfaces/context/cart-provider";

export class CartItemAttributesItem extends React.Component
<CartItemAttributesItemProps, CartItemAttributesItemState> {
  static contextType = CartContext

  render() {
    const {
      cartClassName,
      isChecked,
      attributeName,
      attributeType,
      productName,
      value
    } = this.props

    const {changeAttribute} = this.context

    const inputId: string = (attributeName + this.props.isPreviewCart.toString() + value + "preview").split(' ').join('')
    const name: string = (attributeName + this.props.isPreviewCart.toString() + productName + 'privew')
    
    return(
    <div className={`${cartClassName}`}>
      <input defaultChecked={isChecked} 
      name={name}
      value={value}
      id={inputId}
      type="radio" 
      style={{display: "none"}}
      />

      <label 
      className={`${cartClassName}__item`} 
      htmlFor={inputId}
      style={((attributeType === 'swatch') && (!this.props.isPreviewCart)) ? {
        width: "30px",
        height: "30px",
        backgroundColor: value,
        border: "0px solid transparent",
      } : (attributeType === 'swatch') ? {
        width: "16px",
        height: "16px",
        backgroundColor: value,
        border: "0px solid transparent",
      } : {}}
      key={value}
      onClick={() => {
        let modifedProduct: ContextCartProduct = this.props.fullProductInfo
        modifedProduct['pickedAttributes'] = modifedProduct.pickedAttributes.map((attribute) => (attribute.name === attributeName) ? 
        {
          name: attributeName,
          type: attributeType,
          pickedValue: value
        } 
        : attribute)
        changeAttribute(modifedProduct)
      }}
      >
        {(attributeType === 'swatch') ? '' : value}
      </label>
    </div>)
  }
}