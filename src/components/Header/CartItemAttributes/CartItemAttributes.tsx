import React from "react";
import { 
  CartItemAttributesProps, 
  CartItemAttributesState 
} from "../../../entites/interfaces/components/CartAttributes/attributes";
import '../../../styles/components/cart-item-attributes.scss';
import { CartItemAttributesItem } from "./CartItemAttributesItem";

export class CartItemAttributes extends React.Component
<CartItemAttributesProps, CartItemAttributesState> {
  render() {
    const cartClassName: string = (this.props.isPreviewCart) ? "cart-preview-attributes" : "cart-attributes"
    return(
      <div className={`${cartClassName}`}>
        <h3 className={`${cartClassName}__title`}>{this.props.productAttributes.name}:</h3>
        <div className={`${cartClassName}__items`}>
          {this.props.productAttributes.items.map((attributesItem) => <CartItemAttributesItem
          key={attributesItem.value}
          displayValue={attributesItem.displayValue}
          value={attributesItem.value}
          attributeName={this.props.productAttributes.name}
          attributeType={this.props.productAttributes.type}
          isChecked={attributesItem.value === this.props.pickedAttribute}
          productName={this.props.productName}
          cartClassName={`${cartClassName}__items__item-container`}
          fullProductInfo={this.props.fullProductInfo}
          />)}
        </div>
      </div>
    )
  }
}