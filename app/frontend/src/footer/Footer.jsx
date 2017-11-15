import React from 'react'

const style = {
  rootDiv: {
    color: "grey",
    textAlign: "center",
    paddingTop: "2rem"
  }
}

class Footer extends React.Component{
  render() {
    return(
      <footer style={style.rootDiv}>
        <p>Copyright CodeLens 2017</p>
      </footer>
    )
  }
}

export default Footer
