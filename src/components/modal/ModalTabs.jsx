import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Tabs, { Tab } from "material-ui/Tabs";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  tab: {
    minWidth: "25%"
  }
});

class AlertDetailsModalTabs extends React.Component {
  state = {
    value: 0
  };

  onTabChange = (event, value) => {
    const { onTabChange } = this.props;
    onTabChange(value);
  };

  render() {
    const { classes, selectedTab } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={selectedTab}
          onChange={this.onTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab className={classes.tab} label="General" />
          <Tab className={classes.tab} label="Conclusion" />
          <Tab className={classes.tab} label="Explanation" />
          <Tab className={classes.tab} label="Solution" />
        </Tabs>
      </Paper>
    );
  }
}

AlertDetailsModalTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  onTabChange: PropTypes.func.isRequired,
  selectedTab: PropTypes.number.isRequired
};

export default withStyles(styles)(AlertDetailsModalTabs);
