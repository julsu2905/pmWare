import React, { useState } from "react";
import { Col, Menu, Row } from "antd";
import {
  HomeOutlined,
  YoutubeOutlined,
  ContainerOutlined,
  UserOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";
import "./component-css/Navigator.css";

const Navigator = () => {
  const [current, setCurrent] = useState("home");
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Row className="nav-wrapper">
      <Col span={14} className="left-nav">
        <Menu
          className="navigator"
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Trang Chủ
          </Menu.Item>
          <Menu.Item key="tintuc" icon={<ContainerOutlined />}>
            Tin Tức
          </Menu.Item>
          <Menu.Item key="video" icon={<YoutubeOutlined />}>
            Video
          </Menu.Item>
          <Menu.Item key="hinhanh">Hình Ảnh</Menu.Item>
          <Menu.Item key="blog">Bếp trưởng gia đình</Menu.Item>
        </Menu>
      </Col>
      <Col span={10} className="right-nav">
        <Menu
          className="navigator"
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="policy">Bảo Hành</Menu.Item>
          <Menu.Item key="history">Kiểm tra Đơn hàng</Menu.Item>
          <Menu.Item key="login" icon={<UserOutlined />}>
            Đăng nhập
          </Menu.Item>
          <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
            Giỏ hàng
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};
export default Navigator;
