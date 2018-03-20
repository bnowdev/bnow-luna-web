import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import reduxLogger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, reduxLogger, reduxImmutableStateInvariant()))
  );
}

