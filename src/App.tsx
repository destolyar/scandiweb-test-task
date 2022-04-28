import React from "react";
import { Switch, Route} from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import { Catalog } from "./components/Catalog/Catalog";
import { ErrorLink } from "./entites/interfaces/components/ErrorLink";
import ItemPage from "./components/ItemPage/ItemPage";
import './styles/app.scss'
import { AppProps, AppState } from "./entites/interfaces/components/app";
import { CurrencyContext } from "./context/CurrencyContext";

export class App extends React.Component<AppProps, AppState> {
  state = {
    category: "all"
  }

  static contextType = CurrencyContext;

  render() {
    const {currency} = this.context
    return (
      <div className="App">
        <Header
          category={this.state.category}
          setCategory={(category: string) => {
            this.setState({
              category: category
            })
        }}
        />
        <Switch>
          <Route exact path="/">
            <Catalog category={this.state.category}/>
          </Route>
          <Route path="/cart">
            <Cart currency={currency}/>
          </Route>
          <Route path="/product/:id">
            <ItemPage/>
          </Route>
          <Route path="*">
            <ErrorLink/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    );
  }
}