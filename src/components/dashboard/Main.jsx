import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import AlertContainer from "../../containers/AlertContainer";
import FilterContainer from "../../containers/FilterContainer";

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works,
  },
  toolbar: theme.mixins.toolbar ,
});

function Main(props) {
  const { classes } = props;
  
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <FilterContainer />
      <AlertContainer />
    </main>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
