import React, { useState } from "react";
import { Row, Col } from "antd";
import {useDroppable} from '@dnd-kit/core'
import "./component-css/CustomColumn.css";
import CustomCard from "./CustomDraggableCard";
const CustomColumn = (props) => {
  const fakeCards = props.tasks;
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    background: isOver ? "red" : undefined,
  };
  return (
    <Row ref={setNodeRef} style={style} className="column-content-wrapper">
      <Row className="column-title-wrapper">
        <Col className="column-title">{props.title}</Col>
      </Row>
      <Row className="column-body-wrapper">
        <Col offset={2} span={20} className="column-body">
          <CustomCard id={`${props.id}1`} title={"Card 1"} />
          <CustomCard id={`${props.id}2`} title={"Card 2"} />
          <CustomCard id={`${props.id}3`} title={"Card 3"} />
        </Col>
      </Row>
    </Row>
  );
};

export default CustomColumn;
