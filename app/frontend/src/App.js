import React, { Component } from 'react';
import {Switch, Route} from 'react-router'
import './App.css';
import {Home} from './views/home'
import {Header} from './header'
import {UserLanding} from './views/userLanding'
import {DiffView} from './views/diffView'
import {CreateAssignment} from './views/createAssignment'
import { Login } from './views/login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/create" component={CreateAssignment}/>
            <Route exact path="/diff" component={DiffView}/>
            <Route exact path="/user" component={UserLanding}/>
            <Route exact path="/" component={Home}/>
          </Switch>
      </div>
    );
  }
}

export default App;
