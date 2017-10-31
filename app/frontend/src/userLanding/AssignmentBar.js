import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const barStyle = {
  backgroundColor: "grey"
}

class AssignmentBar extends React.Component{
  render(){
    return (
      <AppBar
        title={<span style={styles.title}>Title</span>}
        onTitleTouchTap={null}
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={<FlatButton label="View" />}
        style={barStyle}
      />
    )
  }
}

export default AssignmentBar
