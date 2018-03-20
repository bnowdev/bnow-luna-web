import { createSelector } from "reselect";
import {convertDateToString} from '../utils/dateUtils';

export const getAreAlertsLoading = state => state.alerts.areLoading;
export const getAlertsPerPage = state => state.alerts.rowsPerPage;
export const getCurrentPage = state => state.alerts.page;
export const getIsSnackbarOpen = state => state.alerts.isOpenedSnackbar;
export const getSelectedAlert = state => state.alerts.selectedAlert;

const getAlertsList = state => state.alerts.data;

export const makeGetAlertsList = () => {
  return createSelector(
    [getAlertsList], 
    alertsList => alertsList.map(alert => {
      return { 
        ...alert,
        timeGenerated: convertDateToString(alert.date) 
      };
    })
  );
};



// refractor to selector form
