import axios from "axios";

export async function register(value) {
  return await axios.post(process.env.REACT_APP_API + "/register", value);
}

export async function login(value) {
  return await axios.post(process.env.REACT_APP_API + "/login", value);
}

export async function currentUser(authtoken) {
  return await axios.post(
    process.env.REACT_APP_API + "/current-user",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
}
