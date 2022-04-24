import React from "react";

export const CurrencyContext: any = React.createContext({
  currency: {
    label: 'USD',
    symbol: "$"
  }
})

export class CurrencyProvider extends React.Component<any, any> {
  constructor(props: {}) {
    super(props)
    this.state = {
      currency: {
        label: 'USD',
        symbol: "$"
      }
    }
  
    this.changeCurrency = this.changeCurrency.bind(this)
  }

  changeCurrency(symbol: string, label: string) {
    this.setState({currency: {
      label: label,
      symbol: symbol
    }})
  }

  render() {
    const {currency} = this.state;
    
    return(
      <CurrencyContext.Provider value={{currency: currency, changeCurrency: this.changeCurrency}}>
        {this.props.children}
      </CurrencyContext.Provider>
    )
  }
}