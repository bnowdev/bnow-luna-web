import * as types from "../constants/actionTypes";
import { API_URL } from "../constants/apiConstants";
import { showSnackbar, hideSnackbar, updateSnackbar } from "./snackbarActions";
import { openModal, updateModalContent } from "./modalActions";

import {
  getSortBy,
  getCurrentPage,
  getAlertsPerPage
} from "../selectors/alertSelectors";
import { getFilters } from "../selectors/filterSelectors";

import { constructFilterQuery } from "../utils/filterUtils";


export const isFetchingAlerts = () => ({
  type: types.ALERT_IS_FETCHING_ALERTS
});

export const fetchAlertsSuccess = payload => ({
  type: types.ALERT_FETCH_ALERTS_SUCCESS,
  payload
});

export const fetchAlertsError = error => ({
  type: types.ALERT_FETCH_ALERTS_ERROR,
  error
});

export const fetchAlerts = () => async (dispatch, getState) => {
  try {
    dispatch(isFetchingAlerts());


    const state = getState();
    const alertsFilters = getFilters(state);
    const alertsSortBy = getSortBy(state);
    const alertsPageIndex = getCurrentPage(state);
    const alertsPageSize = getAlertsPerPage(state);

    const query = constructFilterQuery(
      alertsFilters,
      alertsSortBy,
      alertsPageIndex,
      alertsPageSize
    );

    const response = await fetch(`${API_URL}/alerts${query}`);
    const json = await response.json();
    // destructure json and return new payload object
    // const payload = ({ data, pageIndex, pageSize, count }) =>
    //   ({
    //     data,
    //     pageIndex,
    //     pageSize,
    //     count
    //   }(json));

    const {data, pageIndex, pageSize, count} = json;
    const payload = {
      data,
      pageIndex,
      pageSize,
      count
    }
    
    dispatch(fetchAlertsSuccess(payload));

  } catch (error) {

    dispatch(fetchAlertsError(error));
    throw error;
  }
};

export const changePage = (page) => async dispatch => {
  dispatch({
    type: types.ALERT_CHANGE_PAGE,
    payload: page
  });

  await dispatch(fetchAlerts());
} 

export const changePageSize = (pageSize) => async dispatch => {
  dispatch({
    type: types.ALERT_CHANGE_PAGE_SIZE,
    payload: pageSize
  });

  await dispatch(fetchAlerts());
}

export const changeSortBy = (sortBy) => async dispatch => {
  dispatch({
    type: types.ALERT_SORT_BY_ALERTS,
    payload: sortBy
  });

  await dispatch(fetchAlerts());
}




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

    const response = await fetch(`${API_URL}/alerts`);
    const json = await response.json();
    const { data, pageIndex, pageSize, count } = json;

    dispatch(setPagingInfo(pageIndex, pageSize, count));
    dispatch(getInitialAlertsSuccess(data));
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
    let json = await response.json();
    const { data, pageIndex, pageSize, count } = json;
    dispatch(setPagingInfo(pageIndex, pageSize, count));
    dispatch(getFilteredAlertsSuccess(data));
    dispatch();
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

export const setPagingInfo = (page, rowsPerPage, totalItems) => ({
  type: types.SET_PAGING_INFO,
  page,
  rowsPerPage,
  totalItems
});

export const setPage = page => ({
  type: types.SET_PAGE,
  page
});

export const setRowsPerPage = rowsPerPage => ({
  type: types.SET_ROWS_PER_PAGE,
  rowsPerPage
});

export const setAreFiltered = areFiltered => ({
  type: types.SET_ARE_FILTERED,
  areFiltered
});
