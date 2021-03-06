import React from 'react'
import { Paper, RaisedButton } from 'material-ui'

const style = {
  paper:{
    width: "100%",
    display: "grid",
    gridTemplateRows: "1fr 0.75fr",
    marginTop: "1rem"
  },
  title: {
    paddingLeft: "3rem"
  },
  uploadDiv: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "3rem",
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
    this.setState({value: event.target.files[0]})
    this.props.update(event.target.files[0])
  }
  render(){
    return(
      <div>
        <h2 style={style.title}>Create Assignment</h2>
        <Paper style={style.paper}>
          <div style={style.uploadDiv}>
            <p>Upload Student Submissions...</p>
            <input type="file" accept=".zip" onChange={this.handleChange}/>
          </div>
          <div>
            <div style={style.nextButton}><RaisedButton label="next" onClick={this.props.completeForm}/></div>
          </div>
        </Paper>
      </div>
    )
  }
}
export default SubmissionCodeForm
