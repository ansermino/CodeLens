import React, { Component } from 'react';

import './App.css';
import {Home} from './home'
import {Header} from './header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
