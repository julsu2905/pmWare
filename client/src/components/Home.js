import {Layout} from "antd";
import React from 'react';
import HomeSider from "./components-child/HomeSider";
import HomeContent from "./components-child/HomeContent";

const {Sider,Content} = Layout;

const Home = () =>{
    return(
        <Layout>
            <Sider className="side-left">
                <HomeSider/>
            </Sider>
            <Content>
                <HomeContent />
            </Content>
        </Layout>
    );
}

export default Home;