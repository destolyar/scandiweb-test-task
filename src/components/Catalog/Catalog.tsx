import React from "react";
import '../../styles/components/catalog.scss'
import { CatalogProps, CatalogState } from "../../entites/interfaces/components/catalog";
import CatalogItem from './CatalogItem'
import { getAllProducts } from "../../app/requests";
import { Category, CurrencyInfo, ProductInfo } from "../../entites/interfaces/data/products";
import { CurrencyContext } from "../../context/CurrencyContext";
import { firstLetterToUpperCase } from "../../app/utils";


export class Catalog extends React.Component<CatalogProps, CatalogState> {
  state = {
      allProducts: [],
    }

  componentDidMount() {
    getAllProducts().then(i => {
        this.setState({allProducts: i.data.categories})
    })
  }

  static contextType = CurrencyContext
  
  render() {
    const {currency} = this.context
    return(
      <main className="catalog">
        <h1 className="catalog__title">Category: {firstLetterToUpperCase(this.props.category)}</h1>
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
                label: currency.label,
                symbol: currency.symbol
              }}
              amount={product.prices.filter((i: CurrencyInfo) => i.currency.label === currency.label)[0].amount}
              fullProductInfo={product}
              ></CatalogItem>
            })
          }})}
        </section>
      </main>
    )
  }
}