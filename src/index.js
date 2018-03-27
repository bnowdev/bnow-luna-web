import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import MomentUtils from "material-ui-pickers/utils/moment-utils";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";

import App from "./components/App";
import "./styles/index.css";
import configureStore from "./store/configureStore";
import {
  getInitialAlerts,
  loadingAlerts,
  fetchAlerts
} from "./actions/alertActions";
import SignalrService from "./services/signalrService";

import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();
//store.dispatch(loadingAlerts());
store.dispatch(fetchAlerts());

const signalrService = new SignalrService(store);

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
