import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as filterActions from "../actions/filterActions";
import { getFilters } from "../selectors/filterSelectors";
import FilterList from "../components/filter/FilterList";
import { NONE } from "../constants/filterConstants";

class FilterContainer extends Component {
  handleFieldChange = filter => event => {
    const newFilter = { ...filter, field: event.target.value };
    this.props.actions.updateAlertsFilter(newFilter);
  };

  handleOperatorChange = filter => event => {
    const newOperator = { ...filter, operator: event.target.value };
    this.props.actions.updateAlertsFilter(newOperator);
  };

  handleValueChange = filter => event => {
    const newValue = { ...filter, value: event.target.value };
    this.props.actions.updateAlertsFilter(newValue);
  };

  handleAddFilter = queryType => event => {
    const newFilter = {
      // id: this.props.filters.length + 1,
      id: new Date().getTime(),
      field: NONE,
      operator: NONE,
      value: NONE,
      queryType: queryType
    };

    this.props.actions.addAlertsFilter(newFilter);
  };

  handleRemoveFilter = filter => event =>
    this.props.actions.removeAlertsFilter(filter);

  handleClearFilters = () => this.props.actions.clearAlertsFilters();

  handleRunFilters = () => {
    this.props.actions.runFilters();
  }

  render() {
    return (
      <FilterList
        filters={this.props.filters}
        onFieldChange={this.handleFieldChange}
        onOperatorChange={this.handleOperatorChange}
        onValueChange={this.handleValueChange}
        onAddFilter={this.handleAddFilter}
        onRemoveFilter={this.handleRemoveFilter}
        onClearFilters={this.handleClearFilters}
        onRunFilters={this.handleRunFilters}
      />
    );
  }
}

FilterContainer.propTypes = {
  filters: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  // onFieldChange: PropTypes.func.isRequired,
  // onOperatorChange: PropTypes.func.isRequired,
  // onValueChange: PropTypes.func.isRequired,
  // onAddFilter: PropTypes.func.isRequired,
  // onRemoveFilter: PropTypes.func.isRequired,
  // onClearFilters: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
  filters: getFilters(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
