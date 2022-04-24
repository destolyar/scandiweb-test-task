import React from "react";
import { firstLetterToUpperCase } from "../../app/utils";
import { CategoriesItemProps, CategoriesItemState } from "../../entites/interfaces/components/categories-item";

export class CategoriesItem extends React.Component<CategoriesItemProps, CategoriesItemState> {
  render() {
    return(
        <div className="header__categories__item-container">
          <input className="header__categories__item-container__input" 
          value={this.props.category} type="radio" id={this.props.category + "-category"} 
          onClick={(element) => this.props.setCategory(element.currentTarget.value)}
          />
            <label className="header__categories__item-container__label" 
            htmlFor={this.props.category + "-category"}
            >{firstLetterToUpperCase(this.props.category)}</label>
        </div>
    )
  }
}