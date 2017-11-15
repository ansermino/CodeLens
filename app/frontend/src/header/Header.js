import React from 'react'
import {FlatButton} from 'material-ui'
import { Link } from 'react-router-dom'

const rootDivStyle = {
  backgroundColor: "grey",
  color: "white",
  height: "70px"
}

const leftDivStyle = {
  padding: "15px",
  display: "inline",
  float: "left",
  textDecoration: "none"
}

const rightAlignDiv = {
  float: "right"
}

class Header extends React.Component{
  render(){
    return(
      <header style={rootDivStyle}>
        <div style={leftDivStyle}>
          <a href="/#" style={{textDecoration:"none", color: "white"}}>
            <i style={{display:"inline", textDecoration: "none"}} className="fa fa-2x fa-search"></i>
            <h2 style={{display:"inline", textDecoration: "none"}}>&lt;CodeLens/&gt;</h2>
          </a>
        </div>
        <div style={rightAlignDiv}>
          <Link to="/login"><FlatButton style={{height: "70px", color: "white"}} label="Login" /></Link>
        </div>
      </header>
    )
  }
}

export default Header
