import * as api from "../api/axios.js";

export const auth = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.auth(authData);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};
