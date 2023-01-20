import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../redux/auth/auth.reducer";

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
});
export const store = legacy_createStore(
  rootReducer,
  composeEnhance(applyMiddleware(thunk))
);


