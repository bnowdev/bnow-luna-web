import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import Header from "./dashboard/Header";
import Main from "./dashboard/Main";
import SideNav from "./dashboard/SideNav";
import SnackbarContainer from "../containers/SnackbarContainer";
import ModalContainer from "../containers/ModalContainer";

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: "flex"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <SideNav />
        <Main />
        <SnackbarContainer />
        <ModalContainer />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
