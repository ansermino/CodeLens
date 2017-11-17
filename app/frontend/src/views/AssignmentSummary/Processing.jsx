import React from 'react'
import { LinearProgress, Paper } from 'material-ui'

const style = {
  rootDiv: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr"
  },
  paper: {
    padding: "3rem 8rem"
  }
}

class Processing extends React.Component{
  render(){
    return(
      <div style={style.rootDiv}>
        <div></div>
        <div>
          <h2>Processing...</h2>
          <Paper style={style.paper}>
            <LinearProgress mode="indeterminate" />
          </Paper>
        </div>
        <div></div>

      </div>
    )
  }
}

export default Processing
