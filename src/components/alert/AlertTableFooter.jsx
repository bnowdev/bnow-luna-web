import React, { Component } from "react";
import PropTypes from "prop-types";

import { TableRow, TableFooter, TablePagination } from "material-ui/Table";

class AlertTableFooter extends Component {

  onChangePage = (event, page) => {
    const {setPage} = this.props;
    setPage(page);
  }

  onChangeRowsPerPage = (event) => {
    const {setRowsPerPage} = this.props;
    setRowsPerPage(event.target.value);
  }

  render() {
    const { count, page, rowsPerPage} = this.props;

    return (
      <TableFooter>
        <TableRow>
          <TablePagination
            colSpan={4}
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={this.onChangePage}
            onChangeRowsPerPage={this.onChangeRowsPerPage}
            // Actions={TablePaginationActionsWrapped}
          />
        </TableRow>
      </TableFooter>
    );
  }
}

AlertTableFooter.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  setRowsPerPage: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired
};

export default AlertTableFooter;
