import React from "react";
import '../../styles/components/catalog.scss'
import { CatalogProps, CatalogState } from "../../entites/interfaces/components/catalog";
import CatalogItem from './CatalogItem'
import { getAllProducts } from "../../app/requests";
import { Category, CurrencyInfo, ProductInfo } from "../../entites/interfaces/data/products";


export class Catalog extends React.Component<CatalogProps, CatalogState> {
  state = {
      allProducts: [],
    }

  componentDidMount() {
    getAllProducts().then(i => {
        this.setState({allProducts: i.data.categories})
    })
  }

  render() {
    return(
      <main className="catalog">
        <h1 className="catalog__title">Category: {this.props.category}</h1>
        <section className="catalog__products">
        {this.state.allProducts.map((category: Category) => {
          if(category.name === this.props.category) {
            return category.products.map((product: ProductInfo) => {
              return <CatalogItem 
              id={product.id}
              key={product.name}
              name={product.name} 
              gallery={product.gallery}
              currency={{
                label: this.props.currency.label,
                symbol: this.props.currency.symbol
              }}
              amount={product.prices.filter((i: CurrencyInfo) => i.currency.label === this.props.currency.label)[0].amount}
              ></CatalogItem>
            })
          }})}
        </section>
      </main>
    )
  }
}