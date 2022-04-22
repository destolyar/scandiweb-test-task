import React from "react";
import '../../styles/components/currency-dropdown.scss'
import { CurrencyDropdownProps, CurrencyDropdownState } from "../../entites/interfaces/components/currency-dropdown";
import { client } from "../../app/apolloClient";
import { gql } from "@apollo/client";
import { CurrencyContext } from "../../context/CurrencyContext";

export class CurrencyDropdown extends React.Component<CurrencyDropdownProps, CurrencyDropdownState> {
  state: Readonly<CurrencyDropdownState> = {
    currencies: []
  };
  componentDidMount() {
    client.query({
      query: gql`
        query getCurrencies {
          currencies {
            symbol
            label
          }
        }
      `
    }).then(i => {
      this.setState({currencies: i.data.currencies})
    })
  }

  static contextType = CurrencyContext
  render() {
    const {changeCurrency, currency} = this.context
    return(
      <div className="currency-dropdown">
        <div className="currency-dropdown__symbol">
          {currency.symbol}
        </div>

        <div className="currency-dropdown__container">
          <input type="checkbox" id="currencies-checkbox" style={{display: 'none'}}/>
          <label className="currency-dropdown__container__checkbox" htmlFor="currencies-checkbox">&#10095;</label>
          <div className="currency-dropdown__container__currencies" id="currency-container">
            {this.state.currencies.map((i) => {
              return <option key={i.symbol + '' + i.label} className="currency-dropdown__container__currencies__item" onClick={() => {
                changeCurrency(i.symbol, i.label)
              }}>{i.symbol} {i.label}</option>
            })}
          </div>
        </div>
      </div>
    )
  }
}