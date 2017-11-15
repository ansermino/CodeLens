import React from 'react'
import { RaisedButton, Paper, TextField } from 'material-ui'
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
  textField: {
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

class AssignmentNameForm extends React.Component{
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
          <div>
            <TextField style={style.textField} hintText="Assignment Name" name="name" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div>
            <Link style={style.nextButton} to="/create/starter-code"><RaisedButton label="next"/></Link>
          </div>
        </Paper>
      </div>

    )
  }
}
export default AssignmentNameForm
