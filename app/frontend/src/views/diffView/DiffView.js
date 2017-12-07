import React from 'react'
import { Paper, DropDownMenu, MenuItem } from 'material-ui'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/src/styles/hljs';


const style = {
  rootDiv : {
    display: "grid",
    gridTemplateColumns: "1fr 6fr 1fr"
  },
  flagged: {
    backgroundColor: "red"
  },
  paper:{
    margin: "1rem"
  },
  studentID:{
    margin: "auto",
    padding: "0.25rem"
  },
  dropdown: {
    width: "100%"
  },
  menuItem: {
    width: "100%"
  },
  columnDiv:{
    display: "grid",
    girdTemplateRows: "1fr 6fr",
    gridTemplateColumns: "1fr 1fr"
  }
}

var submissionA = ''
var submissionB= ''
var codeA = 'sddsfds'
var codeB = ''
const sampleA = "\ndef merge(left, right):\n\tif notsdfsdfsd len(left) or not len(right):\n\t\treturn left or right\n\n\tresult = []\n\ti, j = 0, 0\n\twhile (len(result) < len(left) + len(right)):\n\t\tif left[i] < right[j]:\n\t\t\tresult.append(left[i])\n\t\t\ti+= 1\n\t\telse:\n\t\t\tresult.append(right[j])\n\t\t\tj+= 1\n\t\tif i == len(left) or j == len(right):\n\t\t\tresult.extend(left[i:] or right[j:])\n\t\t\tbreak \n\n\treturn result\n\ndef mergesort(list):\n\tif len(list) < 2:\n\t\treturn list\n\n\tmiddle = len(list)\/2\n\tleft = mergesort(list[:middle])\n\tright = mergesort(list[middle:])\n\nreturn merge(left, right)"
const sampleB = "\ndef merge(left, right):\n\tif not len(left) or not len(right):\n\t\treturn left or right\n\n\tresult = []\n\ti, j = 0, 0\n\twhile (len(result) < len(left) + len(right)):\n\t\tif left[i] < right[j]:\n\t\t\tresult.append(left[i])\n\t\t\ti+= 1\n\t\telse:\n\t\t\tresult.append(right[j])\n\t\t\tj+= 1\n\t\tif i == len(left) or j == len(right):\n\t\t\tresult.extend(left[i:] or right[j:])\n\t\t\tbreak \n\n\treturn result\n\ndef mergesort(list):\n\tif len(list) < 2:\n\t\treturn list\n\n\tmiddle = len(list)\/2\n\tleft = mergesort(list[:middle])\n\tright = mergesort(list[middle:])\n\nreturn merge(left, right)"

const createDiff = (code, lines) => {
  code = code.toString()
  lines = lines.reverse()
  var codeSplit = code.split('\n')
  var nextLine= lines.pop();
  for(var i = 0; i < codeSplit.length; i++){
    if((i + 1) !== nextLine){
      codeSplit[i] = '#' + codeSplit[i]
    }
    else{
      nextLine = lines.pop()
    }
  }
  return codeSplit.join('\n');
}

const getSubmissionInfo = (assignment_id, submission_a, submission_b) => new Promise((resolves, rejects) => {
  const url = process.env.REACT_APP_BASE_URL + '/api/assignments/diff/' + assignment_id + '/' + submission_a + '/' + submission_b + '/'
  console.log(url)
  const request = new XMLHttpRequest()
  request.open('GET', url)
  request.onload = () => resolves(JSON.parse(request.response.toString()))
  request.onerror = (err) => rejects(err)
  request.send()
});

class DiffView extends React.Component{
  constructor(props){
    super(props)
    this.state = {assignments: {}, codeA: '', codeB: ''}
    // this.getPlagiarismInfo = this.getPlagiarismInfo.bind(this)
  }
  componentWillMount(){
    console.log(this.props.match.params.assignment_id)
    getSubmissionInfo(this.props.match.params.assignment_id, this.props.match.params.submission_a, this.props.match.params.submission_b).then((data)=>{
      console.log("QUERY RESPONSE")
      console.log(data);
      let a = createDiff(data.submission_a, data.lines_1)
      let b = createDiff(data.submission_b, data.lines_2)
      this.setState({assignments: data, codeA: data.text_1, codeB: data.text_2, submissionA: a, submissionB: b}, () => {
        console.log(this.state)
        
        codeA = data.text_1
        codeB = data.text_2
        submissionA = data.submission_a
        submissionB = data.submission_b
        this.render()
      })
      
      // console.log(sampleData)
    }, (error)=>{
      console.log(error)
    })
  }
  render(){
    return(
      <div style={style.rootDiv}>
        <div></div>
        <div style={style.columnDiv}>
          <div></div>
          <div></div>
          <Paper style={style.paper}>
            <h3 style={style.studentID}>{this.state.submissionA}</h3>
            <SyntaxHighlighter language='python' style={docco} showLineNumbers="true">{this.state.codeA}</SyntaxHighlighter>
          </Paper>

          <Paper style={style.paper}>
            <h3 style={style.studentID}>{this.state.submissionB}</h3>
            <SyntaxHighlighter language='python' style={docco} showLineNumbers="true">{this.state.codeB}</SyntaxHighlighter>
          </Paper>
        </div>
        <div></div>
      </div>
    )
  }
}


export default DiffView
