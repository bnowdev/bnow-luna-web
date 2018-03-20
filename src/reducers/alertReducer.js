import * as types from "../constants/actionTypes";

//import initialState from './initialState';

const initialState = {
  data: [],
  selectedAlert: null,
  areLoading: false,
  areFiltered: false,
  isOpenedSnackbar: false,
  page: 0,
  rowsPerPage: 5,
  error: ""
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOADING_ALERTS_START:
      return {
        ...state,
        areLoading: true
      };

    case types.LOADING_ALERTS_END:
      return {
        ...state,
        areLoading: false
      };

    case types.GET_INITIAL_ALERTS_SUCCESS:
      return {
        ...state,
        data: action.alerts,
        areLoading: false
      };

    case types.GET_FILTERED_ALERTS_SUCCESS:
      return {
        ...state,
        data: action.alerts,
        areLoading: false,
        areFiltered: true
      };

    case types.GET_INITIAL_ALERTS_ERROR:
    case types.GET_FILTERED_ALERTS_ERROR:
      return {
        ...state,
        error: action.error,
        areLoading: false
      };

    case types.UPDATE_ALERTS:
      return {
        ...state,
        data: [action.alert, ...state.data]
      };

    case types.SET_SELECTED_ALERT:
      return {
        ...state,
        selectedAlert: { ...action.alert }
      };

    case types.SET_PAGE: 
      return {
        ...state, 
        page: action.page
      }

    case types.SET_ROWS_PER_PAGE:
      return {
        ...state, 
        rowsPerPage: action.rowsPerPage
      }

    //TODO rest of reducer logic ...

    default:
      return state;
  }
}
