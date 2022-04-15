import React from "react";
import { CatalogItemProps, CatalogItemState } from "../../entites/interfaces/components/catalog-item";

export class CatalogItem extends React.Component<CatalogItemProps, CatalogItemState> {
  render() {
    return(
      <div className="catalog__products__catalog-card">
        <img className="catalog__products__catalog-card__image" src={this.props.gallery} alt="" />
        <div className="catalog__products__catalog-card__title">{this.props.name}</div>
        <div className="catalog__products__catalog-card__price">{this.props.currency.symbol}{Math.trunc(+this.props.amount)}</div>
      </div>
    )
  }
}