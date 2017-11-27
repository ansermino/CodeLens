import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import './views.css'
import AssignmentNameForm from './AssignmentNameForm'
import StarterCodeForm from './StarterCodeForm'
import SubmissionCodeForm from './SubmissionCodeForm'
import Processing from './Processing'
require('dotenv').config({path:"../../../.env"})

const style = {
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr"
  }
}

const sendData = (name, starterCode, submissions) => new Promise((resolves, rejects) => {
  const url = process.env.BASE_URL + '/api/assignments/create'
  const request = new XMLHttpRequest()
  request.open('POST', url)
  request.setRequestHeader('Content-Type', 'multipart/mixed')
  request.onload = () => resolves(JSON.parse(request.response))
  request.onerror = (err) => rejects(err)
  var formData = new FormData()
  formData.append("title", name)
  formData.append("files", [starterCode, submissions])
  request.send(formData)
})

class CreateAssignment extends React.Component{

  constructor(props){
    super(props)
    this.handleName = this.handleName.bind(this)
    this.handleStarterCode = this.handleStarterCode.bind(this)
    this.handleSubmissionCode = this.handleSubmissionCode.bind(this)
    this.submit = this.submit.bind(this)
    this.state = {name: '', starterCode: '', submissions: '', submitted: false, proccessed: false, newAssignmentId: ''}
  }
  handleName(newName){
    console.log('Recieved name')
    this.setState({name: newName})
  }
  handleStarterCode(data){
    console.log('Recieved start code')
    this.setState({starterCode: data})
  }
  handleSubmissionCode(data){
    console.log('Recieved submission code')
    this.setState({submissions: data})
  }
  submit(){
    this.setState({submitted: true})
    console.log('Submitting data...')
    sendData(this.state.name, this.state.starterCode, this.state.submissions).then((data) => {
      console.log(data)
      this.setState({newAssignmentId: data.id, proccessed: true})
    }, (error) => {
      console.log(error)
    })
  }
  render(){
    if(this.state.submitted){
      if(this.state.proccessed){
        return(<Redirect to={"/assignment/"+this.state.newAssignmentId} />)
      }
      return(<Processing />)
    }
    else{
      return(
        <div style={style.root}>
          <div></div>
          <div>
            <Switch>
              <Route exact path={this.props.match.url + "/name"} render={() => <AssignmentNameForm update={this.handleName} />} />
              <Route exact path={this.props.match.url + "/starter-code"} render={() => <StarterCodeForm update={this.handleStarterCode} />} />
              <Route exact path={this.props.match.url + "/submissions"} render={() => <SubmissionCodeForm update={this.handleSubmissionCode} completeForm={this.submit}/>} />
            </Switch>
          </div>
          <div></div>
        </div>
      )
    }
  }
}

export default CreateAssignment
