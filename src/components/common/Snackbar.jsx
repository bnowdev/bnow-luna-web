import React, { Component } from "react";
import PropTypes from "prop-types";

import MUISnackbar from "material-ui/Snackbar";

class Snackbar extends Component {
  handleClose = () => {
    const {hideSnackbar} = this.props;
    hideSnackbar();
  };

  render() {
    const { isOpen, content, color, position } = this.props;
    return (
      <MUISnackbar
        anchorOrigin={position}
        open={isOpen}
        onClose={this.handleClose}
        message={<span>{content}</span>}
      />
    );
  }
}

export default Snackbar;
