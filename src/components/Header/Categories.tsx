import React from "react";

export class Categories extends React.Component {
  render() {
    return(
      <div className="header__categories">
        <input name="category" type="radio" id="woman-category"/>
        <label className="header__categories__item" htmlFor="woman-category" id="women-category-label" defaultChecked>Women</label>

        <input name="category" type="radio" id="men-category"/>
        <label className="header__categories__item" htmlFor="men-category" id="men-category-label">Men</label>

        <input name="category" type="radio" id="kids-category"/>
        <label className="header__categories__item" htmlFor="kids-category" id="kids-category-label">Kids</label>
      </div>
    )
  }
}