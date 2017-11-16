import React from 'react'
import { FlatButton, Dialog, TextField } from 'material-ui'
import { Link } from 'react-router-dom'

const style = {
  rootDivStyle: {
    backgroundColor: "#f009",
    color: "white",
    height: "70px"
  },
  rightAlignDiv: {
    float: "right"
  },
  leftDivStyle: {
    padding: "15px",
    display: "inline",
    float: "left",
    textDecoration: "none"
  },
  label: {
    display: "inline",
    marginRight: "2rem",
    float: "right",
    textAlign: "right"
  },
  fieldStyle: {
    width: "50%",
    margin: "auto",
    padding: "1rem",
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr 2fr"
  },
  dialog: {
    padding: "1rem"
  },
  loginButton: {
    margin: "1rem"
  }
}
class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {open: false}
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleOpen(){
    this.setState({open: true})
  }
  handleClose(){
    this.setState({open: false})
    //TODO: Switch to next page
  }
  render(){
    const loginActions = [
      <Link to="/user-landing"><FlatButton label="Login" style={style.loginButton} onClick={this.handleClose} /></Link>,
      <FlatButton label="Close" style={style.loginButton} onClick={this.handleClose} />
    ]
    return(
      <div>
        <Dialog
          title="Login"
          actions={loginActions}
          modal={true}
          open={this.state.open}
          style={style.dialog}
        >
          <div style={style.fieldStyle}>
            <h3 style={style.label}>User:</h3>
            <TextField label='User'/>
            <h3 style={style.label}>Password:</h3>
            <TextField />
          </div>
        </Dialog>
        <header style={style.rootDivStyle}>
          <div style={style.leftDivStyle}>
            <a href="/#" style={{textDecoration:"none", color: "white"}}>
              <i style={{display:"inline", textDecoration: "none"}} className="fa fa-2x fa-search"></i>
              <h2 style={{display:"inline", textDecoration: "none"}}>&lt;CodeLens/&gt;</h2>
            </a>
          </div>
          <div style={style.rightAlignDiv}>
            <FlatButton style={{height: "70px", color: "white"}} label="Login" onClick={this.handleOpen}/>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
