import * as types from "../constants/actionTypes";

//import initialState from './initialState';

const initialState = {
  data: [],
  selectedAlert: null,
  areLoading: false,
  areFiltered: false,
  sortBy: null,
  isOpenedSnackbar: false,
  page: 0,
  rowsPerPage: 5,
  totalItems: 0,
  error: ""
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {

    case types.ALERT_IS_FETCHING_ALERTS:
      return {
      ...state, 
      areLoading: true
    }

    case types.ALERT_FETCH_ALERTS_SUCCESS: 
      return {
        ...state,
        data: action.payload.data,
        page: action.payload.pageIndex,
        rowsPerPage: action.payload.pageSize,
        totalItems: action.payload.count,
        areLoading: false,
      }

    case types.ALERT_FETCH_ALERTS_ERROR:
     return {
       ...state,
       areLoading: false,
       error: action.error
    }

    case types.ALERT_SORT_BY_ALERTS:
     return {
       ...state,
       sortBy: action.payload
     }

    case types.ALERT_CHANGE_PAGE: 
     return {
       ...state,
       page: action.payload
     }

    case types.ALERT_CHANGE_PAGE_SIZE:
     return {
       ...state,
       rowsPerPage: action.payload
     }

    case types.ALERT_RECEIVE_NEW_ALERT:
     return {
       ...state,
       data: [{ ...action.payload }, ...state.data]
     }

    // case types.ALERT_SELECT_ALERT:
    //  return {
    //    ...state,

    //  }

    

    //  case types.ALERT:
    //  return {
    //    ...state,
    //    areLoading: false,
    //    error: action.error
    //  }

    //  case types.ALERT_FETCH_ALERTS_ERROR:
    //  return {
    //    ...state,
    //    areLoading: false,
    //    error: action.error
    //  }





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
        areLoading: false,
        areFiltered: false,
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
        data: [{ ...action.alert }, ...state.data]
      };

    case types.SET_PAGING_INFO:
      return {
        ...state,
        page: action.page,
        rowsPerPage: action.rowsPerPage,
        totalItems: action.totalItems
      };

    case types.SET_PAGE:
      return {
        ...state,
        page: action.page
      };

    case types.SET_ROWS_PER_PAGE:
      return {
        ...state,
        rowsPerPage: action.rowsPerPage
      };

    case types.SET_ARE_FILTERED:
      return {
        ...state,
        areFiltered: action.areFiltered
      };

    //TODO rest of reducer logic ...

    default:
      return state;
  }
}
