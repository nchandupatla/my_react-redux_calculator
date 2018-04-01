import React, { Component } from 'react';

import WebCalculator from './containers/WebCalculator/WebCalculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container calc-card mdl-card">
       <WebCalculator />
      </div>
    );
  }
}

export default App;
