import React, { Component } from 'react';
import {Switch, Route} from 'react-router'
import './App.css';
import {Home} from './views/home'
import {Header} from './header'
import {UserLanding} from './views/userLanding'
import {DiffView} from './views/diffView'
import {CreateAssignment} from './views/createAssignment'
import { AssignmentSummary } from './views/AssignmentSummary'
import { Footer } from './footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route path="/create" component={CreateAssignment}/>
            <Route path="/diff/:assignment_id/:submission_a/:submission_b" component={DiffView}/>
            <Route exact path="/user-landing" component={UserLanding}/>
            {/* TODO: Remove these, purely for easy testing */}
            <Route path="/assignment/:id" component={AssignmentSummary} />

            <Route exact path="/" component={Home}/>
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
