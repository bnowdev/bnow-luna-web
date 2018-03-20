import { combineReducers } from "redux";
import alerts from "./alertReducer";
import filters from "./filterReducer";
import modal from "./modalReducer";
import snackbar from "./snackbarReducer";

const rootReducer = combineReducers({
  alerts,
  filters,
  modal,
  snackbar
});

export default rootReducer;
