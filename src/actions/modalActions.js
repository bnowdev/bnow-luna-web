import * as types from "../constants/actionTypes";

export const openModal = () => ({
  type: types.OPEN_MODAL
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL
});

/**
 * ----- Alert modal actions -----
 */
export const changeModalTab = tab => ({
  type: types.CHANGE_MODAL_TAB,
  tab
});

export const onApproveAlert = () => dispatch => {

  dispatch(closeModal());
  setTimeout(() => {
    changeModalTab(0);
  }, 200);
};

export const onRejectAlert = () => dispatch => {
  dispatch(closeModal());
  setTimeout(() => {
    changeModalTab(0);
  }, 200);
};

export const updateModalContent = (content) => ({
  type: types.UPDATE_MODAL_CONTENT,
  content
})
