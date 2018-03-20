import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

const styles = theme => ({
  root: {
    flexGrow: 1,
    // marginTop: theme.spacing.unit * 3,
  },
  tab: {
    minWidth: "25%"
  }
});


class AlertDetailsModalTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.onTabChange(value);
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs 
          value={this.state.value}
          onChange={this.handleChange}
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
};

export default withStyles(styles)(AlertDetailsModalTabs);
