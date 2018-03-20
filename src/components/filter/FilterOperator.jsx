import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";

import * as types from "../../constants/filterConstants";
import { getFilteredOperators } from "../../utils/filterUtils";

const styles = theme => ({
  formControl: {
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: "100%"
  }
});

const FilterOperator = ({ classes, onOperatorChange, filter }) => {
  const operators = () => {
    if (filter.field.length > 0) {
      // return types[`OPERATORS.${filter.field}`].map(operator => {
      return getFilteredOperators(types.OPERATORS, filter.field).map(
        operator => {
          return (
            <MenuItem key={operator} value={operator}>
              {operator}
            </MenuItem>
          );
        }
      );
    } else return "field is null";
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="filter-operator">Filter Operator</InputLabel>
      {filter.field !== types.NONE ? (
        <Select value={filter.operator} onChange={onOperatorChange(filter)}>
          {operators()}
        </Select>
      ) : (
        <Select value="" disabled />
      )}
    </FormControl>
  );
};

FilterOperator.propTypes = {
  filter: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onOperatorChange: PropTypes.func.isRequired
};

export default withStyles(styles)(FilterOperator);
