import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as filterActions from "../actions/filterActions";
import { getFilters } from "../selectors/filterSelectors";
import FilterList from "../components/filter/FilterList";
import { GENERATED_AT, NONE } from "../constants/filterConstants";

import { getCurrentMomentDate } from "../utils/dateUtils";

class FilterContainer extends Component {
  handleFieldChange = filter => event => {
    const { updateAlertsFilter } = this.props.actions;

    const newField = event.target.value;

    if (newField === GENERATED_AT) {
    
      const newValue = getCurrentMomentDate();
      const newFilter = { ...filter, field: newField, value: newValue };
      updateAlertsFilter(newFilter);
    
    } else {

      const newFilter = { ...filter, field: newField };
      updateAlertsFilter(newFilter);
    
    }
  };

  handleOperatorChange = filter => event => {
    const newOperator = { ...filter, operator: event.target.value };
    this.props.actions.updateAlertsFilter(newOperator);
  };

  handleValueChange = filter => event => {
    let newValue = null;
    
    // a moment date object is returned
    if (filter.field === GENERATED_AT) {
      newValue = { ...filter, value: event };
    }else{
      newValue = { ...filter, value: event.target.value };
    }

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
  };

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
