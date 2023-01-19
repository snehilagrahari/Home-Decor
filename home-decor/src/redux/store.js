import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { productsReducer } from "./products/products.reducer";
import { cartReducer } from "./Cart/cart.reducer"


const rootReducer = combineReducers({
  products: productsReducer,
  cart:cartReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
