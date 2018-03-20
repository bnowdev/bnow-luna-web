import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import "./index.css";
import configureStore from "./store/configureStore";
import {getInitialAlerts, loadingAlerts} from "./actions/alertActions";
import SignalrService from "./services/signalrService";

import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();
//store.dispatch(loadingAlerts());
store.dispatch(getInitialAlerts());

const signalrService = new SignalrService(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
