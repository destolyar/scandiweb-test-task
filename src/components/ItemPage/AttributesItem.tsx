import React from "react";
import { AttributesItemProps, AttributesItemState } from "../../entites/interfaces/components/attributes-item";

export class AttributesItem extends React.Component<AttributesItemProps, AttributesItemState> {
  componentDidMount() {
    if(this.props.index === 0) {
      this.props.setAttribute({
        name: this.props.attributeName,
        type: this.props.attributeType,
        pickedValue: this.props.attributeItemInfo.value
      }, true)
    }
  }

  render() {
    const id: string = this.props.attributeName + '' + this.props.attributeItemInfo.value
    return(
      <div className="item-page__info__attributes__items__item-container">
        <input defaultChecked={(this.props.index === 0) ? true : false} style={{display: "none",}} type="radio" name={this.props.attributeName} value={this.props.attributeItemInfo.value} id={id}/>
        <label className="item-page__info__attributes__items__item-container__item" style={(this.props.attributeType === 'swatch') ? {
          width: '30px',
          height: '30px',
          backgroundColor: this.props.attributeItemInfo.value} : {}} key={this.props.attributeItemInfo.value} htmlFor={id} onClick={() => {
          this.props.setAttribute({
            name: this.props.attributeName,
            type: this.props.attributeType,
            pickedValue: this.props.attributeItemInfo.value
          })
        }}>{(this.props.attributeType === 'swatch') ? '' : this.props.attributeItemInfo.value}</label>
      </div>
    )
  }
}