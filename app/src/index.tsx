import '@babel/polyfill';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import graphqlClient from './api/graphql';

import Root from './components/Root';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif
  }

`;

render(
  <ApolloProvider client={graphqlClient}>
    <GlobalStyle />
    <Root />
  </ApolloProvider>,
  document.getElementById('app')
);
