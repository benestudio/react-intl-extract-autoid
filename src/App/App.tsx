import React from "react";
import logo from './logo.svg';
import './App.css';
import messages from './messages'
import { FormattedMessage } from 'react-intl'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FormattedMessage {...messages.hello} /> <FormattedMessage {...messages.world} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
