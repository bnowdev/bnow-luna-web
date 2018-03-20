import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "material-ui/Button";
import MUISnackbar from "material-ui/Snackbar";

import { getIsSnackbarOpen } from "../selectors/alertSelectors";
import { hideSnackbar } from "../actions/alertActions";

class Snackbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // open: false,
      vertical: "top",
      horizontal: "right"
    };
  }

  handleClose = () => {
    //this.setState({ open: false });
    console.log("closed snackbar from component");
    this.props.closeSnackbar();
  };

  render() {
    const { vertical, horizontal } = this.state;
    const { open } = this.props;

    return (
      <MUISnackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={this.handleClose}
        message={<span>new alert added </span>}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    open: getIsSnackbarOpen(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeSnackbar: () => dispatch(hideSnackbar())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);

// SnackbarContentProps={{
//   "aria-describedby": "message-id"
// }}
