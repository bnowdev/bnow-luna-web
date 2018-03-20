import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Table, {
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";

import AlertListItem from "./AlertListItem";
import AlertListHeaderToolbar from "./AlertListHeaderToolbar";
import AlertListHeadingsRow from "./AlertListHeadingsRow";
import AlertListFilterRow from "./AlertListFilterRow";
import AlertDetailsModal from "./AlertDetailsModal";
import AlertListFooter from "./AlertListFooter";
import Loader from "./Loader";

import { makeGetAlertsList } from "../selectors/alertSelectors";

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

class AlertList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAlertModalOpen: false,
      selectedAlert: {
        alertName: "",
        source: "",
        severity: 0,
        priority: 0,
        timeGenerated: "",
        description: "",
        conclusion: {
          text: ""
        },
        solution: {
          text: ""
        },
        explanation: {
          text: ""
        }
      },
      page: 0,
      rowsPerPage: 5,
      filterList: []
    };
  }

  handleRowClick = alert => {
    this.setState({
      selectedAlert: alert,
      isAlertModalOpen: true
    });
  };

  handleModalClose = () => {
    console.log("close");
    this.setState({
      isAlertModalOpen: false
    });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  renderAlertList = (alerts, page, rowsPerPage) => {
    return alerts.length >= 0
      ? alerts
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map(alert => {
            return (
              <AlertListItem
                key={alert.id}
                alert={alert}
                onClick={this.handleRowClick}
              />
              
            );
          })
      : "something";
  };

  renderEmptyRows = (alerts, page, rowsPerPage) => {
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, alerts.length - page * rowsPerPage);

    if (emptyRows > 0) {
      return (
        <TableRow style={{ height: 49 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      );
    }

    return null;
  };

  // renderFilterList = () => {
  //   return this.state.filterList.map((filter, index) => {
  //     if (filter.type === "OR") {
  //       return [
  //         <TableRow>
  //           <TableCell> OR </TableCell>
  //           <TableCell />
  //           <TableCell />
  //           <TableCell />
  //         </TableRow>,
  //         <AlertListFilterRow key={index} filter={filter} />
  //       ];
  //     } else return <AlertListFilterRow key={index} filter={filter} />;
  //   });
  // };

  // renderFilterButtons = () => (
  //   <div>
  //     <Button
  //       variant="raised"
  //       color="primary"
  //       className={this.props.classes.button}
  //       onClick={this.handleAddFilter("AND")}
  //     >
  //       AND filter
  //     </Button>
  //     <Button
  //       variant="raised"
  //       color="primary"
  //       className={this.props.classes.button}
  //       onClick={this.handleAddFilter("OR")}
  //     >
  //       OR filter
  //     </Button>
  //     <Button
  //       variant="raised"
  //       color="secondary"
  //       className={this.props.classes.button}
  //       onClick={this.handleAddFilter("")}
  //     >
  //       RUN FILTER
  //     </Button>
  //   </div>
  // );

  render() {
    const { page, rowsPerPage } = this.state;
    const { alerts, classes, isLoading } = this.props;

    // console.log("alertslist => alerts", alerts);

    return (
      <Paper className={classes.root}>
        {isLoading && <Loader />}

        <AlertListHeaderToolbar />
        {/* {this.renderFilterButtons()} */}
        <Table className={classes.table}>
          <TableHead>
            {/* {this.renderFilterList()} */}
            <AlertListHeadingsRow />
          </TableHead>
          <TableBody>
            {this.renderAlertList(alerts, page, rowsPerPage)}
            {this.renderEmptyRows(alerts, page, rowsPerPage)}
          </TableBody>
          <AlertListFooter
            alertCount={alerts.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Table>

        <AlertDetailsModal
          open={this.state.isAlertModalOpen}
          alert={this.state.selectedAlert}
          onClose={this.handleModalClose}
        />
      </Paper>
    );
  }
}

AlertList.propTypes = {
  classes: PropTypes.object.isRequired
};

const makeMapStateToProps = (state, props) => {
  const getAlertsList = makeGetAlertsList();
  const mapStateToProps = (state, props) => {
    return {
      alerts: getAlertsList(state),
      isLoading: state.alerts.isLoading
    };
  };

  return mapStateToProps;
};

export default connect(makeMapStateToProps)(withStyles(styles)(AlertList));
