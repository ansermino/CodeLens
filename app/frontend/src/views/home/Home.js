import React from 'react'

const style = {
  rootDiv: {
    fontFamily: 'Open Sans, sans-serif',
    display: "grid",
    background: "#ff6c73",
    padding: '100px 0 50px 0',
    color: "white",
    // gridTemplateColumns: "1fr 3fr 1fr",
  },
  content: {

  },
  title: {
    fontSize: "7rem",
    margin: "auto",
    textAlign: "center",
  },
  icon: {
    fontSize: "5rem",
    margin: "auto",
    textAlign: "center",
    color: "white"
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
    color: "white",
    paddingTop: 20,
    paddingBottom: 40,
  },
  detail: {
    backgroundColor: "white",
    border: "0.25rem solid white",
    padding: "0.75rem",
    textAlign: "left",
    color: "black",
    marginRight: 2,
    borderRadius: 5,
  },
  threeColumn: {
    display: "grid",
    gridTemplateColumns: "1fr 5fr 1fr",
  },
  registerContainer: {
    margin: 'auto',
    width: '50%',
    marginTop: '40px',
    textAlign: 'center',
  }
}

class Home extends React.Component{

  
  
  render(){
    return(
      <div>
      <div style={style.rootDiv}>
        <div></div>
        <div style={style.content}>
          <h1 style={style.icon}><i style={{display:"inline", textDecoration: "none"}} className="fa fa-2x fa-search"></i></h1>
          <h1 style={style.title}>&lt;<span>CodeLens</span>/&gt;</h1>
          <h2 style={style.tagline}>Because honesty is the best policy.</h2>
          <div style={style.registerContainer}>
            <input autocomplete="off" placeholder="Email Address" className="registerInput"></input>
            <input autocomplete="off" placeholder="Password" type="password" className="registerInput"></input>
            <input className="registerButton" value="Register" type="button"/>
          </div>
        </div>
      </div>
      <div>
        <div style={style.threeColumn}>
          <div></div>
          <div style={style.details}>
            <div style={style.detail}>
              <h1 style={style.icon}><i style={{color: "black"}} className="fa fa-cogs"></i></h1>
              <h3 style={{textAlign: "center", fontSize: 28}}>Fully automated</h3>
              <p style={{textAlign: "center"}}>Just upload your starter code and student submissions and we take care of the rest. Our algorithm will run on all of the submissions and check them for similarities. Plagarism detection has never been easier!</p>
            </div>
            <div style={style.detail}>
              <h1 style={style.icon}><i style={{color: "black"}} className="fa fa-eye"></i></h1>
              <h3 style={{textAlign: "center", fontSize: 28}}>Deep Analysis</h3>
              <p style={{textAlign: "center"}}>Using a variety of methodologies our algorithms look deep beneath the surface for indications of plagarism. From analysis of program structure to variable name comparison and class structure comparison we conduct extensive testing to produce results.</p>
            </div>
            <div style={style.detail}>
              <h1 style={style.icon}><i style={{color: "black"}} className="fa fa-floppy-o"></i></h1>
              <h3 style={{textAlign: "center", fontSize: 28}}>Long-term storage</h3>
              <p style={{textAlign: "center"}}>Store your code with us for as long as you need. You can choose to compare different course iterations of the same assignment to ensure students don't plagarise from students who have prevously taken the course.</p>
            </div>
          </div>
        </div>
        {/* This is the right block */}
        <div></div>
      </div>
      </div>
    )
  }
}

export default Home
