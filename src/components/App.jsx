import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

// import AppHeader from "./AppHeader";
// import SideDrawer from "./SideDrawer";
// import AppMain from "./AppMain";
// import Snackbar from "./Snackbar";

import Header from "./dashboard/Header";
import Main from "./dashboard/Main";
import SideNav from "./dashboard/SideNav";
//import Snackbar from "./common/Snackbar";
import ModalContainer from "../containers/ModalContainer";

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: "flex"
  },
  // drawerPaper: {
  //   position: "relative",
  //   width: drawerWidth
  // },
  // content: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.default,
  //   padding: theme.spacing.unit * 3,
  //   minWidth: 0 // So the Typography noWrap works
  // },
  // toolbar: theme.mixins.toolbar
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <SideNav />
        <Main />
        {/* <Snackbar /> */}
        <ModalContainer />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
