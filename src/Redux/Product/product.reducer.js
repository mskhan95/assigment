import * as types from "../actionType";
const initialState = {
  isLoading: false,
  token: "",
  msg: "",
  isError: false,
  products: null,
};
export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCT_PENDING:
      return { ...state, isLoading: true };
    case types.GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };

    case types.GET_PRODUCT_FAILURE:
      return { ...state, isError: true, isLoading: false };

    default:
      return state;
  }
};
