import React, { useState } from "react";
import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";
import { Col, Menu, Row, Input } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./component-css/Navigator.css";
const { Search } = Input;

const Navigator = () => {
  const history = useHistory();
  const [current, setCurrent] = useState("home");
  const handleClick = (e) => {
    console.log("click ", e.key);
    setCurrent(e.key);
    history.push(`/${e.key}`);
  };
  const onSearch = (e, val) => {
    console.log("search", e, val);
  };
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
            <Menu.Item key="home" icon={<HomeOutlined />}>
              Trang Chủ
            </Menu.Item>
          </Menu>
        </Col>
        <Col className="logo" offset={2} span={3}>
          <Link onClick={()=> history.push('/home')} to="/home">
            <img key="home"
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
            <Menu.Item key="history">Kiểm tra Đơn hàng</Menu.Item>
            <Menu.Item key="login" icon={<UserOutlined />}>
              Đăng nhập
            </Menu.Item>
            <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
              Giỏ hàng
            </Menu.Item>
          </Menu>
        </Col>
      </Router>
    </Row>
  );
};
export default Navigator;
