import * as types from "../actionType";
const initialState = {
  isLoading: false,
  signupStatus: "",
  token: "",
  msg: "",
  isError: false,
  user: {},
};
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SIGNUP_PENDING:
      return { ...state, isLoading: true };
    case types.SIGNUP_SUCCESS:
      return { ...state, isLoading: false, signupStatus: payload.status };

    case types.SIGNUP_FAILURE:
      return { ...state, isError: true, isLoading: false };
    case types.LOGIN_PENDING:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      return { ...state, isLoading: false, token: payload?.data?.token };

    case types.LOGIN_FAILURE:
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};
