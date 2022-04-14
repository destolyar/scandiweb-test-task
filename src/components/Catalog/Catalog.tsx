import React from "react";
import '../../styles/components/catalog.scss'
import { gql } from "@apollo/client";
import { client } from '../../app/apolloClient'
import { CatalogProps, CatalogState } from "../../entites/interfaces/components/catalog";


export class Catalog extends React.Component<CatalogProps, CatalogState> {
  render() {
    return(
      <main className="catalog">
        <h1 className="catalog__title">Catalog</h1>
      </main>
    )
  }
}