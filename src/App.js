import React, { useState, useEffect } from "react";
import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import HomeAdmin from "./components/pages/admin/Home";
import HomeUser from "./components/pages/user/Home";
import { currentUser } from "./components/functions/auth";
import { useDispatch } from "react-redux";
import UserRoute from "./components/routes/UserRoute";

function App() {
  const dispatch = useDispatch();
  const idtoken = localStorage.token;
  if (idtoken) {
    currentUser(idtoken)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "LOGIN",
          payload: {
            token: idtoken,
            username: res.data.username,
            role: res.data.role,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/index" element={<HomeAdmin />} />
        <Route
          path="/user/index"
          element={
            <UserRoute>
              <HomeUser />
            </UserRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
