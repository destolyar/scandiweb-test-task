import React from "react";
import { getCategories } from "../../app/requests";
import { CategoriesProps, CategoriesState } from "../../entites/interfaces/components/categories";
import { CategoriesItem } from "./CategoriesItem";

export class Categories extends React.Component<CategoriesProps, CategoriesState> {
  state = {
    categories: []
  }

  componentDidMount() {
    getCategories().then(i => {
      this.setState({categories: i.data.categories})
    })
   }
   
  render() {
    return(
      <div className="header__categories">
        {this.state.categories.map((i: {name: string}, index) => {
          return <CategoriesItem key={i.name} category={i.name} setCategory={this.props.setCategory} index={index}/>
        })}
      </div>
    )
  }
}