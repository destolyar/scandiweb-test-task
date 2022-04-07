import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./commonComponents/Footer";
import { Header } from "./commonComponents/Header";
import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";
import { ErrorLink } from "./pages/ErrorLink";
import { ItemPage } from "./pages/ItemPage";
import './styles/app.scss'

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Catalog/>}></Route>
          <Route path="cart" element={<Cart/>}></Route>
          <Route path="/product/:productName" element={<ItemPage/>}></Route>
          <Route path="*" element={<ErrorLink/>}></Route>
        </Routes>
        <Footer/>
      </div>
    );
  }
}