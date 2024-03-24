import axios from "axios";
import * as types from "../actionType";

const Signup_Pending = () => {
  return { type: types.SIGNUP_PENDING };
};

const Signup_Success = (payload) => {
  return { type: types.SIGNUP_SUCCESS, payload: payload };
};

const Signup_Failure = () => {
  return { type: types.SIGNUP_FAILURE };
};

const Signin_Pending = () => {
  return { type: types.LOGIN_PENDING };
};

const Signin_Success = (payload) => {
  return { type: types.LOGIN_SUCCESS, payload };
};

const Signin_Failure = () => {
  return { type: types.LOGIN_FAILURE };
};

export const SignUp = (userData) => async (dispatch) => {
  dispatch(Signup_Pending());
  try {
    let res = await axios.post(
      `https://staging.fastor.in/v1/pwa/user/register`,
      userData
    );
    dispatch(Signup_Success(res.data));
    return Promise.resolve(res.data);
  } catch (error) {
    dispatch(Signup_Failure());
  }
};

export const Signin = (userData) => async (dispatch) => {
  dispatch(Signin_Pending());
  try {
    let res = await axios.post(
      `https://staging.fastor.in/v1/pwa/user/login`,
      userData
    );
    localStorage.setItem("token", JSON.stringify(res?.data?.data.token));
    dispatch(Signin_Success(res?.data));
    return Promise.resolve(res?.data);
  } catch (error) {
    dispatch(Signin_Failure());
  }
};
