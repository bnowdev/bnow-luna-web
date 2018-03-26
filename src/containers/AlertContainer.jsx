import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  makeGetAlertsList,
  getAreAlertsLoading,
  getCurrentPage,
  getAlertsPerPage,
  getAlertsCount
} from "../selectors/alertSelectors";
import {
  changePage,
  changePageSize,
  changeSortBy,
  onRowClick
} from "../actions/alertActions";
import AlertTable from "../components/alert/AlertTable";

class AlertContainer extends Component {
  render = () => <AlertTable {...this.props} />;
}

AlertContainer.propTypes = {
  alerts: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  areLoading: PropTypes.bool.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onRowClick: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  changePageSize: PropTypes.func.isRequired,
  changeSortBy: PropTypes.func.isRequired
};

const makeMapStateToProps = (state, props) => {
  const getAlertsList = makeGetAlertsList();
  const mapStateToProps = (state, props) => {
    return {
      alerts: getAlertsList(state),
      count: getAlertsCount(state),
      areLoading: getAreAlertsLoading(state),
      rowsPerPage: getAlertsPerPage(state),
      page: getCurrentPage(state)
    };
  };

  return mapStateToProps;
};

const mapDispatchToProps = {
  onRowClick,
  changePage,
  changePageSize,
  changeSortBy
};

export default connect(makeMapStateToProps, mapDispatchToProps)(AlertContainer);
