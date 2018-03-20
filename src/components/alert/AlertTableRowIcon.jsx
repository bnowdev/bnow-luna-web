import React from "react";
import PropTypes from "prop-types";

import { withStyles } from 'material-ui/styles';
import InfoOutlineIcon from "material-ui-icons/InfoOutline";
import ErrorIcon from "material-ui-icons/Error";
import WarningIcon from "material-ui-icons/Warning";

const styles = {
    error:{
      fill: "red"
    },
    warning: {
      fill: "orange",
    },
    info: {
      fill: "blue"
    }
}

const AlertTableRowIcon = ({classes, alert}) => {
  const {severity} = alert;
  // const severity = props.alert.severity;
  // const {classes} = props;

  switch (severity) {
    case 2:
      return <ErrorIcon className={classes.error}/>;

    case 1:
      return <WarningIcon className={classes.warning} />;

    case 3:
      return <InfoOutlineIcon className={classes.info}/>;

    default:
      return "Unknown severity";
    }
};

AlertTableRowIcon.propTypes = {
  alert: PropTypes.shape({
    severity: PropTypes.number.isRequired
  }),
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AlertTableRowIcon);
