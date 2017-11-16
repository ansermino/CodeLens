import React from 'react'

import AssignmentBar from './AssignmentBar.js'

const samepleData = [
  {title: "CSC369 A3"},
  {title: "CSC369 A2"},
  {title: "CSC369 A1"},
  {title: "CSC207 A4"},
  {title: "CSC207 A3"},
  {title: "CSC207 A2"},
  {title: "CSC207 A1"}
]

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
          {samepleData.map((item, n) => <AssignmentBar title={item.title} />)}
        </div>
        <div></div>
      </div>
    )
  }
}

export default UserLanding
