import React from "react";
import PropTypes from "prop-types";

import { TableRow, TableCell } from "material-ui/Table";
import { withStyles } from "material-ui/styles";

import AlertListIcon from "./AlertListIcon";

const AlertListItem = props => {
  const { alert, onClick } = props;
  
  return (
    <TableRow key={alert.id} hover onClick={() => onClick(alert)}>
      <TableCell>
        <AlertListIcon alert={alert} />
      </TableCell>
      <TableCell> {alert.name}</TableCell>
      <TableCell>{alert.source}</TableCell>
      <TableCell numeric>{alert.timeGenerated}</TableCell>
    </TableRow>
  );
};

AlertListItem.propTypes = {
  // classes: PropTypes.object.isRequired,
  alert: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default AlertListItem;

