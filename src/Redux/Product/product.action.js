import axios from "axios";
import * as types from "../actionType";

const token = JSON.parse(localStorage.getItem("token"));

export const getProducts = () => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_PENDING });
  try {
    let res = await axios.get(
      `https://staging.fastor.in/v1/m/restaurant?city_id=118`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res?.data });
  } catch (error) {
    dispatch({ type: types.GET_PRODUCT_FAILURE });
  }
};
