import React, { useState } from "react";
import { Row, Col } from "antd";
import "./component-css/CustomColumn.css";
import CustomCard from "./CustomDraggableCard";
const CustomColumn = (props) => {
  return (
    <Row className="column-content-wrapper">
      <Row className="column-title-wrapper">
        <Col className="column-title">{props.title}</Col>
      </Row>
      <Row className="column-body-wrapper">
          <Col className="column-body">
              <CustomCard />
          </Col>
      </Row>
    </Row>
  );
};

export default CustomColumn;
