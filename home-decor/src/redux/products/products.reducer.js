import {
  PRODUCTS_GET_LOADING,
  PRODUCTS_GET_ERROR,
  PRODUCTS_GET_SUCCESS,
  PRODUCTS_RESET,
} from "./products.type";

let initialState = {
  loading: false,
  error: false,
  isLogin: false,
  gridProducts: [],
  totalCount: 0,
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_GET_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case PRODUCTS_GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case PRODUCTS_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        gridProducts: payload.data,
        totalCount: Number(payload.headers["x-total-count"]),
      };
    }
    case PRODUCTS_RESET: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};
