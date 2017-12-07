import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  FlatButton
} from 'material-ui'
import { Link } from 'react-router-dom'

const style = {
  table: {
    textAlign: "center"
  }
}

const sampleData = [
  {studentA: "1000887374", studentB: "1000849375", similarity: "86%"},
  {studentA: "1000894857", studentB: "1000948573", similarity: "75%"},
  {studentA: "1000394584", studentB: "1000385947", similarity: "52%"},
  {studentA: "1000948637", studentB: "1000948573", similarity: "31%"},
  {studentA: "1000859473", studentB: "1000958685", similarity: "30%"}
]


const getPlagiarismInfo = () => new Promise((resolves, rejects) => {
  const url = process.env.REACT_APP_BASE_URL + '/api/assignments/11/results'
  console.log(url)
  const request = new XMLHttpRequest()
  request.open('GET', url)
  request.onload = () => resolves(JSON.parse(request.response))
  request.onerror = (err) => rejects(err)
  request.send()
})

class TopSubmissionTable extends React.Component{
  constructor(props){
    super(props)
    this.state = {assignments: []}
  }
  componentDidMount(){
    getPlagiarismInfo().then((data)=>{
      console.log(data)
      this.setState({assignments: data})
      this.render()
      console.log(sampleData)
      console.log(this.state.assignments)
    }, (error)=>{
      console.log(error)
    })
  }
  render(){
    return(
      <Table selectable={false} bodyStyle={style.table}>
        <TableHeader displaySelectAll={false}>
          <TableRow >
            <TableHeaderColumn>Student A</TableHeaderColumn>
            <TableHeaderColumn>Student B</TableHeaderColumn>
            <TableHeaderColumn>Similarity</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.state.assignments.map((item, n) => {
            return(
              <TableRow style={style.table} key={item.id}>
                <TableRowColumn style={style.table}>{item.submission_a}</TableRowColumn>
                <TableRowColumn style={style.table}>{item.submission_b}</TableRowColumn>
                <TableRowColumn style={style.table}>{item.plagiarism_score}%</TableRowColumn>
                <TableRowColumn><Link to="/diff" ><FlatButton label="View" /></Link></TableRowColumn>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
}

export default TopSubmissionTable
