import React, { Component } from "react";
import PropTypes from "prop-types";

import { TableRow, TableFooter, TablePagination } from "material-ui/Table";

class AlertListFooter extends Component {

  handleChangePage = (event, page) => this.props.onChangePage(event, page);

  handleChangeRowsPerPage = event => this.props.onChangeRowsPerPage(event);

  render() {
    const { alertCount, page, rowsPerPage } = this.props;

    return (
      <TableFooter>
        <TableRow>
          <TablePagination
            colSpan={4}
            count={alertCount}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
            // Actions={TablePaginationActionsWrapped}
          />
        </TableRow>
      </TableFooter>
    );
  }
}

AlertListFooter.propTypes = {};

export default AlertListFooter;
