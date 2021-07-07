import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Menu, Row, Input, message, Button, Space } from "antd";
import { HomeOutlined, UserOutlined, UserAddOutlined } from "@ant-design/icons";
import "./component-css/Navigator.css";
import cookies from "react-cookies"
import axios from "axios"
import logoVN from "../img/iconVN.png"
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
      <Col span={10} className="left-nav">
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
      <Col span={14} className="right-nav">
        <Menu
          className="navigator"
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="searchbar"></Menu.Item>
          <Menu.Item key="template">Mẫu dự án</Menu.Item>
          <Menu.Item key="contact">Liên hệ</Menu.Item>
          <Menu.Item key="price">Bảng giá</Menu.Item>
          
          {cookies.load('jwt') === undefined ? (
            <>
              <Menu.Item key="login" icon={<UserOutlined />}>
                Đăng nhập
              </Menu.Item>
              <Menu.Item key="register" icon={<UserAddOutlined />}>
              <Button type="primary">
                Đăng ký
                </Button>
              </Menu.Item>
             
            </>
          ) : (
            <>
              <Menu.Item key="profile" icon={<UserOutlined />}>
                {username}
              </Menu.Item>
            </>
          )}

          <select className="language" style={{marginLeft:"20px"}}>
              <option selected>VI</option>
              <option value="english">EN</option>   
          </select>
     
        </Menu>
      
      </Col>
    </Row>
  );
};
export default Navigator;
