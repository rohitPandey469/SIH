const authReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "AUTH":
      return { ...state, data: action?.data };
    case "LOGOUT":
      return { ...state, data: null };
    default:
      return state;
  }
};

export default authReducer;
