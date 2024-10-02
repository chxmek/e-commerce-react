import React, { useState } from "react";
import register from "../../functions/auth";

export default function Register() {
  const [value, setValue] = useState({
    username: "",
    password: "",
    password1: "",
  });

  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
    if (value.password !== value.password1) {
      return alert("Password not match.");
    } else {
      return register(value)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.response.data);
        });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} />
        <label>Password</label>
        <input type="text" name="password" onChange={handleChange} />
        <label>Confirm Password</label>
        <input type="text" name="password1" onChange={handleChange} />
        <button disabled={value.password.length < 6}>Submit</button>
      </form>
    </div>
  );
}
