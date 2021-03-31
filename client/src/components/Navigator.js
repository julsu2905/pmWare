import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";
import { Col, Menu, Row, Input } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import "./component-css/Navigator.css";
import cookies from 'react-cookies'
const { Search } = Input;

const Navigator = () => {
  const history = useHistory();
  const [current, setCurrent] = useState("home");
  const [username, setUsername] = useState("")
  const handleClick = (e) => {
    console.log("click ", e.key);
    setCurrent(e.key);
    if (e.key === '/')
      history.push('/')
    else history.push(`/${e.key}`)
  };
  const onSearch = (e, val) => {
    console.log("search", e, val);
  };
  const logout = () => {
    var keys = Object.keys(cookies.loadAll())
    console.log(keys)
    keys.forEach(key => {
      cookies.remove(key)
    })
    window.location.reload()
    history.push('/')
  }


  useEffect(() => {
    console.log(username)
    let localUsername = cookies.load('username')
    if (localUsername !== undefined)
      setUsername(localUsername);
  })
  return (
    <Row className="nav-wrapper">
      <Router>
        <Col span={6} className="left-nav">
          <Menu
            className="navigator"
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key='/'
              icon={<HomeOutlined />}>
              Trang Chủ
            </Menu.Item>
          </Menu>
        </Col>
        <Col className="logo" offset={2} span={3}>
          <Link onClick={() => history.push("/home")} to="/home">
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
            {username === "" ?
              <>
                <Menu.Item key="login" icon={<UserOutlined />}>
                  Đăng nhập
                </Menu.Item>
                <Menu.Item key="register" icon={<UserAddOutlined />}>
                  Đăng ký
                </Menu.Item>
              </> :
              <>
                <Menu.Item key="profile" icon={<UserOutlined />}>
                  {username}
                </Menu.Item>
                <Menu.Item key="logout" icon={<UserAddOutlined />} onClick={logout}>
                  Đăng xuất
                </Menu.Item>
              </>
            }

          </Menu>
        </Col>
      </Router>
    </Row>
  );
};
export default Navigator;
