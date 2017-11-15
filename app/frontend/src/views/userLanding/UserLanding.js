import React from 'react'

import AssignmentBar from './AssignmentBar.js'

const rootDivStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 3fr 1fr"
}


class UserLanding extends React.Component{
  render(){
    return(
      <div style={rootDivStyle}>

        <div></div>
        <div>
          <h2>Assignments</h2>
          <AssignmentBar />
          <AssignmentBar />
          <AssignmentBar />
          <AssignmentBar />
          <AssignmentBar />
        </div>
        <div></div>
      </div>
    )
  }
}

export default UserLanding
