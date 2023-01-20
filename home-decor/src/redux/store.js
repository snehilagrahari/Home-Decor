import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { orderReducer } from "./order/order.reducer";
import { productReducer } from "./productdetails/reducer";
import { productsReducer } from "./products/products.reducer";
import { cartReducer } from "./Cart/cart.reducer";
import {authReducer} from "./auth/auth.reducer";

let rootReducer = combineReducers({

    userOrder : orderReducer,
    product : productReducer,
  products: productsReducer,
  auth:authReducer

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

