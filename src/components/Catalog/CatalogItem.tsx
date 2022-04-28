import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { CartContext } from "../../context/CartContext";
import { CatalogItemProps, CatalogItemState } from "../../entites/interfaces/components/catalog-item";


class CatalogItem extends React.Component<CatalogItemProps & RouteComponentProps<any>, CatalogItemState> {
  static contextType = CartContext
  render() {
    const {appendProduct} = this.context

    return(
      <div className="catalog__products__catalog-card-container">
        <div className="catalog__products__catalog-card-container__cart" onClick={() => {
          const pickedAttributes = {pickedAttributes: this.props.fullProductInfo.attributes.map((attributes: any) => ({
            name: attributes.name,
            type: attributes.type,
            __typename: "AttributeSet",
            pickedValue: attributes.items[0].value
          }))}
          appendProduct(Object.assign({} ,this.props.fullProductInfo, pickedAttributes))
        }}>
          <img src="./cart.png" alt="" />
        </div>
        
        <div className="catalog__products__catalog-card-container__card" onClick={() => this.props.history.push(`/product/${this.props.id}`)}>
          <div className="catalog__products__catalog-card-container__card__image-container">
            <div className="catalog__products__catalog-card-container__card__image-container__out-of-stock" 
            style={{display: (this.props.inStock) ? 'flex' : 'none'}}>OUT OF STOCK</div>
            <img className="catalog__products__catalog-card-container__card__image-container__image" src={this.props.gallery[0]} alt="" />
          </div>
          <div className="catalog__products__catalog-card-container__card__title">{this.props.name}</div>
          <div className="catalog__products__catalog-card-container__card__price">{this.props.currency.symbol}{Math.trunc(+this.props.amount)}</div>
        </div>
      </div>
    )
  }
}

export default withRouter(CatalogItem)