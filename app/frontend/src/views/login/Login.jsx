import React from 'react'
import { Paper, TextField, RaisedButton } from 'material-ui'
import { Link } from 'react-router-dom'

const style = {
  rootDiv: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr"
  },
  paper: {
    display: "grid",
    gridTemplateRows: "2fr 1fr 1fr 2fr"
  },
  header: {
    padding: "2rem"
  },
  loginButton: {
    float: "right",
    margin: "2rem"
  },
  field: {
    margin: "auto"
  },
  label: {
    display: "inline",
    marginRight: "2rem"
  }
}

class Login extends React.Component{
  render(){
    return(
      <div style={style.rootDiv}>
        <div></div>
        <div>
          <Paper style={style.paper}>
            <div>
              <h2 style={style.header}>Login</h2>
            </div>
            <div style={style.field}>
              <h3 style={style.label}>User:</h3>
              <TextField label='User'/>
            </div>
            <div style={style.field}>
              <h3 style={style.label}>Password:</h3>
              <TextField />
            </div>
            <div>
              <Link to="/user-landing"><RaisedButton  style={style.loginButton} label="Login" /></Link>
            </div>
          </Paper>
        </div>
        <div></div>
      </div>
    )
  }
}

export default Login
