import { Layout } from "antd";
import React, { useEffect } from "react";
import HomeSider from "./components-child/HomeSider";
import HomeContent from "./components-child/HomeContent";
import cookies from 'react-cookies'
import { useHistory } from "react-router-dom";

const { Sider, Content } = Layout;

const Home = () => {
    const history = useHistory();
    useEffect(() => {
        if (!cookies.load('jwt')) {
            history.push('/')
            window.location.reload()
        }
    })
    return (
        <Layout>
            <Sider className="side-left">
                <HomeSider />
            </Sider>
            <Content>
                <HomeContent />
            </Content>
        </Layout>
    );
}

export default Home;