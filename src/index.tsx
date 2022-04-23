import React from 'react';
import { App } from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { client } from './app/apolloClient'
import './styles/index.scss';
import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import { CartProvider } from './context/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CurrencyProvider>
        <CartProvider>
          <Router>
            <App />
          </Router>
        </CartProvider>
      </CurrencyProvider>
    </ApolloProvider>
  </React.StrictMode>
  , document.getElementById('root')
);