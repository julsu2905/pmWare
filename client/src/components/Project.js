import React, { useState } from "react";
import { Layout, Row, Col } from "antd";
import "./component-css/Project.css";
import CustomColumn from "./CustomDroppableColumn";
import { DndContext } from "@dnd-kit/core";
const { Content, Sider } = Layout;

const Project = () => {
  return (
    <Layout>
      <Sider></Sider>
      <Content>
        <DndContext>
          <Row className="columns-list-wrapper">
            <Col className="column-wrapper" offset={1} span={4}>
              <CustomColumn id={'1'} title={"Assigned"} />
            </Col>
            <Col className="column-wrapper" offset={1} span={4}>
              <CustomColumn  id={'2'}  title={"Working"} />
            </Col>
            <Col className="column-wrapper" offset={1} span={4}>
              <CustomColumn id={'3'}  title={"Pending"} />
            </Col>
            <Col className="column-wrapper" offset={1} span={4}>
              <CustomColumn id={'4'}  title={"Done"} />
            </Col>
          </Row>
        </DndContext>
      </Content>
    </Layout>
  );
};

export default Project;
