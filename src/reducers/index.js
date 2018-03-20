import { combineReducers } from "redux";
import alerts from "./alertReducer";
import filters from "./filterReducer";
import modal from "./modalReducer";

const rootReducer = combineReducers({
  alerts,
  filters,
  modal
});

export default rootReducer;
