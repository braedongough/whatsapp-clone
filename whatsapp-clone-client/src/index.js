import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ApolloProvider } from 'react-apollo-hooks';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import client from './client';

import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2c6157' },
    secondary: { main: '#6fd056' },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
