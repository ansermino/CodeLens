import React, { Component } from 'react';
import {Switch, Route} from 'react-router'
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
          <Switch>
            <Route exact path="/diff" component={DiffView}/>
            <Route exact path="/user" component={UserLanding}/>
            <Route exact path="/" component={Home}/>
          </Switch>
      </div>
    );
  }
}

export default App;
