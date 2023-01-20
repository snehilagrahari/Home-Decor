import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../redux/auth/auth.reducer";
// TODO: use this store variable to create a store.

// Note: you can delete the line below, but remember to create a new store variable
const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
});
export const store = legacy_createStore(
  rootReducer,
  composeEnhance(applyMiddleware(thunk))
);


