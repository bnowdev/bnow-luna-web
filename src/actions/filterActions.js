import * as types from "../constants/actionTypes";
import { fetchAlerts } from "../actions/alertActions";
import { getFilters, getOrderByField } from "../selectors/filterSelectors";
import { constructFilterQuery } from "../utils/filterUtils";

export const addAlertsFilter = filter => ({
  type: types.ADD_ALERTS_FILTER,
  filter
});

export const updateAlertsFilter = filter => ({
  type: types.UPDATE_ALERTS_FILTER,
  filter
});

export const removeAlertsFilter = filter => ({
  type: types.REMOVE_ALERTS_FILTER,
  filter
});

export const clearAlertsFilters = () => async dispatch => {
  
  dispatch({
    type: types.CLEAR_ALERTS_FILTERS
  });

  await dispatch(fetchAlerts());

};

export const runFilters = () => async (dispatch, getState) => {
  await dispatch(fetchAlerts());
};

//export const runningFiltersStart()
