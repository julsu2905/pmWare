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
              <CustomColumn title={"Assigned"} />
            </Col>
            <Col className="column-wrapper" offset={1} span={4}>
              <CustomColumn title={"Working"} />
            </Col>
            <Col className="column-wrapper" offset={1} span={4}>
              <CustomColumn title={"Pending"} />
            </Col>
            <Col className="column-wrapper" offset={1} span={4}>
              <CustomColumn title={"Done"} />
            </Col>
          </Row>
        </DndContext>
      </Content>
    </Layout>
  );
};

export default Project;
