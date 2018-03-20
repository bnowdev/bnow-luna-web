import React, { Component } from "react";
import PropTypes from "prop-types";

import { TableRow, TableCell } from "material-ui/Table";
// import { withStyles } from "material-ui/styles";

import AlertTableRowIcon from "./AlertTableRowIcon";

class AlertTableRow extends Component {

  onClick = () => {
    const { alert, onRowClick } = this.props;
    onRowClick(alert);
  };

  render() {
    const { alert } = this.props;

    return (
      <TableRow key={alert.id} hover onClick={this.onClick}>
        <TableCell>
          <AlertTableRowIcon alert={alert} />
        </TableCell>
        <TableCell> {alert.name}</TableCell>
        <TableCell>{alert.source}</TableCell>
        <TableCell numeric>{alert.timeGenerated}</TableCell>
      </TableRow>
    );
  }
}

AlertTableRow.propTypes = {
  // classes: PropTypes.object.isRequired,
  alert: PropTypes.object.isRequired,
  onRowClick: PropTypes.func.isRequired
};

export default AlertTableRow;
