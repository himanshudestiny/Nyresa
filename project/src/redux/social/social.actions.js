import { USER_LOADING, USER_ERROR, ADD_USER } from "./social.types";
import axios from "axios";

export const addUser = (newUser) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    let res = axios.post("http://localhost:8080/users", {
      ...newUser,
    });
    dispatch({ type: ADD_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_ERROR, payload: error.message });
  }
};
