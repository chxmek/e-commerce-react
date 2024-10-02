import axios from "axios";

export default async function register(value) {
  return await axios.post(process.env.REACT_APP_API + "/register", value);
}
