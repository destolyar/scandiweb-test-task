import React from "react";
import { CatalogItemProps, CatalogItemState } from "../../entites/interfaces/components/catalog-item";

export class CatalogItem extends React.Component<CatalogItemProps, CatalogItemState> {
  render() {
    return(
      <div className="catalog__products__catalog-card-container">
        <div className="catalog__products__catalog-card-container__cart">
          <img src="./cart.png" alt="" />
        </div>
        <div className="catalog__products__catalog-card-container__card">
          <div className="catalog__products__catalog-card-container__card__image-container">
            <div className="catalog__products__catalog-card-container__card__image-container__out-of-stock" 
            style={{display: (this.props.inStock) ? 'flex' : 'none'}}>OUT OF STOCK</div>
            <img className="catalog__products__catalog-card-container__card__image-container__image" src={this.props.gallery} alt="" />
          </div>
          <div className="catalog__products__catalog-card-container__card__title">{this.props.name}</div>
          <div className="catalog__products__catalog-card-container__card__price">{this.props.currency.symbol}{Math.trunc(+this.props.amount)}</div>
        </div>
      </div>
    )
  }
}