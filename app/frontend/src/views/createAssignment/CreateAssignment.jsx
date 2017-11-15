import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Switch, Route } from 'react-router'
import './views.css'
import AssignmentNameForm from './AssignmentNameForm'
import StarterCodeForm from './StarterCodeForm'
import SubmissionCodeForm from './SubmissionCodeForm'

const style = {
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr"
  }
}

class CreateAssignment extends React.Component{

  constructor(props){
    super(props)
    this.handleName = this.handleName.bind(this)
    this.handleStarterCode = this.handleStarterCode.bind(this)
    this.state = {name: ''}
  }
  handleName(newName){
    this.setState({name: newName})
  }
  handleStarterCode(notSure){
    // Do something
  }
  handleSubmissionCode(notSure){
    // Do something
  }
  render(){
    return(
      <div style={style.root}>
        <div></div>
        <div>
          <ReactCSSTransitionGroup
              transitionName="background"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
            <Switch>
              <Route exact path={this.props.match.url + "/name"} render={() => <AssignmentNameForm update={this.handleName} />} />
              <Route exact path={this.props.match.url + "/starter-code"} render={() => <StarterCodeForm update={this.handleStarterCode} />} />
              <Route exact path={this.props.match.url + "/submissions"} render={() => <SubmissionCodeForm update={this.handleSubmissionCode} />} />
            </Switch>
          </ReactCSSTransitionGroup>
        </div>
        <div></div>
      </div>
    )
  }
}

export default CreateAssignment
