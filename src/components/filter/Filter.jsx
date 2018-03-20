import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import FilterField from "./FilterField";
import FilterOperator from "./FilterOperator";
import FilterValue from "./FilterValue";
import FilterDeleteButton from "./FilterDeleteButton";

const styles = theme => ({
  filter: {
    display: "flex",
    flexGrow: 1
  },
  root: {
    flexGrow: 1,
  },
  deleteButton: {
    justifyContent: "flex-end",
    display: "flex",
    paddingTop: "42px !important"
  }
});

const FilterRow = ({
  classes,
  filter,
  onFieldChange,
  onOperatorChange,
  onValueChange,
  onRemoveFilter
}) => {
  return (
    <div className={classes.filter}>
      <Grid container alignItems="flex-start" spacing={40}>
        <Grid item xs={3} >
          <FilterField
            // classes={classes}
            onFieldChange={onFieldChange}
            filter={filter}
          />
        </Grid>
        <Grid item xs={3}>
          <FilterOperator
            // classes={classes}
            onOperatorChange={onOperatorChange}
            filter={filter}
          />
        </Grid>
        <Grid item xs={5}>
          <FilterValue
            // classes={classes}
            onValueChange={onValueChange}
            filter={filter}
          />
        </Grid>
        <Grid item xs={1}  className={classes.deleteButton}>
          <FilterDeleteButton
            // classes={classes}
            onRemoveFilter={onRemoveFilter}
            filter={filter}
          />
        </Grid>
      </Grid>
    </div>
  );
};

FilterRow.propTypes = {
  filter: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onOperatorChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onRemoveFilter: PropTypes.func.isRequired
};

export default withStyles(styles)(FilterRow);
