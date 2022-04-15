import React from "react";
import '../../styles/components/catalog.scss'
import { CatalogProps, CatalogState } from "../../entites/interfaces/components/catalog-item";
import { getAllProducts } from "../../app/requests";


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
        {this.state.allProducts.map((i: any) => {
          if(i.name === this.props.category) {
            return i.products.map((i: any) => {
              return <li>{i.name} {this.props.currency.symbol} {i.prices.filter((i: any) => i.currency.label === this.props.currency.label)[0].amount}</li>
            })
          }})}
      </main>
    )
  }
}