import React from 'react';
import { App } from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { client } from './app/apolloClient'
import './styles/index.scss';
import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom';
import { CurrencyProvider } from './context/CurrencyContext';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CurrencyProvider>
        <Router>
          <App />
        </Router>
      </CurrencyProvider>
    </ApolloProvider>
  </React.StrictMode>
  , document.getElementById('root')
);