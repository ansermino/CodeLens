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
export default AssignmentSummary
