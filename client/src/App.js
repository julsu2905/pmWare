import "antd/dist/antd.css";
import "./App.css";
import { Layout, Col, Row } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigator from "./components/Navigator";
import Home from "./components/Home";
import Landing from "./components/Landing";
const { Header, Footer, Sider, Content } = Layout;

function App() {
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
