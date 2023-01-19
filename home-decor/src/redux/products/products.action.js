import {
  PRODUCTS_GET_ERROR,
  PRODUCTS_GET_LOADING,
  PRODUCTS_GET_SUCCESS,
  TOTALPRODUCTS_GET_SUCCESS,
} from "./products.type";

import { getTotalProductsAPI, getGridProductsAPI } from "./products.api";

export const getGridProducts =
  (currentPage, productsPerPage, sort) => async (dispatch) => {
    dispatch({ type: PRODUCTS_GET_LOADING });
    try {
      let data = await getGridProductsAPI(currentPage, productsPerPage, sort);

      dispatch({ type: PRODUCTS_GET_SUCCESS, payload: data});
    } catch (err) {
      dispatch({ type: PRODUCTS_GET_ERROR });
    }
  };

export const getTotalProducts = () => async (dispatch) => {
  let data = await getTotalProductsAPI();
  dispatch({ type: TOTALPRODUCTS_GET_SUCCESS, payload: data });
};
