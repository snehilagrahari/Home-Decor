// Auth Actions here

import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
  RESET_AUTH,
} from "./auth.types";

import axios from "axios";

export const AuthLogin = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });
  try {
    let response = await axios.post(`https://mock-server-ge69.onrender.com/api/login`);

    dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: await response.data });
  } catch (e) {
    dispatch({ type: AUTH_SIGN_IN_ERROR });
  }
};


export const Logout = () => (dispatch) => {
  dispatch({ type: AUTH_SIGN_OUT })
};
