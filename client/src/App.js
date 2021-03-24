import "antd/dist/antd.css";
import "./App.css";
import { Layout, Col, Row } from "antd";
import Navigator from "./components/Navigator";

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
