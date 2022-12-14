import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
  RESET_AUTH,
} from "./auth.types";

const initialState = {
  loading: false,
  data: {
    token: "",
    isAuth: false,
  },
  error: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
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
        data: {
          token: payload.token,
          isAuth: true,
        },
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_SIGN_OUT: {
      return {
        ...state,
        data: {
          token: "",
          isAuth: false,
        },
      };
    }
    case RESET_AUTH: {
      return {
        state: initialState,
      };
    }

    default:
      return state;
  }
};
