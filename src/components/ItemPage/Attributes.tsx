import React from "react";
import { AttributesProps, AttributesState } from "../../entites/interfaces/components/attributes";

export class Attributes extends React.Component<AttributesProps, AttributesState> {
  render() {
    return(
      <div className="item-page__info__attributes">
        <h2 className="item-page__info__attributes__name">{this.props.attributes.name}</h2>
        <div className="item-page__info__attributes__items">{this.props.attributes.items.map((i) => 
          <div className="item-page__info__attributes__items__item">{i.value}</div>)}</div>
      </div>
    )
  }
}