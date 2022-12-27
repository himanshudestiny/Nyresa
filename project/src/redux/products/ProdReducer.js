import { GET_PRODUCT, Loading, Filter } from "./ProdactionTypes";

const init = {
  loading: false,
  data: [],
};

export const prodReducer = (state = init, action) => {
  switch (action.type) {
    case Loading: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_PRODUCT: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }

    case Filter: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
