import React from 'react'
import SimpleDiff from 'simplediff'
import Remarkable from 'remarkable'
import { Paper, DropDownMenu, MenuItem } from 'material-ui'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/src/styles/hljs';

var md = new Remarkable()

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
    margin: "auto"
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

const sampleA = "\ndef merge(left, right):\n\tif not len(left) or not len(right):\n\t\treturn left or right\n\n\tresult = []\n\ti, j = 0, 0\n\twhile (len(result) < len(left) + len(right)):\n\t\tif left[i] < right[j]:\n\t\t\tresult.append(left[i])\n\t\t\ti+= 1\n\t\telse:\n\t\t\tresult.append(right[j])\n\t\t\tj+= 1\n\t\tif i == len(left) or j == len(right):\n\t\t\tresult.extend(left[i:] or right[j:])\n\t\t\tbreak \n\n\treturn result\n\ndef mergesort(list):\n\tif len(list) < 2:\n\t\treturn list\n\n\tmiddle = len(list)\/2\n\tleft = mergesort(list[:middle])\n\tright = mergesort(list[middle:])\n\nreturn merge(left, right)"
const sampleB = "\ndef merge(left, right):\n\tif not len(left) or not len(right):\n\t\treturn left or right\n\n\tresult = []\n\ti, j = 0, 0\n\twhile (len(result) < len(left) + len(right)):\n\t\tif left[i] < right[j]:\n\t\t\tresult.append(left[i])\n\t\t\ti+= 1\n\t\telse:\n\t\t\tresult.append(right[j])\n\t\t\tj+= 1\n\t\tif i == len(left) or j == len(right):\n\t\t\tresult.extend(left[i:] or right[j:])\n\t\t\tbreak \n\n\treturn result\n\ndef mergesort(list):\n\tif len(list) < 2:\n\t\treturn list\n\n\tmiddle = len(list)\/2\n\tleft = mergesort(list[:middle])\n\tright = mergesort(list[middle:])\n\nreturn merge(left, right)"

const showDiff = (codeA, codeB) => {
  var linesA = codeA.split("\n")
  var linesB = codeB.split("\n")
  var resultA = "", resultB = ""
  var diff = SimpleDiff.diff(codeA, codeB)

  // Call diff on each line
  // Check if any elems are not '=' => colour those lines

  for(var i = 0; i < diff.length; i++){
    if(diff[i][0] === "+"){
      resultB += '# ' + diff[i][1]
    }
    else if(diff[i][0] === "-"){
      resultA += '# ' + diff[i][1]
    }
    else{
      resultA += diff[i][1] + "\n"
      resultB += diff[i][1] + "\n"
    }
  }

  console.log(resultB)
  return md.render(resultB);
}

class DiffView extends React.Component{
  constructor(props){
    super(props)
    this.state = {value: 1}
  }
  render(){
    return(
      <div style={style.rootDiv}>
        <div></div>
        <div style={style.columnDiv}>
          <div></div>
          <DropDownMenu value={this.state.value} style={style.dropdown} anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}} menuItemStyle={style.menuItem} autoWidth={false}>
            <MenuItem value={1} primaryText="1000256368   78%" />
            <MenuItem value={2} primaryText="1000125368   62%" />
            <MenuItem value={3} primaryText="1000125789   57%" />
            <MenuItem value={4} primaryText="1000365471   31%" />
            <MenuItem value={5} primaryText="1000125478   29%" />
          </DropDownMenu>
          <Paper style={style.paper}>
            <h3 style={style.studentID}>1000889247</h3>
            <SyntaxHighlighter language='python' style={docco}>{sampleA}</SyntaxHighlighter>
          </Paper>

          <Paper style={style.paper}>
            <h3 style={style.studentID}>1000265789</h3>
            <SyntaxHighlighter language='python' style={docco}>{sampleB}</SyntaxHighlighter>
          </Paper>
        </div>
        <div></div>
      </div>
    )
  }
}


export default DiffView
