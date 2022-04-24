import React from "react";
import { AttributesProps, AttributesState } from "../../entites/interfaces/components/attributes";
import { AttributesItem } from "./AttributesItem";

export class Attributes extends React.Component<AttributesProps, AttributesState> {
  state = {
    name: this.props.attributes.name,
    type: this.props.attributes.type,
    pickedValue: this.props.attributes.items[0].value
  }

  render() {
    return(
      <div className="item-page__info__attributes">
        <h2 className="item-page__info__attributes__name">{this.props.attributes.name}</h2>
        <div className="item-page__info__attributes__items">{this.props.attributes.items.map((i, index) => 
        <AttributesItem 
        key={i.value}
        index={index} 
        attributeItemInfo={i} 
        attributeName={this.state.name}
        attributeType={this.state.type}
        setAttribute={this.props.setAttribute}
        />
        )}
        </div>
      </div>
    )
  }
}