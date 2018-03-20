import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";


import Modal from "../components/modal/Modal";
import { getIsModalOpen,getType, getSelectedTab, getContent } from "../selectors/modalSelectors";
import {changeModalTab, openModal, closeModal, onApproveAlert, onRejectAlert} from "../actions/modalActions";

const ModalContainer = (props) => <Modal {...props} />

ModalContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  tab: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal:  PropTypes.func.isRequired, 
  changeModalTab:  PropTypes.func.isRequired, 
  onApproveAlert:  PropTypes.func.isRequired,
  onRejectAlert:  PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  isOpen: getIsModalOpen(state),
  type: getType(state),
  content: getContent(state),
  tab: getSelectedTab(state)
})

const mapDispatchToProps = {
  openModal, 
  closeModal, 
  changeModalTab, 
  onApproveAlert,
  onRejectAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);