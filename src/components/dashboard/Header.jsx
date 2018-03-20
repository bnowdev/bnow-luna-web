import React from "react";
import PropTypes from 'prop-types';

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";

//import SearchBar from "./SearchBar";

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  // title: {
  //   marginRight: "50px"
  // }
  
});

const Header = props => {

  const {classes} = props;

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap className={classes.title}>
          Luna Operations Manager Console
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Header);
