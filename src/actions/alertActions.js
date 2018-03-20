import * as types from "../constants/actionTypes";
import { API_URL } from "../constants/apiConstants";
import { showSnackbar, hideSnackbar, updateSnackbar } from "./snackbarActions";
import { openModal, updateModalContent } from "./modalActions";

/**
 * ----- Loading alerts actions -----
 */
export const loadingAlerts = () => {
  return { type: types.LOADING_ALERTS_START };
};

export const loadingAlertsEnd = () => {
  return { type: types.LOADING_ALERTS_END };
};

/**
 * ----- On app start alert actions -----
 */
export const getInitialAlerts = () => async dispatch => {
  try {
    dispatch(loadingAlerts());

    let response = await fetch(`${API_URL}/alerts`);
    let alerts = await response.json();
    dispatch(getInitialAlertsSuccess(alerts));
  } catch (error) {
    dispatch(getInitialAlertsError(error));
    throw error;
  }
};

export const getInitialAlertsSuccess = alerts => ({
  type: types.GET_INITIAL_ALERTS_SUCCESS,
  alerts
});

export const getInitialAlertsError = error => ({
  type: types.GET_INITIAL_ALERTS_ERROR,
  error
});

/**
 * ----- On filter alert actions -----
 */
export const getFilteredAlerts = query => async dispatch => {
  dispatch(loadingAlerts());

  try {
    let response = await fetch(`${API_URL}/alerts${query}`);
    let filteredAlerts = await response.json();
    dispatch(getFilteredAlertsSuccess(filteredAlerts));
  } catch (error) {
    dispatch(getFilteredAlertsError(error));
    throw error;
  }
};

export const getFilteredAlertsSuccess = alerts => ({
  type: types.GET_FILTERED_ALERTS_SUCCESS,
  alerts
});

export const getFilteredAlertsError = error => ({
  type: types.GET_FILTERED_ALERTS_ERROR,
  error
});

/**
 * ----- On new alerts actions -----
 */
export const receiveAlert = alert => async dispatch => {
  dispatch(updateAlerts(alert));
  dispatch(updateSnackbar("new alert received"));
  dispatch(showSnackbar());

  setTimeout(() => dispatch(hideSnackbar()), 3000);
};

export const updateAlerts = alert => ({
  type: types.UPDATE_ALERTS,
  alert
});

/**
 * ---- On alert user interactions -----
 */
export const onRowClick = alert => dispatch => {
  //dispatch(setSelectedAlert(alert));
  dispatch(updateModalContent(alert));
  dispatch(openModal());
};

export const setPage = page => ({
  type: types.SET_PAGE,
  page
});

export const setRowsPerPage = rowsPerPage => ({
  type: types.SET_ROWS_PER_PAGE,
  rowsPerPage
});
