import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import enMessages from './messages/en.json'

ReactDOM.render(
  <IntlProvider locale='en' defaultLocale='en' messages={enMessages}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
