import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";

import * as types from "../../constants/filterConstants";

const styles = theme => ({
  formControl: {
  //margin: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    // minWidth: 150
    width: "100%"
  }
});

const FilterField = ({ classes, onFieldChange, filter }) => {
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="filter-field">Filter Field</InputLabel>
      <Select value={filter.field} onChange={onFieldChange(filter)}>
        <MenuItem value={types.NONE}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={types.SEVERITY}>severity</MenuItem>
        <MenuItem value={types.NAME}>name</MenuItem>
        <MenuItem value={types.SOURCE}>source</MenuItem>
        <MenuItem value={types.GENERATED_AT}>generated at</MenuItem>
      </Select>
    </FormControl>
  );
};

FilterField.propTypes = {
  filter: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired
};

export default withStyles(styles)(FilterField);
