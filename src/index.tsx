import React from 'react';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { client } from './app/apolloClient'
import './styles/index.scss';
import { ApolloProvider } from '@apollo/client';



const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
