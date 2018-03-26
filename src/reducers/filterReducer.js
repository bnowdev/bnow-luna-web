import * as types from "../constants/actionTypes";

const initialState = {
  data: [],
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_ALERTS_FILTER:
      return {
        ...state,
        data: [...state.data, action.filter]
      };

    // verify if this is correct
    case types.UPDATE_ALERTS_FILTER:
      return {
        ...state,
        data: state.data.map(filter => {
          if (filter.id !== action.filter.id) {
            return filter;
          }

          return {
            ...filter,
            ...action.filter
          };
        })
      };

    case types.REMOVE_ALERTS_FILTER:
      return {
        ...state,
        data: state.data.filter(filter => 
          filter.id !== action.filter.id)
      };

    case types.CLEAR_ALERTS_FILTERS:
      return {
        ...state,
        data: []
      };

    default:
      return state;
  }
}
