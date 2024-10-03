export function userReducer(state = null, action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      // localStorage.clear(); // clear all in local storage
      localStorage.removeItem("token"); // clear only token
      return action.payload;
    default:
      return state;
  }
}
