import React from 'react'
import { Paper } from 'material-ui'
import TopSubmissionTable from './TopSubmissionTable'
import Processing from './Processing'

const style = {
  rootDiv: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr"
  },
  assignmentName: {
    margin: "1rem"
  },
  paper: {
    padding: "0.25rem 1rem"
  }
}

class AssignmentSummary extends React.Component{
  constructor(props){
    super(props)
    this.state = {processing: true}
    this.handleProcessingDone = this.handleProcessingDone.bind(this)
  }
  handleProcessingDone(){
    this.setState({processing: false})
  }
  render(){
    setInterval(this.handleProcessingDone, 8000)
    if(this.state.processing){
      return(
        <Processing />
      )
    }
    else{
      return(
        <div style={style.rootDiv}>
          <div></div>
          <div>
            <h2 style={style.assignmentName}>CSC369 Assignment 1</h2>
            <Paper style={style.paper}>
              <h3>Submissions with Highest Similarity</h3>
              <TopSubmissionTable />
            </Paper>
          </div>
          <div></div>
        </div>
      )
    }
  }
}
export default AssignmentSummary
