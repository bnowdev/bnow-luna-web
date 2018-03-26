import React, { Component } from "react";
import PropTypes from "prop-types";

import { TableRow, TableFooter, TablePagination } from "material-ui/Table";

class AlertTableFooter extends Component {

  handleChangePage = (event, page) => {
    const {changePage} = this.props;
    changePage(page);
  }

  handleChangePageSize = (event) => {
    const {changePageSize} = this.props;
    changePageSize(event.target.value);
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
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangePageSize}
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
  changePage: PropTypes.func.isRequired,
  changePageSize: PropTypes.func.isRequired,
};

export default AlertTableFooter;
