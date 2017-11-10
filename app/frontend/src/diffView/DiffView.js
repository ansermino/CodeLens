import React from 'react'

const style = {
  rootDiv : {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 3fr 1fr"
  }
}

class DiffView extends React.Component{
  render(){
    return(
      <div style={style.rootDiv}>
        <div></div>
        <div>
          <p>Left</p>
        </div>
        <div>
          <p>Right</p>
        </div>
        <div></div>
      </div>
    )
  }
}


export default DiffView
