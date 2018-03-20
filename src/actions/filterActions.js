import * as types from "../constants/actionTypes";
import { getFilteredAlerts } from "../actions/alertActions";
import { getFilters, getOrderByField } from "../selectors/filterSelectors";
import {constructFilterQuery } from "../utils/filterUtils";

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

export const clearAlertsFilters = () => ({
  type: types.CLEAR_ALERTS_FILTERS
});

export const runFilters = () => async (dispatch, getState) => {
  const queryFilters = getFilters(getState());
  const orderBy = getOrderByField(getState());
  const query = constructFilterQuery(queryFilters, orderBy);
  await dispatch(getFilteredAlerts(query));
};

//export const runningFiltersStart()
