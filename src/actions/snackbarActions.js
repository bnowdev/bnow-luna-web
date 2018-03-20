import * as types from "../constants/actionTypes";

export const showSnackbar = () => ({
  type: types.SHOW_SNACKBAR
});

export const hideSnackbar = () => ({
  type: types.HIDE_SNACKBAR
});

export const updateSnackbar = (content) => ({
  type: types.UPDATE_SNACKBAR,
  content
});