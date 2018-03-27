import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";

import FilterDateTimePicker from "./FilterDateTimePicker";
import * as types from "../../constants/filterConstants";

const styles = theme => ({
  formControl: {
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: "100%"
  },
  textField: {
    width: "100%"
  }
});

const FilterValue = ({ classes, onValueChange, filter }) => {
  switch (filter.field) {
    case types.SOURCE:
    case types.NAME:
      return (
        <TextField
          multiline
          label="Name"
          className={classes.textField}
          value={filter.value}
          onChange={onValueChange(filter)}
          margin="dense"
        />
      );

    case types.SEVERITY:
      return (
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="filter-value">Filter Value</InputLabel>
          <Select value={filter.value} onChange={onValueChange(filter)}>
            <MenuItem value={types.CRITICAL}> critical </MenuItem>
            <MenuItem value={types.WARNING}> warning </MenuItem>
            <MenuItem value={types.INFORMATION}> information </MenuItem>
          </Select>
        </FormControl>
      );

    // TODO
    case types.GENERATED_AT:
      return (
        <FilterDateTimePicker
          value={filter.value}
          onChange={onValueChange(filter)}
        />
      );

    default:
      return (
        <TextField
          disabled
          label="Filter Value"
          className={classes.textField}
          margin="dense"
        />
      );
  }
};

FilterValue.propTypes = {
  filter: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onValueChange: PropTypes.func.isRequired
};

export default withStyles(styles)(FilterValue);
