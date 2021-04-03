import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Menu, Button, Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import '../component-css/HomeSider.css';
import cookies from 'react-cookies'

const HomeSider = () => {
  const { SubMenu } = Menu;
  const [collapsed, setcollapseds] = useState(false);
  const history = useHistory();

  const logout = () => {
    var keys = Object.keys(cookies.loadAll())
    console.log(keys)
    keys.forEach(key => {
      cookies.remove(key)
    })
    history.push('/')
    window.location.reload()
  }

  const toggleCollapsed = () => {
    setcollapseds(true)
    console.log("1");
  };
  return (
    <div style={{ width: 'auto' }}>
      {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          
        </Button> */}
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Row>
          <Col className="avatar">
            <Avatar size={100} icon={<UserOutlined />} />

          </Col>
        </Row>
        <Row>
          <Col offset={6} span={11} className="user">
            <h1>
              {cookies.load('username')}
            </h1>
          </Col>
        </Row>
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          My Project
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <Menu.Item key="3" icon={<MailOutlined />}>
          Invited
        </Menu.Item>
        {/* <SubMenu key="sub1" icon={<ContainerOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu> */}
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Edit">
          <Menu.Item key="9" onClick={() => history.push('/profile')}>Profile</Menu.Item>
          <Menu.Item key="10">System</Menu.Item>
          <Menu.Item key="11" onClick={logout}>Log Out</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default HomeSider;