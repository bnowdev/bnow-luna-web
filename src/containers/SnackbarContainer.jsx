import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Snackbar from "../components/common/Snackbar";
import { hideSnackbar } from "../actions/snackbarActions";
import {
  getIsSnackbarOpen,
  getSnackbarContent,
  getSnackbarColor,
  getSnackbarPosition
} from "../selectors/snackbarSelectors";

const SnackbarContainer = props => <Snackbar {...props} />;

SnackbarContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  position: PropTypes.shape({
    vertical: PropTypes.string.isRequired,
    horizontal: PropTypes.string.isRequired
  }).isRequired,
  hideSnackbar: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isOpen: getIsSnackbarOpen(state),
    content: getSnackbarContent(state),
    color: getSnackbarColor(state),
    position: getSnackbarPosition(state)
  };
};

const mapDispatchToProps = {
  hideSnackbar
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarContainer);
