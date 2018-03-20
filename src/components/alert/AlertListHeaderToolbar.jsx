import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  // title: {
  //   flex: "0 0 auto"
  // }
});

let AlertListHeaderToolbar = props => {
  const { classes } = props;

  return (
    <Toolbar className={classes.root}>
      <Typography variant="title">Alerts Received</Typography>
    </Toolbar>
  );
};

AlertListHeaderToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default AlertListHeaderToolbar = withStyles(styles)(AlertListHeaderToolbar);
