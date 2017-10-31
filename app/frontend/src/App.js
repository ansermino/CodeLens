import React, { Component } from 'react';

import './App.css';
import {Home} from './home'
import {Header} from './header'
import {UserLanding} from './userLanding'
import {DiffView} from './diffView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DiffView />
      </div>
    );
  }
}

export default App;
