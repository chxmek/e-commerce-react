// import React, { useState } from "react";
import React from "react";
import { UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const [current, setCurrent] = useState("mail");
  // const onClick = (e) => {
  //   console.log("click ", e);
  //   setCurrent(e.key);
  // };
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
  ];
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
