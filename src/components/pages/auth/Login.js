import React, { useState } from "react";
import { login } from "../../functions/auth";
import { useDispatch } from "react-redux";

export default function Login() {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
    return login(value)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "LOGIN",
          payload: {
            token: res.data.token,
            username: res.data.payload.user.username,
            role: res.data.payload.user.role,
          },
        });
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} />
        <label>Password</label>
        <input type="text" name="password" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}
