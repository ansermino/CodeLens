import React from 'react'

const style = {
  rootDiv: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr"
  },
  content: {

  },
  title: {
    fontSize: "7rem",
    margin: "auto",
    textAlign: "center",
    color: "grey"
  },
  icon: {
    fontSize: "5rem",
    margin: "auto",
    textAlign: "center",
    color: "grey"
  },
  tagline: {
    fontSize: "2rem",
    margin: "auto",
    textAlign: "center",
  },
  details: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    marginTop: "1rem",
    color: "white"
  },
  detail: {
    backgroundColor: "grey",
    border: "0.25rem solid white",
    padding: "0.75rem",
    textAlign: "left"
  }
}

class Home extends React.Component{
  render(){
    return(
      <div style={style.rootDiv}>
        <div></div>
        <div style={style.content}>
          <h1 style={style.icon}><i style={{display:"inline", textDecoration: "none"}} className="fa fa-2x fa-search"></i></h1>
          <h1 style={style.title}>&lt;<span style={{color:"#f009"}}>CodeLens</span>/&gt;</h1>
          <h2 style={style.tagline}>Because honesty is the best policy.</h2>
          <div style={style.details}>
            <div style={style.detail}>
              <h3 style={{textAlign: "center"}}>Fully automated</h3>
              <p>Just upload your starter code and student submissions and we take care of the rest. Plagarism detection has never been easier!</p>
            </div>
            <div style={style.detail}>
              <h3 style={{textAlign: "center"}}>Deep Analysis</h3>
              <p>Using a variety of methodologies our algorithms look deep beneath the surface for indications of plagarism. From analysis of program structure to variable name comparison and class structure comparison we conduct extensive testing to produce results.</p>
            </div>
            <div style={style.detail}>
              <h3 style={{textAlign: "center"}}>Long-term storage</h3>
              <p>Store your code with us for as long as you need. You can choose to compare different course iterations of the same assignment to ensure students don't plagarise from students who have prevously taken the course.</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    )
  }
}

export default Home
