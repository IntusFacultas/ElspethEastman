/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'
import Montserrat from './assets/Montserrat/Montserrat-Regular.woff';
import Dolcissimo from './assets/Dolcissimo/Dolcissimo.woff';
import './fonts.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #fefefe;
  }
  
`


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
