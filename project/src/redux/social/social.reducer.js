import { USER_LOADING, USER_ERROR, ADD_USER } from "./social.types";

const initialState = {
  loading: false,
  error: false,
  users: [],
};

export const socialReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload || true,
      };
    }
    case ADD_USER: {
      return {
        ...state,
        loading: false,
        users: [...state.users, payload],
      };
    }

    default:
      return state;
  }
};
