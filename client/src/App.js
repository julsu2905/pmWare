import "antd/dist/antd.css";
import "./App.css";
import { Layout, Col, Row } from "antd";
import {BrowserRouter as Router} from 'react-router-dom';
import Navigator from "./components/Navigator";
const {Route} = Router;
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
      <Layout>
        <Header className="header-wrapper">
          <Navigator />
        </Header>
        <Content className="content-wrapper"></Content>
        <Footer>Footer</Footer>
      </Layout>

  );
}

export default App;
