import * as types from "../constants/actionTypes";

const initialState = {
  isOpen: false,
  content: "",
  // debounce: 5000,
  color: "primary",
  position: {
    vertical: "top",
    horizontal: "right"
  }
}

export default function snackbarReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_SNACKBAR:
      return {
        ...state,
        isOpen: true
      };
    
    case types.HIDE_SNACKBAR: 
    return {
      ...state, 
      isOpen: false
    }

    case types.UPDATE_SNACKBAR:
     return {
       ...state,
       content: action.content
     }

    //TODO rest of reducer logic ...

    default:
      return state;
  }
}
