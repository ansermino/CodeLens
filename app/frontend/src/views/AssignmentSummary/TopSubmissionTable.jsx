import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  RaisedButton
} from 'material-ui'

class TopSubmissionTable extends React.Component{
  render(){
    return(
      <Table selectable={false}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Student A</TableHeaderColumn>
            <TableHeaderColumn>Student B</TableHeaderColumn>
            <TableHeaderColumn>Similarity</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>1000889247</TableRowColumn>
            <TableRowColumn>1000934867</TableRowColumn>
            <TableRowColumn>87%</TableRowColumn>
            <TableRowColumn><RaisedButton label="View" /></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>1000234247</TableRowColumn>
            <TableRowColumn>100334867</TableRowColumn>
            <TableRowColumn>64% </TableRowColumn>
            <TableRowColumn><RaisedButton label="View" /></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>1000878247</TableRowColumn>
            <TableRowColumn>1004934867</TableRowColumn>
            <TableRowColumn>51% </TableRowColumn>
            <TableRowColumn><RaisedButton label="View" /></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>1000845247</TableRowColumn>
            <TableRowColumn>1000434866</TableRowColumn>
            <TableRowColumn>32%</TableRowColumn>
            <TableRowColumn><RaisedButton label="View" /></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}

export default TopSubmissionTable
