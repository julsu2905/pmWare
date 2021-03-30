
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {NotificationOutlined, AreaChartOutlined,DashboardOutlined,SearchOutlined,SmileOutlined,StockOutlined,CalendarOutlined,DoubleRightOutlined,SettingOutlined } from '@ant-design/icons';
import ProjectChild from './components-child/ProjectChild';
import ProjectActive from './components-child/ProjectActive'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const Project = () =>{
    return(
        <Layout>
           <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">App</Menu.Item>
      
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Menu</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
    
            <Menu.Item>Menu</Menu.Item>
            
              <Menu.Item key="1" > <DashboardOutlined /> About this board</Menu.Item>
              <Menu.Item key="2"><AreaChartOutlined /> Change background</Menu.Item>
              <Menu.Item key="3"> <SearchOutlined /> Search card</Menu.Item>
              <Menu.Item key="4"><SmileOutlined /> Sticker</Menu.Item>
              <Menu.Item key="5"><StockOutlined />Reports</Menu.Item>
              <Menu.Item key="6"><CalendarOutlined />Component</Menu.Item>
              <Menu.Item key="7"><SettingOutlined />Project Setting</Menu.Item>
            <SubMenu key="sub3" icon={<DoubleRightOutlined />} title="Active">
                <ProjectActive></ProjectActive>
             </SubMenu>
             
           
          </Menu>
        </Sider>
        <ProjectChild></ProjectChild>
       


      </Layout>
    </Content>
    
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default Project;