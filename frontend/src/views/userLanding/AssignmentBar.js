import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom'

const style = {
  title: {
    cursor: 'pointer',
  },
  barStyle: {
    backgroundColor: "grey"
  },
  viewButton: {
    color: "white"
  }
}


class AssignmentBar extends React.Component{
  render(){
    return (
      <AppBar
        title={<span style={style.title}>{this.props.title}</span>}
        onTitleTouchTap={null}
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={<Link to={"/assignment/" + this.props.assignment_id }><FlatButton style={style.viewButton} label="View" /></Link>}
        style={style.barStyle}
      />
    )
  }
}

export default AssignmentBar
