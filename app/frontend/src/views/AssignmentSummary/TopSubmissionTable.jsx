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

const samepleData = [
  {studentA: "1000887374", studentB: "1000849375", similarity: "86%"},
  {studentA: "1000894857", studentB: "1000948573", similarity: "75%"},
  {studentA: "1000394584", studentB: "1000385947", similarity: "52%"},
  {studentA: "1000948637", studentB: "1000948573", similarity: "31%"},
  {studentA: "1000859473", studentB: "1000958685", similarity: "30%"}
]

class TopSubmissionTable extends React.Component{
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
          {samepleData.map((item, n) => {
            return(
              <TableRow style={style.table}>
                <TableRowColumn style={style.table}>{item.studentA}</TableRowColumn>
                <TableRowColumn style={style.table}>{item.studentB}</TableRowColumn>
                <TableRowColumn style={style.table}>{item.similarity}</TableRowColumn>
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
