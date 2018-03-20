import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { makeGetAlertsList, getAreAlertsLoading, getCurrentPage, getAlertsPerPage } from "../selectors/alertSelectors";
import {onRowClick, setPage, setRowsPerPage} from "../actions/alertActions";
import AlertTable from "../components/alert/AlertTable";

class AlertContainer extends Component {

  render = () => <AlertTable {...this.props} />;

}

AlertContainer.propTypes = {
  alerts: PropTypes.array.isRequired,
  areLoading: PropTypes.bool.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onRowClick: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  setRowsPerPage: PropTypes.func.isRequired
};

const makeMapStateToProps = (state, props) => {
  const getAlertsList = makeGetAlertsList();
  const mapStateToProps = (state, props) => {
    return {
      alerts: getAlertsList(state),
      areLoading: getAreAlertsLoading(state),
      rowsPerPage: getAlertsPerPage(state),
      page: getCurrentPage(state),
    };
  };

  return mapStateToProps;
};

const mapDispatchToProps = {
  onRowClick,
  setPage,
  setRowsPerPage
}

export default connect(makeMapStateToProps, mapDispatchToProps)(AlertContainer);
