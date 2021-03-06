import React from 'react'
import { FloatingActionButton } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'
import AssignmentBar from './AssignmentBar.js'
import { Link } from 'react-router-dom'

const rootDivStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 3fr 1fr"
}

const addAssignmentStyle = {
    float: "left",
    margin: "3rem"

}

const style = {
  message: {
    textAlign: "center",
    paddingTop: "2rem",
        fontSize: "2rem"
  }
}

const getAssignments = () => new Promise((resolves, rejects) => {
  const url = process.env.REACT_APP_BASE_URL + '/api/assignments/all'
  console.log(url)
  const request = new XMLHttpRequest()
  request.open('GET', url)
  request.onload = () => resolves(JSON.parse(request.response))
  request.onerror = (err) => rejects(err)
  request.send()
})


class UserLanding extends React.Component{
  constructor(props){
    super(props)
    this.state = {assignments: []}
  }
  componentDidMount(){
    getAssignments().then((data)=>{
      console.log(data)
      this.setState({assignments: data})
      this.render()
    }, (error)=>{
      console.log(error)
    })
  }
  render(){
      if(this.state.assignments.length === 0){
        return (
        <div style={rootDivStyle}>
          <div>
          </div>
          <div>
            <h2>Assignments</h2>
            <p style={style.message}> Click on the + to create a new assignment.</p>
          </div>
          <div>
          <Link to="/create/name"><FloatingActionButton style={addAssignmentStyle}>
          <ContentAdd />
          </FloatingActionButton></Link>
          </div>
        </div>)
      }
      else{
        return (<div style={rootDivStyle}>
          <div>
          </div>
          <div>
            <h2>Assignments</h2>
            {this.state.assignments.map((item, n) => <AssignmentBar key={ n } title={item.title} assignment_id={item.id}/>)}
          </div>
          <div>
          <Link to="/create/name"><FloatingActionButton style={addAssignmentStyle}>
          <ContentAdd />
          </FloatingActionButton></Link>
          </div>
        </div>)
      }
  }
}

export default UserLanding
