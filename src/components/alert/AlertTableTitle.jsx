import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
});

let AlertTableTitle = props => {
  const { classes } = props;

  return (
    <Toolbar className={classes.root}>
      <Typography variant="title">Alerts Received</Typography>
    </Toolbar>
  );
};

AlertTableTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default AlertTableTitle = withStyles(styles)(AlertTableTitle);
