import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";

import * as types from "../../constants/filterConstants";
import { getFilteredOperators } from "../../utils/filterUtils";

const styles = theme => ({
  iconButton: {
    width: "unset",
  },

});

const FilterDeleteButton = ({ classes, filter, onRemoveFilter }) => {
  return (
    <IconButton 
      className={classes.iconButton}
      aria-label="Delete"
      onClick={onRemoveFilter(filter)}
    >
      <DeleteIcon />
    </IconButton>
  );
};

FilterDeleteButton.propTypes = {
  filter: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onRemoveFilter: PropTypes.func.isRequired
};

export default withStyles(styles)(FilterDeleteButton);
