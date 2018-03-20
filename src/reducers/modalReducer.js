import * as types from "../constants/actionTypes";
import {ALERT_MODAL} from "../constants/modalConstants";

const initialState = {
  isOpen: false,
  type: ALERT_MODAL,
  tab: 0,
  content: null
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case types.OPEN_MODAL:
      return {
        ...state,
        isOpen: true
      };
    
    case types.CLOSE_MODAL: 
    return {
      ...state, 
      isOpen: false
    }

    case types.UPDATE_MODAL_CONTENT: 
   // debugger;
    return {
      ...state,
      content: {
        ...action.content
      }
    }

    case types.CHANGE_MODAL_TAB: 
    return {
      ...state, 
      tab: action.tab
    }


    //TODO rest of reducer logic ...

    default:
      return state;
  }
}
