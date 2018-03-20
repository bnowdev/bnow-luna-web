import React from "react";

import { TableCell, TableRow } from "material-ui/Table";

const AlertListHeadingsRow = props => {
  return (
    <TableRow>
      <TableCell>Severity</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Source</TableCell>
      <TableCell numeric>Generated At</TableCell>
    </TableRow>
  );
};

export default AlertListHeadingsRow;
