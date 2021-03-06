import React from 'react'
import { Paper } from 'material-ui'
import TopSubmissionTable from './TopSubmissionTable'


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
  render(){
    return(
      <div style={style.rootDiv}>
        <div></div>
        <div>
          <h2 style={style.assignmentName}>Assignment View</h2>
          <Paper style={style.paper}>
            <h3>Submissions with Highest Similarity</h3>
            <TopSubmissionTable assignment_id={ this.props.match.params.id }/>
          </Paper>
        </div>
        <div></div>
      </div>
    )
  }
}
export default AssignmentSummary
