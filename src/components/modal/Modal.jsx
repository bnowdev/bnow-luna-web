import React from "react";
import PropTypes from "prop-types";

import Button from "material-ui/Button";
import Dialog, { DialogTitle, DialogActions } from "material-ui/Dialog";

import ModalBody from "./ModalBody";
import ModalTabs from "./ModalTabs";

class Modal extends React.Component {
  onClose = () => {
    const { changeModalTab, closeModal } = this.props;
    closeModal();
    changeModalTab(0);
  };

  onApprove = () => {
    const { onApproveAlert, changeModalTab } = this.props;
    onApproveAlert();
    setTimeout(() => {
      changeModalTab(0);
    }, 200);

    // closeModal();
  };

  onReject = () => {
    const { onRejectAlert, changeModalTab } = this.props;
    onRejectAlert();
    setTimeout(() => {
      changeModalTab(0);
    }, 200);    // closeModal();
  };

  render() {
    // content => selected alert
    const { isOpen, content, changeModalTab, tab, type } = this.props;

    if (!content) return null;

    return (
      <Dialog
        onClose={this.onClose}
        aria-labelledby="simple-dialog-title"
        open={isOpen}
      >
        <DialogTitle id="simple-dialog-title">{content.name}</DialogTitle>
        <div>
          <ModalTabs onTabChange={changeModalTab} selectedTab={tab} />
          <ModalBody selectedTab={tab} content={content} type={type} />
        </div>
        <DialogActions>
          <Button onClick={this.onApprove} color="secondary">
            APPROVE
          </Button>
          <Button onClick={this.onReject} color="primary" autoFocus>
            REJECT
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  tab: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  changeModalTab: PropTypes.func.isRequired,
  onApproveAlert: PropTypes.func.isRequired,
  onRejectAlert: PropTypes.func.isRequired
};

export default Modal;
