import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction
} from "material-ui/List";
import Divider from "material-ui/Divider";
import Switch from "material-ui/Switch";

import LightbulbOutlineIcon from "material-ui-icons/LightbulbOutline";
import ChildCareIcon from "material-ui-icons/ChildCare";

import { loadingAlerts, loadingAlertsEnd } from "../../actions/alertActions";

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
});

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingAlerts: false
    };
  }

  handleSwitchChange = () => {
    console.log("switchChange");

    this.setState(
      prevState => {
        return {
          isLoadingAlerts: !prevState.isLoadingAlerts
        };
      },
      () => {
        this.state.isLoadingAlerts
          ? this.props.startLoading()
          : this.props.endLoading();
      }
    );
  };

  render() {
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: this.props.classes.drawerPaper
        }}
      >
        <div className={this.props.classes.toolbar} />
        <List>
          <ListItem button>
            <ListItemIcon>
              <LightbulbOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Alerts" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ChildCareIcon />
            </ListItemIcon>
            <ListItemText primary="Lorem ipsum" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemText primary="Simulate list loading" />
            <ListItemSecondaryAction>
              <Switch
                checked={this.state.isLoadingAlerts}
                onChange={this.handleSwitchChange}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="vitae mollis" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(loadingAlerts()),
  endLoading: () => dispatch(loadingAlertsEnd())
});

export default connect(null, mapDispatchToProps)(
  withStyles(styles)(SideNav)
);
