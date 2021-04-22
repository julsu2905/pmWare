import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Menu, Row, Input, message } from "antd";
import { HomeOutlined, UserOutlined, UserAddOutlined } from "@ant-design/icons";
import "./component-css/Navigator.css";
import cookies from "react-cookies"
import axios from "axios"
const { Search } = Input;

const Navigator = (props) => {
  const history = useHistory();
  const [current, setCurrent] = useState("home");
  const [username, setUsername] = useState("");

  const handleClick = (e) => {
    console.log("click ", e.key);
    setCurrent(e.key);
    if (e.key === "/") history.push("/");
    else history.push(`/${e.key}`);

  };

  const onSearch = (e, val) => {
    console.log("search", e, val);
  };

  useEffect(async () => {
    let token = cookies.load('jwt')
    if (token) {
      const url = "/api/";
      const response = await axios.post(url + 'username', { jwt: cookies.load('jwt') }).catch(err => {
        message.error(err)
      })
      setUsername(response.data.user.username)
    }
  });

  return (
    <Row className="nav-wrapper">
      <Col span={6} className="left-nav">
        <Menu
          className="navigator"
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Trang Chủ
          </Menu.Item>
        </Menu>
      </Col>
      <Col className="logo" offset={2} span={3}>
        <Link onClick={() => history.push("/")} to="/">
          <img
            key="home"
            alt="logo-home"
            width="90"
            height="80"
            src="../logo192.png"
          ></img>
        </Link>
      </Col>
      <Col className="search-bar-wrapper" span={4}>
        <Search
          className="search-bar"
          placeholder="Search..."
          onSearch={onSearch}
          allowClear
        />
      </Col>
      <Col span={8} className="right-nav">
        <Menu
          className="navigator"
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="searchbar"></Menu.Item>
          {cookies.load('jwt') === undefined ? (
            <>
              <Menu.Item key="login" icon={<UserOutlined />}>
                Đăng nhập
              </Menu.Item>
              <Menu.Item key="register" icon={<UserAddOutlined />}>
                Đăng ký
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key="profile" icon={<UserOutlined />}>
                {username}
              </Menu.Item>
            </>
          )}
        </Menu>
      </Col>
    </Row>
  );
};
export default Navigator;
