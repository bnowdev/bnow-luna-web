import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Button from 'material-ui/Button';
import Dialog, { DialogTitle, DialogActions } from "material-ui/Dialog";
import blue from "material-ui/colors/blue";

import AlertDetailsModalTabs from "./AlertDetailsModalTabs";
import AlertDetailsModalContent from "./AlertDetailsModalContent";

const styles = {
  // TODO update this
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
};

class AlertDetailsModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0
    };
  }

  handleTabChange = tab => {
    this.setState({
      selectedTab: tab
    });
  };

  handleCloseModal = () => {
    this.props.onClose();
    this.setState({
      selectedTab: 0
    })
  }

  render() {
    const { classes, alert, open, onClose } = this.props;

    return (
      <Dialog
        onClose={this.handleCloseModal}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">{alert.name}</DialogTitle>
        <div>
          <AlertDetailsModalTabs onTabChange = {this.handleTabChange} />
          <AlertDetailsModalContent
            selectedTab={this.state.selectedTab}
            alert={alert}
          />
        </div>
        <DialogActions>
            <Button onClick={this.handleCloseModal} color="secondary">
              INCORRECT
            </Button>
            <Button onClick={this.handleCloseModal} color="primary" autoFocus>
            CORRECT
            </Button>
          </DialogActions>
      </Dialog>
    );
  }
}

AlertDetailsModal.propTypes = {
  classes: PropTypes.object.isRequired,
  alert: PropTypes.shape({
    alertName: PropTypes.string,
    severity: PropTypes.number,
    source: PropTypes.string,
    timeGenerated: PropTypes.string,
    description: PropTypes.string
  }),
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

export default withStyles(styles)(AlertDetailsModal);
