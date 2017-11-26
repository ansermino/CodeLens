import React from 'react'
import { FloatingActionButton } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'
import AssignmentBar from './AssignmentBar.js'
import { Link } from 'react-router-dom'

const samepleData = [
  {title: "CSC369 A3"},
  {title: "CSC369 A2"},
  {title: "CSC369 A1"},
  {title: "CSC207 A4"},
  {title: "CSC207 A3"},
  {title: "CSC207 A2"},
  {title: "CSC207 A1"}
]

const rootDivStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 3fr 1fr"
}

const addAssignmentStyle = {
    float: "left",
    margin: "3rem"
}

const getAssignments = () => new Promise((resolves, rejects) => {
  const url = 'localhost:3000/api/getAssignments'
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
    return(
      <div style={rootDivStyle}>
        <div>
        </div>
        <div>
          <h2>Assignments</h2>
          {this.state.assignments.map((item, n) => <AssignmentBar title={item.title} />)}
        </div>
        <div>
        <Link to="/create/name"><FloatingActionButton style={addAssignmentStyle}>
        <ContentAdd />
        </FloatingActionButton></Link>
        </div>
      </div>
    )
  }
}

export default UserLanding
