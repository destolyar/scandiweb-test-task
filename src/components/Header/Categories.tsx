import { gql } from "@apollo/client";
import React from "react";
import { client } from "../../app/apolloClient";
import { CategoriesProps, CategoriesState } from "../../entites/interfaces/components/categories";
import { CategoriesItem } from "./CategoriesItem";

export class Categories extends React.Component<CategoriesProps, CategoriesState> {
  state = {
    categories: []
  }

  componentDidMount() {
    client.query({
      query: gql`
        query getCategories {
          categories {
            name
          }
        }
      `
    }).then(i => {
      this.setState({categories: i.data.categories})
    })
   }
   
  render() {
    return(
      <div className="header__categories">
        {this.state.categories.map((i: {name: string}) => {
          return <CategoriesItem key={i.name} category={i.name} setCategory={this.props.setCategory}/>
        })}
      </div>
    )
  }
}