import React from 'react'

const style = {
  rootDiv: {
    color: "white",
    textAlign: "center",
    padding: "1rem 0 1rem 0",
    background: "#444",
    height: "100%",
    verticalAlign: "100%",
    fontWeight: "thin",
  }
}

class Footer extends React.Component{
  render() {
    return(
      <footer style={style.rootDiv}>
        <p>&#169; Copyright CodeLens 2017</p>
      </footer>
    )
  }
}

export default Footer
