import { Col, Layout, Row } from "antd";
import React, { useState } from "react";
import './component-css/Landing.css';
const { Content } = Layout;

const Landing = () => {
  return (
    <Row className="banner-wrapper">
      <Col className="slogan-wrapper" span={10}>
        <Row>
          <Col span={24}>
            <h2>
              Todolist giúp các nhóm làm việc có tính hợp tác hơn và làm được
              nhiều hơn.
            </h2>
            <h3>
              Các bảng và danh sách và thẻ của Trello cho phép các nhóm tổ chức
              và ưu tiên các dự án một cách vui vẻ linh hoạt và xứng đáng.
            </h3>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Col>
      <Col span={10}>
        <h2>
          Todolist giúp các nhóm làm việc có tính hợp tác hơn và làm được nhiều
          hơn.
        </h2>
      </Col>
    </Row>
  );
};
export default Landing;
