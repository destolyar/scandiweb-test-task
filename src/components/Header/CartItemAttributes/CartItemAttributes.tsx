import React from "react";
import { 
  CartItemAttributesProps, 
  CartItemAttributesState 
} from "../../../entites/interfaces/components/CartAttributes/attributes";

export class CartItemAttributes extends React.Component
<CartItemAttributesProps, CartItemAttributesState> {
  componentDidMount() {
    console.log('This is Picked Product Attribute:')
    console.log(this.props.pickedAttribute)
    console.log('This is Product Attributes:')
    console.log(this.props.productAttributes)
  }
  render() {
    return(
      <div>
        <h3>{this.props.productAttributes.name}</h3>
      </div>
    )
  }
}