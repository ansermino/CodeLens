import React from 'react'
import {FlatButton} from 'material-ui'

const rootDivStyle = {
  backgroundColor: "grey",
  color: "white",
  height: "70px"
}

const leftDivStyle = {
  padding: "15px",
  display: "inline",
  float: "left"
}

const rightAlignDiv = {
  float: "right"
}

class Header extends React.Component{
  render(){
    return(
      <header style={rootDivStyle}>
        <div style={leftDivStyle}>
          <i style={{display:"inline"}} className="fa fa-2x fa-search"></i>
          <h2 style={{display:"inline"}}>&lt;CodeLens/&gt;</h2>
        </div>
        <div style={rightAlignDiv}>
          <FlatButton style={{height: "70px", color: "white"}} label="Login" />
        </div>
      </header>
    )
  }
}

export default Header
