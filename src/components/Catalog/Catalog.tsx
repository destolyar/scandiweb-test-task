import React from "react";
import '../../styles/components/catalog.scss'
import { CatalogProps, CatalogState } from "../../entites/interfaces/components/catalog";
import { CatalogItem } from './CatalogItem'
import { getAllProducts } from "../../app/requests";
import { Link } from "react-router-dom";


export class Catalog extends React.Component<CatalogProps, CatalogState> {
  state = {
      allProducts: [],
    }

  componentDidMount() {
    getAllProducts().then(i => {
        this.setState({allProducts: i.data.categories})
        console.log(i.data.categories)
    })
  }

  render() {
    return(
      <main className="catalog">
        <h1 className="catalog__title">Category: {this.props.category}</h1>
        <section className="catalog__products">
        {this.state.allProducts.map((i: any) => {
          if(i.name === this.props.category) {
            return i.products.map((i: any) => {
              return <CatalogItem 
              name={i.name} 
              gallery={i.gallery}
              currency={{
                label: this.props.currency.label,
                symbol: this.props.currency.symbol
              }}
              amount={i.prices.filter((i: {currency: {label:string}}) => i.currency.label === this.props.currency.label)[0].amount}
              ></CatalogItem>
            })
          }})}
        </section>
      </main>
    )
  }
}