import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import HomeSider from "./components-child/HomeSider";
import HomeContent from "./components-child/HomeContent";
import cookies from 'react-cookies'
import { useHistory } from "react-router-dom";
import axios from "axios";

const { Sider, Content } = Layout;

const Home = () => {
    const history = useHistory();
    const [projects,setProjects] = useState([]);
    useEffect(() => {
        if (!cookies.load('jwt')) {
            history.push('/')
            window.location.reload()
        }
    })
    useEffect(()=>{
        const url = 'http://127.0.0.1:9696/api/project'
        axios.get(url)
    },[])
    useEffect(()=>{

    },[projects])
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