import React from "react";
import { withRouter } from "react-router-dom";
import { getProductById } from "../../app/requests";


class ItemPage extends React.Component<any, any> {
  state: Readonly<any> = {
    name: ''
  };

  componentDidMount() {
    const id = this.props.match.params.id
    getProductById(id).then(i => {
      this.setState({name: i.data.product.name})
    })
  }

  render() {
    return(
      <main className="item-page">
        <h1>{this.state.name}</h1>
      </main> 
    )
  }
}


export default withRouter(ItemPage)