import React from "react";
import { Outlet } from "react-router-dom";

export class ItemPage extends React.Component {
  render() {
    return(
      <main className="item-page">
        <h1>Item Page</h1>
        <Outlet />
      </main>
      
    )
  }
}