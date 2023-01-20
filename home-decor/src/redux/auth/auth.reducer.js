// Note: Do not update/change the initial state
import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
  RESET_AUTH,
} from "./auth.types";

export const authInitalState = {
  loading: false,
  data: { },
  isAuthenticated: false,
  error: false,
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case AUTH_SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
        isAuthenticated: true,
      };
    }

    //user sigin => data fetch users api => match (exist| oTP) || not match(signup)
    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case AUTH_SIGN_OUT: {
      return  authInitalState;
    }

    default: {
      return state;
    }
  }
};
