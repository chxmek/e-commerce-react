// import React, { useState } from "react";
import React from "react";
import { UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Navbar() {
  // const [current, setCurrent] = useState("mail");
  // const onClick = (e) => {
  //   console.log("click ", e);
  //   setCurrent(e.key);
  // };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = [
    {
      label: <Link to="/login">Login</Link>,
      key: "mail",
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/register">Register</Link>,
      key: "app",
      icon: <UserAddOutlined />,
    },
    {
      label: (
        <Link to="/" onClick={logout}>
          Logout
        </Link>
      ),
      key: "app",
      icon: <UserAddOutlined />,
    },
  ];

  function logout() {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/");
  }
  return (
    <div>
      <Menu
        // onClick={onClick}
        // selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
}
