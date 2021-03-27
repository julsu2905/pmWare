import "antd/dist/antd.css";
import "./App.css";
import { Layout, Col, Row } from "antd";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigator from "./components/Navigator";
import Home from "./components/Home";
import Landing from "./components/Landing";
import LoginForm from './components/LoginForm';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <Router>
      <Layout>
        <Header className="header-wrapper">
          <Navigator />
        </Header>
        <Content className="content-wrapper">
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
        </Content>
        <Footer>Footer</Footer>
      </Layout>

      {/*       <Route exact path="/login">
        <LoginForm />
      </Route> */}
    </Router>
  );
}

export default App;
