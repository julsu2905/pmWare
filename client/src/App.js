import "antd/dist/antd.css";
import "./App.css";
import { Layout, Col, Row } from "antd";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigator from "./components/Navigator";
import Home from "./components/Home";
import Landing from "./components/Landing";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/Register";
import Project from "./components/Project";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
const { Header , Sider, Content } = Layout;

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <Router>
      <Layout>
        <Header className="header-wrapper">
          <Navigator />
        </Header>
        <Content className="content-wrapper">
          <Route exact path="/">
            <Landing />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route  path="/project/:id">
            <Project currentUser={currentUser}/>
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
        </Content>
        <Footer>
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
