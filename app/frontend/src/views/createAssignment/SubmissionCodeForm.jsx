import React from 'react'
import { FlatButton, Paper, RaisedButton } from 'material-ui'
import { Link } from 'react-router-dom'

const style = {
  paper:{
    width: "100%",
    height: "480px",
    display: "grid",
    gridTemplateRows: "1fr 1fr 1fr",
    marginTop: "5rem"
  },
  title: {
    paddingLeft: "3rem"
  },
  uploadDiv: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: "80%"
  },
  nextButton: {
    float: "right",
    paddingRight: "5rem"
  }
}

class SubmissionCodeForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({value: event.target.value})
    this.props.update(event.target.value)
  }
  render(){
    return(
      <div>
        <Paper style={style.paper}>
          <div>
            <h2 style={style.title}>Create Assignment</h2>
          </div>
          <div style={style.uploadDiv}>
            <h3>Upload Student Submissions...</h3>
            <input type="file" />
          </div>
          <div>
            <Link style={style.nextButton} to="/create/data"><RaisedButton label="next"/></Link>
          </div>

        </Paper>

      </div>

    )
  }
}
export default SubmissionCodeForm
