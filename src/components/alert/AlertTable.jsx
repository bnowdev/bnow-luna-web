import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { TableBody, TableHead, TableRow, TableCell } from "material-ui/Table";
import Table from "material-ui/Table";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";

import AlertTableTitle from "./AlertTableTitle";
import AlertTableHeading from "./AlertTableHeading";
import AlertTableRow from "./AlertTableRow";
import AlertTableRowIcon from "./AlertTableRowIcon";
import AlertTableFooter from "./AlertTableFooter";

import Loader from "../common/Loader";

const styles = theme => ({
  root: {
    overflowY: "hidden",
    width: "100%",
    overflowX: "auto",
    display: "flex-start",
    flexDirection: "column",
    alignItems: "start",
    position: "relative"
  },
  table: {
    minWidth: 700
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: "24px"
  }
});

class AlertTable extends Component {
  renderEmptyRows = () => {
    const { alerts, page, rowsPerPage } = this.props;
    // const emptyRows =
    //   rowsPerPage - Math.min(rowsPerPage, alerts.length - page * rowsPerPage);
    
    let emptyRows = 0;
    if(alerts.length < rowsPerPage ) {
      emptyRows = rowsPerPage - alerts.length
    }
  
    return emptyRows > 0 ? (
      <TableRow style={{ height: 49 * emptyRows }}>
        <TableCell colSpan={6} />
      </TableRow>
    ) : null;
  };

  render() {
    const {
      classes,
      alerts,
      count,
      areLoading,
      page,
      rowsPerPage,
      onRowClick,
      changePage,
      changePageSize,
      changeSortBy
    } = this.props;

    return (
      <Paper className={classes.root}>
        {areLoading && <Loader />}
        <AlertTableTitle />
        <Table className={classes.table}>
          <TableHead>
            <AlertTableHeading changeSortBy={changeSortBy} />
          </TableHead>
          <TableBody>
            {alerts
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(alert => {
                return (
                  <AlertTableRow
                    key={alert.id}
                    alert={alert}
                    onRowClick={onRowClick}
                    //onClick={openAlertModal}
                  />
                );
              })}
            {this.renderEmptyRows()}
          </TableBody>
          <AlertTableFooter
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            changePage={changePage}
            changePageSize={changePageSize}
          />
        </Table>
      </Paper>
    );
  }
}

AlertTable.propTypes = {
  classes: PropTypes.object.isRequired,
  alerts: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  areLoading: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  onRowClick: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  changePageSize: PropTypes.func.isRequired,
  changeSortBy: PropTypes.func.isRequired
};

export default withStyles(styles)(AlertTable);
